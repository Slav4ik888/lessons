const validateValue = (value) => {
  if (value >= 0 && value < 100) return true

  return false
}

module.exports = validateValue;
