const buttonLoadData = document.querySelector(".load_data");
const mainDataFromApi = document.querySelector(".data_loadet_from_api");

export function dataDownload() {
  buttonLoadData.addEventListener("click", () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        createList(data.results);
        console.log(data);
      });
  });
}
function createList(loadData) {
  loadData.forEach((element) => {
    const list = document.createElement("li");

    const figure = document.createElement("figure");

    const imageName = document.createElement("figcaption");
    imageName.textContent = element.name;
    figure.append(imageName);

    const image = document.createElement("img");
    image.setAttribute("src", element.image);
    figure.append(image);

    list.append(figure);
    mainDataFromApi.append(list);

    /* console.log(element.image) */
  });
  /* console.log(loadData) */
}
