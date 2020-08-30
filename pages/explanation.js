import AppShell from '../components/AppShell/AppShell';
import Explanation from '../features/explanation';

function explanation ({ slug, articleSlug, value }) {
  const response = <Explanation slug={slug} articleSlug={articleSlug} value={value} />
  return <AppShell appContent={response} />;
}

explanation.getInitialProps = ({ query: { slug, articleSlug, value } }) => ({ slug, articleSlug, value });

export default explanation;
