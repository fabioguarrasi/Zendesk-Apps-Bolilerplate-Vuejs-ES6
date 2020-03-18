const template = `
  <button
    class="c-btn"
    @click="flipText()">
    <slot></slot>
  </button>
`;

import { methods } from '../store/store.js';

export default {
  template,
  methods: {
    ...methods
  },
};