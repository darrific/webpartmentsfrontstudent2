<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col xl6 s12">
          <h3>Webpartments</h3>
        </div>
        <div class="row" v-for="apt in apartments" :key="apt._id">
          <div class="col s12 m7">
            <div class="row">
                <div class="col s12 m7">
                <div class="card">
                  <div class="card-image">
                    <img src="img1.jpeg">
                    <span class="card-title">{{apt.name}}</span>
                  </div>
                  <div class="card-content">
                    <i class="material-icons">attach_money</i>
                    <i class="material-icons">attach_money</i>
                    <br>
                    <i class="material-icons">wifi</i>
                    <i class="material-icons">ac_unit</i>
                    <i class="material-icons">local_taxi</i>
                    <p>Single, shared rooms</p>
                    <p>5 mins from campus</p>
                  </div>
                  <div class="card-action">
                    <i class="material-icons yellow-text text-darken-2">star</i>
                    <i class="material-icons yellow-text text-darken-2">star</i>
                    <i class="material-icons yellow-text text-darken-2">star</i>
                    <i class="material-icons black-text">star</i>
                    <i class="material-icons black-text">star</i>
                  </div>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'home',
  data(){
      return {
        apartments: []
      }
  },
  mounted(){
      axios.get("http://swe2.varion.co:3010/student/buildings")
        .then(data=>{
            this.apartments = data.data.data
        })
  }
}
</script>
<style>
  li {
    padding:20px;
    border-radius: 7px;
  }
</style>