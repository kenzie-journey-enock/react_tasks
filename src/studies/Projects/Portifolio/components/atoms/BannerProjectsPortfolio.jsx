import PropTypes from 'prop-types'
import style from "./style.module.css"

export default function BannerProjectsPortfolio({ imgURL, alt }) {
  return (
    <div className={style.banner_projects}>
      <img src={imgURL} alt={alt} />
    </div>
  )
}

BannerProjectsPortfolio.propTypes = {
  imgURL: PropTypes.string,
  alt: PropTypes.string
}