import { getStrapiMedia } from "../lib/media"

const Image = ({ image, style }) => {
    const imageURL = getStrapiMedia(image)
    return (
        <img src={imageURL} alt={image.alternativeText || image.name} style={style} />
    )
}
export default Image