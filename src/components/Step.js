import React from 'react';

const Step = ({ step, formData, handleChange }) => {
    switch (step) {
        case 1:
            return (
                <div>
                    <h2>Step 1: Personal Information</h2>
                    <label>
                        First Name:
                        <input
                            type="text"
                            id="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            id="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            );
        case 2:
            return (
                <div>
                    <h2>Step 2: Car Information</h2>
                    <label>
                        Car Model:
                        <input
                            type="text"
                            id="model"
                            value={formData.model}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Car Price:
                        <input
                            type="number"
                            id="car_price"
                            value={formData.car_price}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            );
        case 3:
            return (
                <div>
                    <h2>Step 3: Payment Information</h2>
                    <label>
                        Card Information:
                        <input
                            type="text"
                            id="card_info"
                            value={formData.card_info}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Expiry Date:
                        <input
                            type="text"
                            id="expiry_date"
                            value={formData.expiry_date}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            );
        default:
            return null;
    }
};

export default Step;