<template>
  <div class="building">
    <img :src=apt.coverImg id="buildingImage" alt="">
    <div class="container mainContainer grey lighten-4">
      <div class="row">
        <div class="col l8 offset-l2 s12">
          <h4 class="left-align">{{apt.name}}</h4>
          <span v-if="!apt.status" class="new badge red" data-badge-caption="NO ROOMS AVAILABLE"></span>
          <div class="left noRating" v-if="apt.stars==0">No Rating</div>
          <div class="left" v-for="star in apt.stars" :key="star">
            <i class="material-icons yellow-text text-darken-2 ">star</i>                        
          </div>  
          <br>  
          <p class="left-align"><i class="material-icons left">location_on</i>{{apt.address}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col offset-l2 s6 l2">
          <a href="tel:apt.ownerTel" class="contactBtn btn green " id="number"> <b>CALL</b></a>
        </div>
        <div class="col s6 l2">
          <a class="contactBtn btn green" id="email" href="mailto:apt.ownerEmail"> <b>EMAIL</b></a>
        </div>
      </div>
      <!-- <div class="row">
          <button class="btn green" id="number"><i class="material-icons left">phone</i>CALL NOW</button>
      </div> -->
      <div class="row">
        <div class="col s12 l8 offset-l2 red darken-4 quickbox z-depth-3">
          <div class="col l2 offset-l3 s4 quickboxItem">
            <h4 class="white-text"><span v-for="x in apt.generalCost" :key="x">$</span></h4>
            <p class="red-text text-lighten-5">Price</p>
          </div>
          <div class="col l2 s4 quickboxItem">
            <h4 class="white-text">{{apt.walkingDistanceToCampus}} <span id="minText">min</span></h4>
            <p class="red-text text-lighten-5">from campus</p>
          </div>
          <div class="col l2 s4 quickboxItem">
            <h4 class="white-text">{{apt.stars}}/5</h4>
            <p class="red-text text-lighten-5">Rating</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 l8 offset-l2 amenitiesParent white z-depth-1">
          <h4 class="left-align">Amenities</h4>
          <br>
          <div v-if="apt.wifiProvided" class="col l2 s4">
            <i class="medium material-icons green-text">wifi</i>
            <p class="amenitiesHeading"><b>WiFi Provided</b></p>
          </div>
          <div v-if="apt.hasAC" class="col l2 s4">
            <i class="medium material-icons green-text">ac_unit</i>
            <p class="amenitiesHeading"><b>Air Conditioning</b></p>
          </div>
          <div v-if="apt.hasParking" class="col l2 s4">
            <i class="medium material-icons green-text">local_taxi</i>
            <p class="amenitiesHeading"><b>Tenant Parking</b></p>
          </div>
          <div v-if="apt.wheelChairAccessible" class="col l2 s4">
            <i class="medium material-icons green-text">accessible</i>
            <p class="amenitiesHeading"><b>Wheel Chair Accessible</b></p>
          </div>
          <div v-if="apt.laundryFacilities" class="col l2 s4">
            <i class="medium material-icons green-text">kitchen</i>
            <p class="amenitiesHeading"><b>Laundry Facilities</b></p>
          </div>
          <div v-if="apt.hasHotWater" class="col l2 s4">
            <i class="medium material-icons green-text">whatshot</i>
            <p class="amenitiesHeading"><b>Hot water Provided</b></p>
          </div>
          <div v-if="apt.hasSecurityCameras" class="col l2 s4">
            <i class="medium material-icons green-text">videocam</i>
            <p class="amenitiesHeading"><b>Security Cameras</b></p>
          </div>
          <div class="col xl12 s12 left-align">
            <h5 class="left-align">Additional Features</h5>
            <p>On-site security, weekly bathroom cleaning services.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 l8 offset-l2">
          <h4 class="left-align">Gallery</h4>
          <div class="row">
            <div v-for="img in buildingGallery" :key="img" class="col s4 l2"><img :src="img" class="materialboxed gallery-image "></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 l8 offset-l2">
          <h4 class="left-align">Rooms</h4>
        </div>
        <div class="col s12 l8 offset-l2">
          <div v-for="room in apt.roomTypes" :key="room._id" class="row indigo darken-4 roomItem z-depth-1">
            <router-link :to="room.roomTypeLink">
              <div class="col s3 l2 right-align"><img :src=room.coverImgURL class="roomImg" alt=""></div>
              <div class="col s6 left-align white-text">
                <h6><b>{{room.name}}</b></h6>
                <h5 class="roomItemCost green-text">${{room.price}} monthly</h5>
              </div>
              <div class="col s3 right-align white-text">
                <i class="material-icons medium roomIconNext">keyboard_arrow_right</i>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 l8 offset-l2">
          <h4 class="left-align">Reviews</h4>
          <form class="row grey lighten-4 commentsArea">
              <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea" v-model="userReview"></textarea>
                <label for="textarea1">Leave a review...</label>
              </div>
              <div class="col s4">
                <input id="starRating" type="number" v-model="userRating" min="1" max="5">
                <label for="starRating">Star Rating</label>
              </div>
              <div class="col s2">
                <button class="btn-floating" @click="leaveReview"><i class="material-icons right">send</i></button>
              </div>
          </form>
          <div class="divider"></div>
          <br>
          <div class="row" id="commentsSection"  v-for="comment in apt.comments" :key="comment._id">
            <div class="col s2">
              <!-- <img src="profilePic.jpg" class="profilePic left-align"> -->
            </div>
            <div class="col s12 grey lighten-2 commentParent">
              <div class="left-align">
                <!-- <b>Rajesh Sooklal</b> -->
              </div>
              <div class="left-align">{{comment.commentBody}}</div>
              <div class="left-align"><span v-for="star in comment.rating" :key="star"><i class="material-icons tiny orange-text">star</i></span></div>
              <!-- <div class="left-align">{{comment.timestamp}}</div> -->
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
// import Router from 'vue-router'
export default {
  name: 'home',
  data(){
    return {
      apt: {},
      buildingGallery: [],
      userReview: "",
      userRating: ""
    }
  },
  mounted(){
    window.scrollTo(0,top);
    axios.get("http://localhost:3010/student/buildings/"+this.$route.params.id)
    .then(data=>{
        this.apt = data.data.data;
        this.apt.coverImg = 'https://webpartments.nyc3.digitaloceanspaces.com/buildingCover-'+this.apt._id
        this.apt.roomTypes.forEach(room=>{
          room.coverImgURL = "https://webpartments.nyc3.digitaloceanspaces.com/roomTypeCover-"+room._id;
          room.roomTypeLink = "/roomType/"+room._id;
        })
        this.apt.gallery.forEach(img=>{
          this.buildingGallery.push("https://webpartments.nyc3.digitaloceanspaces.com/"+img);
        })
        if(this.apt.comments.length > 0){
          let x = [];
          let y = 0;
          let z = 0;
          this.apt.comments.forEach(c=>{x.push(c.rating); z++})
          x.forEach(val=>{y = y+val})
          this.apt.stars = Math.round(y/z);
        }else{
          this.apt.stars = 0;
        }
        $(document).ready(function(){
          $('.materialboxed').materialbox();
        })
    })
  },
  methods: {
    leaveReview(){
      if(this.userReview && this.userRating > 0){
        axios.post("http://localhost:3010/student/buildings/addComment", {
          buildingId: this.apt._id,
          review: this.userReview,
          rating: this.userRating
        })
        .then(data=>{
            if(data.data.success){
              this.apt.comments.push(data.data.data)
              M.toast({html: "Review Posted."})
            }
            this.userRating = "";
            this.userReview = ""
        })
        .catch(err=>{
          console.log(err);
        })
      }
    }
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
    height: 60vh;
    z-index: -50;
  }
  
  .quickbox{
    border-radius: 7px;
    padding-bottom: 10px;
  }

  .quickboxItem{
    /* color: #fff!important; */
  }

  .quickboxItem>p {
    margin-top: -5px;
  }
/* 
  #number{
    width:100%;
  } */

  #gallery{
    width:100%;
  }

  .gallery-image{
    width:115%;
    margin-bottom: 20px;
    height:90px;
  }

  .room-image{
    width:50px;
  }

  .room-text{
    font-size:14px;
  }

  .profilePic{
    width:40px;
    border-radius: 50%
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
  
  .roomImg {
    width: 70px;
    height: 70px;
  }

  .roomItem {
    padding: 10px;
    padding-top: 15px;
    padding-left: 2px;
    border-radius: 7px;
  }

  .roomItemCost {
    margin-top: -2px;
  }
  
  .roomIconNext {
    margin-top: 5px;
  }
  
  .commentsArea {
    padding: 20px!important;
  }

  .commentParent {
    padding: 20px!important;
    border-radius: 7px;
    font-size: 11px;
  }

  .btn-floating {
    margin-top: 25px;
  }

  .contactBtn {
    width: 100%
  }

  @media only screen and (min-width: 992px) {
    #buildingImage{
      overflow-y: hidden;
      width:70vw;
      height: 60vh;
      z-index: -50;
    } 
    .container {
      border-radius: 30px, 30px, 0,0;
    }
  }

  @media only screen and (max-width: 600px) {
    body {
      background-color: #f5f5f5;
    }
    #buildingImage{
      overflow-y: hidden;
      width:100vw;
      height: 60vh;
      z-index: -50;
    } 
  }
</style>