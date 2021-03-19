export const colorPicker = (colors, i) => {
  const length = colors.length

  if (i >= length) {
    const b = i-length
    if (b >= length) {
      return colors[0]
    }
    return colors[b]
  }
  return colors[i]
}