import style from './style.module.css'
import PropTypes from 'prop-types'

import FirstSectionPortfolio from '../molecules/FirstSectionPortfolio'

export default function MainPortfolio({ data }) {
  return (
    <main className={style.main_portfolio}>
      <FirstSectionPortfolio data={data} />
    </main>
  )
}

MainPortfolio.propTypes = {
  data: PropTypes.object
}