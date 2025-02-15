import PropTypes from 'prop-types';
import { BtnDelete } from './StyleAtoms';

export default function BtnDeleteFinok({ onClick }) {
  return <BtnDelete onClick={onClick}>Excluir</BtnDelete>;
}

BtnDeleteFinok.propTypes = {
  onClick: PropTypes.func.isRequired,
};