import TextFinok from "../atoms/TextFinok";
import BtnDeleteFinok from "../atoms/BtnDeleteFinok";

import formatMoney from "../../../utils/formatMoney";
import data_mock from "../../data_finok.json"

export default function FinItemFinok() {
  return (
    <div>

      <TextFinok styleToken='title3'>{data_mock.resume[0].title}</TextFinok>
      <TextFinok styleToken='caption'>{data_mock.resume[0].type}</TextFinok>
      <TextFinok styleToken='body'>{formatMoney(data_mock.resume[0].value)}</TextFinok>
      <BtnDeleteFinok />
    </div>
  )
}