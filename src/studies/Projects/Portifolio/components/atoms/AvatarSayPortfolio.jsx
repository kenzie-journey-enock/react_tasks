import style from './style.module.css'
import PropTypes from 'prop-types'

import AvatarIconPortfolio from './AvatarIconPortfolio'

import TextHelloPortfolio from './TextHelloPortfolio'

export default function AvatarSayPortfolio({ name, src }) {

  return (
    <div className={style.avatar_wrapper}>
      <AvatarIconPortfolio name={name} src={src} />
      <TextHelloPortfolio name={name} />
    </div>
  )
}

AvatarSayPortfolio.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
}
