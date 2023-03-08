import React, { useEffect, useState } from 'react';

const ModalB = () => {
    const [Country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/?format=json')
            .then(res => res.json())
            .then(data => setCountry(data.results.slice(0, 4)))
    }, [])
    return (
        <div>
            {
                Country.map(country => <li key={country.id}>{(country.country.name)}</li>)
            }
        </div>
    );
};

export default ModalB;