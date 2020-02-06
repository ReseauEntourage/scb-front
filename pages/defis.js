import AppShell from '../components/AppShell/AppShell';
import Defis from '../components/Defis/Defis';
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
  />
}

export default withRouter(defis);
