'use strict';

const img = document.querySelector('img');
const userInput = document.querySelector('#userInput');
const searchButton = document.querySelector('#searchButton');
const randomButton = document.querySelector('#randomImg');
let searchWord = 'random';

function getImage() {
   
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=e3c77Afvx3ycZsE6EQqAs0nlZL0MoybC&s=${searchWord}`, {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response);
    console.log(response.data.images.original.url);
    img.src = response.data.images.original.url;
    
}).catch (function(error) {
    console.log(error);
    alert('No image found, try again!');
})
}

window.onload = getImage();

randomButton.addEventListener('click', getImage);

searchButton.addEventListener('click', () => {
    searchWord = userInput.value;
    userInput.value = '';
    getImage();
})