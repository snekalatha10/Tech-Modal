import React from 'react';
import DiagnosisChart from './DiagnosisChart';
import PatientDetails from './PatientDetails';
import '../styles/MainContent.css';

const MainContent: React.FC = () => {
    return (
        <main className="main-content">
            <section className="diagnosis-history">
                <h2>Diagnosis History</h2>
                <DiagnosisChart />
            </section>
                <PatientDetails />
        </main>
    );
};

export default MainContent;
