import style from './style.module.css'
import PropTypes from 'prop-types'

import TextPortfolio from '../../atoms/TextPortfolio'

export default function SecoundSectionPortfolio({ data }) {
  return (
    <section className={style.secound_section}>
      <TextPortfolio styleToken='title3'> My Projects </TextPortfolio>
    </section>
  )
}

SecoundSectionPortfolio.propTypes = {
  data: PropTypes.object
}