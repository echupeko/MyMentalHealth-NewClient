<template>
  <div class="page-authorized">
    <AuthorizedForm :active-is-right="activeIsRight" />
    <OverlayPanel :active-is-right="activeIsRight" @toggle-panel="activeIsRight = !activeIsRight" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OverlayPanel from "./components/OverlayPanel.vue";
import AuthorizedForm from "./components/AuthorizedForm.vue";

export default defineComponent({
  name: "PageAuthorized",
  components: { AuthorizedForm, OverlayPanel },
  setup() {
    const activeIsRight = ref(false);
    return { activeIsRight };
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
</style>
