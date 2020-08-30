import AppShell from '../components/AppShell/AppShell';
import Conclusion from '../features/conclusion';
import Menu from '../components/Menu/Menu';

function parcourConclusion({ slug }) {
  const menu = <Menu slug={slug} index={"conclusion"} />;
  const conclusion = <Conclusion slug={slug}/>;
  return <AppShell appHeader={menu} appContent={conclusion} />;
}

parcourConclusion.getInitialProps = ({ query: { slug } }) => ({ slug });

export default parcourConclusion;
