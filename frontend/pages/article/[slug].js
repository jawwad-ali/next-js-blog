import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../component/layout"
import Seo from "../../component/seo"
import { getStrapiMedia } from "../../lib/media"

const Article = ({ article, categories }) => {
    const seo = {
        metaTitle: article.title,
        metaDescription: article.description,
        shareImage: article.image,
        article: true
    }
    return (
        <>
            <Layout categories={categories}>
                <Seo seo={seo} />
                <div className="uk-section">
                    <div className="uk-container uk-container-small">
                        <div className="uk-grid-small uk-flex-start" data-uk-grid="true">
                            <div>
                                {article.author.picture && (
                                    <img src={getStrapiMedia(article.image)} alt="image" />
                                )}
                            </div>
                            <div className="uk-width-expand">
                                <p className="uk-margin-remove-bottom">
                                    By {article.author.name}
                                </p>
                                <p className="uk-text-meta uk-margin-remove-top">
                                    <Moment format="MMM Do YYYY" />{article.published_at} Moment
                                </p>
                            </div>
                        </div>
                        <ReactMarkdown children={article.content} skipHtml={false} />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const getStaticPaths = async () => {
    const articles = await fetchAPI("/articles")

    return {
        paths: articles.map((article) => ({
            params: {
                slug: article.slug
            }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const articles = await fetchAPI(`/articles?slug=${params.slug}`)
    const categories = await fetchAPI("/categories")

    return {
        props: {
            article: articles[0], categories
        },
        revalidate: 1
    }
}

export default Article