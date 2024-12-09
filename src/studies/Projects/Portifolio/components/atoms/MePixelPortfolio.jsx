import PropTypes from 'prop-types'
import style from "./style.module.css"

export default function MePixelPortfolio({ imgURL, alt }) {
  return (
    <div className={style.me_pixel_art}>
      <img src={imgURL} alt={alt} />
    </div>
  )
}

MePixelPortfolio.propTypes = {
  imgURL: PropTypes.string,
  alt: PropTypes.string
}