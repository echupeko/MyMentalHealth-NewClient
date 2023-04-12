<template>
  <div class="notification-modal" :class="modifyClass">
    <span class="notification-modal__message">{{ notification.message }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Notification, NotificationTypes } from "@/types";

export default defineComponent({
  name: "NotificationCard",
  props: {
    notification: { type: Object as () => Notification, required: true },
  },
  setup(props) {
    const modifyClass = computed<string>(() => {
      switch (props.notification.type) {
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
  top: 40px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background: #e7e7e7;
  border: 1px solid #262626;
  border-radius: 14px;
  box-shadow: 0 0 5px #262626;
  color: #262626;
  transform: translateY(50%);
  &.__error {
    background: #ff8080;
  }
  &.__warning {
    background: #f3cd5e;
  }
  &.__success {
    background: #93e331;
  }
  &.__information {
    background: #8cadfa;
  }
  &__message {
    padding: 4px 16px;
  }
}
</style>
