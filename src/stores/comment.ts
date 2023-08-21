import { defineStore } from "pinia";

export const useCommentsStore = defineStore("comments", {
  state: () => ({
    comments: {} as Record<string, string[]>,
  }),
  actions: {
    addComment(key: string, comment: string) {
      if (!this.comments[key]) {
        this.comments[key] = [];
      }
      this.comments[key].push(comment);
    },
    getComments(key: string) {
      return this.comments[key] || [];
    },
    getAllComments() {
      return this.comments;
    },
  },
});
