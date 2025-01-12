import style from "./style.module.css"

import logo from '../../assets/finok_logo.png'

export default function LogoFinok() {
  return (
    <div className={style.logo_finok}>
      <img src={logo} alt="Logo Finok" />
    </div>
  )
}
