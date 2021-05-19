import { findTabbableDescendants } from './tabbable.js';

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

export { markForFocusLater, returnFocus, setupScopedFocus, teardownScopedFocus };
//# sourceMappingURL=focus-manager.js.map
