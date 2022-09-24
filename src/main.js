const selectedFilter = document.querySelector(".filters");
const buttonLoadData = document.querySelector(".load_data");
const mainDataFromApi = document.querySelector(".data_loadet_from_api");
/* const textInput = document.querySelector(".inputText"); */

buttonLoadData.addEventListener("click", () => {
  mainDataFromApi.textContent = "";
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const filteredCardList = data.results;
      const newArray = filteredCardList.filter((person) => {
        if (selectedFilter.value) {
          return person.status === selectedFilter.value;
        } else {
          return true; //wenn kein select gewählt wurde(value =""), dann filter wird nicht angewendet und diese else{true} returned alles;
        }
      });
      createList(newArray);
    });
});

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
  console.log(loadData);
}
