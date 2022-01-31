const express = require('express')
const axios = require('axios')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname + '/views')))
//app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/search', (req, res) => {
    const { latitude, longitude } = req.body
    console.log(latitude + " " + longitude)
    // console.log(req.body)
    axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=6650f1fc646f45b9ac9f90d91eec2078`)
        .then( (response) => {
            console.log(response.data.features[0].properties.country_code)
        })
        .catch( (error) => {
            // handle error
            console.log(error);
        })
    res.send('worked')
})


app.listen(3000, () =>
    console.log(`App listening at http://localhost:${port}`)
);

// formSubmit.addEventListener("submit", () => {
//     fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=6650f1fc646f45b9ac9f90d91eec2078`, requestOptions)
//         .then(response => response.json())
//         .then(result => obj = result)
//         .catch(error => console.log('error', error))
// })