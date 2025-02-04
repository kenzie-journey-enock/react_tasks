import { FinForm } from "./StyleMolecules";

import BtnFinok from "../atoms/BtnFinok";
import InputLabelFinok from "../atoms/InputLabelFinok";
import TextFinok from "../atoms/TextFinok";

export default function FinFormFinok() {
  return (
    <FinForm>
      <InputLabelFinok type='text' example='Ex: Compra de Roupas' />
      <InputLabelFinok type='money' />
      <InputLabelFinok type='select' />
      <BtnFinok type='submit'>
        <TextFinok styleToken='body'>Inserir Valor</TextFinok>
      </BtnFinok>
    </FinForm>
  )
}
