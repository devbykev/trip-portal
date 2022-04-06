<template>
    <div class="container">

        <h1 class="title">Trip Portal</h1>
        <div class="login">
            <form class="login-form" @submit.prevent="login">   
                <input 
                    type="email" 
                    placeholder="Email Address"
                    v-model="login_form.email"
                >
                <input 
                    type="password" 
                    placeholder="Password" 
                    v-model="login_form.password"
                >

                <input type="submit" value="Login">
            </form>
    </div>
    <div class="user-info">
        <h2>email: user@test.com</h2>
        <br>
        <h2>pw: Test1234!
        </h2>
    </div>

    </div>
  
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
export default {

    setup() {
        const login_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value)
        }
        return {
            login_form,
            login, 
        }

    }
}
</script>

<style lang="scss" scoped>

.container{
    padding: 10px;

    h1{
    margin-top:50px;
    font-size: 42px;
}
.login{
    background-color: #007AFF;
    max-width: 500px;
    margin: 40px auto;
    border-radius: 15px;
    padding:15px;

    
.login-form{

    h2{
        padding: 10px;
    }

    input {
    color: white;
	appearance: none;
	border: none;
	outline: none;
	background: none;
	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 20px;
	padding: 20px;
    }

    input::placeholder {
        color: inherit;
    }

    input[type="submit"] {
	background-color: #63a8f1;
    border-radius: 15px;
    cursor: pointer;
}
}
}
}

</style>