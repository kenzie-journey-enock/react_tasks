
import style from './style.module.css'

import PropTypes from 'prop-types'

import BtnPortfolio from "../../atoms/BtnPortfolio"


export default function ListSectionsPortfolio({ data, openMenu }) {
  if (!data || !data.sections) {
    return <p>Carregando...</p>;
  }

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(sectionId)
    if (section) {
      console.log(section)
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className={openMenu ? style.list_sections_open : style.list_sections}>
      {data.sections.map((section) => (
        <li key={section.id} className={style.list_item}>
          <BtnPortfolio onClick={() => handleScroll(section.ref)} styleToken='header'>{section.name}</BtnPortfolio>
        </li>
      ))}
    </ul>
  )
}

ListSectionsPortfolio.propTypes = {
  data: PropTypes.object,
  openMenu: PropTypes.bool
}