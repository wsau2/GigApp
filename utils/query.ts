// Fetches listings from api
export async function fetchListings() {
    const response = await fetch('https://gigappdb-production.up.railway.app/api/v1/listings', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return queryHelper(response);
}

export async function postListing(title:string, description:string, pay:number, duration:number, creator:string) {
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
            creator: creator,
        })
    })

    return queryHelper(response);
}

export async function fetchUsers() {
    const response = await fetch('https://gigappdb-production.up.railway.app/api/v1/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return queryHelper(response);
}

export async function fetchUser(_id: string) {
    console.log(_id)

    const response = await fetch('https://gigappdb-production.up.railway.app/api/v1/users/' + _id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    return queryHelper(response);
}

async function queryHelper(response: Response) {
    try {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);
        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}