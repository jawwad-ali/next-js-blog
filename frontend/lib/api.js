export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
        }${path}`
}

// helper function that make GET request to the strapi
export async function fetchAPI(path) {
    const requestURL = getStrapiURL(path)
    const response = await fetch(requestURL)
    const data = await response.json()
    return data
}