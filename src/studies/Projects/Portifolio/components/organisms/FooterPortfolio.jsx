import style from './style.module.css'
import PropTypes from 'prop-types'

import AvatarThanksPortfolio from '../atoms/AvatarThanksPortfolio'

export default function FooterPortfolio({ data }) {
  return (
    <footer className={style.footer_portfolio}>
      <AvatarThanksPortfolio name={data.name} src='https://picsum.photos/536/354' />
    </footer>
  )
}

FooterPortfolio.propTypes = {
  data: PropTypes.object
}
