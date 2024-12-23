import './styles/globalStyles.css'

import { useEffect, useState } from 'react';

import data from './data_profile.json'
import projectImgExample from './assets/projects/objective_task.jpg'

import {
  FooterPortfolio,
  HeaderPortifolio,
  MainPortfolio
} from "./components/organisms";

export default function Portifolio() {
  const [dataProfile, setDataProfile] = useState(data);

  useEffect(() => {
    if (dataProfile && dataProfile.projects) {
      const updatedProfile = {
        ...dataProfile,
        projects: dataProfile.projects.map(project => ({
          ...project,
          img_url: project.img_url.length > 0 ? project.img_url : projectImgExample
        }))
      };
      setDataProfile(updatedProfile);
    }
  }, [data])

  return (
    <>
      <HeaderPortifolio data={dataProfile} />
      <MainPortfolio data={dataProfile} />
      <FooterPortfolio data={dataProfile} />
    </>
  )
}
