import style from './style.module.css'
import PropTypes from 'prop-types'

export default function MenuBurguerPortfolio({ open, handleMenu }){
  
  return (
    <div className={style.menu_icon} onClick={handleMenu}>
      {open ? (<IconClose/>) : (<IconBurguer/>)}
    </div>
  )
}

function IconBurguer(){
  return <img src="src/assets/burger_menu_icon.svg" alt="Burguer Icon" />
}

function IconClose(){
  return <img src="src/assets/close_icon.svg" alt="Close Icon" />
}

MenuBurguerPortfolio.propTypes = {
  open: PropTypes.bool,
  handleMenu: PropTypes.func
}