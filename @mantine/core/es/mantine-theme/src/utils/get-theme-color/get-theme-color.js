function getThemeColor({
  theme,
  color,
  shade
}) {
  const primaryShades = theme.colors[theme.primaryColor];
  return color in theme.colors ? theme.colors[color][shade] : primaryShades[shade];
}

export { getThemeColor };
//# sourceMappingURL=get-theme-color.js.map
