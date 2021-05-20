(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@mantine/hooks'] = {}, global.React));
}(this, (function (exports, react) { 'use strict';

  function useClickOutside(handler, events = ["mousedown", "touchstart"]) {
    const ref = react.useRef();
    react.useEffect(() => {
      const listener = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          event.preventDefault();
          handler();
        }
      };
      events.forEach((fn) => document.addEventListener(fn, listener));
      return () => {
        events.forEach((fn) => document.removeEventListener(fn, listener));
      };
    }, [ref, handler]);
    return ref;
  }

  function useClipboard({timeout = 2e3} = {}) {
    const [error, setError] = react.useState(null);
    const [copied, setCopied] = react.useState(false);
    const [copyTimeout, setCopyTimeout] = react.useState(null);
    const handleCopyResult = (value) => {
      clearTimeout(copyTimeout);
      setCopyTimeout(setTimeout(() => setCopied(false), timeout));
      setCopied(value);
    };
    const copy = (valueToCopy) => {
      if ("clipboard" in navigator) {
        navigator.clipboard.writeText(valueToCopy).then(() => handleCopyResult(true)).catch((err) => setError(err));
      } else {
        setError(new Error("useClipboard: navigator.clipboard is not supported"));
      }
    };
    const reset = () => {
      setCopied(false);
      setError(null);
      clearTimeout(copyTimeout);
    };
    return {copy, reset, error, copied};
  }

  function attachMediaListener(query, callback) {
    try {
      query.addEventListener("change", callback);
      return () => query.removeEventListener("change", callback);
    } catch (e) {
      query.addListener(callback);
      return () => query.removeListener(callback);
    }
  }
  function getInitialValue(query) {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      return window.matchMedia(query).matches;
    }
    return false;
  }
  function useMediaQuery(query) {
    const [matches, setMatches] = react.useState(getInitialValue(query));
    const queryRef = react.useRef();
    react.useEffect(() => {
      if ("matchMedia" in window) {
        queryRef.current = window.matchMedia(query);
        setMatches(queryRef.current.matches);
        return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
      }
    }, [query]);
    return matches;
  }

  function useColorScheme() {
    return useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light";
  }

  function useDocumentTitle(title) {
    react.useLayoutEffect(() => {
      if (typeof title === "string" && title.trim().length > 0) {
        document.title = title.trim();
      }
    }, [title]);
  }

  const TABBABLE_NODES = /input|select|textarea|button|object/;
  const FOCUS_SELECTOR = "a, input, select, textarea, button, object, [tabindex]";
  function hidden(element) {
    if (process.env.NODE_ENV === "test") {
      return false;
    }
    return element.offsetWidth <= 0 && element.offsetHeight <= 0 || element.style.display === "none";
  }
  function visible(element) {
    let parentElement = element;
    while (parentElement) {
      if (parentElement === document.body) {
        break;
      }
      if (hidden(parentElement)) {
        return false;
      }
      parentElement = parentElement.parentNode;
    }
    return true;
  }
  function getElementTabIndex(element) {
    let tabIndex = element.getAttribute("tabindex");
    if (tabIndex === null) {
      tabIndex = void 0;
    }
    return parseInt(tabIndex, 10);
  }
  function focusable(element) {
    const nodeName = element.nodeName.toLowerCase();
    const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
    const res = TABBABLE_NODES.test(nodeName) && !element.disabled || (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
    return res && visible(element);
  }
  function tabbable(element) {
    const tabIndex = getElementTabIndex(element);
    const isTabIndexNaN = Number.isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
  }
  function findTabbableDescendants(element) {
    return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
  }

  const focusLaterElements = [];
  let focusElement = null;
  let needToFocus = false;
  function handleBlur() {
    needToFocus = true;
  }
  function handleFocus() {
    if (needToFocus) {
      needToFocus = false;
      if (!focusElement) {
        return;
      }
      if (!focusElement) {
        return;
      }
      if (focusElement.contains(document.activeElement)) {
        return;
      }
      const el = findTabbableDescendants(focusElement)[0] || focusElement;
      el.focus();
    }
  }
  function markForFocusLater() {
    focusLaterElements.push(document.activeElement);
  }
  function returnFocus() {
    let toFocus = null;
    try {
      toFocus = focusLaterElements.pop();
      if (toFocus)
        toFocus.focus();
    } catch (e) {
      console.warn([
        "[@mantine/hooks/use-focus-trap] Focus was returned to",
        toFocus,
        "but dom node does not exist"
      ].join(" "));
    }
  }
  function setupScopedFocus(element) {
    focusElement = element;
    document.addEventListener("focusout", handleBlur, false);
    document.addEventListener("focusin", handleFocus, true);
  }
  function teardownScopedFocus() {
    focusElement = null;
    document.removeEventListener("focusout", handleBlur);
    document.removeEventListener("focusin", handleFocus);
  }

  function scopeTab(node, event) {
    const tabbable = findTabbableDescendants(node);
    if (!tabbable.length) {
      event.preventDefault();
      return;
    }
    const finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
    const leavingFinalTabbable = finalTabbable === document.activeElement || node === document.activeElement;
    if (!leavingFinalTabbable) {
      return;
    }
    event.preventDefault();
    const target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
    if (target) {
      target.focus();
    }
  }

  function createAriaHider(containerNode, selector = "body > :not(script)") {
    const rootNodes = Array.from(document.querySelectorAll(selector)).map((node) => {
      if (node.contains(containerNode)) {
        return void 0;
      }
      const ariaHidden = node.getAttribute("aria-hidden");
      if (ariaHidden === null || ariaHidden === "false") {
        node.setAttribute("aria-hidden", "true");
      }
      return {node, ariaHidden};
    });
    return () => {
      rootNodes.forEach((item) => {
        if (!item) {
          return;
        }
        if (item.ariaHidden === null) {
          item.node.removeAttribute("aria-hidden");
        } else {
          item.node.setAttribute("aria-hidden", item.ariaHidden);
        }
      });
    };
  }

  function useFocusTrap(active = true) {
    const ref = react.useRef();
    const restoreAria = react.useRef(null);
    const setRef = react.useCallback((node) => {
      if (restoreAria.current) {
        restoreAria.current();
      }
      if (ref.current) {
        returnFocus();
        teardownScopedFocus();
      }
      if (active && node) {
        setupScopedFocus(node);
        markForFocusLater();
        const processNode = (_node) => {
          restoreAria.current = createAriaHider(_node);
          let focusElement = null;
          if (!focusElement) {
            const children = Array.from(node.querySelectorAll(FOCUS_SELECTOR));
            focusElement = children.find(tabbable) || children.find(focusable) || null;
            if (!focusElement && focusable(node))
              focusElement = node;
          }
          if (focusElement) {
            focusElement.focus();
          } else if (process.env.NODE_ENV === "development") {
            console.warn("[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node", node);
          }
        };
        setTimeout(() => {
          if (node.ownerDocument) {
            processNode(node);
          } else if (process.env.NODE_ENV === "development") {
            console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", node);
          }
        });
        ref.current = node;
      } else {
        ref.current = null;
      }
    }, [active]);
    react.useEffect(() => {
      if (!active)
        return void 0;
      const handleKeyDown = (event) => {
        if (event.key === "Tab" && ref.current) {
          scopeTab(ref.current, event);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [active]);
    return setRef;
  }

  var __defProp$1 = Object.defineProperty;
  var __defProps$1 = Object.defineProperties;
  var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
  var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
  var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1)
      for (var prop of __getOwnPropSymbols$1(b)) {
        if (__propIsEnum$1.call(b, prop))
          __defNormalProp$1(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
  function useForm({
    initialValues,
    validationRules = {}
  }) {
    const initialErrors = Object.keys(initialValues).reduce((acc, field) => {
      acc[field] = false;
      return acc;
    }, {});
    const [errors, setErrors] = react.useState(initialErrors);
    const [values, setValues] = react.useState(initialValues);
    const resetErrors = () => setErrors(initialErrors);
    const reset = () => {
      setValues(initialValues);
      resetErrors();
    };
    const validate = () => {
      let isValid = true;
      const validationErrors = Object.keys(values).reduce((acc, field) => {
        if (validationRules && typeof validationRules[field] === "function" && !validationRules[field](values[field])) {
          acc[field] = true;
          isValid = false;
        } else {
          acc[field] = false;
        }
        return acc;
      }, {});
      setErrors(validationErrors);
      return isValid;
    };
    const validateField = (field) => setErrors((currentErrors) => __spreadProps$1(__spreadValues$1({}, currentErrors), {
      [field]: typeof validationRules[field] === "function" ? !validationRules[field](values[field]) : false
    }));
    const setFieldError = (field, error) => setErrors((currentErrors) => __spreadProps$1(__spreadValues$1({}, currentErrors), {[field]: error}));
    const setFieldValue = (field, value) => {
      setValues((currentValues) => __spreadProps$1(__spreadValues$1({}, currentValues), {[field]: value}));
      setFieldError(field, false);
    };
    const onSubmit = (handleSubmit) => (event) => {
      event && event.preventDefault();
      validate() && handleSubmit(values);
    };
    return {
      values,
      errors,
      validate,
      reset,
      setErrors,
      setValues,
      setFieldValue,
      setFieldError,
      validateField,
      resetErrors,
      onSubmit
    };
  }

  function randomId() {
    return `mantine-${Math.random().toString(36).substr(2, 9)}`;
  }
  function useId(id, generateId = randomId) {
    const generatedId = react.useRef(generateId());
    return id || generatedId.current;
  }

  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  function useListState(initialValue = []) {
    const [state, setState] = react.useState(initialValue);
    const append = (...items) => setState((current) => [...current, ...items]);
    const prepend = (...items) => setState((current) => [...items, ...current]);
    const insert = (index, ...items) => setState((current) => [...current.slice(0, index), ...items, ...current.slice(index)]);
    const apply = (fn) => setState((current) => current.map((item, index) => fn(item, index)));
    const remove = (...indices) => setState((current) => current.filter((_, index) => !indices.includes(index)));
    const reorder = ({from, to}) => setState((current) => {
      const cloned = [...current];
      const item = current[from];
      cloned.splice(from, 1);
      cloned.splice(to, 0, item);
      return cloned;
    });
    const setItem = (index, item) => setState((current) => {
      const cloned = [...current];
      cloned[index] = item;
      return cloned;
    });
    const setItemProp = (index, prop, value) => setState((current) => {
      const cloned = [...current];
      cloned[index] = __spreadProps(__spreadValues({}, cloned[index]), {[prop]: value});
      return cloned;
    });
    return [
      state,
      {
        setState,
        append,
        prepend,
        insert,
        apply,
        remove,
        reorder,
        setItem,
        setItemProp
      }
    ];
  }

  function useWindowEvent(type, listener, options) {
    react.useEffect(() => {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }, []);
  }

  function useLocalStorageValue({
    key,
    defaultValue = null
  }) {
    const [value, setValue] = react.useState(typeof window !== "undefined" && "localStorage" in window ? window.localStorage.getItem(key) : defaultValue);
    const setLocalStorageValue = (val) => {
      if (typeof val === "function") {
        setValue((current) => {
          const result = val(current);
          window.localStorage.setItem(key, result);
          return result;
        });
      } else {
        window.localStorage.setItem(key, val);
        setValue(val);
      }
    };
    useWindowEvent("storage", (event) => {
      if (event.storageArea === window.localStorage && event.key === key) {
        setValue(event.newValue);
      }
    });
    return [value, setLocalStorageValue];
  }

  function useMergedRef(...refs) {
    return (node) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref != null) {
          ref.current = node;
        }
      });
    };
  }

  function useQueue({initialValues = [], limit}) {
    const [{state, queue}, setState] = react.useState({
      state: initialValues.slice(0, limit),
      queue: initialValues.slice(limit)
    });
    const add = (...items) => setState((current) => {
      const results = [...current.state, ...current.queue, ...items];
      return {
        state: results.slice(0, limit),
        queue: results.slice(limit)
      };
    });
    const update = (fn) => setState((current) => {
      const results = fn([...current.state, ...current.queue]);
      return {
        state: results.slice(0, limit),
        queue: results.slice(limit)
      };
    });
    const cleanQueue = () => setState((current) => ({state: current.state, queue: []}));
    return {
      state,
      queue,
      add,
      update,
      cleanQueue
    };
  }

  function useReducedMotion() {
    return useMediaQuery("(prefers-reduced-motion: reduce)");
  }

  const preventDefault = (event) => {
    event.preventDefault();
  };
  function useScrollLock(lock) {
    const locked = react.useRef(false);
    const bodyOverflow = react.useRef(null);
    const unlockScroll = () => {
      if (locked.current) {
        locked.current = false;
        document.body.style.overflow = bodyOverflow.current || "";
        document.body.removeEventListener("touchmove", preventDefault);
      }
    };
    const lockScroll = () => {
      locked.current = true;
      bodyOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.body.addEventListener("touchmove", preventDefault, {passive: false});
    };
    react.useEffect(() => {
      if (lock) {
        lockScroll();
      } else {
        unlockScroll();
      }
      return unlockScroll;
    }, [lock]);
  }

  exports.randomId = randomId;
  exports.useClickOutside = useClickOutside;
  exports.useClipboard = useClipboard;
  exports.useColorScheme = useColorScheme;
  exports.useDocumentTitle = useDocumentTitle;
  exports.useFocusTrap = useFocusTrap;
  exports.useForm = useForm;
  exports.useId = useId;
  exports.useListState = useListState;
  exports.useLocalStorageValue = useLocalStorageValue;
  exports.useMediaQuery = useMediaQuery;
  exports.useMergedRef = useMergedRef;
  exports.useQueue = useQueue;
  exports.useReducedMotion = useReducedMotion;
  exports.useScrollLock = useScrollLock;
  exports.useWindowEvent = useWindowEvent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
