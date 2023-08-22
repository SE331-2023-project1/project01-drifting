import { defineStore } from "pinia";

export const useFlashMessageStore = defineStore("flashMessage", {
  state: () => ({
    message: "" as string,
  }),
  actions: {
    showMessage(message: string) {
      this.message = message;
    },
    clearMessage() {
      this.message = "";
    },
  },
  getters: {
    hasMessage: (state) => {
      return state.message.length > 0;
    }
  },
  
});
