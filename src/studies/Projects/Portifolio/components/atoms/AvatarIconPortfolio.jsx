import style from './style.module.css'
import PropTypes from 'prop-types'

export default function AvatarIconPortfolio({ name, src }) {
  return (
    <div className={style.avatar_element}>
      <img alt={`Avatar de ${name}`} src={src} />
    </div>
  )
}

AvatarIconPortfolio.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
}
