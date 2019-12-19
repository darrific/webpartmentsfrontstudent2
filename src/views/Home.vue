<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <br>
        <div class="input-field col s12 l6 offset-l3">
          <i class="material-icons prefix">search</i>
          <input type="text" id="autocomplete-input" class="autocomplete" v-model="searchQuery">
          <label for="autocomplete-input">Search</label>
        </div>
        <div v-show="searchQuery">
          <div class="col l6 offset-l4 s12">
            <h5>Search Results</h5>
            <br>
          </div>
          <div class="row">
            <div class="col s12 l4" v-for="apt in filteredItems" :key="apt._id">
              <router-link :to="apt.linkOut">
                <div class="card buildingItemCard">
                  <div class="card-image">
                    <img :src=apt.coverImg>
                    <span class="card-title left-align">
                      {{apt.name}}
                      <span v-if="!apt.status" class="new badge red" data-badge-caption="NO ROOMS AVAILABLE"></span>
                      <br>
                      <span class="noRating" v-if="apt.stars==0">No Rating</span>
                      <span v-for="star in apt.stars" :key="star">
                        <i class="material-icons yellow-text text-darken-2 ">star</i>                        
                      </span>
                    </span>
                  </div>
                  <div class="card-content left-align">
                    <p class="left-align itemAddress"><i class="material-icons left">location_on</i>{{apt.address}}</p>
                    <br>
                    <div v-if="apt.walkingDistanceToCampus == 1">
                      <p class="left-align"><i class="material-icons left">directions_walk</i>{{apt.walkingDistanceToCampus}} minute to campus</p>
                    </div>
                    <div v-else>
                      <p class="left-align"><i class="material-icons left">directions_walk</i>{{apt.walkingDistanceToCampus}} minutes to campus</p>
                    </div>
                    <br>
                    <p>
                      <i class="material-icons left">attach_money</i>
                      <span v-if="apt.generalCost==1">Low</span>
                      <span v-if="apt.generalCost==2">Medium</span>
                      <span v-if="apt.generalCost==3">High</span>
                    </p>
                  </div>
                  <div class="card-action">
                    <i v-if="apt.wifiProvided" class="material-icons green-text">wifi</i>
                    <i v-else class="material-icons red-text">wifi</i>
                    <i v-if="apt.laundryFacilities" class="material-icons green-text">kitchen</i>
                    <i v-else class="material-icons red-text">kitchen</i>
                    <i v-if="apt.hasParking" class="material-icons green-text">local_taxi</i>
                    <i v-else class="material-icons red-text">local_taxi</i>                    
                  </div>
                </div>
            </router-link>
            </div>
          </div>
        </div>
        <div v-show="!searchQuery">
          <div class="col l6 offset-l4 s12">
            <h5>Apartment Listings</h5>
            <br>
          </div>
          <div class="row">
            <div class="col s12 l4" v-for="apt in apartments" :key="apt._id">
              <router-link :to="apt.linkOut">
                <div class="card buildingItemCard">
                  <div class="card-image">
                    <img :src=apt.coverImg>
                    <span class="card-title left-align">
                      {{apt.name}}
                      <span v-if="!apt.status" class="new badge red" data-badge-caption="NO ROOMS AVAILABLE"></span>
                      <br>
                      <span class="noRating" v-if="apt.stars==0">No Rating</span>
                      <span v-for="star in apt.stars" :key="star">
                        <i class="material-icons yellow-text text-darken-2 ">star</i>                        
                      </span>
                    </span>
                  </div>
                  <div class="card-content left-align">
                    <p class="left-align itemAddress"><i class="material-icons left">location_on</i>{{apt.address}}</p>
                    <br>
                    <div v-if="apt.walkingDistanceToCampus == 1">
                      <p class="left-align"><i class="material-icons left">directions_walk</i>{{apt.walkingDistanceToCampus}} minute to campus</p>
                    </div>
                    <div v-else>
                      <p class="left-align"><i class="material-icons left">directions_walk</i>{{apt.walkingDistanceToCampus}} minutes to campus</p>
                    </div>
                    <br>
                    <p>
                      <i class="material-icons left">attach_money</i>
                      <span v-if="apt.generalCost==1">Low</span>
                      <span v-if="apt.generalCost==2">Medium</span>
                      <span v-if="apt.generalCost==3">High</span>
                    </p>
                  </div>
                  <div class="card-action">
                    <i v-if="apt.wifiProvided" class="material-icons green-text">wifi</i>
                    <i v-else class="material-icons red-text">wifi</i>
                    <i v-if="apt.laundryFacilities" class="material-icons green-text">kitchen</i>
                    <i v-else class="material-icons red-text">kitchen</i>
                    <i v-if="apt.hasParking" class="material-icons green-text">local_taxi</i>
                    <i v-else class="material-icons red-text">local_taxi</i>                    
                  </div>
                </div>
            </router-link>
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
        searchQuery: "",
        apartments: []
      }
  },
  mounted(){
      // this.getUserData()   
      axios.get("http://localhost:3010/student/buildings")
        .then(data=>{
            this.apartments = data.data.data
            this.apartments.forEach(element => {
              element.coverImg = 'https://webpartments.nyc3.digitaloceanspaces.com/buildingCover-'+element._id;
              element.linkOut = "/Building/"+element._id;
              if(element.comments.length > 0){
                let x = [];
                let y = 0;
                let z = 0;
                element.comments.forEach(c=>{x.push(c.rating); z++})
                x.forEach(val=>{y = y+val})
                element.stars = Math.round(y/z);
              }else{
                element.stars = 0;
              }
            });
        })
  },
  computed: {
    filteredItems() {
      return this.apartments.filter(item => {
         return item.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
      })
    }
  },
  methods: {
    getUserData: function() {
        let self = this    
        axios.get("http://localhost:3010/auth/student/userInfo")    
            .then((response) => {    
                console.log(response)    
                self.$set(this, "user", response.data.user)    
            })    
            .catch((errors) => {    
                this.$router.push({name: "login"})    
            })    
    },
    searcher(){
      console.log("commence search");

    }
  }
}
</script>
<style>
  li {
    padding:20px;
    border-radius: 7px;
  }

  .itemAddress {
    margin-bottom: -5px;
  }

  .sendButton {
    margin-top: 15px;
  }

  .noRating {
    font-size: 10px;
  }

  @media only screen and (min-width: 992px) {
    .buildingItemCard {
      height: 550px;
    }

  }

  @media only screen and (max-width: 600px) {
    .buildingItemCard {
      height: 450px;
    }
  }
</style>