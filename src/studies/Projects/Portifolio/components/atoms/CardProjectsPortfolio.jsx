import style from './style.module.css'
import PropTypes from 'prop-types'

import TextPortfolio from "./TextPortfolio";

export default function CardProjectsPortfolio({ project }) {
  return (
    <div className={style.card_project}>
      <img src={project.img_url} alt={project.name} />
      <div className={style.info_project}>
        <TextPortfolio styleToken='title4'>{project.name}</TextPortfolio>
        <TextPortfolio styleToken='body'>
          <a href={project.link_repo} target="_blank" rel="noopener noreferrer">
            See Project
          </a>
        </TextPortfolio>
      </div>
    </div>
  )
}

CardProjectsPortfolio.propTypes = {
  project: PropTypes.object
}