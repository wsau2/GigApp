import { defineStore } from "pinia";
import { fetchListings, fetchUsers } from "../utils/query";
import { type Listing } from "../utils/ZodTypes";
import { type User } from "../utils/ZodTypes";

export const useStore = defineStore('jobs', {
    state: () => {
        return {
            // Listing stuff
            listings: [] as Listing[],  // Array of every listing object
            currDetailListing: null as unknown as Listing,

            // User Stuff
            users: [] as User[],
            currUser: null as unknown as User,

            showDetail: false 
        }
    },

    actions: {
        // Queries backend and pushes new listings to this.listings
        // For now, clears this.listings then pushes same stuff
        async updateListings() {
            this.listings = [];
            const newListings = await fetchListings();
            this.listings = newListings;
        },

        setDetailListing(listing: Listing) {
            this.currDetailListing = listing
        },

        toggleDetail() { 
            this.showDetail = !this.showDetail
        },


        async updateUsers() {
            this.users = [];
            const newUsers = await fetchUsers();
            this.users = newUsers;
        }
    }
})