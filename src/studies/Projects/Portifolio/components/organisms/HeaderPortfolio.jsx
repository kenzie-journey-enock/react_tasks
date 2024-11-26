import { useState } from 'react'
import style from './style.module.css'
import PropTypes from 'prop-types'

import ListSectionsPortfolio from "../molecules/ListSectionsProtfolio";
import LogoTitlePortfolio from "../molecules/LogoTitlePortfolio";
import MenuBurguerPortfolio from '../atoms/MenuBurguerPortfolio';

export default function HeaderPortifolio({ data }) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  }
  
  return (
    <header className={style.header_portfolio}>
      <LogoTitlePortfolio data={data} />
      <ListSectionsPortfolio data={data} openMenu={openMenu}/>
      <MenuBurguerPortfolio open={openMenu} handleMenu={handleMenu} />
    </header>
  )
}

HeaderPortifolio.propTypes = {
  data: PropTypes.object
}
