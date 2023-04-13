<template>
  <div
    class="form"
    :class="{
      '__sign-in': !isSignupActive,
      '__sign-up': isSignupActive,
      '__active': (!isSignupActive && !isSignup) || (isSignupActive && isSignup),
    }"
  >
    <form action="#">
      <h1 class="form__title">{{ form.title }}</h1>
      <template v-if="socialIsAllow">
        <div class="form__social-container disabled">
          <a v-for="(link, index) in form.links" class="form__social" :key="index" :href="link.href">
            <i class="fab" :class="link.iconClass"></i>
          </a>
        </div>
        <span>{{ `или используйте email для ${isSignupActive ? "регистрации" : "входа"}` }}</span>
      </template>
      <div class="form__field-wrapper">
        <base-input
          class="form__field"
          v-for="(field, index) in form.fields"
          :key="index"
          :name="field.name"
          :value="values[field.name] ?? ''"
          :type="field.type"
          :error="field.error"
          :placeholder="field.placeholder"
          @input="(v) => handleInput(v, field)"
        />
      </div>
      <a class="form__forgot" v-if="!isSignupActive" href="#">Забыл свой пароль?</a>
      <base-button
        class="form__button"
        rounded
        :content="isSignupActive ? 'Зарегистрироваться' : 'Войти'"
        @click="authorizeHandler"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, toRef, watch } from "vue";
import { config } from "@/config";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import { AuthorizeEvent, AuthorizeForm, FieldValues, FormField } from "@/types";

export default defineComponent({
  name: "AuthorizedForm",
  components: { BaseInput, BaseButton },
  props: {
    isSignup: { type: Boolean, required: true },
    form: { type: Object as () => AuthorizeForm, required: true },
  },
  setup(props, { emit }) {
    const socialIsAllow = computed(() => config.featureSocialLinkAuthorize);
    const isSignupActive = computed(() => props.form.eventType === AuthorizeEvent.SIGNUP);
    const values = ref<FieldValues>({});

    const handleInput = (v: any, field: FormField) => {
      if (values.value && typeof v === "string") {
        values.value[field.name] = v;
      }
      const currentField = props.form.fields.find((item) => item.name === field.name);
      if (currentField) currentField.error = undefined;
    };

    const authorizeHandler = () => {
      //проверка данных и отправка на сервер
      Object.keys(values.value).forEach((valueName) => {
        const currentField = props.form.fields.find((field) => field.name === valueName);
        if (values.value[valueName] === "") {
          if (currentField) currentField.error = { message: "Поле пустое" };
        } else {
          if (currentField) currentField.error = undefined;
          emit("authorize-success", props.form.eventType, values.value);
        }
      });
    };

    watch(toRef(props, "isSignup"), () => {
      setTimeout(() => {
        Object.keys(values.value).forEach((valueName) => {
          const currentField = props.form.fields.find((field) => field.name === valueName);
          if (currentField) currentField.error = undefined;
        });
      }, 600);
    });

    onMounted(() => {
      props.form.fields.forEach((item) => {
        values.value[item.name] = "";
      });
    });

    return { socialIsAllow, isSignupActive, values, handleInput, authorizeHandler };
  },
});
</script>

<style lang="scss" scoped>
.form {
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

  &__title {
    margin-bottom: 20px;
  }

  &__social-container {
    margin-bottom: 20px;

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

  &__field-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  &__forgot,
  &__button {
    margin-top: 15px;
  }
}
</style>
