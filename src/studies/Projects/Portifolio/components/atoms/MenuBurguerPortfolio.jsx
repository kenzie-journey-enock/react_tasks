import style from './style.module.css'
import PropTypes from 'prop-types'

import burgerMenuIcon from '../../assets/burger_menu_icon.svg'
import closeIcon from '../../assets/close_icon.svg'

export default function MenuBurguerPortfolio({ open, handleMenu }) {

  return (
    <div className={style.menu_icon} onClick={handleMenu}>
      {open ? (<IconClose />) : (<IconBurguer />)}
    </div>
  )
}

function IconBurguer() {
  return <img src={burgerMenuIcon} alt="Burguer Icon" />
}

function IconClose() {
  return <img src={closeIcon} alt="Close Icon" />
}

MenuBurguerPortfolio.propTypes = {
  open: PropTypes.bool,
  handleMenu: PropTypes.func
}