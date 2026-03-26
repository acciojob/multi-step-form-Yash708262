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

    // Function to handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Function to go to the next step
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    // Function to go to the previous step
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Here you can handle the submission (e.g., send to server)
    };

    return (
        <div>
            <h1>Multi-Step Form</h1>
            <form onSubmit={handleSubmit}>
                <Step
                    step={currentStep}
                    formData={formData}
                    handleChange={handleChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
                {currentStep < 3 && <button type="button" onClick={nextStep}>Next</button>}
                {currentStep > 1 && <button type="button" onClick={prevStep}>Previous</button>}
                {currentStep === 3 && <button type="submit">Submit</button>}
            </form>
        </div>
    );
};

export default App;