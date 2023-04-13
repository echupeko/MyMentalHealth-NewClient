<template>
  <div class="base-input">
    <label v-if="label" class="base-input__label">{{ label }}</label>
    <input
      :class="{
        __outline: outline,
        __transparent: transparent,
        __rounded: rounded,
        __negative: negative,
        __error: error,
      }"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
      @keypress.enter="$emit('submit')"
    />
    <label v-if="error" class="base-input__hint">* {{ error.message }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ErrorMessage, FieldType } from "@/types";

export default defineComponent({
  name: "BaseInput",
  props: {
    name: { type: String },
    label: { type: String },
    type: { type: String as () => FieldType, default: FieldType.TEXT },
    value: { type: String, required: true },
    placeholder: { type: String },
    outline: { type: Boolean },
    transparent: { type: Boolean },
    rounded: { type: Boolean },
    negative: { type: Boolean },
    error: { type: Object as () => ErrorMessage },
  },
  setup(_, { emit }) {
    const onInput = (e: InputEvent) => {
      emit("input", (e.target as HTMLInputElement).value, e);
    };
    return { onInput };
  },
});
</script>

<style lang="scss" scoped>
.base-input {
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    border: 1px solid transparent;
    background: #eee;
    padding: 12px 15px;
    //margin: 8px 0;
    width: 100%;
    transition: border 0.3s ease-in-out;

    &:hover {
      border-color: gray;
    }

    &:focus {
      border-color: var(--green-lighten);
    }

    &:focus-visible {
      outline: none;
    }

    &.__negative {
      background: #262626;
      color: #fff;
    }

    &.__outline {
      border-color: var(--green);

      &.__negative {
        border-color: #fff;
      }
    }

    &.__rounded {
      border-radius: 100px;
    }

    &.__transparent {
      background: transparent;
      color: #262626;
    }

    &.__error {
      border-color: #ff4b2b;
    }
  }

  &__label,
  &__hint {
    text-align: left;
    font-size: 12px;
  }

  &__hint {
    margin-left: 4px;
    margin-top: 4px;
    color: #ff4b2b;
  }
}
</style>
