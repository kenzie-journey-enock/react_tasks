import style from './style.module.css'
import PropTypes from 'prop-types'

export default function TextPortfolio({ children, styleToken, moreClassStyled }) {

  if (styleToken == 'title1') return <h1 className={`${style.txt_title1} ${moreClassStyled}`}>{children}</h1>
  if (styleToken == 'title2') return <h2 className={`${style.txt_title2} ${moreClassStyled}`}>{children}</h2>
  if (styleToken == 'title3') return <h2 className={`${style.txt_title3} ${moreClassStyled}`}>{children}</h2>
  if (styleToken == 'title4') return <h2 className={`${style.txt_title4} ${moreClassStyled}`}>{children}</h2>

  if (styleToken == 'headline') return <p className={`${style.txt_headline} ${moreClassStyled}`}>{children}</p>
  if (styleToken == 'body') return <p className={`${style.txt_body} ${moreClassStyled}`}>{children}</p>
  if (styleToken == 'caption') return <p className={`${style.txt_caption} ${moreClassStyled}`}>{children}</p>
  if (styleToken == 'caption_bold') return <p className={`${style.txt_caption_bold} ${moreClassStyled}`}>{children}</p>
  if (styleToken == 'detail') return <p className={`${style.txt_detail} ${moreClassStyled}`}>{children}</p>

}

TextPortfolio.propTypes = {
  children: PropTypes.node,
  styleToken: PropTypes.string,
  moreClassStyled: PropTypes.string
};
