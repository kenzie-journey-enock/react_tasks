import style from "./style.module.css"

import mePixel from '../../assets/me_pixel.png'

export default function MePixelFinok() {
  return (
    <div className={style.me_pixel_art}>
      <img src={mePixel} alt="Pixel art of me" />
    </div>
  )
}
