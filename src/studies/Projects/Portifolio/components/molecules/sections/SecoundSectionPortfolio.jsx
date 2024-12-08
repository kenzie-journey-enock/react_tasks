import style from './style.module.css'
import PropTypes from 'prop-types'

import { MyProjectsPortfolio } from '../boxes'

export default function SecoundSectionPortfolio({ data }) {
  return (
    <section id={data.sections[1].ref} className={style.secound_section}>
      <MyProjectsPortfolio data={data} />
    </section>
  )
}

SecoundSectionPortfolio.propTypes = {
  data: PropTypes.object
}