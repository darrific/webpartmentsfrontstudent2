<template>
  <div class="room-type">
    <img :src=room.coverImgURL id="roomTypeMainImage" alt="">
    <div class="container grey lighten-4">
      <div class="row">
        <div class="col l8 offset-l2 s12 left-align">
          <!-- <h6 class="left-align green-text buildingName">Building Name</h6> -->
          <h5 class="green-text buildingPrice">${{room.price}} monthly</h5>
          <h4 class="left-align">{{room.name}}</h4>  
          <div class="row">
            <div class="col s8">
              <i v-for="room in room.stars" :key="room" class="material-icons orange-text">star</i>
            </div>
          </div>
          <p>{{room.description}}</p>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col s12 l8 offset-l2 amenitiesParent white z-depth-1">
          <h4 class="left-align">Amenities</h4>
          <br>
          <div v-if="room.hasAC" class="col l2 s4">
            <i class="medium material-icons green-text">ac_unit</i>
            <h6 class="amenitiesHeading"><b>A/C</b></h6>
          </div>
          <div v-if="room.hasBed" class="col l2 s4">
            <i class="medium material-icons green-text">airline_seat_flat</i>
            <h6 class="amenitiesHeading"><b>Bed</b></h6>
          </div>
          <div v-if="room.hasTV" class="col l2 s4">
            <i class="medium material-icons green-text">tv</i>
            <h6 class="amenitiesHeading"><b>TV</b></h6>
          </div>
          <div v-if="room.hasMicrowave" class="col l2 s4">
            <i class="medium material-icons green-text">gradient</i>
            <h6 class="amenitiesHeading"><b>Microwave</b></h6>
          </div>
          <div v-if="room.hasRefridgerator" class="col l2 s4">
            <i class="medium material-icons green-text">kitchen</i>
            <h6 class="amenitiesHeading"><b>Refridgerator</b></h6>
          </div>
          <div v-if="room.hasCouch" class="col l2 s4">
            <i class="medium material-icons green-text">airline_seat_recline_extra</i>
            <h6 class="amenitiesHeading"><b>Couch</b></h6>
          </div>
          <div v-if="room.hasDesk" class="col l2 s4">
            <i class="medium material-icons green-text">layers</i>
            <h6 class="amenitiesHeading"><b>Desk</b></h6>
          </div>
          <div v-if="room.hasChair" class="col l2 s4">
            <i class="medium material-icons green-text">airline_seat_recline_normal</i>
            <h6 class="amenitiesHeading"><b>Chair</b></h6>
          </div>
          <div v-if="room.hasWardrobe" class="col l2 s4">
            <i class="medium material-icons green-text">chrome_reader_mode</i>
            <h6 class="amenitiesHeading"><b>Wardrobe</b></h6>
          </div>
          <div v-if="room.hasHotWater" class="col l2 s4">
            <i class="medium material-icons green-text">whatshot</i>
            <h6 class="amenitiesHeading"><b>Hot water</b></h6>
          </div>
          <div v-if="room.privateKitchen" class="col l2 s4">
            <i class="medium material-icons green-text">local_dining</i>
            <h6 class="amenitiesHeading"><b>Private Kitchen</b></h6>
          </div>
          <div v-if="room.privateBathroom" class="col l2 s4">
            <i class="medium material-icons green-text">bathtub</i>
            <h6 class="amenitiesHeading"><b>Private bathroom</b></h6>
          </div>
          <div v-if="room.hasSmokeDetector" class="col l2 s4">
            <i class="medium material-icons green-text">hot_tub</i>
            <h6 class="amenitiesHeading"><b>Smoke Detector</b></h6>
          </div>
          <div class="col xl12 s12 left-align">
            <br>
            <h5 class="left-align">Additional Features</h5>
            <div v-if="room.otherFurnishings">
              <p>{{room.otherFurnishings}}</p>
            </div>
            <div v-else>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
export default {
  name: 'roomType',
  data(){
    return{
      room: {}
    }
  },
  mounted(){
    window.scrollTo(0,top);
    $('.materialboxed').materialbox();
    axios.get("http://localhost:3010/student/buildings/roomTypes/"+this.$route.params.id)
      .then(data=>{
        this.room = data.data.data
        this.room.coverImgURL = "https://webpartments.nyc3.digitaloceanspaces.com/roomTypeCover-"+this.room._id;
      })
  }
}
</script>
<style>
  li {
    padding:20px;
    border-radius: 7px;
  }

  #buildingImage{
    width:100vw;
  }
  
  .quickbox{
    height: 130px;
  }

  #number{
    width:100%;
  }

  #email{
    width:100%;
  }

  #gallery{
    width:100%;
  }

  .gallery-image{
    width:100%;
    margin-bottom: 20px;
    height:90px;
  }

  .room-image{
    width:50px;
  }

  .room-text{
    font-size:14px;
  }
  
  .kitchen{
    width:80px;
    height:115px;
  }

  .bath{
    height:115px;
    width:80px;
  }

  .bed{
    height:115px;
    width:80px;
  }

  .living{
    height:115px;
    width:80px;
  }

  .amenities{
    line-height: 100%;
  }

  .buildingName {
    margin-top: 20px;
    margin-bottom: -10px;
  }

  .buildingPrice {
    margin-top: 20px;
    margin-bottom: -10px;
  }

    .amenities{
    line-height: 100%;
  }
  .amenitiesHeading {
    margin-top: -3px;
  }
  
  #minText {
    margin-bottom: -12px
  }
  
  .amenitiesParent {
    border-radius: 7px;
    padding: 20px!important;
  }

  @media only screen and (min-width: 992px) {
    #roomTypeMainImage{
      overflow-y: hidden;
      width: 70vw;
      height: 60vh;
      z-index: -50;
    } 
    .container {
      border-radius: 30px, 30px, 0,0;
    }
  }

  @media only screen and (max-width: 600px) {
    #roomTypeMainImage {
      width: 100vw;
      overflow-y: hidden;
    }

    body {
      background-color: #f5f5f5;
    }
  }
</style>