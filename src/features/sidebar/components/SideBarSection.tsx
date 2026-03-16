import type ISection from "../types/ISideBar.td";


export default function SideBarSection({ section }: { section: ISection }) {

    return (
        <div className={("section" + section.classname.map((n: string) => ` ${n}`)).replace(',', '').trim()}>
            <h3>{section.title}</h3>
            <ul>
                {section.listItems.map((x: string) => <li><i className={ }></i><span>{x}</span></li>)}
            </ul>
        </div>
    )
}