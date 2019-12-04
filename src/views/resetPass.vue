<template>
  <div class="reset">
    <div class="container">
      <h4>Reset Password</h4>
        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="email">
                <label for="email-input">Enter your email to get a reset link.</label>
                <div class="input-field col s12">
                  <button type="button" class="btn" onclick="alert('Check your email for reset link!')">Send Email</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="email">
                <label for="email-input">Enter the link we sent to your email.</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="email">
                <label for="email-input">Enter your new password.</label>
                <div class="input-field col s12">
                  <button type="button" class="btn" onclick="alert('Check your email for reset link!')">Reset Password</button>
                </div>
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
