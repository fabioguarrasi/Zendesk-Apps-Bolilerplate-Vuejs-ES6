const appTemplate = `
  <div>
    <div v-if="!state.is_loading" class="container">
      <h1>{{ message_from_vuex_state }}</h1>
      <h1>{{ hardcoded_value }}</h1>
      <Child v-bind="state"></Child>
    </div>
    <div v-if="state.is_loading" class="loader">
      <img src="./dots.gif" />
    </div>
  </div>
`;

export default appTemplate;
