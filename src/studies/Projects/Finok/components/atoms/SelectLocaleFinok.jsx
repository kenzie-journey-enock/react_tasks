import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  SelectLocaleFinokWrapper,
  SelectButton,
  SelectList,
  SelectItem
} from './StyleAtoms';

import TextFinok from './TextFinok';

export default function SelectLocaleFinok({ currencyMap, currentLocale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [currentLocaleState, setCurrentLocaleState] = useState(currentLocale);


  useEffect(() => {
    const storedData = localStorage.getItem('finokData');

    const parsedData = storedData ? JSON.parse(storedData) : {};
    parsedData.locale = currentLocaleState;
    console.log(parsedData.locale)
    localStorage.setItem('finokData', JSON.stringify(parsedData));

  }, [currentLocaleState]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (locale) => {
    setSelectedCurrency(currencyMap[locale]);
    setCurrentLocaleState(locale)
    setIsOpen(false);

    window.location.reload()
  };

  return (
    <SelectLocaleFinokWrapper>
      <SelectButton onClick={handleToggle}>
        {selectedCurrency ? (
          <img
            src={selectedCurrency.flag}
            alt={selectedCurrency.alt}
            width="30"
            height="20"
          />
        ) : (
          <img
            src={currencyMap[currentLocale].flag}
            alt={currencyMap[currentLocale].alt}
            width="30"
            height="20"
          />
        )}
      </SelectButton>
      {isOpen && (
        <SelectList>
          {Object.keys(currencyMap).map((locale) => (
            <SelectItem key={locale} onClick={() => handleSelect(locale)}>
              <img
                src={currencyMap[locale].flag}
                alt={currencyMap[locale].alt}
                width="30"
                height="20"
              />
              <TextFinok styleToken='caption'>{currencyMap[locale].alt}</TextFinok>
            </SelectItem>
          ))}
        </SelectList>
      )}
    </SelectLocaleFinokWrapper>
  );
}


SelectLocaleFinok.propTypes = {
  currencyMap: PropTypes.object,
  currentLocale: PropTypes.string
};