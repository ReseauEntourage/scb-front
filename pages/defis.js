import AppShell from '../components/AppShell/AppShell';
import Defis from '../features/defis';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';

import { withRouter } from 'next/router';

function defis() {
  return <AppShell 
    appHeader={
      <Menu slug={null} />
    }
    appContent={
      <Defis />
    }
    appFooter={
      <Footer />
    }
  />;
}

export default withRouter(defis);
