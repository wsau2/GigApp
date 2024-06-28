import { defineStore } from "pinia";

export const useStore = defineStore('jobs', {
    state: () => {
        return {
            showDetail: false
        }
    },

    actions: {
        toggleDetail() { 
            this.showDetail = !this.showDetail
        }
    }
})