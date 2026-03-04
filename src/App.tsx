import { HeadProvider, Title } from 'react-head';
import './core/styles/App.css'

import NavBar from './features/nav/NavBar'
import Landing from './features/landing/Landing'

export default function App() {
  const title: string = "Media Lib UI";

  return (
    <>
      <HeadProvider>
        <Title>{title}</Title>
      </HeadProvider>
      <NavBar />
      <Landing />
    </>

  )
}

