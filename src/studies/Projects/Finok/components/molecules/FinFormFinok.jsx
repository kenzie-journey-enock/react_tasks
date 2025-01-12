import style from "./style.module.css"

import BtnFinok from "../atoms/BtnFinok";
import InputLabelFinok from "../atoms/InputLabelFinok";

export default function FinFormFinok() {
  return (
    <form className={style.fin_form}>
      <InputLabelFinok type='text' example='Ex: Compra de Roupas' />
      <InputLabelFinok type='money' />
      <InputLabelFinok type='select' />
      <BtnFinok type='submit'>Inserir Valor</BtnFinok>
    </form>
  )
}