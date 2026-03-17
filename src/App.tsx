import './core/styles/App.css';

import SideBar from './features/sidebar/SideBar';
import NavBar from './features/nav/NavBar';
import Content from './features/content/Content';

export default function App() {

  return (
    <>
      <SideBar />
      <div id='rightSection'>
        <NavBar />
        <Content />
      </div>
    </>

  )
}

