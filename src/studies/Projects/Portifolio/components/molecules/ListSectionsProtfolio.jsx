
import style from './style.module.css'

import PropTypes from 'prop-types'

import BtnPortfolio from "../atoms/BtnPortfolio"


export default function ListSectionsPortfolio({data}) {
  if (!data || !data.sections) {
    return <p>Carregando...</p>;
  }
  
  return (
    <ul className={style.list_sections}>
      {data.sections.map((section) => (
        <li key={section.id}>
          <BtnPortfolio styleToken='header'>{section.name}</BtnPortfolio>
        </li>
      ))}
    </ul>
  )
}

ListSectionsPortfolio.propTypes = {
  data: PropTypes.object
}