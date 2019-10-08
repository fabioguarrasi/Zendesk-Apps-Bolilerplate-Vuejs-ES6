const modalTemplate = `
  <div>
    <p>{{ app_state.dictionary.examples.hello_modal }}</p>
    <button
      class="c-btn c-btn--sm c-btn-secondary"
      @click="updateData();"
    >{{ app_state.dictionary.examples.update }}</button>
  </div>
`;

export default modalTemplate;
