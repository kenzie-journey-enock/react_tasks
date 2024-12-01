import style from './style.module.css'
import PropTypes from 'prop-types'

import AdvertMePortfolio from '../molecules/AdvertMePortfolio'
import BannerProjectsPortfolio from '../atoms/BannerProjectsPortfolio'

export default function FirstSectionPortfolio({ data }) {
  return (
    <section className={style.first_section}>
      <AdvertMePortfolio data={data} />
      <BannerProjectsPortfolio />
    </section>
  )
}

FirstSectionPortfolio.propTypes = {
  data: PropTypes.object
}