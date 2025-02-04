import PropTypes from 'prop-types';
import { TxtTitle1, TxtTitle2, TxtTitle3, TxtTitle4, TxtHeadline, TxtBody, TxtCaption, TxtCaptionBold, TxtDetail } from './StyleAtoms';

export default function TextFinok({ children, styleToken, moreClassStyled }) {
  switch (styleToken) {
    case 'title1':
      return <TxtTitle1 className={moreClassStyled}>{children}</TxtTitle1>;
    case 'title2':
      return <TxtTitle2 className={moreClassStyled}>{children}</TxtTitle2>;
    case 'title3':
      return <TxtTitle3 className={moreClassStyled}>{children}</TxtTitle3>;
    case 'title4':
      return <TxtTitle4 className={moreClassStyled}>{children}</TxtTitle4>;
    case 'headline':
      return <TxtHeadline className={moreClassStyled}>{children}</TxtHeadline>;
    case 'body':
      return <TxtBody className={moreClassStyled}>{children}</TxtBody>;
    case 'caption':
      return <TxtCaption className={moreClassStyled}>{children}</TxtCaption>;
    case 'caption_bold':
      return <TxtCaptionBold className={moreClassStyled}>{children}</TxtCaptionBold>;
    case 'detail':
      return <TxtDetail className={moreClassStyled}>{children}</TxtDetail>;
    default:
      return <span className={moreClassStyled}>{children}</span>;
  }
}

TextFinok.propTypes = {
  children: PropTypes.node,
  styleToken: PropTypes.string,
  moreClassStyled: PropTypes.string,
};
