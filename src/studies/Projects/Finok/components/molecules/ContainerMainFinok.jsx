import { useState } from 'react'
import { ContainerMain } from './StyleMolecules'

import FinFormFinok from './FinFormFinok'
import FinSummaryFinok from './FinSummaryFinok'

import data_mock from "../../data_finok.json"

export default function ContainerMainFinok() {
  const [resume, setResume] = useState(data_mock.resume)

  return (
    <ContainerMain>
      <FinFormFinok setItem={setResume} />
      <FinSummaryFinok items={resume} setItem={setResume} />
    </ContainerMain>
  )
}