

const linkNames = ["Movies", "TV Shows", "Anime"];

const listLinkItems = linkNames.map(name => <li><a href=''>{name}</a></li>);

export default function NavLinks() {

    return (
        <ul className='link-container'>
            {listLinkItems}
        </ul>
    )
}