import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FinItem } from './StyleMolecules';

import TextFinok from "../atoms/TextFinok";
import BtnDeleteFinok from "../atoms/BtnDeleteFinok";

import { formatFloatToMoney } from '../../../utils/formatMoney';
import { getLocale } from '../../../utils/currencyMap';

export default function FinItemFinok({ item, removeItem }) {
  const [locale, setLocale] = useState(getLocale());

  useEffect(() => {
    setLocale(getLocale())
    console.log(locale)
  }, [locale])


  let status = item.type === 'Despesa' ? 'negative' : 'positive'

  return (
    <FinItem type={item.type}>
      <TextFinok styleToken='title3'>{item.title}</TextFinok>
      <TextFinok styleToken='caption'>{item.type}</TextFinok>
      <TextFinok styleToken='body'>{formatFloatToMoney(item.value, status, locale)}</TextFinok>
      <BtnDeleteFinok onClick={() => removeItem(item.id)} />
    </FinItem>
  );
}

FinItemFinok.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
};