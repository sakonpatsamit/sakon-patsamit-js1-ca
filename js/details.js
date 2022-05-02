const url = "https://digimon-api.vercel.app/api";

const digimonsFace = document.querySelector(".digimonz");

const params = new URLSearchParams(document.location.search);
const digimonName = params.get("name");

async function getDigimons() {
  try {
    const response = await fetch(url + `/digimon/name/${digimonName}`);
    const json = await response.json();

    return json[0];
  } catch (error) {
    console.error(error);
    return null;
  }
}

function digimonList(digimon) {
  if (!digimon) {
    const error = document.createElement("h1");
    error.innerText = `Oops! Something went wrong`;
    digimonsFace.append(error);
    return;
  }

  const container = document.createElement("div");
  container.className = "digimon";

  const name = document.createElement("h3");
  name.innerText = digimon.name;

  const image = document.createElement("img");
  image.src = digimon.img;

  const level = document.createElement("h4");
  level.innerText = digimon.level;

  container.append(name, image, level);
  digimonsFace.append(container);

  console.log(digimon);
}

getDigimons().then((digimons) => {
  digimonList(digimons);
});
