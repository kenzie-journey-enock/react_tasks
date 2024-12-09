import style from './style.module.css'
import PropTypes from 'prop-types'

import mePixel from '../../../assets/me_pixel.png'
import MePixelPortfolio from '../../atoms/MePixelPortfolio'
import ContactMePortfolio from '../boxes/ContactMePortfolio'

export default function ThirdSectionPortfolio({ data }) {
  return (
    <section id={data.sections[2].ref} className={style.third_section}>
      <ContactMePortfolio data={data} />
      <MePixelPortfolio imgURL={mePixel} alt="Me in AI pixel art" />
    </section>
  )
}

ThirdSectionPortfolio.propTypes = {
  data: PropTypes.object
}