<template>
  <div class="container">
    <AuthorizedForms :is-signup="isSignup" />
    <OverlayPanels :is-signup="isSignup" @toggle-signup="isSignup = !isSignup" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OverlayPanels from "@/pages/components/OverlayPanels.vue";
import AuthorizedForms from "@/pages/components/AuthorizedForms.vue";

export default defineComponent({
  name: "PageAuthorized",
  components: { AuthorizedForms, OverlayPanels },
  setup() {
    const isSignup = ref(false);
    return { isSignup };
  },
});
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

button {
  border-radius: 20px;
  border: 1px solid var(--green);
  background: var(--green);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}
</style>
