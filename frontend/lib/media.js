import { getStrapiURL } from "./api"

export function getStrapiMedia(media) {
    const imageURLLLL = media?.url.startsWith("/") ? getStrapiURL(media?.url) : media.url
    return imageURLLLL
}