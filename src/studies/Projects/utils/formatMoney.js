import { getFirstNums, getLastNums, setMilharNums } from "./stringNumbers";
import { currencyMap } from "./currencyMap";

export function formatMoneyToFloat(value) {
  value = value.replace(/\D/g, '');
  let lengValue = value.length
  value = `${getFirstNums(value)}.${getLastNums(value, lengValue)}`

  return parseFloat(value)
}

export function formatFloatToMoney(value, status, locale) {
  let currentLocale = locale ? locale : 'pt-BR'
  let formatValue = formatMoneyByLocale(Math.abs(value), currentLocale)
  status === 'positive' ? formatValue : formatValue = '-' + formatValue

  return formatValue
}

export function formatMoneyByLocale(value, locale) {
  const currency = currencyMap[locale].currency || 'USD';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  }).format(value);
}