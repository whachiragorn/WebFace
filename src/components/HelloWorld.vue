<template>
<div class="ui centered container">
  
  <h1 align=center>รายชื่อนักศึกษา</h1>
  <!-- <router-link to="/adduser"> -->
  
  <button class="ui button" onclick="window.location.href = '#/adduser';">เพิ่มข้อมูลนักศึกษา</button>
  <!-- </router-link> -->
  <table class="ui celled table">
  <thead>
    <tr><th>รหัสนักศึกษา</th>
    <th>ชื่อ</th>
    <th>นามสกุล</th>
    <th>คณะ</th>
    <th>รูปภาพ</th>
    <th>หมายเหตุ</th>
  </tr></thead>
  <tbody>
    <tr v-for="auser in filterdUsers" v-bind:key="auser._id">
      <td data-label="Id">{{auser.Id}}</td>
      <td data-label="fName">{{auser.fName}}</td>
      <td data-label="lName">{{auser.lName}}</td>
      <td data-label="Faculty">{{auser.Faculty}}</td>
      <td data-label="Picture">
        <!-- <div class="image">
          <img v-bind:src=auser.Picture> {{auser.Picture}}
        </div> -->
        <div class="image">
          <img src="../assets/logo.png" width="30px">
        </div>
        </td>
      <td data-label="Action">
        <router-link :to="{ path: 'updateuser/' + auser._id}">
            <button class="ui button" ><i class="edit icon"></i></button>
        </router-link>
        <button class="ui button" @click="delUser(auser._id)"><i class="trash icon"></i></button>
        
      </td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Users',
  data () {
    return {
      title: 'User List Page',
      Users:[],
      uid:'',
      search:''
    }
  },
  methods: {
    delUser(userId){
      var url = 'http://localhost:3000/contacts/delete/' +userId
      axios.delete(url)
        .then((response)=>{
            console.log('Delete UserId: '+userId)
        })
        .catch((error)=>{
            console.log(error)
        })
        window.location.reload()
    }
  },
  computed: {
    filterdUsers: function(){
      return this.Users.filter((user)=>{
        return user.fName.match(this.search) || user.lName.match(this.search) 
      })
    }
  },
  mounted() {
    axios.get('http://localhost:3000/contacts/getMany')
    .then((response)=>{
        //console.log(response.data)
        this.Users=response.data
    })
    .catch((error)=>{
        console.log(error)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
