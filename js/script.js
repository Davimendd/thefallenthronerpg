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

    if (!template) {
        content.innerHTML = "<p>Erro ao carregar Casas de Westeros.</p>";
        return;
    }

    content.innerHTML = "";
    content.appendChild(template.content.cloneNode(true));
}

function showHouses(type) {
    document.querySelectorAll(".houses-section")
        .forEach(section => section.classList.add("hidden"));

    const target = document.getElementById(type);
    if (target) target.classList.remove("hidden");
}

function openHouse(house) {
    const content = document.getElementById("content");

    if (housePages[house]) {
        content.innerHTML = housePages[house];
        window.scrollTo(0, 0);
    } else {
        content.innerHTML = "<p>Casa não encontrada.</p>";
    }
}
