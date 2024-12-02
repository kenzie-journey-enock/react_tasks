import style from './style.module.css'
import PropTypes from 'prop-types'

import TextPortfolio from '../../atoms/TextPortfolio'

export default function MyProjectsPortfolio({ data }) {
  return (
    <div className={style.my_projects}>
      <TextPortfolio styleToken='title3'> My Projects </TextPortfolio>
    </div>
  )
}

MyProjectsPortfolio.propTypes = {
  data: PropTypes.object
}