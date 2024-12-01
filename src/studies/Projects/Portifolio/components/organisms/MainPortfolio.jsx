import style from './style.module.css'

import AvatarPortfolio from '../atoms/AvatarPortfolio'
import AdvertMePortfolio from '../molecules/AdvertMePortfolio'
import PropTypes from 'prop-types'

export default function MainPortfolio({data}){
  return (
    <main className={style.main_portfolio}>
      <section className={style.first_s}>
        <AvatarPortfolio name={data.name} src='https://picsum.photos/536/354'/>
        <AdvertMePortfolio data={data} />
      </section>
    </main>
  )
}

MainPortfolio.propTypes = {
  data: PropTypes.object
}