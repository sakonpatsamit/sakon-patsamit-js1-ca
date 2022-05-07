const url = "https://digimon-api.vercel.app/api";

const digimonsFace = document.querySelector(".digimons");

async function getDigimons() {
  try {
    const response = await fetch(url + "/digimon");
    const json = await response.json();

    return json.slice(0, 20);
  } catch (error) {
    console.error(error);
    return null;
  }
}

function digimonList(digimons) {
  if (!digimons) {
    const error = document.createElement("h1");
    error.innerText = `Oops! Something went wrong`;
    digimonsFace.append(error);
    return;
  }

  for (let i = 0; i < digimons.length; i++) {
    const digimon = digimons[i];

    const container = document.createElement("a");
    container.href = `details.html?name=${digimon.name}`;
    container.className = "digimon";

    const name = document.createElement("h3");
    name.innerText = digimon.name;

    const image = document.createElement("img");
    image.src = digimon.img;

    const level = document.createElement("h4");
    level.innerText = digimon.level;

    container.append(name, image, level);
    digimonsFace.append(container);
  }
}

getDigimons().then((digimons) => {
  digimonList(digimons);
});
