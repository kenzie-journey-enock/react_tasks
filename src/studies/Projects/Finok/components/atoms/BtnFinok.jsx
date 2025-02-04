import PropTypes from 'prop-types';
import { Btn } from './StyleAtoms';

export default function BtnFinok({ children, type }) {
  return <Btn type={type}>{children}</Btn>;
}

BtnFinok.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};