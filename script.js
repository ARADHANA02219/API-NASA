const form= document.getElementById("search-form");
const section= document.getElementById("current-image-container");
const input= document.getElementById("search-input");
const SearchBtn= document.getElementById("search-btn");
const history= document.getElementById("search-history");
const currentDate = new Date().toISOString().split("T")[0];

let API_KEY = "4D1uZIdJj2qHJ3EfhjPDeemoIstHqr6JAgHmG0r6";


SearchBtn.addEventListener('click', () => {
  const selectedDate = searchInput.value;

  // Fetch the NASA API for the selected date
  fetch(`https://api.nasa.gov/planetary/apod?api_key=HwgUgKxLbdFzt7UNfjhFeqxu75OOoKQjLtG0iL&date=${selectedDate}`)
    .then(response => response.json())
    .then(data => {
      // Create an image element
      const image = document.createElement('img');
      image.src = data.url;
      image.alt = data.title;
  
      function getCurrentImageOfTheDay(){

      // Create a paragraph element for the explanation
      const explanation = document.createElement('p');
      explanation.textContent = data.explanation;

      // Clear the previous content
      const container = document.getElementById('current-image-container');
      container.innerHTML = '';

      // Add the image and explanation to the container
      container.appendChild(image);
      container.appendChild(explanation);
})
    })
  
    .catch(error => console.error(error));
  });


functionaddSearchToHistory(){
var date = new Date();
window.localStorage.setItem("date", date);
var date1 = window.localStorage.getItem("date");
console.log(date1)
}

function saveSearch(){
var date1 = date1
var date2 = date2
localStorage.setItem('date1', date1.toString())
localStorage.setItem('date2', date2.toString())

var date1 = new Date(localStorage.getItem('date1'))
var date2 = new Date(localStorage.getItem('date2'))
var diff = date1 - date2
}
  
