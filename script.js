'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
    const html =  `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
            </article>
            `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}

// const renderError = function(msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     // countriesContainer.style.opacity = 1;
// };


// // const getCountryAndNeighbour = function(country) {

// //     // AJAX call country 1
// //     const request = new XMLHttpRequest();
// //     request.open('GET', `https://restcountries.com/v2/name/${country}`);
// //     request.send();

// //     request.addEventListener('load', function() {
// //         const [data] = JSON.parse(this.responseText);
// //         console.log(data);

// //         // Render country 1
// //         renderCountry(data)

// //         // Get neighbour country
// //         const [neighbour] = data.borders;

// //         if(!neighbour) return;

// //         // AJAX call country 2
// //         const request2 = new XMLHttpRequest();
// //         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
// //         request2.send();

// //         request2.addEventListener('load', function() {
// //             const data2 = JSON.parse(this.responseText);
// //             console.log(data2);

// //             renderCountry(data2, 'neighbour');
// //         })        
// //     })
// // }

// // // getCountryAndNeighbour('portugal');
// // getCountryAndNeighbour('germany');
// // // getCountryData('germany');

// // const request = fetch('https://restcountries.com/v2/name/portugal');

// // console.log(request);

// // const getCountryData = function(country) {
// //     fetch(`https://restcountries.com/v2/name/${country}`).then(function(response) {
// //         // console.log(response);
// //         return response.json();
// //     }).then(function(data){
// //         console.log(data)
// //         renderCountry(data[0]);
// //     });
// // };

// const getJSON = function(url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if(!response.ok) throw new Error(`${errorMsg}
//         (${response.status})`);

//         return response.json();
//     });
// };

// // const getCountryData = function(country) {
// //     // country 1
// //     fetch(`https://restcountries.com/v2/name/${country}`)
// //     .then(response => {
// //         console.log(response);

// //         if(!response.ok)
// //         throw new Error(`Country not found (${response.status})`)

// //         return response.json();
// //     })
// //     .then(data => {
// //         renderCountry(data[0]);
// //         // const neighbour = data[0].borders[0]
// //         const neighbour = "fdsfsdfsd"

// //         if(!neighbour) return;

// //         // country 2
// //         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// //     })
// //     .then(response => {
// //         if(!response.ok)
// //         throw new Error(`Country not found (${response.status})`)

// //         return response.json();
// //     })
// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //         console.error(`${err} 💥💥💥`);
// //         renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //         countriesContainer.style.opacity = 1;
// //     })
// // };

// const getCountryData = function(country) {
//     // country 1
//     getJSON(`https://restcountries.com/v2/name/${country}`, 
//     'Country not found')

//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0]

//         if(!neighbour) throw new Error('No neighbour found!');

//         // country 2
//         return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found');
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//         console.error(`${err} 💥💥💥`);
//         renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })
// };

// btn.addEventListener('click', function() {
//     getCountryData('australia');
// })

// getCountryData('fdsfasdfsd');

// const whereAmI = function(lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//        if(!res.ok) throw new Error (`Problem with geocoding ${res.status} 💥💥💥`)
//         return res.json()
//     })
//     .then(data => {
//         console.log(`You are in ${data.city}, ${data.country}`)

//         return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//         if(!res.ok)
//         throw new Error(`Country not found (${res.status})`)

//         return res.json();
//     })
//     .then(data => renderCountry(data[0])
//     .catch(err => console.error(`${err.message} 💥💥💥`)));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);


// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve("resolved promise 2").then(res => {
//     for(let i = 0; i < 1000000; i++) {}
//     console.log(res);
//    });
    

// console.log('Test end');

// const lotteryPromise = new Promise(function(resolve, reject) {
//     console.log('Lottery draw is happening... 🔮')
    
//     setTimeout(function() {
//         if(Math.random() >= 0.5) {
//             resolve('you WIN 🕶');
//         } else {
//             reject(new Error("You lost your money 💩"));
//         }
//     }, 2000)
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying timeout
// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// wait(1)
//     .then(() => {
//     console.log('I waited for 1 secs');
//     return wait(1)
//     })
//     .then(() => {
//     console.log('I waited for 2 secs');
//     return wait(1)
//     })
//     .then(() => {
//     console.log('I waited for 3 secs');
//     return wait(1)
//     })
//     .then(() => {
//     console.log('I waited for 4 secs');
//     return wait(1)
// });

// Promise.resolve('abc').then( x => console.log(x));
// Promise.reject(new Error('Problem')).catch( x => console.error(x));



// const getPosition = function() {
//     return new Promise(function(resolve, reject) {
//     //     navigator.geolocation.getCurrentPosition(
//     // position => resolve(position),
//     // err => reject(err)
//     //     );
//     navigator.geolocation.getCurrentPosition(
//         resolve, reject);
//     });
// };

// // getPosition().then(pos => console.log(pos));

// const whereAmI = function() {
//     getPosition().then(pos => {
//         const {latitude: lat, longitude: lng} = pos.coords;
//         console.log(pos);
//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
//     .then(res => {
//        if(!res.ok) throw new Error (`Problem with geocoding ${res.status} 💥💥💥`)
//         return res.json()
//     })
//     .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`)

//         return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//         if(!res.ok)
//         throw new Error(`Country not found (${res.status})`)

//         return res.json();
//     })
//     .then(data => renderCountry(data[0])
//     .catch(err => console.error(`${err.message} 💥💥💥`)));
// };

// btn.addEventListener('click', whereAmI);


// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function(imgPath) {
    
//     return new Promise(function(resolve, reject) {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', function() {
//             imgContainer.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error', function() {
//             reject(new Error('Image not found'))
//         })
//     });
// }

// let currentImg;

// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded');
//         return wait(2)
//         })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2)
//         })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })

//     .catch(err => console.error(err));

const getPosition = function() {
    return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(
        resolve, reject);
    });
};


const whereamI = async function(country) {
    // Geolocation
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;
    
    // Reverese geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
    // console.log(res);
    const data = await res.json()
    renderCountry(data[0]);
}
whereamI();
console.log('FIRST');