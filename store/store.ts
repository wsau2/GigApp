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
            currDetailUser: null as unknown as User,

            // User Stuff
            users: [] as User[],
            currUser: null as unknown as User,

            showDetail: false 
        }
    },

    actions: {
        // Listing stuff
        async updateListings() {
            this.listings = [];
            const newListings = await fetchListings();
            this.listings = newListings;
        },

        setDetailListing(listing: Listing) {
            this.currDetailListing = listing
        },

        setDetailUser(user: User) {
            this.currDetailUser = user;
        },


        // User stuff
        async updateUsers() {
            this.users = [];
            const newUsers = await fetchUsers();
            this.users = newUsers;
        }
    }
})