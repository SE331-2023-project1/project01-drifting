import type { Student } from "@/type";
import type { Teacher } from "@/type";
import { defineStore } from "pinia";
export const useEventStore = defineStore('students',{
    state: () => ({
        event : null as Student | null
    }),
    actions: {
        setEvent(event: Student) {
            this.event = event;

        }
    },
    getters: {
        hasEvent: (state) => {
          return state.event !== null;
        }
      }
})

export const useTeacherStore = defineStore('teacher',{
    state: () => ({
        event : null as Teacher | null
    }),
    actions: {
        setEvent(event: Teacher) {
            this.event = event;

        }
    },
    getters: {
        hasEvent: (state) => {
          return state.event !== null;
        }
      },
})