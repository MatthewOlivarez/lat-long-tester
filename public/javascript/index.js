// let requestOptions = 
// {
//     method: 'POST',
// }
let lat = document.getElementById("latitude")
let long = document.getElementById("longitude")
let formSubmit = document.getElementById("formSubmit")
let obj;


  
  
formSubmit.addEventListener('submit', () => {
    fetch("/search")
        .then(response => response.json())
        .then(result => obj = result)
        .catch(error => console.log('error', error));
})



// fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=63.668281&lon=-43.871982&apiKey=6650f1fc646f45b9ac9f90d91eec2078`, requestOptions)
//     .then(response => response.json())
//     .then(result => obj = result)
//     .catch(error => console.log('error', error));

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=6650f1fc646f45b9ac9f90d91eec2078',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });