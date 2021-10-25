import Image from "next/image"
import Link from "next/link"
import { getStrapiMedia } from "../lib/media"

const Card = ({ article }) => {
    return (
        <Link as={`/article/${article.slug}`} href="/article/[id]">
            <a className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <img
                            src={getStrapiMedia(article.image)}
                            alt="image"
                        />
                    </div>
                    <div className="uk-card-body">
                        <p className="uk-text-uppercase" id="category">
                            {article.category.name}
                        </p>
                        <p className="uk-text-large" id="title">
                            {article.title}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    )
}
export default Card