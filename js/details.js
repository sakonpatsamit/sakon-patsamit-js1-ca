const url = "https://digimon-api.vercel.app/api";

const digimonsFace = document.querySelector(".digimonz");
const title = document.querySelector("title");

const params = new URLSearchParams(document.location.search);
const digimonName = params.get("name");

async function getDigimons() {
  if (!digimonName) return null;

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
    error.innerText = digimonName
      ? `Oops! Something went wrong`
      : "Please select a digimon from the home page";

    digimonsFace.append(error);
    return;
  }

  title.innerText = digimon.name;

  const wrapper = document.createElement("div");
  wrapper.className = "digimon";

  const name = document.createElement("h3");
  name.innerText = digimon.name;

  const image = document.createElement("img");
  image.src = digimon.img;

  const level = document.createElement("h4");
  level.innerText = digimon.level;

  wrapper.append(name, image, level);
  digimonsFace.append(wrapper);
}

getDigimons().then((digimons) => digimonList(digimons));
