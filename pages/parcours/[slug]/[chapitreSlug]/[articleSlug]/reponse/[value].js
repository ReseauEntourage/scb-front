import { getArticle } from '../../../../../../api';
import AppShell from '../../../../../../components/AppShell/AppShell';
import Explanation from '../../../../../../features/explanation';

export default function ExplanationPage({ article, slug, value }) {
  return <AppShell
    appContent={
      <Explanation article={article} slug={slug} value={value} />
    }
  />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params: { articleSlug, slug, value } }) {
  return {
    props: {
      article: await getArticle(articleSlug),
      slug,
      value,
    }
  }
}
