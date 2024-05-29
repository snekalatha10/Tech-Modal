import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';

interface Patient {
    name: string;
    gender: string;
    age: number;
    profile_picture: string;
    active?: boolean;
}

const Sidebar: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('coalition:skills-test')
            }
        };
    
        fetch('https://fedskillstest.coalitiontechnologies.workers.dev/', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setPatients(data);
                } else {
                    console.error('Invalid data format:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);    

    return (
        <aside className="sidebar">
            <h2>Patients</h2>
            <ul className="patient-list">
                {Array.isArray(patients) && patients.slice(0, 15).map((patient, index) => (
                    <li key={index} className={patient.active ? 'active' : ''}>
                        <img src={patient.profile_picture} alt={patient.name} />
                        <div>
                            <p>{patient.name}</p>
                            <p>{patient.gender}, {patient.age}</p>
                        </div>
                        <button className='button'>...</button>                       
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
