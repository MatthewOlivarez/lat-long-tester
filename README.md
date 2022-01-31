# lat-long-tester
Simple form that will accept a latitude and longitude and use that to return a separate page containing news stories. Part of SWE project that will be used to show user the earth and eventually work to allow the user to select a country, which would take the user to a page that would display news, facts, weather, etc. about that country. Using HTML and CSS for the form, ejs for template formatting, and Node.js/Express for server-side development. Using Geoapify API for reverse geocoding latitude/longitude into a country code. Using NewsAPI for retrieving various news stories from country determined by Geoapify API results.

Geoapify: https://www.geoapify.com/reverse-geocoding-api
News API: https://newsapi.org/docs/endpoints/top-headlines
