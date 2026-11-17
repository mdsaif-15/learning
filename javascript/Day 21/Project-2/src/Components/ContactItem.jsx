import "./ContactItem.css";

const ContactItems = () => {
    return (
        <div className="contact-header-row main-div">
            <div className="name-div">
                <h4>Name</h4>
            </div>
            <div className="phone-div">
                <h4>Phone No.</h4>
            </div>
            <div className="email-div">
                <h4>Email</h4>
            </div>
            <div className="category-div">
                <h4>Category</h4>
            </div>
            <div className="action-div">
                <h4>Action</h4>
            </div>
        </div>
    );
};

export default ContactItems;
