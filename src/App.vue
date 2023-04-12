<template>
  <div class="main">
    <PageAuthorized v-if="showAuthorized" @login-success="loginHandler" @login-reject="loginHandler" />
    <div v-else>Залогинен</div>
    <NotificationCard v-if="showNotification && !!notification" :notification="notification" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PageAuthorized from "@/pages/PageAuthorized.vue";
import NotificationCard from "@/components/NotificationCard.vue";
import { Notification, NotificationTypes } from "@/types";

export default defineComponent({
  name: "App",
  components: { NotificationCard, PageAuthorized },
  setup() {
    const showAuthorized = ref(true); //?
    const showNotification = ref(false); //?
    const notification = ref<Notification>(); // перенести в стор

    const loginHandler = (data: Notification) => {
      showNotification.value = true;
      notification.value = data;
      if (notification.value?.type === NotificationTypes.SUCCESS) showAuthorized.value = false;
      setTimeout(() => (showNotification.value = false), 2000);
    };

    return { showAuthorized, showNotification, notification, loginHandler };
  },
});
</script>

<style lang="scss">
* {
  font-family: "Open Sans", serif;
}
</style>
