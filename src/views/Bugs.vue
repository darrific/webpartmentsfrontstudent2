<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <br>
        <div >
          <div class="col xl6 s12">
            <h4>Bug Reports</h4>
            <br>
          </div>
          <div class="row">
            <div class="col s12">
              <table class="responsive-table">
                <thead>
                  <tr>
                      <th>Email</th>
                      <th>Report</th>
                      <th>Date Created</th>
                      <th>Resolved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="report in reports" :key="report._id">
                    <td>{{report.email}}</td>
                    <td>{{report.report}}</td>
                    <td>{{report.timestamp}}</td>
                    <td>
                        <form action="#"> <p><label><input type="checkbox" v-model="report.isResolved" disabled="disabled"/><span>Resolved</span></label></p></form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <h5>Submit a Bug Report</h5>
            </div>
            <div class="col s12">
              <div class="row">
                <div class="input-field col s12 m6 l6">
                  <input id="email" v-model="email" type="text" class="validate">
                  <label for="email">Email</label>
                </div>
                <div class="input-field col s12 m6 l6">
                  <textarea id="report" v-model="report" class="materialize-textarea"></textarea>
                  <label for="report">Report</label>
                </div>
              </div>
              <div class="row">
                <button class="btn" @click="submitBug">Submit</button>
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
        email: "",
        report: "",
        reports: []
      }
  },
  mounted(){
      // this.getUserData()   
      axios.get("http://localhost:3010/student/bugs")
        .then(data=>{
            this.reports = data.data.data
        })
  },
  methods: {
    submitBug(){
      axios.post("http://localhost:3010/student/bugs/create", {
        report: this.report,
        email: this.email
      })
      .then(data=>{
        this.report = ""
        this.email = ""
        console.log(data);
      })
      .catch(err=>{
        console.log(err);
      })
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
</style>