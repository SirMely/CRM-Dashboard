import { useState } from "react";
import '../styles/add-contact-form.css'

function AddContactForm({onAdd}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) return;

        const newContact = {
            id: Date.now(), // User ID (got from google ;)
            name,
            email,
            status 
        };

        onAdd(newContact);

        // Resets form
        setName('');
        setEmail('');
        setStatus('Active');
    };

    return (
        <form className="add-contact-form" onSubmit={handleSubmit}>
            <h3>Add New Contact</h3>
            <input 
            type="text" 
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <select value={status} onChange={(e => setStatus(e.target.value))}>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
            </select>
            <button type="submit">Add Contact</button>
        </form>
    );
}

export default AddContactForm