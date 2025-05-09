import IconCartNockBurguer from "../atoms/IconCartNockBurguer";
import LogoNockBurguer from "../atoms/LogoNockBurguer";

import { ContainerHeaderNockBurguerStyle } from "./StyleMolecules";

export default function ContainerHeaderNockBurguer() {
  return (
    <ContainerHeaderNockBurguerStyle>
      <LogoNockBurguer />
      <IconCartNockBurguer />
    </ContainerHeaderNockBurguerStyle>
  )
}