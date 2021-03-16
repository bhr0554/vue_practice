<template>
  <form name="userFrm">
    <div>
      <h3>회원 가입</h3>
      이 름 : <input type="text" name="userName"/><br/>
      연락처 : <input type="text" name="userPhone"/><br/>
      나 이 : <input type="text" name="userAge"/><br/>
    </div>
    <button v-on:click="registUser">회원등록</button>
    <div>
      <h3>회원 정보</h3>
      이 름 : <span>
      </span><br/>
      연락처 : <span></span><br/>
      나 이 : <span></span><br/>
      <button v-on:click="searchUser">조회</button>
    </div>
   </form>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SIGNUP',
  methods: {
    registUser: function () {
      axios.get('/api/registUser').then(res => {
        console.log(res)
      })
    },
    searchUser: function () {
      axios.get('/api/searchUser').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
