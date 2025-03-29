import '../styles/sidebar.css'

function Sidebar({ show }) {
    return (
        <div className={`sidebar ${show ? 'show' : ''}`}>
            <h2>CRM</h2>
            <nav>
                <a href="#">Dashboard</a>
                <a href="#">Contacts</a>
                <a href="#">Settings</a>
            </nav>
        </div>
    );
}

export default Sidebar;
