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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const nextStep = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="App">
            <h1>Multi-Step Form</h1>
            <form onSubmit={handleSubmit}>
                <Step
                    step={currentStep}
                    formData={formData}
                    handleChange={handleChange}
                />

                <div className="buttons" style={{ marginTop: '20px' }}>
                    {currentStep > 1 && (
                        <button id="back" type="button" onClick={prevStep}>
                            Previous
                        </button>
                    )}

                    {currentStep < 3 && (
                        <button id="next" type="button" onClick={nextStep}>
                            Next
                        </button>
                    )}

                    {currentStep === 3 && (
                        <button id="submit" type="submit">
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default App;