import LogoFinok from "../atoms/LogoFinok";
import SelectLocaleFinok from "../atoms/SelectLocaleFinok";

import { currencyMap, getLocale } from "../../../utils/currencyMap";
import { ContainerHeader } from "./StyleMolecules";

export default function ContainerHeaderFinok() {

  const currentLocale = getLocale();
  console.log(currentLocale)

  return (
    <ContainerHeader>
      <LogoFinok />
      <SelectLocaleFinok currencyMap={currencyMap} currentLocale={currentLocale} />
    </ContainerHeader>
  )
}