<template>
  <div class="notification-modal" :class="[modifyClass, ...(show ? ['__show'] : [])]">
    <i class="fa fa-check"></i>
    <span v-if="notification" class="notification-modal__message">{{ notification.message }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Notification, NotificationTypes } from "@/types";

export default defineComponent({
  name: "NotificationCard",
  props: {
    show: { type: Boolean, required: true },
    notification: { type: Object as () => Notification },
  },
  setup(props) {
    const modifyClass = computed<string>(() => {
      switch (props.notification?.type) {
        case NotificationTypes.ERROR:
          return "__error";
        case NotificationTypes.WARNING:
          return "__warning";
        case NotificationTypes.SUCCESS:
          return "__success";
        case NotificationTypes.INFORMATION:
          return "__information";
      }
      return "";
    });
    return { modifyClass };
  },
});
</script>

<style lang="scss" scoped>
.notification-modal {
  position: fixed;
  top: 20px;
  right: -500px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  word-break: break-word;
  min-height: 30px;
  background: #e7e7e7;
  border-radius: 14px;
  box-shadow: 0 0 15px rgba(darken(#397333, 25%), .5);
  color: #262626;
  padding: 16px;
  transform: translateY(50%);
  transition: right .5s ease-in-out;
  &.__show {
    right: 40px;
  }
  &.__error {
    background: #ff8080;
  }
  &.__warning {
    background: #f3cd5e;
  }
  &.__success {
    background: var(--green-lighten);
  }
  &.__information {
    background: #8cadfa;
  }
  &__message {
    padding-left: 16px;
  }
}
</style>
