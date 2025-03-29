import '../styles/topbar.css'

function Topbar({ onToggleSidebar }) {
  return (
    <header className="topbar">
      <button className="hamburger" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1>Dashboard</h1>
      <div className="avatar" />
    </header>
  );
}

export default Topbar;
