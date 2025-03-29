import {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import DashboardCards from './components/DashboardCards'
import ContactsTable from './components/ContactsTable'
import AddContactForm from './components/AddContactForm'
import initialContacts from './data/contacts'
import './styles/main.css'

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [stats, setStats] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const total = contacts.length;
    const active = contacts.filter(c => c.status === 'Active').length;
    const inactive = contacts.filter(c => c.status === 'Inactive').length;

    setStats([
      { label: 'Total Contacts', value: total },
      { label: 'Active Contacts', value: active },
      { label: 'Inactive Contacts', value: inactive },
    ]);
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts(prev => [newContact, ...prev]);
  };

  const handleDeleteContact = (id) => {
    const confirmed = window.confirm("Delete this contact?");
    if (confirmed) {
      setContacts(prev => prev.filter(contact => contact.id !== id));
    }
  };

  return (
    <div className="main-layout">
      <Sidebar show={showSidebar} />
      <div className="main-content">
        <Topbar onToggleSidebar={() => setShowSidebar(prev => !prev)} />
        <main>
          <h2>Welcome to your CRM Dashboard</h2>
          <DashboardCards stats={stats} />
          <AddContactForm onAdd={handleAddContact} />
          <ContactsTable contacts={contacts} onDelete={handleDeleteContact} />
        </main>
      </div>
    </div>
  );
}

export default App;
