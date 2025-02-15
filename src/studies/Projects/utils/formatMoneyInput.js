import {
  zeroCounts,
  getFirstNums,
  getLastNums,
  setMilharNums
} from "./stringNumbers";

export default function formatMoneyInput(inputValue) {
  inputValue = inputValue.replace(/\D/g, '');

  console.log("Verifica: removeu todos os caracteres -->", inputValue)

  let lengValue = inputValue.length

  console.log("Verifica: contagem dos caracteres -->", lengValue)

  if (lengValue === 1) {
    inputValue = `R$0,0${inputValue}`
    console.log("Verifica: o valor (lengValue === 1) {R$0,0(1-9)} -->", inputValue)

    return inputValue
  }

  let zeroCount = zeroCounts(inputValue)

  console.log("Verifica: contagem dos zeros -->", zeroCount)

  if (lengValue === 3) {
    console.log("Verifica: o valor inicial (lengValue === 3) {00(1-9)} -->", inputValue)
  }

  let firstNums = getFirstNums(inputValue)
  console.log("Verifica: o firstNums -->", firstNums)

  let zerosInFirstNums = zeroCounts(firstNums)
  console.log("Verifica: o zerosInFirstNums -->", zerosInFirstNums)

  let lastNums = getLastNums(inputValue, lengValue)
  console.log("Verifica: o lastNums -->", lastNums)

  if (lengValue === 4) {
    console.log("Verifica: o valor inicial (lengValue === 4) {00(1-9)(1-9)} -->", inputValue)

    let firstNums = getFirstNums(inputValue)
    console.log("Verifica: o firstNums (lengValue === 4) {00(1-9)(1-9)} -->", firstNums)

    let zerosInFirstNums = zeroCounts(firstNums)
    console.log("Verifica: o zerosInFirstNums (lengValue === 4) {00(1-9)(1-9)} -->", zerosInFirstNums)

    let lastNums = getLastNums(inputValue, lengValue)
    console.log("Verifica: o lastNums (lengValue === 4) {00(1-9)(1-9)} -->", lastNums)

    if (zerosInFirstNums === 1 && firstNums[0] === '0') {
      firstNums = firstNums[1]

      inputValue = `R$${firstNums},${lastNums}`
      console.log("Verifica: o valor (lengValue === 4) (zerosInFirstNums === 1) {R$(1-9),(1-9)(1-9)} -->", inputValue)

      return inputValue
    }


    if (zerosInFirstNums === 2) {
      firstNums = '0'

      inputValue = `R$${firstNums},${lastNums}`
      console.log("Verifica: o valor (lengValue === 4) (zerosInFirstNums === 2) {R$0,(1-9)(1-9)} -->", inputValue)

      return inputValue
    }
  }

  inputValue = `R$${setMilharNums(firstNums, 'pt-BR')},${lastNums}`
  console.log("Verifica: o valor (lengValue === 4) {R$...(1-9),(1-9)(1-9)} -->", inputValue)

  return inputValue

}

