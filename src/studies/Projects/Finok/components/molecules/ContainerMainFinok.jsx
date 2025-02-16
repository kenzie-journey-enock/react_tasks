import { useState, useEffect } from 'react'
import { ContainerMain } from './StyleMolecules'

import FinFormFinok from './FinFormFinok'
import FinSummaryFinok from './FinSummaryFinok'

import data_mock from "../../data_finok.json"
import FinTotalFinok from './FinTotalFinok'

export default function ContainerMainFinok() {
  // Carregar os dados do localStorage ou usar o JSON inicial
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("finokData");
    return storedData ? JSON.parse(storedData) : data_mock;
  });

  // Atualiza o LocalStorage sempre que data mudar
  useEffect(() => {
    localStorage.setItem("finokData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const updatedTotal = data.resume.reduce((acc, item) => {
      if (item.type === "Entrada") {
        return acc + item.value;
      } else if (item.type === "Despesa") {
        return acc - item.value;
      }
      return acc;
    }, 0);

    const roundedTotal = Math.round(updatedTotal * 100) / 100;

    const totalStatus = roundedTotal >= 0 ? "positive" : "negative";

    setData((prev) => ({
      ...prev,
      total: roundedTotal,
      totalStatus: totalStatus
    }));
  }, [data.resume]);

  // Função para adicionar um novo item ao resumo e recalcular o total
  const addItem = (newItem) => {
    console.log('newItem --------------->', newItem);

    // Adiciona o novo item à lista
    const updatedResume = [...data.resume, newItem];

    // Atualiza o estado
    setData((prev) => ({
      ...prev,
      resume: updatedResume
    }));
  };

  const removeItem = (id) => {
    const updatedResume = data.resume.filter((item) => item.id !== id);

    setData((prev) => ({
      ...prev,
      resume: updatedResume
    }));
  };


  return (
    <ContainerMain>
      <FinFormFinok setItem={addItem} />
      <FinTotalFinok total={data.total} totalStatus={data.totalStatus} />
      <FinSummaryFinok items={data.resume} removeItem={removeItem} />
    </ContainerMain>
  )
}