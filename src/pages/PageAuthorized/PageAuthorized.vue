<template>
  <div class="page-authorized">
    <div class="form-container">
      <AuthorizedForm
        v-for="(form, index) in formsRef"
        :key="index"
        :form="form"
        :is-signup="isSignup"
        @authorize-success="authorizeHandler"
      />
    </div>
    <div class="overlay__block" :class="{ '__left-side-active': isSignup }">
      <div class="overlay__container">
        <OverlayPanel
          v-for="(panel, index) in formsRef.map((item) => item.overlay)"
          :key="index"
          :panel="panel"
          :is-signup="isSignup"
          @toggle-panel="isSignup = !isSignup"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { forms } from "./config";
import OverlayPanel from "./components/OverlayPanel.vue";
import AuthorizedForm from "./components/AuthorizedForm.vue";
import { AuthorizeForm, AuthorizeEvent, FieldValues, NotificationTypes } from "@/types";

export default defineComponent({
  name: "PageAuthorized",
  components: { AuthorizedForm, OverlayPanel },
  setup(_, { emit }) {
    const isSignup = ref(false);
    const formsRef = ref<AuthorizeForm[]>(forms);
    const authorizeHandler = (eventType: AuthorizeEvent, values: FieldValues) => {
      if (values["email"] === "email@example.com" && values["password"] === "123") {
        emit("authorized", { type: NotificationTypes.SUCCESS, message: "Вход выполнен успешно!" });
      }
      console.log(eventType, values);
    };
    return { isSignup, formsRef, authorizeHandler };
  },
});
</script>

<style lang="scss" scoped>
.page-authorized {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.overlay {
  &__block {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;

    &.__left-side-active {
      transform: translateX(-100%);
    }
  }

  &__container {
    background: var(--green);
    background: linear-gradient(to right, var(--green-lighten), var(--green)) no-repeat 0 0 / cover;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateY(0);
    transition: transform 0.6s ease-in-out;
  }

  &.__left-side-active {
    .overlay__container {
      transform: translateX(50%);
    }
  }
}
</style>
