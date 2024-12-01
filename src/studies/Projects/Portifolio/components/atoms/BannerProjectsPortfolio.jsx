import style from "./style.module.css"

import frameProjectsKenzie from '../../assets/frame_projects_kenzie.png'

export default function BannerProjectsPortfolio() {
  return (
    <div className={style.banner_projects}>
      <img src={frameProjectsKenzie} alt="A Banner of my projects" />
    </div>
  )
}