import PropTypes from 'prop-types';
import { InputLabel, LabelText, SelectStyled } from './StyleAtoms';
import TextFinok from './TextFinok';
import formatMoneyInput from '../../utils/formatMoneyInput';
import { formatMoneyByLocale } from '../../utils/formatMoney';
import { getLocale } from '../../utils/currencyMap';
import { useEffect, useState } from 'react';

export default function InputLabelFinok({ type, name, value, onChange, example }) {
  const [locale, setLocale] = useState(getLocale());

  useEffect(() => {
    setLocale(getLocale())
  }, [locale])

  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (type === 'money') {
      inputValue = formatMoneyInput(inputValue)
    }

    onChange({ target: { name, value: inputValue } });
  };

  return (
    <InputLabel>
      {type === 'text' && (
        <div>
          <LabelText htmlFor={name}>
            <TextFinok styleToken="caption_bold">Descripton</TextFinok>
          </LabelText>
          <input
            id={name}
            name={name}
            type="text"
            placeholder="Enter your description here..."
            value={value}
            onChange={handleChange}
          />
          {example && <TextFinok styleToken="caption">{example}</TextFinok>}
        </div>
      )}

      {type === 'money' && (
        <div>
          <LabelText htmlFor={name}>
            <TextFinok styleToken="caption_bold">Value</TextFinok>
          </LabelText>
          <input
            id={name}
            name={name}
            type="text"
            placeholder={formatMoneyByLocale(0, locale)}
            value={value}
            onChange={handleChange}
          />
        </div>
      )}

      {type === 'select' && (
        <div>
          <LabelText htmlFor={name}>
            <TextFinok styleToken="caption_bold">Value type</TextFinok>
          </LabelText>
          <SelectStyled id={name} name={name} value={value} onChange={onChange}>
            <option value="Won">Won</option>
            <option value="Spent">Spent</option>
          </SelectStyled>
        </div>
      )}
    </InputLabel>
  );
}

InputLabelFinok.propTypes = {
  type: PropTypes.oneOf(['text', 'money', 'select']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  example: PropTypes.string,
};