
export default interface ISection {
    title: string,
    icons: Array<string>,
    classname: Array<string>,
    listItems: Array<string>,
};

export const logoSections: ISection = {
    title: "",
    icons: ["fa-solid fa-m"],
    classname: ["section"],
    listItems: [],
};

export const menuSection: ISection = {
    title: "Menu",
    icons: ["fa-regular fa-house", "fa-solid fa-award"],
    classname: ["menu"],
    listItems: ["Home", "Discover", "Awards", "Celebrities"]
};
export const librarySection: ISection = {
    title: "Library",
    icons: ["fa-regular fa-clock", "fa-regular fa-star", "fa-regular fa-download", "fa-regular fa-square-check", "fa-regular fa-heart-circle-plus"],
    classname: ["library"],
    listItems: ["Recent", "Top Rated", "Downloaded", "Watchlist"]
};
export const generalSection: ISection = {
    title: "General",
    icons: ["fa-regular fa-wrench", "fa-regular fa-user-gear"],
    classname: ["general"],
    listItems: ["Settings", "Log Out"],
};

export const sections: Array<ISection> = [
    menuSection,
    librarySection,
    generalSection
]