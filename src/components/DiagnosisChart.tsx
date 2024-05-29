import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Col, Row } from 'antd';
import '../styles/DiagnosisChart.css';
import respiratory from "../images/svg/respiratory rate.svg"
import heart from "../images/svg/HeartBPM.svg"
import temp from "../images/svg/temperature.svg"


const data = [
    { name: 'Oct 2023', systolic: 120, diastolic: 80, temperature: 98.6 },
    { name: 'Nov 2023', systolic: 130, diastolic: 85, temperature: 99.0 },
    { name: 'Dec 2023', systolic: 110, diastolic: 75, temperature: 98.2 },
    { name: 'Jan 2024', systolic: 140, diastolic: 90, temperature: 98.8 },
    { name: 'Feb 2024', systolic: 135, diastolic: 88, temperature: 99.5 },
    { name: 'Mar 2024', systolic: 150, diastolic: 95, temperature: 99.2 },
];

const DiagnosisChart: React.FC = () => {
    return (
        <div className='div'>
            <ResponsiveContainer width="100%" height={300} className="chart">
                <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
                    <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
                </LineChart>
            </ResponsiveContainer>

            <div  className='div2'></div>
            <div>
                <Row className='row'>
                    <Col  className="box1" >
                        <Row>
                        <img src={respiratory} alt="Respiratory Rate" className='img'/>
                        </Row>
                        <Row>
                        <p className='img'>Respiratory Rate</p>
                        </Row>
                        <Row  style={{marginTop:-20}}>
                        <h2 className='img'><b>20 bpm</b></h2>
                        </Row>
                        <Row style={{marginTop:-25}}>
                        <p className='img'>Normal</p>
                        </Row>
                       
                    </Col>
                    <Col  className="box2" >
                        <Row>
                        <img src={temp} alt="Temperature Rate" className='img'/>
                        </Row>
                        <Row>
                        <p className='img'>Temperature</p>
                        </Row>
                        <Row style={{marginTop:-20}}>
                        <h2 className='img'><b>98.6 F</b></h2>
                        </Row>
                        <Row style={{marginTop:-25}}>
                        <p className='img'>Normal</p>
                        </Row>
                       
                    </Col>
                    <Col  className="box3" >
                        <Row>
                        <img src={heart} alt="Heart Rate" className='img'/>
                        </Row>
                        <Row>
                        <p className='img'>Heart Rate</p>
                        </Row>
                        <Row  style={{marginTop:-20}}>
                        <h2 className='img'><b>78 bpm</b></h2>
                        </Row>
                        <Row style={{marginTop:-25}}>
                        <p className='img'>Lower than Average</p>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default DiagnosisChart;
