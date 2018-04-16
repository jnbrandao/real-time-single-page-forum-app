<template>
    <v-container>
        <v-form @submit.prevent="signup">
            <v-text-field
            label="Name"
            v-model="form.name"
            type="text"
            required
            ></v-text-field>
            <span class="red--text" v-if="errors.name" v-text="errors.name[0]"></span>
            <v-text-field
            label="E-mail"
            v-model="form.email"
            type="email"
            required
            ></v-text-field>
            <span class="red--text" v-if="errors.email" v-text="errors.email[0]"></span>

            <v-text-field
            label="Password"
            v-model="form.password"
            type="password"
            required
            ></v-text-field>
            <span class="red--text" v-if="errors.password" v-text="errors.password[0]"></span>

            <v-text-field
            label="Password Confirmation"
            v-model="form.password_confirmation"
            type="password"
            required
            ></v-text-field>

            <v-btn
            color="green"
            type="submit"
            >
                Sign Up
            </v-btn>

            <router-link to="/login">
                <v-btn color="blue">Login</v-btn>
            </router-link>   
        </v-form>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: {

            }
        }
    },
    created () {
      if(User.loggedIn()){
          this.$router.push({name: 'forum'})
      }  
    },
    methods: {
        signup(){
            axios.post('api/auth/signup', this.form)
            .then(res => {
                User.responseAfterLogin(res)
                this.$router.push({name:'forum'})
                })
            .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>
<style>
    
</style>