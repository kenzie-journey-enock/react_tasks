import style from './style.module.css'

import TitlePortfolio from '../atoms/TitlePortfolio'
import AvatarPortfolio from '../atoms/AvatarPortfolio'
// import PropTypes from 'prop-types'

export default function MainPortfolio(){
  return (
    <main className={style.main_portfolio}>
      <AvatarPortfolio name='Enock' src='https://picsum.photos/536/354'/>
      <TitlePortfolio>Bla bla <strong>Coisa e tal</strong></TitlePortfolio>
    </main>
  )
}