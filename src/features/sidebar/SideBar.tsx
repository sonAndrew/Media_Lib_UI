import Logo from "../../core/components/Logo";


export default function SideBar() {

    return (
        <div id="sideBar">
            <div><Logo /></div>
            <div className="menu">Menu</div>
            <div className="library">Library</div>
            <div className="general">General</div>
        </div>
    )
}