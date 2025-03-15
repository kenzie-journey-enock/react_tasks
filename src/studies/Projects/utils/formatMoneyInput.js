import {
  zeroCounts,
  getFirstNums,
  getLastNums,
  setMilharNums
} from "./stringNumbers";

export default function formatMoneyInput(inputValue) {
  inputValue = inputValue.replace(/\D/g, '');

  let lengValue = inputValue.length

  if (lengValue === 1) {
    inputValue = `R$0,0${inputValue}`

    return inputValue
  }

  let firstNums = getFirstNums(inputValue)

  let lastNums = getLastNums(inputValue, lengValue)

  if (lengValue === 4) {
    let firstNums = getFirstNums(inputValue)
    let zerosInFirstNums = zeroCounts(firstNums)
    let lastNums = getLastNums(inputValue, lengValue)

    if (zerosInFirstNums === 1 && firstNums[0] === '0') {
      firstNums = firstNums[1]
      inputValue = `R$${firstNums},${lastNums}`

      return inputValue
    }

    if (zerosInFirstNums === 2) {
      firstNums = '0'
      inputValue = `R$${firstNums},${lastNums}`

      return inputValue
    }
  }

  inputValue = `R$${setMilharNums(firstNums, 'pt-BR')},${lastNums}`

  return inputValue
}
