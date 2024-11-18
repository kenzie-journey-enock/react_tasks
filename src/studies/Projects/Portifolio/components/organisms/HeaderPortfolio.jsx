
import style from './style.module.css'
import PropTypes from 'prop-types'


import ListSectionsPortfolio from "../molecules/ListSectionsProtfolio";
import LogoTitlePortfolio from "../molecules/LogoTitlePortfolio";

export default function HeaderPortifolio({ data }) {
  return (
    <header className={style.header_portfolio}>
      <LogoTitlePortfolio data={data} />
      <ListSectionsPortfolio data={data} />
    </header>
  )
}

HeaderPortifolio.propTypes = {
  data: PropTypes.object
}
