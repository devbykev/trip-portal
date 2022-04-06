<template>
  <div class="home">
    <h1>Trips</h1>
    <br>
    <div class="trips">
      <transition name="switch" mode="out-in">

      <div v-if="tripsList.length">
        <transition-group tag="ul" name="list" appear>
        <li v-for="trip in tripsList" :key="trip.id">
          <span class="label">External ID: </span> {{  trip.externalId }}  -
          <span class="label">Destination: </span>{{trip.destinationGeofenceExternalId}}  -
          <span class="label">Status: </span>{{trip.status}}  -
          <span class="label">Mode: </span>{{trip.mode}}
        </li>
        </transition-group>
      </div>
      <div v-else></div>
      </transition>
    </div>
  </div>
</template>

<script>
import { readRadarTrips } from '@/firebase'
import { ref } from '@vue/reactivity'

export default {
  name: 'HomeView',
  setup() {

  let tripsList = ref([])

  const readTrips = async () => {
    try {
        // call readRadarTrips cloud function
        const trips = await readRadarTrips()
        tripsList.value = trips.data.response.trips
        console.log(trips)

    } catch (error) {
      alert("Something went wrong")
      console.log(error)
    }
  }



  readTrips()



  return {
      readTrips,
      tripsList
    }
  }

}
</script>

<style lang="scss" scoped>

  .home{
    padding: 10px;

  }


  .trips {
    max-width: 600px;
    margin: 20px auto;
    position: relative;
  }
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .trips ul {
    position: relative;
    padding: 0;
  }
  .trips li {
    list-style-type: none;
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    background: white;
    box-shadow: 0px 0px 9px rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;

    .label{
      font-weight: bold;
    }

  }



  /* list transitions */
  .list-enter-from {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-enter-active {
    transition: all 0.4s ease;
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-leave-active {
    transition: all 0.4s ease;
    position: absolute; 
  }
  .list-move {
    transition: all 0.3s ease;
  }
  /* switch transitions */
  .switch-enter-from,
  .switch-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  .switch-enter-active{
    transition: all 0.5s ease;
  }
  .switch-leave-active {
    transition: all 0.5s ease;
    position: absolute;
    width: 100%;
  }
</style>
