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

        case "organizations":
            content.innerHTML = organizationsContent;
            break;

        case "events":
            content.innerHTML = eventsContent;
            break;

        case "npcs":
            content.innerHTML = npcsContent;
            break;

        case "houses":
            loadHouses();
            break;

        default:
            content.innerHTML = "<h2>Seção em construção</h2>";
    }
}

function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('open');
}


/* ============================
   CASAS DE WESTEROS
============================ */

function loadHouses() {
    const content = document.getElementById("content");
    const template = document.getElementById("houses-template");

    content.innerHTML = "";
    content.appendChild(template.content.cloneNode(true));
}

function showHouses(type, event) {
    document.querySelectorAll('.houses-section')
        .forEach(sec => sec.classList.add('hidden'));

    document.querySelectorAll('.houses-menu button')
        .forEach(btn => btn.classList.remove('active'));

    document.getElementById(type).classList.remove('hidden');

    if (event) event.target.classList.add('active');
}

/* abrir página individual */
function openHouse(house) {
    window.location.href = `houses/${house}.html`;
}
