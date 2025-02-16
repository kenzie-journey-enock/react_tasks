import PropTypes from 'prop-types';
import { useState } from "react";
import { FinForm } from "./StyleMolecules";

import BtnFinok from "../atoms/BtnFinok";
import InputLabelFinok from "../atoms/InputLabelFinok";
import TextFinok from "../atoms/TextFinok";

import { formatMoneyToFloat } from '../../../utils/formatMoney';

export default function FinFormFinok({ setItem }) {
  const [formData, setFormData] = useState({
    title: "",
    value: "",
    type: "Entrada",
  });

  // Definição da função handleChange para atualizar os campos do formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.value) {
      alert("Preencha todos os campos!");
      return;
    }

    // Passa apenas o novo item para a função setItem
    setItem({
      id: Date.now().toString(),
      title: formData.title,
      value: formatMoneyToFloat(formData.value),
      type: formData.type
    });

    setFormData({ title: "", value: "", type: "Entrada" });
  };

  return (
    <FinForm onSubmit={handleSubmit}>
      <InputLabelFinok
        type='text'
        name="title"
        example='Ex: Compra de Roupas'
        value={formData.title}
        onChange={handleChange}
      />
      <InputLabelFinok
        type='money'
        name="value"
        value={formData.value}
        onChange={handleChange}
      />
      <InputLabelFinok
        type='select'
        name="type"
        value={formData.type}
        onChange={handleChange}
      />
      <BtnFinok type='submit'>
        <TextFinok styleToken='body'>Inserir Valor</TextFinok>
      </BtnFinok>
    </FinForm>
  );
}

FinFormFinok.propTypes = {
  setItem: PropTypes.func.isRequired,
};
