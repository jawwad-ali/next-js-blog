import Articles from "../component/article"
import Layout from "../component/layout"
import Seo from "../component/seo"
import { fetchAPI } from "../lib/api"

export default function Home({ articles, categories, homepage }) {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // RUN API CALLS IN THE PARALLEL
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}