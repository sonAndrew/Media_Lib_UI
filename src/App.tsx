import './core/styles/App.css';

import SideBar from './features/sidebar/SideBar';
import NavBar from './features/nav/NavBar';
import Content from './features/content/Content';
import Footer from './features/footer/Footer';

export default function App() {

  return (
    <>
      <main>
        <SideBar />
        <div id='rightSection'>
          <NavBar />
          <Content />
        </div>
      </main>
      <Footer />
    </>

  )
}

