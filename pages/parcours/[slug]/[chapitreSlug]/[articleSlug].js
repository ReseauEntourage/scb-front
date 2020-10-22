import { getArticle } from '../../../../api';
import AppShell from '../../../../components/AppShell/AppShell';
import Article from '../../../../features/article';
import Menu from '../../../../components/Menu/Menu';

export default function ArticlePage({ article, slug }) {
  console.log('ArticlePage', article);
  return <AppShell 
    appHeader={
      <Menu slug={slug} />
    }
    appContent={
      <Article slug={slug} article={article} />
    }
  />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params: { articleSlug, slug } }) {
  const article = await getArticle(articleSlug);
  console.log('getStaticProps article', article);
  return { props: { article, slug } };
}
