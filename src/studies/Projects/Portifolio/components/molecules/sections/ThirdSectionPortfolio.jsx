import style from './style.module.css'
import PropTypes from 'prop-types'

export default function ThirdSectionPortfolio({ data }) {
  return (
    <section id={data.sections[2].ref} className={style.third_section}>
      Contacts {data.name}
    </section>
  )
}

ThirdSectionPortfolio.propTypes = {
  data: PropTypes.object
}