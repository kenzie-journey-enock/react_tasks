import TextFinok from "../atoms/TextFinok";
import FinItemFinok from "./FinItemFinok";

import { FinSummary } from "./StyleMolecules";

export default function FinSummaryFinok() {
  return (
    <FinSummary>
      <TextFinok styleToken='title3'>Resumo Financeiro</TextFinok>

      <TextFinok styleToken='title2'>Você ainda não possui nenhum lançamento</TextFinok>

      <FinItemFinok />
    </FinSummary>
  )
}