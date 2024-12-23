import style from './style.module.css'
import PropTypes from 'prop-types'

export default function IconsJumpsPortfolio({ children }) {
  return (
    <div className={style.icons_hard_skills}>
      {children}
    </div>
  )
}

IconsJumpsPortfolio.propTypes = {
  children: PropTypes.node
}
