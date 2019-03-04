const InputField = {
  template: `
    <div class="c-txt">
      <label class="c-txt__label" :for="$attrs.id">{{$attrs.label}}</label>
      <input class="c-txt__input" :id="$attrs.id" placeholder=".c-txt__input" type="text" :value="$attrs.value">
      <small v-if="$attrs.errorMessage" class="c-txt__message c-txt__message--error">.c-txt__error</small>
    </div>
  `
};

export default InputField;