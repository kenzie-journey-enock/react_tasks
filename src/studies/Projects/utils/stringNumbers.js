
export function zeroCounts(value) {
  return (value.match(/0/g) || []).length
}

export function getFirstNums(value) {
  return value.slice(0, -2)
}

export function getLastNums(value, length) {
  return value[length - 2] + value[length - 1]
}

export function setMilharNums(value, locale) {
  return Number(value).toLocaleString(locale)
}
