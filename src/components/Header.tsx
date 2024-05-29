import React from 'react';
import '../styles/Header.css';
import logo from '../images/svg/TestLogo.svg';
import transaction from '../images/svg/transaction.svg';
import people from '../images/svg/people.svg';
import home from '../images/svg/home.svg';
import calendar from '../images/svg/calendar.svg';
import message from '../images/svg/message.svg';
import doctor from '../images/png/doctor.png';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Tech.Care" />
            </div>
            <nav className="nav">
                <ul>
                    <li><img src={home} style={{marginRight:10}}/>Overview</li>
                    <li className="active"> <img src={people}  style={{marginRight:10}} />Patients</li>
                    <li><img src={calendar}  style={{marginRight:10}}/>Schedule</li>
                    <li><img src={message}  style={{marginRight:10}}/>Message</li>
                    <li><img src={transaction}  style={{marginRight:10}}/>Transactions</li>
                </ul>
            </nav>
            <div className="profile">
                <img src={doctor} className='doctor'/>
                <div className="profile-info">
                    <ul style={{marginLeft:-25}}>
                        <li>
                        <p>Dr. Jose Simmons</p>
                        </li>
                        <li>
                        <p>General Practitioner</p>
                        </li>
                    </ul>
                </div>
                <button className="settings">⚙️</button>
                <button className="more">⋮</button>
            </div>
           
        </header>
    );
};

export default Header;
