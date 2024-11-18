import TextPortfolio from "../atoms/TextPortfolio";

import PropTypes from 'prop-types'


export default function LogoTitlePortfolio({data}) {
  if (!data || !data.name) {
    return <p>Carregando...</p>;
  }

  return (
    <TextPortfolio styleToken='title1'>{data.name}</TextPortfolio>
  )
}

LogoTitlePortfolio.propTypes = {
  data: PropTypes.object
}