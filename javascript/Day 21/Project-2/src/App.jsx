import { useState } from "react";
import Header from "./Components/Header";
import ContactItems from "./Components/ContactItem";
import ContactList from "./Components/ContactList";
import ContactDetail from "./Components/ContactDetail";
import "./App.css";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="app-container main-div">
      {selectedContact ? (
        <ContactDetail
          contact={selectedContact}
          onBack={() => setSelectedContact(null)}
        />
      ) : (
        <>
          <h2 className="app-title">Contact Directory</h2>
          <Header />
          <div className="table-container">
            <ContactItems />
            <ContactList onSelectContact={setSelectedContact} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
