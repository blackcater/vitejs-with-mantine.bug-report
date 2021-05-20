const TABBABLE_NODES = /input|select|textarea|button|object/;
export const FOCUS_SELECTOR = 'a, input, select, textarea, button, object, [tabindex]';
function hidden(element) {
    if (process.env.NODE_ENV === 'test') {
        return false;
    }
    return ((element.offsetWidth <= 0 && element.offsetHeight <= 0) || element.style.display === 'none');
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
    let tabIndex = element.getAttribute('tabindex');
    if (tabIndex === null) {
        tabIndex = undefined;
    }
    return parseInt(tabIndex, 10);
}
export function focusable(element) {
    const nodeName = element.nodeName.toLowerCase();
    const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
    const res = 
    // @ts-ignore
    (TABBABLE_NODES.test(nodeName) && !element.disabled) ||
        (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
    return res && visible(element);
}
export function tabbable(element) {
    const tabIndex = getElementTabIndex(element);
    const isTabIndexNaN = Number.isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
}
export function findTabbableDescendants(element) {
    return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
}
