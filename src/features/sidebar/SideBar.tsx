import Logo from "../../core/components/Logo";
import SideBarSection from "./components/SideBarSection";
import { sections } from "./types/ISideBar.td";

import './styles/SideBar.css';

export default function SideBar() {

    return (
        <div id="sideBar">
            <div className="logo"><Logo /></div>
            {sections.map(sect => <SideBarSection section={sect} />)}
        </div>
    )
}