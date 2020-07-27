function ensureNumber (value) {
  const inputValue = parseFloat(value)

  return !isNaN(inputValue) ? inputValue : 0
}

export default ensureNumber
