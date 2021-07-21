<template>
  <div class="admin-auth-page container w-[640px]">
    <div class="auth-container">
      <form>
        <AppControlInput class="border p-2 focus:outline-none" type="email">E-mail Address</AppControlInput>
        <AppControlInput class="border p-2 focus:outline-none" type="password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">
            Switch to {{ isLogin ? 'Signup' : 'Login' }}
        </AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from '~/components/UI/AppControlInput'
import AppButton from '~/components/UI/AppButton'
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>
