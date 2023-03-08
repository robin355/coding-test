import React, { useState } from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';
import './ProblemTwo.css'
function ProblemTwo() {
    const [showAllContactsModal, setShowAllContactsModal] = useState(false);
    const [showUSContactModal, setShowUSContactModal] = useState(false);
    const [onlyEven, setOnlyEven] = useState(false);

    const handleAllContactsClick = () => {
        setShowAllContactsModal(true);
    };

    const handleUSContactClick = () => {
        setShowUSContactModal(true);
    };

    const handleCloseClick = () => {
        setShowAllContactsModal(false);
        setShowUSContactModal(false);
    };

    const handleCheckboxChange = (event) => {
        setOnlyEven(event.target.checked);
    };

    return (
        <div className='p-[200px]'>
            <button className='btn btn-primary' onClick={handleAllContactsClick}>All Contacts</button>
            <button className='btn btn-primary ml-5' onClick={handleUSContactClick}>US Contact</button>

            {showAllContactsModal && (
                <ModalA onClose={() => setShowAllContactsModal(false)}>
                    <button onClick={handleUSContactClick}>US Contact</button>
                    <button onClick={handleCloseClick}>Close</button>
                </ModalA>
            )}

            {showUSContactModal && (
                <ModalB onClose={() => setShowUSContactModal(false)}>

                    <button onClick={handleAllContactsClick}>All Contacts</button>
                    <button onClick={handleCloseClick}>Close</button>
                </ModalB>
            )}

            <div style={{ marginTop: '20px' }}>
                <label>
                    <input type="checkbox" checked={onlyEven} onChange={handleCheckboxChange} />
                    Only Even
                </label>
            </div>
        </div>
    );
}

export default ProblemTwo;
