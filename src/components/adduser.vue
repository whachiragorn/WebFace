<template>
<div class="ui centered container">
  <h1 style="text-align: center">{{ title }}</h1>
  <div class="ui segment">
       <!-- style="text-align:left" -->
  <form class="ui form">
  <div class="ui form">
    <div class="two fields">
      <div class="field">
        <label>รหัสนักศึกษา</label>
        <input placeholder="58xxxxx" type="text" v-model="User.Id">
        <label>ชื่อ</label>
        <input placeholder="ชื่อ" type="text" v-model="User.fName">
        <label>นามสกุล</label>
        <input placeholder="นามสกุล" type="text" v-model="User.lName">
        <label>คณะ</label>
        <input placeholder="คณะ" type="text" v-model="User.Faculty">
        <label>รูปภาพ (URL)</label>
        <input placeholder="นามสกุล" type="text" v-model="User.Picture">
      </div>
    </div>
    <div class="ui blue basic button" @click="addtoAPI">Submit</div>
    <div class="ui red basic button" onclick="window.location.href = '#/';">Close</div>
  </div>
  </form>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Users',
  data () {
    return {
      title: 'เพิ่มข้อมูลนักศึกษา',
      User:{
          Id: '',
          fName: '',
          lName: '',
          Faculty:'',
          Picture:''
      }
    }
  },
  methods: {
      addtoAPI(){
          let newUser ={
              Id: this.User.Id,
              fName: this.User.fName,
              lName: this.User.lName,
              Faculty: this.User.Faculty,
              Picture: this.User.Picture
          }
        //   console.log(newUser)
          axios.post('http://localhost:3000/contacts/add',newUser)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
      }
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
