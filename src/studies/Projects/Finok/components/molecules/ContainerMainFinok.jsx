import style from './style.module.css'

import FinFormFinok from './FinFormFinok'
import FinSummaryFinok from './FinSummaryFinok'

export default function ContainerMainFinok() {
  return (
    <div className={style.container_main}>
      <FinFormFinok />
      <FinSummaryFinok />
    </div>
  )
}