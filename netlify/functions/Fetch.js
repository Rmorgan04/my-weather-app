// const axios = require('axios');

// exports.handler = async (event, context) => {
//     console.log(event, context)
//     const {lat, lon} = event.queryStringParameters;

//     const accessKey = process.env.REACT_APP_API_KEY;
//     const url1 = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=imperial&APPID=${accessKey}`
//     const url2 = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&units=imperial&APPID=${accessKey}`

//     try {
//         const {data} = await axios.get(url1);

//         return {
//             statusCode: 200, 
//             body: JSON.stringify({data}),
//         };
//     } catch(error) {
//         return {
//             statusCode: 404,
//             body: error.toString(),
//         }
//     }
// };

