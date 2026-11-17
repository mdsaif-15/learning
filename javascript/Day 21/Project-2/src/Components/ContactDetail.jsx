import "./ContactDetail.css";

const ContactDetail = ({ contact, onBack }) => {
    if (!contact) return null;

    const initials = contact.name
        ? contact.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
        : "?";

    return (
        <div className="contact-detail-page">
            <div className="detail-header">
                <button className="back-button" onClick={onBack}>
                    &larr; Back to Contacts
                </button>
                <span className="detail-title">Contact Profile</span>
            </div>

            <div className="detail-card">
                <div className="profile-banner">
                    <div className="avatar-circle">
                        {initials}
                    </div>
                    <div className="banner-info">
                        <h3>{contact.name}</h3>
                        <span className="category-badge">{contact.category}</span>
                    </div>
                </div>

                <div className="detail-body">
                    <div className="detail-row">
                        <span className="detail-label">Full Name</span>
                        <span className="detail-value">{contact.name}</span>
                    </div>

                    <div className="detail-row">
                        <span className="detail-label">Phone Number</span>
                        <a href={`tel:${contact.phone}`} className="detail-value detail-link">
                            {contact.phone}
                        </a>
                    </div>

                    <div className="detail-row">
                        <span className="detail-label">Email Address</span>
                        <a href={`mailto:${contact.email}`} className="detail-value detail-link">
                            {contact.email}
                        </a>
                    </div>

                    <div className="detail-row">
                        <span className="detail-label">Category</span>
                        <span className="detail-value">{contact.category}</span>
                    </div>

                    <div className="detail-row">
                        <span className="detail-label">Contact ID</span>
                        <span className="detail-value">#{contact.id}</span>
                    </div>
                </div>

                <div className="detail-actions">
                    <a href={`tel:${contact.phone}`} className="action-btn call-btn">
                        Call Contact
                    </a>
                    <a href={`mailto:${contact.email}`} className="action-btn email-btn">
                        Send Email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;
