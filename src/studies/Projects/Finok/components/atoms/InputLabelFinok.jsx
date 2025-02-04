import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputLabel, LabelText, SelectStyled } from './StyleAtoms';
import TextFinok from './TextFinok';
import formatMoney from '../../../utils/formatMoney';

export default function InputLabelFinok({ type, example }) {
  const [value, setValue] = useState(type === 'money' ? 'R$1,00' : '');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(type === 'money' ? formatMoney(inputValue) : inputValue);
  };

  return (
    <InputLabel>
      {type === 'text' && (
        <div>
          <LabelText htmlFor="description">
            <TextFinok styleToken='caption_bold'>Descrição</TextFinok>
          </LabelText>
          <input
            id="description"
            type="text"
            placeholder='Digite aqui sua Descrição'
            value={value}
            onChange={handleChange}
          />
          {example && <TextFinok styleToken='caption'>{example}</TextFinok>}
        </div>
      )}

      {type === 'money' && (
        <div>
          <LabelText htmlFor="value">
            <TextFinok styleToken='caption_bold'>Valor</TextFinok>
          </LabelText>
          <input
            id="value"
            type="text"
            placeholder={'R$1,00'}
            value={value}
            onChange={handleChange}
          />
        </div>
      )}

      {type === 'select' && (
        <div>
          <LabelText htmlFor="valueType">
            <TextFinok styleToken='caption_bold'>Tipo de valor</TextFinok>
          </LabelText>
          <SelectStyled>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </SelectStyled>
        </div>
      )}
    </InputLabel>
  );
}

InputLabelFinok.propTypes = {
  type: PropTypes.oneOf(['text', 'money', 'select']).isRequired,
  example: PropTypes.string,
};