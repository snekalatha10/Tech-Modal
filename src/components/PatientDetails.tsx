import React, { useState, useEffect } from 'react';
import '../styles/PatientDetails.css';
import { CalendarOutlined, PhoneOutlined, PropertySafetyOutlined, WomanOutlined } from '@ant-design/icons';
import { Button, Row } from 'antd';


interface PatientData {
    name: string;
    date_of_birth: string;
    gender: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
    profile_picture: string;
}

const PatientDetails: React.FC = () => {
    const [data, setData] = useState<PatientData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev/', {
                    headers: {
                        'Authorization': 'Basic ' + btoa('coalition:skills-test')
                    }
                });
                const jsonData = await response.json();

                const jessicaTaylorData = jsonData.filter((item: PatientData) => item.name === 'Jessica Taylor')[0];
                console.log('Jessica Taylor Data:', jessicaTaylorData);

                setData(jessicaTaylorData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="patient-details">
            <Row >
                <div className='profile'>
                    <img src={data.profile_picture} alt="Jessica Taylor" />
                </div>
            </Row>

            <h2 style={{textAlign:"center"}}>{data.name}</h2>
            <ul>
                <li>
                    <li><CalendarOutlined className='icon'/><b>Date Of Birth</b></li>
                    <li className='data'>{data.date_of_birth}</li> 
                </li>
                <li>
                    <li> <WomanOutlined className='icon'/><b>Gender</b></li>
                    <li className='data'>{data.gender}</li> 
                </li>
                <li>
                    <li><PhoneOutlined className='icon'/><b>Contact Info</b></li>
                    <li className='data'>{data.phone_number}</li> 
                </li>
                <li>
                    <li><PhoneOutlined className='icon'/><b>Emergency Contacts</b></li>
                    <li className='data'>{data.emergency_contact}</li> 
                </li>
                <li>
                    <li><PropertySafetyOutlined className='icon'/><b>Insurance Provider</b></li>
                    <li className='data'>{data.insurance_type}</li> 
                </li>
            </ul>
            <div className='image'>
            <Button className='btn'>Show All Information</Button>
            </div>
        </div>
    );
};

export default PatientDetails;
