
export default interface ISection {
    title: string,
    icon: Array<string>,
    classname: Array<string>,
    listItems: Array<string>,
};

export const logoSections: ISection = {
    title: "",
    icon: ["fa-solid fa-m"],
    classname: ["section"],
    listItems: ["Menu", "Library", "General"],
};

export const menuSection: ISection = {
    title: "Menu",
    icon: ["fa-regular fa-house", "fa-solid fa-award"],
    classname: ["menu"],
    listItems: ["Home", "Discover", "Awards", "Celebrities"]
};
export const librarySection: ISection = {
    title: "Library",
    icon: ["fa-regular fa-clock", "fa-regular fa-star", "fa-regular fa-download", "fa-regular fa-heart", ""],
    classname: ["library"],
    listItems: ["Recent", "Top Rated", "Downloaded", "Watchlist"]
};
export const generalSection: ISection = {
    title: "General",
    icon: [],
    classname: ["general"],
    listItems: ["Home", "Discover", "Awards", "Celebrities"],
};

export const sections: Array<ISection> = [
    menuSection,
    librarySection,
    generalSection
]