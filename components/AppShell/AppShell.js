import './AppShell.scss';

function AppShell({ appHeader, appContent, appFooter }) {
  return (
    <div className="app-shell">
      <div className="app-shell__header">
        {appHeader}
      </div>
      <div className="app-shell__content">
        {appContent}
      </div>
      <div className="app-shell__footer">
        {appFooter}
      </div>
    </div>
  );
}

export default AppShell;
