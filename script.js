'use strict';

const img = document.querySelector('img');
const userInput = document.querySelector('#userInput');
const searchButton = document.querySelector('#searchButton');
const randomButton = document.querySelector('#randomImg');
let searchWord = 'random';

// version 1: Promises

// function getImage() {
   
//     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=e3c77Afvx3ycZsE6EQqAs0nlZL0MoybC&s=${searchWord}`, {mode: 'cors'})
// .then(function(response) {
//     return response.json();
// })
// .then(function(response) {
//     console.log(response);
//     console.log(response.data.images.original.url);
//     img.src = response.data.images.original.url;
    
// }).catch (function(error) {
//     console.log(error);
//     alert('No image found, try again!');
// })
// }

randomButton.addEventListener('click', getImages);

searchButton.addEventListener('click', () => {
    searchWord = userInput.value;
    userInput.value = '';
    getImages();
})

window.onload = getImages();


// Version 2: async and await
// rewrite using async version. 
// Async doesn't work in global scope, use function block

async function getImages() {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=e3c77Afvx3ycZsE6EQqAs0nlZL0MoybC&s=${searchWord}`, {mode: 'cors'});
    const imageData = await response.json();
    img.src = imageData.data.images.original.url;
};