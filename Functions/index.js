const functions = require("firebase-functions");
const axios = require("axios")


//Read Radar Trips
exports.readRadarTrips = functions.https.onCall(async () => {

    const options = {
        method: 'GET',
        url: 'https://api.radar.io/v1/trips',
        headers: {
          Authorization: 'TEST_PUBLISH_KEY'
        }
      }

      try {
          const trips = await axios.request(options)
          return { response: trips.data}
      } catch (error) {
          return error
      }
  
  })
