import style from './style.module.css'
import PropTypes from 'prop-types'

export default function FooterPortfolio({ data }) {
  return (
    <footer className={style.footer_portfolio}>
      RODAPÉ
    </footer>
  )
}

FooterPortfolio.propTypes = {
  data: PropTypes.object
}