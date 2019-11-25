<template>
  <div class="building">
    <img src="img1.jpeg" id="buildingImage" alt="">
    <div class="container">
      <div class="row">
        <div class="col xl12 s12">
          <h4 class="left-align">Blue Mountain State</h4>  
          <h5 class="left-align">Address goes here</h5>
        </div>
      </div>
      <div class="row">
        <div class="col xl4 s4 grey quickbox">
          <h4>$$</h4>
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
              </div>
            </div>
          </div>
          <p>To campus</p>
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
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h4 class="left-align">Gallery</h4>
          <div class="row">
            <div class="col s4"><img src="img1.jpeg" alt="" class="materialboxed gallery-image "></div>
            <div class="col s4"><img src="img1.jpeg" alt="" class="materialboxed gallery-image"></div>
            <div class="col s4"><img src="img1.jpeg" alt="" class="materialboxed gallery-image"></div>
            <div class="col s4"><img src="img1.jpeg" alt="" class="materialboxed gallery-image"></div>
            <div class="col s4"><img src="img1.jpeg" alt="" class="materialboxed gallery-image"></div>
            <div class="col s4"><img src="img1.jpeg" alt="" class="materialboxed gallery-image"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h4 class="left-align">Rooms</h4>
          <div class="row">
            <div class="col s4"><img src="img1.jpeg" class="room-image"></div>
            <div class="col s4 room-text">Studio</div>
            <div class="col s4"><i class="material-icons left-align">check_circle</i></div>
          </div>
          <div class="row">
            <div class="col s4"><img src="img1.jpeg" class="room-image"></div>
            <div class="col s4 room-text">One Bedroom</div>
            <div class="col s4"><i class="material-icons left-align">check_circle</i></div>
          </div>
          <div class="row">
            <div class="col s4"><img src="img1.jpeg" class="room-image"></div>
            <div class="col s4 room-text">Two Bedroom</div>
            <div class="col s4"><i class="material-icons left-align">close</i></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h4 class="left-align">Comments</h4>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <textarea id="textarea1" class="materialize-textarea"></textarea>
                  <label for="textarea1">Leave a comment...</label>
                </div>
              </div>
              <div class="row">
                <div class="col s2">
                  <img src="profilePic.jpg" class="profilePic left-align">
                </div>
                <div class="col s10 grey lighten-2">
                  <div class="left-align">
                    <b>Rajesh Sooklal</b>
                  </div>
                  <div class="left-align">This room is beautiful and super comfortable.</div>
                  <div class="left-align">Rating: 5/5</div>
                  <div class="left-align">Date posted.</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
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

  .profilePic{
    width:30px;
    border-radius: 50%
  }
</style>