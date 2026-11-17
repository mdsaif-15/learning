import "./ContactCart.css";

const ContactCart = ({ contact, ContactList, onSelectContact, onDeleteContact }) => {
    const item = contact || ContactList;
    if (!item) return null;

    return (
        <div className="contact-cart-row main-div">
            <div className="name-div">
                <h4>{item.name}</h4>
            </div>
            <div className="phone-div">
                <h4>{item.phone}</h4>
            </div>
            <div className="email-div">
                <h4>{item.email}</h4>
            </div>
            <div className="category-div">
                <span className="category-badge">{item.category}</span>
            </div>
            <div className="action-div">
                <button
                    className="view-detail-btn"
                    onClick={() => onSelectContact && onSelectContact(item)}
                >
                    View Details
                </button>
                <button
                    className="delete-btn"
                    onClick={() => onDeleteContact && onDeleteContact(item.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCart;
