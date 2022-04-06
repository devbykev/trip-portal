<template>
    <transition name="nav" mode="out-in">
      <div  id="nav" v-if="$store.state.user" >
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <button @click="$store.dispatch('logout')">Logout</button>
      </div>
    </transition>
    <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>


<script>
import {onBeforeMount } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>


<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #007AFF;

  a {
  font-weight: bold;
  font-size: 24px;
  color: #cccccc;
  margin-right: 10px;
}

a.router-link-exact-active {
  color: white;
}

button{
  font-size: 24px;
  border-style: none;
  padding: 5px;
  border-radius: 5px;
  color: #007AFF;
  cursor: pointer;
}
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.route-enter-active {
  transition: all 0.3s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.route-leave-active {
  transition: all 0.3s ease-in; 
}

/* route transitions */
.nav-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.nav-enter-active {
  transition: all 1s ease-out; 
}
.nav-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.nav-leave-active {
  transition: all 0.3s ease-in; 
}

</style>


