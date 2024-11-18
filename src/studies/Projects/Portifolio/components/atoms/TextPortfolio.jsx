import style from './style.module.css'

import PropTypes from 'prop-types'

export default function TextPortfolio({children, styleToken}){

  if (styleToken == 'title1') return <h1 className={style.txt_title1}>{children}</h1>
  if (styleToken == 'title2') return <h2 className={style.txt_title2}>{children}</h2>
  if (styleToken == 'title3') return <h2 className={style.txt_title3}>{children}</h2>
  if (styleToken == 'title4') return <h2 className={style.txt_title4}>{children}</h2>

  if (styleToken == 'headline') return <p className={style.txt_headline}>{children}</p>
  if (styleToken == 'body') return <p className={style.txt_body}>{children}</p>
  if (styleToken == 'caption') return <p className={style.txt_caption}>{children}</p>
  if (styleToken == 'caption_bold') return <p className={style.txt_caption_bold}>{children}</p>
  if (styleToken == 'detail') return <p className={style.txt_detail}>{children}</p>
  
}

TextPortfolio.propTypes = {
  children: PropTypes.node,
  styleToken: PropTypes.string
};