import { getFirstNums, getLastNums, setMilharNums } from "./stringNumbers";

export function formatMoneyToFloat(value) {
  value = value.replace(/\D/g, '');
  let lengValue = value.length
  value = `${getFirstNums(value)}.${getLastNums(value, lengValue)}`
  return parseFloat(value)
}

export function formatFloatToMoney(value) {
  value = value.toString()
  let pointCount = (value.match(/\./g) || []).length
  if (pointCount === 1) {
    value = value.replace(/\D/g, '');
    let lengValue = value.length
    return `R$${setMilharNums(getFirstNums(value))},${getLastNums(value, lengValue)}`
  }
  return `R$${setMilharNums(value)},00`
}
