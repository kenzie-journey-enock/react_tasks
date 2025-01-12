import { useState } from 'react';
import PropTypes from 'prop-types';
import style from "./style.module.css"
import TextFinok from './TextFinok';

export default function InputLabelFinok({ type, example }) {
  const [value, setValue] = useState(type === 'money' ? 'R$1,00' : '');

  const formatMoney = (rawValue) => {
    const numericValue = parseFloat(rawValue.replace(/[^0-9]/g, '')) / 100;
    return numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (type === 'money') {
      setValue(formatMoney(inputValue));
    } else {
      setValue(inputValue);
    }
  };

  return (
    <div className={style.input_label}>
      {type === 'text' && (
        <div>
          <label htmlFor="description">
            <TextFinok styleToken='caption_bold'>Descrição</TextFinok>
          </label>
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
          <label htmlFor="value">
            <TextFinok styleToken='caption_bold'>Valor</TextFinok>
          </label>
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
          <label htmlFor="valueType">
            <TextFinok styleToken='caption_bold'>Tipo de valor</TextFinok>
          </label>
          <select id="valueType" value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      )}
    </div>
  );
}

InputLabelFinok.propTypes = {
  type: PropTypes.oneOf(['text', 'money', 'select']).isRequired,
  example: PropTypes.string,
};