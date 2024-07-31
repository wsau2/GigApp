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

export async function postListing(title:string, description:string, pay:number, duration:number) {
    try {
        const response = await fetch('https://gigappdb-production.up.railway.app/api/v1/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                pay: pay,
                duration: duration,
                creator: "CREATOR",
            })
        })

        if (!response.ok) {
            const errorDetails = await response.json();
            console.error('Error details:', errorDetails);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched Listings:', data)
        return data;

    } catch (error) {
        console.error('Error posting listings:', error);
        return null
    }
}