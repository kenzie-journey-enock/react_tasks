import { ContainerFooter } from './StyleMolecules'

import SocialCardFinok from "../atoms/SocialCardFinok"
import TextFinok from "../atoms/TextFinok"

export default function ContainerFooterFinok() {
  return (
    <ContainerFooter>
      <TextFinok styleToken='detail' >&copy; 2023 Enock. Todos os direitos reservados.</TextFinok>
      <SocialCardFinok />
    </ContainerFooter>
  )
}
