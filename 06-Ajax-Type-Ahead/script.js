const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

function filterCity(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function display() {
  const matchArray = filterCity(this.value, cities);

  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `<li>
            <span className="name">${cityName} ${stateName}</span>
            <span className="population">${numberWithCommas(
              place.population
            )}</span>
            </li>`;
    })
    .join(" ");

  suggestion.innerHTML = html;
  console.log(data);
}

const searchInput = document.querySelector(".search");
const suggestion = document.querySelector(".suggestions");
searchInput.addEventListener("change", display);
searchInput.addEventListener("keyup", display);
