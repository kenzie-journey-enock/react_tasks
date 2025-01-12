import style from './style.module.css'

import SocialCardFinok from "../atoms/SocialCardFinok"
import TextFinok from "../atoms/TextFinok"

export default function ContainerFooterFinok() {
  return (
    <div className={style.container_footer}>
      <TextFinok styleToken='detail' >&copy; 2023 Enock. Todos os direitos reservados.</TextFinok>
      <SocialCardFinok />
    </div>
  )
}
