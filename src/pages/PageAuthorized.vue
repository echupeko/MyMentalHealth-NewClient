<template>
  <div>
    <form class="login-modal" @submit.prevent="loginHandler">
      <div class="login-modal__title">Login/Signup</div>
      <input class="login-modal__name" type="text" v-model="userName" placeholder="username" />
      <input class="login-modal__password" type="password" v-model="password" placeholder="password" />
      <button class="login-modal__submit-btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NotificationTypes } from "@/types";

export default defineComponent({
  name: "PageAuthorized",
  setup(_, { emit }) {
    const userName = ref("");
    const password = ref("");
    const loginHandler = () => {
      if (userName.value !== "user" || password.value !== "user") {
        emit("login-reject", { type: NotificationTypes.ERROR, message: "Введены неверные данные" });
        return;
      }
      //подумать о хуке
      //запрос на монго сервер
      localStorage.setItem("auth-user", userName.value);
      emit("login-success", { type: NotificationTypes.SUCCESS, message: `Добро пожаловать ${userName.value}` });
    };

    return { userName, password, loginHandler };
  },
});
</script>

<style scoped></style>
