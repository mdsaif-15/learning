import ContactCart from "./ContactCart";
import ContactItems from "./ContactItem";
import "./ContactList.css";

const ContactList = ({
    contacts,
    totalContactsCount,
    onSelectContact,
    onDeleteContact
}) => {
    if (totalContactsCount === 0) {
        return (
            <div className="empty-state-container">
                <p className="empty-state-text">No contacts exist. Click 'Add Contact' to add your first contact.</p>
            </div>
        );
    }

    if (contacts.length === 0) {
        return (
            <div className="empty-state-container">
                <p className="empty-state-text">No contacts found matching your search or filter.</p>
            </div>
        );
    }

    return (
        <div className="contact-list-container">
            <ContactItems />
            {contacts.map((contact) => (
                <ContactCart
                    key={contact.id}
                    contact={contact}
                    onSelectContact={onSelectContact}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </div>
    );
};

export default ContactList;
