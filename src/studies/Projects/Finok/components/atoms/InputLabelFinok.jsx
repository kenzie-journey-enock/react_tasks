import PropTypes from 'prop-types';
import { InputLabel, LabelText, SelectStyled } from './StyleAtoms';
import TextFinok from './TextFinok';
import { useState } from 'react';

export default function InputLabelFinok({ type, name, value, onChange, example }) {
  const [myMoney, setMyMoney] = useState('')


  const handleChange = (e) => {
    let inputValue = e.target.value;





    if (type === 'money') {
      inputValue = inputValue.replace(/[^\d,]/g, '');

      let lengValue = inputValue.length
      let zeroCount = (inputValue.match(/0/g) || []).length
      let lastNums = '0'
      let firtNums = '0'
      let milharNums = Number(firtNums).toLocaleString('pt-BR')

      if (!inputValue.includes(',') & lengValue <= 2) {
        inputValue = '0,' + inputValue;
      }

      lengValue = inputValue.length

      if (lengValue === 5 && zeroCount === 0) {
        inputValue = inputValue.slice(0, 1) + inputValue.slice(2);
        lengValue = inputValue.length
        lastNums = inputValue[lengValue - 2] + inputValue[lengValue - 1]
        inputValue = inputValue.slice(0, 2) + ',' + lastNums

        console.log('(lengValue === 5 && zeroCount === 0) --->', inputValue)
      }
      lengValue = inputValue.length

      if (lengValue >= 6) {
        inputValue = inputValue.replace(/,/g, '')
        lengValue = inputValue.length
        lastNums = inputValue[lengValue - 2] + inputValue[lengValue - 1]
        firtNums = inputValue.slice(0, -2)
        inputValue = firtNums + ',' + lastNums

        console.log('(lengValue >= 6) 1 --->', inputValue)

        if (lengValue >= 6) {
          milharNums = Number(firtNums).toLocaleString('pt-BR')
          inputValue = milharNums + ',' + lastNums

          console.log('(lengValue >= 6) 2 --->', inputValue)
        }
      }

      if (lengValue === 5 && zeroCount === 1) {
        inputValue = inputValue.replace(/,/g, '')
        console.log('?0 in -->', inputValue)
        console.log('Quantos 0 in -->', zeroCount)
        inputValue = inputValue.replace('0', '');
        inputValue = inputValue.slice(0, 1) + ',' + inputValue.slice(1);
        console.log('?0 in -->', inputValue)
        console.log('Quantos 0 in -->', zeroCount)

        console.log('(lengValue === 5 && zeroCount === 1) --->', inputValue)
      }

      if (lengValue === 5 && zeroCount === 2) {
        console.log('slice? -->', inputValue.slice(0, 2))
        inputValue = inputValue.slice(0, 2) + inputValue.slice(3);
        console.log('? in -->', inputValue)

        console.log('(lengValue === 5 && zeroCount === 2) --->', inputValue)
      }

      if (lengValue === 3 && zeroCount === 0) {

        console.log('lengValue !!!! --->', inputValue.length)
        // if (inputValue.length === 3) {

        // *** ARRUME AQUI PARA PODER COLAR 3 NUMEROS ****
        //   let fixNum = inputValue.replace(/^0+/, '')
        //   fixNum = fixNum.replace(/,/g, '')

        //   lastNums = fixNum[lengValue - 2] + fixNum[lengValue - 1]
        //   firtNums = fixNum.slice(0, -2)

        //   inputValue = firtNums + ',' + lastNums


        //   console.log('lastNums --->', lastNums)
        //   console.log('firtNums --->', firtNums)


        //   console.log(')))))))))---- --->', inputValue)
        // }


        inputValue = inputValue.replace(/^0+/, '')
        inputValue = inputValue.replace(/,/g, '')
        inputValue = '0,0' + inputValue



        console.log('(lengValue === 3 && zeroCount === 0) --->', inputValue)
      }

      if (lengValue > 3 && lengValue < 6 && lengValue != 5) {
        lastNums = inputValue[lengValue - 2] + inputValue[lengValue - 1]
        firtNums = inputValue.slice(0, -2)
        milharNums = Number(firtNums).toLocaleString('pt-BR')
        inputValue = milharNums + ',' + lastNums

        console.log('(lengValue > 3 && lengValue < 6) -->', inputValue)
      }


      console.log(inputValue, lengValue, zeroCount)
      console.log('lastNums', lastNums, 'firtNums', firtNums)

      inputValue = `R$${inputValue}`

    }

    onChange({ target: { name, value: inputValue } });
  };

  return (
    <InputLabel>
      {type === 'text' && (
        <div>
          <LabelText htmlFor={name}>
            <TextFinok styleToken="caption_bold">Descrição</TextFinok>
          </LabelText>
          <input
            id={name}
            name={name}
            type="text"
            placeholder="Digite aqui sua Descrição"
            value={value}
            onChange={handleChange}
          />
          {example && <TextFinok styleToken="caption">{example}</TextFinok>}
        </div>
      )}

      {type === 'money' && (
        <div>
          <LabelText htmlFor={name}>
            <TextFinok styleToken="caption_bold">Valor</TextFinok>
          </LabelText>
          <input
            id={name}
            name={name}
            type="text"
            placeholder="R$00,00"
            value={value}
            onChange={handleChange}
          />
        </div>
      )}

      {type === 'select' && (
        <div>
          <LabelText htmlFor={name}>
            <TextFinok styleToken="caption_bold">Tipo de valor</TextFinok>
          </LabelText>
          <SelectStyled id={name} name={name} value={value} onChange={onChange}>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
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