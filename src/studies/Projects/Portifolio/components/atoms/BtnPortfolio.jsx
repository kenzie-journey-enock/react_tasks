import style from "./style.module.css"

import PropTypes from 'prop-types'

export default function BtnPortifolio(
  {
    children,
    styleToken,
    colorBg,
    hoverColorBg,
    onClick,
    type
  }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={setStyleClass(styleToken, style)}
      style={{
        backgroundColor: colorBg,
        transition: 'background-color 0.3s, color 0.3s, border 0.6s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColorBg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = colorBg;
      }}
    >
      {children ? children : 'Empty'}
    </button>
  )
}

BtnPortifolio.propTypes = {
  children: PropTypes.node,
  styleToken: PropTypes.string,
  colorBg: PropTypes.string,
  hoverColorBg: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};


function setStyleClass(styleToken, style) {
  if (styleToken == 'primary') return style.btn_primary

  if (styleToken == 'secoundary') return style.btn_secoundary

  if (styleToken == 'icon') return style.btn_icon

  if (styleToken == 'header') return style.btn_header
}