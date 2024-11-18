import style from "./style.module.css"

import PropTypes from 'prop-types'

export default function BtnPortifolio({children, styleToken}){
  return (
    <button className={setStyleClass(styleToken, style)}>
      {children ? children : 'Vazio'}
    </button>
  )
}

BtnPortifolio.propTypes = {
  children: PropTypes.node,
  styleToken: PropTypes.string
};


function setStyleClass(styleToken, style){
  if (styleToken == 'primary') return style.btn_primary

  if (styleToken == 'secoundary') return style.btn_secoundary

  if (styleToken == 'icon') return style.btn_icon

  if (styleToken == 'header') return style.btn_header
}