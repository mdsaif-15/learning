import { useState } from "react";
import ContactCart from "./ContactCart";
import "./ContactList.css";

const ContactList = ({ onSelectContact }) => {
    const [contacts] = useState([
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
        },
    ]);

    return (
        <div className="contact-list-container">
            {contacts.map((contact) => (
                <ContactCart
                    key={contact.id}
                    contact={contact}
                    onSelectContact={onSelectContact}
                />
            ))}
        </div>
    );
};

export default ContactList;
