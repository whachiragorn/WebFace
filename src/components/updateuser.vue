<template>
  <div class="ui fluid container" style="width:50%">
    <div class="ui segment">
      <div class="ui segment">
        <h2>แก้ไขข้อมูลนักศึกษา 
          <div class="ui teal label">Update</div>
        </h2>
      </div>
      <div class="ui segment">

        <form class="ui form">
          <div class="required field">
            <label>รหัสนักศึกษา</label>
            <input type="text" name="id" 
            v-model="User.Id" placeholder="58xxxxx">
          </div>
          <div class="required field">
            <label>ชื่อ</label>
            <input type="text" name="fName" 
            v-model="User.fName" placeholder="ชื่อ">
          </div>
          <div class="required field">
            <label>นามสกุล</label>
            <input type="text" name="lName" 
            v-model="User.lName" placeholder="นามสกุล">
          </div>
          <div class="required field">
            <label>คณะ</label>
            <input type="text" name="Faculty" 
            v-model="User.Faculty" placeholder="คณะ">
          </div>
          <div class="field">
            <label>รูปภาพ</label>
            <input type="text" name="Picture" 
            v-model="User.Picture" placeholder="Picture">
          </div>
        </form>
        <div class="button" style="text-align: center; margin-top:3%">
            <!-- <router-link to="window.location.href ='#/'">
                <button class="ui blue basic button" @click="updateToAPI" in>
                <i class="save icon"></i>
                Save</button>
            </router-link> -->
            <button class="ui blue basic button" @click="updateToAPI">
              <i class="save icon"></i>
              Save</button>
            <button class="ui red basic button" onclick="window.location.href = '#/';">
              <i class="close icon"></i>
              Close</button>
        </div>  
      </div>
        
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddUser',
  data () {
    return {
      title: 'Add User',
      User:{
          Id: '',
          fName: '',
          lName:'',
          Faculty: '',
          Picture: ''
      }
    }
  },
  methods: {
      updateToAPI(){
          console.log(this.$route.params.userId)
          let newUser = {
              Id: this.User.Id,
              fName: this.User.fName,
              lName: this.User.lName,
              Faculty: this.User.Faculty,
              Picture: this.User.Picture,
          }
          //console.log(newUser)
          axios.put('http://localhost:3000/contacts/update/' + this.$route.params.userId,newUser)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
            window.location.reload()
      }
    },
    mounted () {
    axios.get('http://localhost:3000/contacts/read/' + this.$route.params.userId)
      .then((response) => {
        console.log(response.data)
        this.User = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
