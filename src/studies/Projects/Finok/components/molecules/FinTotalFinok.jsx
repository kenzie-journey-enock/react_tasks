import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextFinok from "../atoms/TextFinok"

import { formatFloatToMoney } from "../../utils/formatMoney"
import { getLocale } from '../../utils/currencyMap';

import { FinTotal } from './StyleMolecules';

export default function FinTotalFinok({ total, totalStatus }) {
  const [locale, setLocale] = useState(getLocale());

  useEffect(() => {
    setLocale(getLocale())
  }, [locale])


  return (
    <FinTotal>
      <div>
        <TextFinok styleToken='title3'>Total Value</TextFinok>
        <TextFinok styleToken='caption'>Value refers to the balance</TextFinok>
      </div>
      <TextFinok styleToken='title4'>{formatFloatToMoney(total, totalStatus, locale)}</TextFinok>
    </FinTotal>
  )
}

FinTotalFinok.propTypes = {
  total: PropTypes.number.isRequired,
  totalStatus: PropTypes.string
};