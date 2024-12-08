import style from './style.module.css'
import PropTypes from 'prop-types'

import TextPortfolio from '../../atoms/TextPortfolio'
import CardProjectsPortfolio from '../../atoms/CardProjectsPortfolio'

export default function MyProjectsPortfolio({ data }) {
  return (
    <div className={style.my_projects}>
      <TextPortfolio styleToken='title3'> My Projects </TextPortfolio>
      <TextPortfolio styleToken='body'> Projects created at Kenzie Academy </TextPortfolio>
      <div className={style.list_my_projects}>
        {data.projects.map((project, index) => (
          <CardProjectsPortfolio key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

MyProjectsPortfolio.propTypes = {
  data: PropTypes.object
};