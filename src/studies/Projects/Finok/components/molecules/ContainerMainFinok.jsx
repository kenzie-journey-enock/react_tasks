import { useState, useEffect, useMemo } from 'react';
import { ContainerMain, ContainerOrganize } from './StyleMolecules';

import FinFormFinok from './FinFormFinok';
import FinSummaryFinok from './FinSummaryFinok';

import data_mock from '../../data_finok.json';
import FinTotalFinok from './FinTotalFinok';

export default function ContainerMainFinok() {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('finokData');
    const parsedData = storedData ? JSON.parse(storedData) : data_mock;
    return {
      ...parsedData,
      resume: Array.isArray(parsedData.resume) ? parsedData.resume : [],
    };
  });

  const total = useMemo(() => {
    let testTotal = 0;
    (data.resume ?? []).forEach((item) => {
      if (item.type === 'Won') {
        testTotal += item.value
      } else {
        testTotal -= item.value
      }
    });
    return testTotal;
  }, [data.resume]);

  const totalStatus = total >= 0 ? 'positive' : 'negative';

  useEffect(() => {
    localStorage.setItem('finokData', JSON.stringify({ ...data, total }));
  }, [data.resume]);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      resume: [...prev.resume],
    }));
  }, []);

  const addItem = (newItem) => {
    setData((prev) => ({
      ...prev,
      resume: [...prev.resume, newItem],
    }));
  };

  const removeItem = (id) => {
    setData((prev) => ({
      ...prev,
      resume: prev.resume.filter((item) => item.id !== id),
    }));
  };

  return (
    <ContainerMain>
      <ContainerOrganize>
        <FinFormFinok setItem={addItem} />
        <FinTotalFinok total={total} totalStatus={totalStatus} />
      </ContainerOrganize>
      <FinSummaryFinok items={data.resume} removeItem={removeItem} />
    </ContainerMain>
  );
}
