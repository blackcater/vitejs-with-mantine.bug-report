function getSizeValue({
  size,
  sizes,
  defaultSize = "md"
}) {
  if (typeof size === "number") {
    return size;
  }
  return sizes[size] || size || sizes[defaultSize];
}

export { getSizeValue };
//# sourceMappingURL=get-size-value.js.map
