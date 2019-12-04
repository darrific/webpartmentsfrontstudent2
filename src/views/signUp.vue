<template>
  <div class="signup">
    <div class="container">
      <h4>Sign Up</h4>
      <p>Get access to more features and reviews.</p>
        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input type="text" id="username-input" class="username">
                <label for="username-input">Username</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="email">
                <label for="email-input">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" class="password">
                <label for="password-input">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" class="password">
                <label for="password-input"> Confirm Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <button type="button" class="btn" onclick="alert('Sign Up Successful!')">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<style>
.btn{
  width: 100%;
}
</style>

