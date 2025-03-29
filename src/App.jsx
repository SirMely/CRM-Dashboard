import {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import DashboardCards from './components/DashboardCards.jsx'
import contacts from './data/contacts.js'
import ContactsTable from './components/ContactsTable.jsx'
import AddContactForm from './components/AddContactForm.jsx'
import './styles/main.css'

function App() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const total = contacts.length;
    const active = contacts.filter(c => c.status === 'Active').length;
    const inactive = contacts.filter(c => c.status === 'Inactive').length;

    setStats([
      { label: 'Total Contacts', value: total},
      { label: 'Active Contacts', value: active},
      { label: 'Inactive Contacts', value: inactive},
    ]);
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts([newContact, ...contacts]);
  }

  const handleDeleteContact = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this contact?");
    if (confirmed) {
      setContacts(contacts.filter(contact => contact.id !== id));
    }
  };

  return (
     <div className='main-layout'>
      <Sidebar></Sidebar>
      <div className='main-content'>
        <Topbar></Topbar>
        <main style={{ padding: '1rem'}}>
          <h2>Welcome to your CRM Dashboard</h2>
          <DashboardCards stats={stats}></DashboardCards>
          <AddContactForm onAdd={handleAddContact}></AddContactForm>
          <ContactsTable contacts={contacts} onDelete={handleDeleteContact}></ContactsTable>
        </main>
      </div>
     </div>
  );
}

export default App
