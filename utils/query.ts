// Fetches listings from api
export async function fetchListings() {
    try {
        const response = await fetch('https://gigappdb-production.up.railway.app/api/v1/listings', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched Listings:', data)
        return data
    } catch (error) {
        console.error('Error fetching listings:', error);
        return null
    }
}
