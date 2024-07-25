<template>
  <div class="bg-[#E4F4FF] h-screen mt-[100px] overflow-y-auto">
    <div v-for="n in m_listings" :key="n._id">
      <GigCard 
        @click.stop="toggleDetail(n)"
        :title="n.title" 
        :pay="n.pay" 
        :time="n.duration"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import GigCard from "./GigCard.vue";
import { ref, onMounted } from "vue";
import { useStore } from "../../../store/store";
import type { Listing } from "../../../utils/ZodTypes";
import { useRouter } from 'vue-router';

const listingStore = useStore()
const router = useRouter();
const m_listings = ref<Listing[]>([])

// Fetches and populates m_listings from api
onMounted(async () => {
  if (listingStore.listings.length == 0) {
    await listingStore.updateListings()
  }
  
  m_listings.value = listingStore.listings
})

// Go to the detail page
function toggleDetail(listing:Listing) { 
  listingStore.setDetailListing(listing)
  router.push('/detail')
}
</script>