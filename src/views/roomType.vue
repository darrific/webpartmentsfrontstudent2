<template>
  <div class="room-type">
    <img src="studio.jpg" id="buildingImage" alt="">
    <div class="container">
      <div class="row">
        <div class="col xl12 s12">
          <h4 class="left-align">Studio Apartment</h4>  
        </div>
      </div>
      <div class="row">
        <div class="col xl4 s4 grey quickbox">
          <h4>
            <i class="material-icons">attach_money</i>
            <i class="material-icons">attach_money</i>
          </h4>
          <p>Price</p>
        </div>
        <div class="col xl4 s4 grey quickbox">
          <h4>4/5</h4>
          <p>Rating</p>
        </div>
        <div class="col xl4 s4 grey quickbox">
          <div class="container">
            <div class="row">
              <div class="col s4">
                <h4>2</h4>
              </div>
              <div class="col s6">
                <p>mins</p>
                <p>To campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <button class="btn orange" id="number">333-3333</button>
          <br>
          <br>
          <button class="btn green" id="gallery">Gallery</button>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h4 class="left-align">Amenities</h4>
          <div class="row">
            <div class="col s2"> 
              <i class="material-icons">wifi</i>
            </div>
            <div class="col s4">
              <p class="left-align">
                <b>WiFi</b>
              </p>
            </div>
            <div class="col s2">
              <i class="material-icons left-align">check_circle</i>
            </div>
          </div>
          <div class="row">
            <div class="col s2"> 
              <i class="material-icons">local_taxi</i>
            </div>
            <div class="col s4">
              <p class="left-align">
                <b>Parking available</b>
              </p>
            </div>
            <div class="col s2">
              <i class="material-icons left-align">check_circle</i>
            </div>
          </div>
          <div class="row">
            <div class="col s2"> 
              <i class="material-icons">ac_unit</i>
            </div>
            <div class="col s4">
              <p class="left-align">
                <b>A/C</b>
              </p>
            </div>
            <div class="col s2">
              <i class="material-icons left-align">close</i>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h4 class="left-align">Gallery</h4>
          <div class="row">
            <div class="col s4"><img src="studio_kitchen.jpg" alt="Kitchen" class="materialboxed gallery-image kitchen "></div>
            <div class="col s4"><img src="studio_bath.jpg" alt="Bathroom" class="materialboxed gallery-image bath"></div>
            <div class="col s4"><img src="studio_living.jpeg" alt="" class="materialboxed gallery-image living"></div>
            <div class="col s4"><img src="studio_bed.jpg" alt="Bed" class="materialboxed gallery-image bed"></div>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'roomType',
  mounted(){
    $('.materialboxed').materialbox();
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

  #gallery{
    width:100%;
  }

  .gallery-image{
    width:100%;
    margin-bottom: 20px;
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
</style>