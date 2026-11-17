import { useState } from "react";
import "./AddContactForm.css";

const AddContactForm = ({ onAddContact, onCancel }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^[0-9]{10,}$/.test(phone.trim().replace(/[\s\-+()]/g, ""))) {
            newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!category) {
            newErrors.category = "Please select a category.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onAddContact({
                name: name.trim(),
                phone: phone.trim(),
                email: email.trim(),
                category: category
            });
            setName("");
            setPhone("");
            setEmail("");
            setCategory("");
            setErrors({});
        }
    };

    return (
        <form className="add-contact-form-container" onSubmit={handleSubmit}>
            <h3 className="form-title">Add New Contact</h3>

            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label>Phone:</label>
                <input
                    type="text"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label>Category:</label>
                <select
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        if (errors.category) setErrors({ ...errors, category: "" });
                    }}
                >
                    <option value="">Select Category</option>
                    <option value="Friends">Friends</option>
                    <option value="Family">Family</option>
                    <option value="Work">Work</option>
                    <option value="Other">Other</option>
                </select>
                {errors.category && <span className="error-text">{errors.category}</span>}
            </div>

            <div className="form-actions">
                <button type="submit" className="submit-btn">
                    Save Contact
                </button>
                <button type="button" className="cancel-btn" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default AddContactForm;
