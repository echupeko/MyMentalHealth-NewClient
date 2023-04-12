<template>
  <div class="form-container">
    <div
      v-for="(form, index) in forms"
      class="form-container__wrapper"
      :key="index"
      :class="{
        '__sign-in': !form.activeIsRight,
        '__sign-up': form.activeIsRight,
        '__active': (!form.activeIsRight && !activeIsRight) || (form.activeIsRight && activeIsRight),
      }"
    >
      <form action="#">
        <h1>{{ form.title }}</h1>
        <template v-if="socialIsAllow">
          <div class="form-container__social-container disabled">
            <a v-for="(link, index) in form.links" class="form-container__social" :key="index" :href="link.href">
              <i class="fab fa-facebook-f" :class="link.iconClass"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
        </template>
        <base-input
          v-for="(field, index) in form.fields"
          :key="index"
          :type="field.type"
          :placeholder="field.placeholder"
        />
        <a v-if="!form.activeIsRight" href="#">Forgot your password?</a>
        <base-button rounded :title="form.activeIsRight ? 'Sign Up' : 'Sign In'" @click="authorizeHandler" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { config } from "@/config";
import { SocialLink } from "@/types";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

export default defineComponent({
  name: "AuthorizedForm",
  components: { BaseInput, BaseButton },
  props: {
    activeIsRight: { type: Boolean, required: true },
  },
  setup() {
    const socialIsAllow = computed(() => config.featureSocialLinkAuthorize);
    const links = ref<SocialLink[]>([
      { name: "facebook", label: "Facebook", href: "#", iconClass: "fa-facebook-f" },
      { name: "google+", label: "Google Plus", href: "#", iconClass: "fa-google-plus-g" },
      { name: "linkedin", label: "LinkedIn", href: "#", iconClass: "fa-linkedin-in" },
    ]);
    const publicFields = [
      { name: "email", placeholder: "email@example.com", type: "email" },
      { name: "password", placeholder: "password", type: "password" },
    ]; //описать тип
    const forms = [
      {
        name: "signUp",
        title: "Create Account",
        links: links.value,
        activeIsRight: true,
        fields: [{ name: "username", placeholder: "name", type: "text" }, ...publicFields],
      },
      {
        name: "signIn",
        title: "Sign in",
        links: links.value,
        activeIsRight: false,
        fields: publicFields,
      },
    ]; //описать тип
    const authorizeHandler = () => {
      //
    };
    return { socialIsAllow, forms, authorizeHandler };
  },
});
</script>

<style lang="scss" scoped>
.form-container {
  &__wrapper {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    &.__sign-in {
      left: 0;
      width: 50%;
      z-index: 2;
      transform: translateY(100%);
      &.__active {
        transform: translateY(0%);
      }
    }
    &.__sign-up {
      left: 0;
      width: 50%;
      z-index: 1;
      opacity: 0;
      transform: translateX(0%);
      &.__active {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
      }
    }

    form {
      background: #fff;
      display: flex;
      flex-direction: column;
      padding: 0 50px;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  &__social-container {
    margin: 20px 0;

    a {
      border: 1px solid #ddd;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      height: 40px;
      width: 40px;
    }
  }
}
</style>
