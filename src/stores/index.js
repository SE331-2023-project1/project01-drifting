import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    comments: [],
  }),
  actions: {
    addComment(comment) {
      this.comments.push(comment);
    },
  },
});
