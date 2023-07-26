// Data
let carsList = [
  { id: 1, brand: "Tesla", year: 2015, color: "Red", rating: 5 },
  { id: 2, brand: "Lexus", year: 2016, color: "Black", rating: 5 },
  { id: 3, brand: "Chevrolet", year: 2013, color: "Yellow", rating: 4 },
  { id: 4, brand: "Nissan", year: 2018, color: "White", rating: 2 },
  { id: 5, brand: "Honda", year: 2011, color: "Green", rating: 2 },
  { id: 6, brand: "Alfa Romeo", year: 2011, color: "Yellow", rating: 1 },
  { id: 7, brand: "Audi", year: 2020, color: "Silver", rating: 5 },
  { id: 8, brand: "Bentley", year: 2022, color: "Black", rating: 4 },
  { id: 9, brand: "Toyota Camary", year: 2018, color: "White", rating: 4 },
  { id: 10, brand: "Jeep", year: 2016, color: "White", rating: 3 },
  { id: 11, brand: "BMW", year: 2019, color: "Black", rating: 4 },
  { id: 12, brand: "Nissan", year: 2012, color: "Blue", rating: 1 },
];

const carWrapper = document.querySelector(".autos")
carsList.forEach(element => {
  genderCart(carWrapper, element)
});

function genderCart(parent, obj) {
  const {id,brand,year,color,rating} = obj

  const carCart = document.createElement("div")
  carCart.setAttribute("data-id", id)
  carCart.classList.add("autoCard")
  carCart.innerHTML = `
  <h2>${brand} ${year}</h2>
  <div class="description">
    <p class="detailText"><strong>Brand</strong>${brand}</p>
    <p class="detailText"><strong>Year</strong>${year}</p>
    <p class="detailText"><strong>Color</strong>${color}</p>
    <p class="detailText"><strong>Rating</strong>${rating}</p>
  </div>
  <button type="button" class="btn">Delete</button>
  </div>`

  parent.appendChild(carCart)
}

