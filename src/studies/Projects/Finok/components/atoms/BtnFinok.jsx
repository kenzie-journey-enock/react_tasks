import style from "./style.module.css"
import PropTypes from 'prop-types'

export default function BtnFinok({ children, type }) {
  return (
    <button type={type} className={style.btn_finok}>{children}</button>
  )
}

BtnFinok.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
};