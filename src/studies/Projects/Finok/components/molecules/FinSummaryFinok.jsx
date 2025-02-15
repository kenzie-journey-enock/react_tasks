import PropTypes from 'prop-types';
import { FinSummary, FinContainerItems } from "./StyleMolecules";

import TextFinok from "../atoms/TextFinok";
import FinItemFinok from "./FinItemFinok";

export default function FinSummaryFinok({ items, setItem }) {
  return (
    <FinSummary>
      <TextFinok styleToken='title3'>Resumo Financeiro</TextFinok>

      {items && items.length > 0 ? (
        <FinContainerItems >
          {items.map((item) =>
            <FinItemFinok key={item.id} item={item} setItem={setItem} />
          )}
        </FinContainerItems>
      ) : (
        <TextFinok styleToken='title2'>Você ainda não possui nenhum lançamento</TextFinok>
      )}
    </FinSummary>
  );
}

FinSummaryFinok.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  setItems: PropTypes.func.isRequired,
};
