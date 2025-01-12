import TextFinok from "../atoms/TextFinok";

import style from './style.module.css'

export default function FinSummaryFinok() {
  return (
    <div className={style.fin_summary}>
      <TextFinok styleToken='title3'>Resumo Financeiro</TextFinok>

      <TextFinok styleToken='title2'>Você ainda não possui nenhum lançamento</TextFinok>
    </div>
  )
}