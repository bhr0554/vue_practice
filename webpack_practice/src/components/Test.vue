<template>
  <form id="userFrm" name="userFrm" @submit.prevent="registUser">
    <div>
      <h3>회원 가입</h3>
      이 름 : <input type="text" name="userName" v-model="userName"/><br/>
      연락처 : <input type="text" name="userPhone" v-model="userPhone"/><br/>
      나 이 : <input type="text" name="userAge" v-model="userAge"/><br/>
    </div>
    <button type="submit">회원등록</button>
    <div>
      <h3>회원 정보</h3>
      이 름 : <span>{{userName}}</span><br/>
      연락처 : <span>{{userPhone}}</span><br/>
      나 이 : <span>{{userAge}}</span><br/>
      <button v-on:click="searchUser">조회</button>
    </div>
   </form>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SIGNUP',
  data () {
    return {
      userName: 'user',
      userPhone: '01012345678',
      userAge: '19'
    }
  },
  methods: {
    searchUser: function () {
      axios.get('/api/user/searchUser').then(res => {
        console.log(res)
      })
    },
    registUser () {
      axios.post('/api/user/registUser', {userName: this.userName, userPhone: this.userPhone, userAge: this.userAge}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
