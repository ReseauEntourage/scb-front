import './AppShell.scss';

function AppShell(props) {
  return (
    <div className="app-shell">
      <div className="app-shell__header">
        {props.appHeader}
      </div>
      <div className="app-shell__content">
        {props.appContent}
      </div>
    </div>
  );
}

export default AppShell;
