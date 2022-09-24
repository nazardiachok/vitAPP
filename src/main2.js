const select = document.querySelector(".filters");
const buttonLoadData = document.querySelector(".load_data");
const mainDataFromApi = document.querySelector(".data_loadet_from_api");
const input = document.querySelector(".inputText");

/* const apiURL1 = "https://rickandmortyapi.com/api/character/?page=1";
const apiURL2 = "https://rickandmortyapi.com/api/character/?page=2";
const apiURL = apiURL1 + apiURL2; */

/* https://rickandmortyapi.com/api/character/? page=2& name= */

function addDataToThePage() {
  buttonLoadData.addEventListener("click", () => {
    mainDataFromApi.textContent = "";
    const apiURL =
      "https://rickandmortyapi.com/api/character/?name=" +
      input.value +
      "&status=" +
      select.value; //vor jedem click ändern sich die input/select values je nach filterung und die seite wird mit diesen Values neu geladen.
    fetchedData(apiURL);
    input.value = "";

    console.log(apiURL);
  });
}
async function fetchedData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    createList(data.results);
  } catch (error) {
    console.error(error.message);
  }
}

addDataToThePage(); //es ist egal wo man diese func aufruft, denn die ruft alle anderen auf (func. addDataToThePage() => func. fetchedData(url) => ffunc. createList(loadData))

function createList(loadData) {
  loadData.forEach((element) => {
    const list = document.createElement("li");

    const figure = document.createElement("figure");

    const imageName = document.createElement("figcaption");
    imageName.classList.add("imageName");
    imageName.textContent = element.name;
    figure.append(imageName);

    const image = document.createElement("img");
    image.setAttribute("src", element.image);
    image.classList.add("image");
    figure.append(image);

    list.append(figure);
    mainDataFromApi.append(list);

    figure.classList.add("ulTransition");
  });
  console.log(loadData);
}

// https://rickandmortyapi.com/documentation/
