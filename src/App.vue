<template>
  <div class="main">
    <PageAuthorized v-if="showAuthorized" :is-signup="isSignup" @authorized="loginHandler" />
    <PageHome v-else/>
    <NotificationCard :show="showNotification && !!notification" :notification="notification" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PageAuthorized from "@/pages/PageAuthorized";
import NotificationCard from "@/components/NotificationCard.vue";
import { Notification, NotificationTypes } from "@/types";
import PageHome from "@/pages/PageHome/PageHome.vue";

export default defineComponent({
  name: "App",
  components: {PageHome, NotificationCard, PageAuthorized },
  setup() {
    const isSignup = ref(false);
    const showAuthorized = ref(true); //?
    const showNotification = ref(false); //?
    const notification = ref<Notification>(); // перенести в стор

    const loginHandler = (data: Notification) => {
      showNotification.value = true;
      notification.value = data;
      if (notification.value?.type === NotificationTypes.SUCCESS) showAuthorized.value = false;
      setTimeout(() => (showNotification.value = false), 2000);
    };

    return { isSignup, showAuthorized, showNotification, notification, loginHandler };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
  box-sizing: border-box;
}

:root {
  --green: #397333;
  --green-lighten: #59b44f;
}

body {
  font-family: "Montserrat", sans-serif;
  background: darken(#397333, 15%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;
}

#app, .main {
  width: 100%;
  height: 100%;
}

#app {

}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
  > * {
    pointer-events: none;
  }
}
</style>
