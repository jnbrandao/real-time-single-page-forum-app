<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <question
        v-for="question in questions"
        :key="question.path"
        :data="question"
        ></question>
      </v-flex>
      <v-flex xs4>
        <app-side-bar></app-side-bar>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import question from './question.vue';
import AppSideBar from './AppSideBar.vue'; 
export default {
  data () {
    return {
      questions: {}  
    }
  },
  components: {
    question,
    AppSideBar
  },
  created () {
    axios.get('/api/question')
      .then(res => this.questions = res.data.data)
      .catch(error => console.log(error.response.data.message))
  }
}
</script>
<style>
    
</style>