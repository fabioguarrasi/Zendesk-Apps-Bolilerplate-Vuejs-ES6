const childTemplate = `
  <div>
    <p>{{ dictionary.examples.hello_world }}</p>
    <button
      class="c-btn c-btn--sm c-btn-secondary"
      @click="openModal();"
    >{{ dictionary.examples.open_modal }}</button>
  </div>
`;

export default childTemplate;
