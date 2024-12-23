import style from './style.module.css'
import PropTypes from 'prop-types'

import {
  FirstSectionPortfolio,
  SecoundSectionPortfolio,
  ThirdSectionPortfolio
} from '../molecules/sections'

export default function MainPortfolio({ data }) {
  return (
    <main className={style.main_portfolio}>
      <FirstSectionPortfolio data={data} />
      <SecoundSectionPortfolio data={data} />
      <ThirdSectionPortfolio data={data} />
    </main>
  )
}

MainPortfolio.propTypes = {
  data: PropTypes.object
}
