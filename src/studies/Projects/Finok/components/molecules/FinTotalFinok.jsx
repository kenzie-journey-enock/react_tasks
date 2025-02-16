import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextFinok from "../atoms/TextFinok"

import { formatFloatToMoney } from "../../../utils/formatMoney"
import { getLocale } from '../../../utils/currencyMap';

export default function FinTotalFinok({ total, totalStatus }) {
  const [locale, setLocale] = useState(getLocale());

  useEffect(() => {
    setLocale(getLocale())
    console.log(locale)
  }, [locale])


  return (
    <div>
      <TextFinok styleToken='title3'>Valor Total</TextFinok>
      <TextFinok styleToken='body'>{formatFloatToMoney(total, totalStatus, locale)}</TextFinok>
    </div>
  )
}

FinTotalFinok.propTypes = {
  total: PropTypes.number.isRequired,
  totalStatus: PropTypes.string
};