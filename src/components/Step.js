import React from 'react';

const Step = ({ step, formData, handleChange }) => {
    switch (step) {
        case 1:
            return (
                <div id="step1">
                    <h2>Step 1: Personal Information</h2>
                    <label htmlFor="first_name">First Name:</label>
                    <input
                        type="text"
                        id="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        type="text"
                        id="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                </div>
            );

        case 2:
            return (
                <div id="step2">
                    <h2>Step 2: Car Information</h2>
                    <label htmlFor="model">Car Model:</label>
                    <input
                        type="text"
                        id="model"
                        value={formData.model}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="car_price">Car Price:</label>
                    <input
                        type="number"
                        id="car_price"
                        value={formData.car_price}
                        onChange={handleChange}
                    />
                </div>
            );

        case 3:
            return (
                <div id="step3">
                    <h2>Step 3: Payment Information</h2>
                    <label htmlFor="card_info">Card Information:</label>
                    <input
                        type="text"
                        id="card_info"
                        value={formData.card_info}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="expiry_date">Expiry Date:</label>
                    <input
                        type="text"
                        id="expiry_date"
                        value={formData.expiry_date}
                        onChange={handleChange}
                    />
                </div>
            );

        default:
            return null;
    }
};

export default Step;