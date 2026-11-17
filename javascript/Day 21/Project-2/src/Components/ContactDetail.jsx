import "./ContactDetail.css";

const ContactDetail = ({ contact, onClose }) => {
    if (!contact) return null;

    return (
        <div className="contact-detail-page">
            <div className="detail-header">
                <span className="detail-title">Contact Details</span>
                <button className="close-btn" onClick={onClose}>
                    Close
                </button>
            </div>

            <div className="detail-card">
                <div className="detail-row">
                    <span className="detail-label">Full Name:</span>
                    <span className="detail-value">{contact.name}</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Phone Number:</span>
                    <span className="detail-value">{contact.phone}</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Email Address:</span>
                    <span className="detail-value">{contact.email}</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Category:</span>
                    <span className="detail-value">{contact.category}</span>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;
