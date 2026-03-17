import Hero from './components/Hero';
import Gallery from './components/Gallery';

import './styles/Content.css';

export default function Content() {

    return (
        <div id='contentSection'>
            <h1>Media Library Content Section</h1>
            <Hero />
            <Gallery />
        </div>
    )
}