<template>
  <div class="reset">
    <div class="container">
      <h4>Reset Password</h4>
        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="email">
                <label for="email-input">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <button type="button" class="button" onclick="alert('Check your email for reset link!')">Reset</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<style>
.button{
  color:black;
  padding:8px 20px;
  text-align:center;
  text-decoration:none;
  display:inline-block;
  font-size:16px;
  margin:4px 2px;
  transition-duration:0.4s;
}
</style>
