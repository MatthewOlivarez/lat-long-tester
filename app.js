const express = require('express')
const axios = require('axios')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname + '/views')))
//app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))



let newsStories = []
let newsCollected = true
let countryCode;

app.get('/', (req, res) => {
    if (newsStories.length > 0)
    {
        newsCollected = true
        res.render('index', { newsCollected })
    }
    else
    {
        newsCollected = false
        res.render('index', { newsCollected })
    }
})

app.post('/search', async (req, res) => {
    const { latitude, longitude } = req.body
    //console.log(latitude + " " + longitude)
    // console.log(req.body)
    await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=6650f1fc646f45b9ac9f90d91eec2078`)
        .then( (response) => {
            //console.log(response.data.features[0].properties.country_code)
            countryCode = response.data.features[0].properties.country_code;
        })
        .catch( (error) => {
            // handle error
            console.log(error);
        })
    await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=fb4e52ef50da4fe1ba96b5b92562f13b`)
        .then( (response) => {
            newsStories = []
            for (let i = 0; i < 10; i++)
            {
                //console.log(response.data.articles[i])
                newsStories.push(response.data.articles[i])
                //console.log(newsStories[i])
            }
        })
        .catch( (error) => {
            // handle error
            console.log(error);
        })
    //res.send('worked')
    res.redirect('/results')
})

app.get('/results', (req, res) => {
    //res.render('results')
    res.render('results', { newsStories })
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