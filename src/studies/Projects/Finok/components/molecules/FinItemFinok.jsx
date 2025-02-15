import PropTypes from 'prop-types';
import { FinItem } from './StyleMolecules';

import TextFinok from "../atoms/TextFinok";
import BtnDeleteFinok from "../atoms/BtnDeleteFinok";

import { formatFloatToMoney } from '../../../utils/formatMoney';

export default function FinItemFinok({ item, setItem }) {

  const handleDelete = () => {
    setItem((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  return (
    <FinItem type={item.type}>
      <TextFinok styleToken='title3'>{item.title}</TextFinok>
      <TextFinok styleToken='caption'>{item.type}</TextFinok>
      <TextFinok styleToken='body'>{formatFloatToMoney(item.value)}</TextFinok>
      <BtnDeleteFinok onClick={handleDelete} />
    </FinItem>
  )
}

FinItemFinok.propTypes = {
  item: PropTypes.object,
  setItem: PropTypes.func.isRequired,
};
