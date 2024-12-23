import style from './style.module.css'
import PropTypes from 'prop-types'

import AdvertMePortfolio from '../boxes/AdvertMePortfolio'
import BannerProjectsPortfolio from '../../atoms/BannerProjectsPortfolio'

import frameProjectsKenzie from '../../../assets/frame_projects_kenzie.png'

export default function FirstSectionPortfolio({ data }) {
  return (
    <section id={data.sections[0].ref} className={style.first_section}>
      <AdvertMePortfolio data={data} />
      <BannerProjectsPortfolio imgURL={frameProjectsKenzie} alt="A Banner of my projects" />
    </section>
  )
}

FirstSectionPortfolio.propTypes = {
  data: PropTypes.object
}
