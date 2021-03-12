<template>
  <form name="userFrm=">
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
    </div>
   </form>
</template>
<script>
export default {
  name: 'SIGNUP'
}
</script>
