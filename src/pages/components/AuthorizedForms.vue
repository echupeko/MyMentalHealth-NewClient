<template>
  <div class="forms" :class="{ '__right-panel-active': isSignup }">
    <div
      v-for="(form, index) in forms"
      :key="index"
      class="forms__container"
      :class="{ '__sign-in': !form.isSignup, '__sign-up': form.isSignup }"
    >
      <form action="#">
        <h1>{{ form.title }}</h1>
        <template v-if="socialIsAllow">
          <div class="forms__social-container disabled">
            <a v-for="(link, index) in form.links" :key="index" :href="link.href" class="forms__social">
              <i :class="link.iconClass" class="fab fa-facebook-f"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
        </template>
        <input v-if="isSignup" placeholder="Name" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <a v-if="!isSignup" href="#">Forgot your password?</a>
        <button @click="authorizeHandler">{{ isSignup ? "Sign Up" : "Sign In" }}</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { config } from "@/config";
import { SocialLink } from "@/types";

export default defineComponent({
  name: "AuthorizedForms",
  props: {
    isSignup: { type: Boolean, required: true },
  },
  setup() {
    const socialIsAllow = computed(() => config.featureSocialLinkAuthorize);
    const links = ref<SocialLink[]>([
      { name: "facebook", label: "Facebook", href: "#", iconClass: "fa-facebook-f" },
      { name: "google+", label: "Google Plus", href: "#", iconClass: "fa-google-plus-g" },
      { name: "linkedin", label: "LinkedIn", href: "#", iconClass: "fa-linkedin-in" },
    ]);
    const forms = [
      {
        title: "Create Account",
        links: links.value,
        isSignup: true,
      },
      {
        title: "Sign in",
        links: links.value,
        isSignup: false,
      },
    ];
    const authorizeHandler = () => {
      //
    };
    return { socialIsAllow, forms, authorizeHandler };
  },
});
</script>

<style lang="scss" scoped>
.forms {
  &__container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    &.__sign-in {
      left: 0;
      width: 50%;
      z-index: 2;
    }

    &.__sign-up {
      left: 0;
      width: 50%;
      z-index: 1;
      opacity: 0;
    }
  }

  &.__right-panel-active {
    .forms {
      &__container {
        &.__sign-in {
          transform: translateY(100%);
        }
        &.__sign-up {
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
        }
      }
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

  input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
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
