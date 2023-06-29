'use strict';

const img = document.querySelector('img');

function getImage() {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=e3c77Afvx3ycZsE6EQqAs0nlZL0MoybC&s=cats', {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response);
    console.log(response.data.images.original.url);
    img.src = response.data.images.original.url;
    
});
}

const searchButton

const searchWord = 

window.onload = getImage();

const button = document.getElementById('newImg');
button.addEventListener('click', getImage);