import React, { useState } from 'react';
import Step from './Step';

const App = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        model: '',
        car_price: '',
        card_info: '',
        expiry_date: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    // ✅ FIXED (important)
    const nextStep = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>Multi-Step Form</h1>

            <form onSubmit={handleSubmit}>
                <Step
                    step={currentStep}
                    formData={formData}
                    handleChange={handleChange}
                />

                {/* ✅ IMPORTANT: text must match Cypress */}
                {currentStep < 3 && (
                    <button type="button" onClick={nextStep}>
                        Next
                    </button>
                )}

                {currentStep > 1 && (
                    <button type="button" onClick={prevStep}>
                        Previous
                    </button>
                )}

                {currentStep === 3 && (
                    <button type="submit">
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
};

export default App;