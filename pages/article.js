import AppShell from '../components/AppShell/AppShell';
import Article from '../features/article';
import Menu from '../components/Menu/Menu';

function articleChapitre({ slug, articleSlug }) {
  const menu = <Menu slug={slug} />;
  const article = <Article slug={slug} articleSlug={articleSlug} />;
  return <AppShell appHeader={menu} appContent={article} />;
}

articleChapitre.getInitialProps = ({ query: { slug, articleSlug } }) => ({ slug, articleSlug });

export default articleChapitre;
