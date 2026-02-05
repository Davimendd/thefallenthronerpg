function loadSection(section) {
    const content = document.getElementById("content");

    switch (section) {
        case "world":
            content.innerHTML = worldContent;
            break;
        case "regions":
            content.innerHTML = regionsContent;
            break;
        case "classes":
            content.innerHTML = classesContent;
            break;
        case "systems":
            content.innerHTML = systemsContent;
            break;
        case "market":
            content.innerHTML = marketContent;
            break;
        case "houses":
            content.innerHTML = housesContent;
            break;
        case "npcs":
            content.innerHTML = npcsContent;
            break;
        default:
            content.innerHTML = "<h2>Seção em construção</h2>";
    }
}
