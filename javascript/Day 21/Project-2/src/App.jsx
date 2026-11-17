import { useState } from "react";
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import ContactDetail from "./Components/ContactDetail";
import AddContactForm from "./Components/AddContactForm";
import "./App.css";

const initialContacts = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "9876543210",
    email: "rahul@work.com",
    category: "Work"
  },
  {
    id: 2,
    name: "Priya Mehta",
    phone: "9123456780",
    email: "priya@gmail.com",
    category: "Friends"
  },
  {
    id: 3,
    name: "Amit Das",
    phone: "9000011122",
    email: "amit@family.com",
    category: "Family"
  },
  {
    id: 4,
    name: "Sneha Roy",
    phone: "8899001122",
    email: "sneha@office.com",
    category: "Work"
  },
  {
    id: 5,
    name: "Dev Kumar",
    phone: "7778889990",
    email: "dev@gmail.com",
    category: "Friends"
  },
  {
    id: 6,
    name: "Nita Ghosh",
    phone: "9988776655",
    email: "nita@home.com",
    category: "Family"
  }
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedContact, setSelectedContact] = useState(null);
  const [showAddContact, setShowAddContact] = useState(false);

  const handleAddContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: Date.now()
    };
    setContacts([contactWithId, ...contacts]);
    setShowAddContact(false);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    if (selectedContact && selectedContact.id === id) {
      setSelectedContact(null);
    }
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseDetail = () => {
    setSelectedContact(null);
  };

  const handleToggleAddContact = () => {
    setShowAddContact((prev) => !prev);
  };

  // Filter contacts by Category AND Search Query (case-insensitive name or phone)
  const query = searchTerm.trim().toLowerCase();
  const filteredContacts = contacts.filter((contact) => {
    const matchesCategory =
      selectedCategory === "All" ||
      contact.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      query === "" ||
      contact.name.toLowerCase().includes(query) ||
      contact.phone.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app-container main-div">
      {selectedContact ? (
        <ContactDetail
          contact={selectedContact}
          onClose={handleCloseDetail}
        />
      ) : (
        <>
          <h2 className="app-title">Contact Directory</h2>

          <Header
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onToggleAddContact={handleToggleAddContact}
            showAddContact={showAddContact}
          />

          {showAddContact && (
            <AddContactForm
              onAddContact={handleAddContact}
              onCancel={() => setShowAddContact(false)}
            />
          )}

          <div className="table-container">
            <ContactList
              contacts={filteredContacts}
              totalContactsCount={contacts.length}
              onSelectContact={handleSelectContact}
              onDeleteContact={handleDeleteContact}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
