import { Col, Row } from 'react-bootstrap';
import Cards from './Cards';
import MenuBar from './MenuBar';
import styles from './styles/dashboard.module.css';
import { useState } from 'react';
import { FaBell, FaCirclePlus } from 'react-icons/fa6';

const data = [
    {
        title: "Basic",
        oldPrice: 89,
        price: 9,
        btBgColor: "#f2b583",
        benifit: {
            users: 25,
            storage: 25,
            email: "Email support"
        }
    },
    {
        title: "Standard",
        oldPrice: 89,
        price: 9,
        btBgColor: "#f58071",
        benifit: {
            users: 25,
            storage: 25,
            email: "Email support"
        }
    },
    {
        title: "Premium",
        oldPrice: 89,
        price: 9,
        btBgColor: "#efaffa",
        benifit: {
            users: 25,
            storage: 25,
            email: "Email support"
        }
    },
]
const dataOne = [
    {
        title: "Free Starter",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis accusamus adipisci neque.",
        btBgColor: "#93faa5",
        status: "Free forever",
        button: "Get Stated",
        benifit: {
            users: 8,
            storage: 3,
            email: "Email support",
            done: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis accusamus adipisci neque."
        }
    },
    {
        title: "Enterprise Plan",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis accusamus adipisci neque.",
        btBgColor: "#afc3ed",
        status: "Let's connect",
        button: "Contact Us",
        benifit: {
            users: 75,
            storage: null,
            email: null,
            done: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis accusamus adipisci neque."
        }
    },
]

export default function DashBoard() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateScreenWidth);

    return <div id={styles.dashboardContainer}>
        {screenWidth > 1000 &&
            <MenuBar />
        }
        <div style={{ width: '100%' }}>
            <div id={screenWidth < 800 ? styles.dashboardTitleColumn : styles.dashboardTitleRow}>
                <h3>Choose a plan that's just right for you!</h3>
                <div id={styles.dashboardSelection}>
                    <div>
                        <span>Monthly</span>
                    </div>
                    <div>
                        <span>Annually</span>
                    </div>
                </div>
            </div>
            <div id={styles.cardsContainer}>
                <Row >
                    {
                        data.map((cValue) => (
                            <Col className='mb-3'>
                                <Cards data={cValue} key={cValue.title} status={{ isOtherCards: false }} />

                            </Col>
                        ))
                    }
                </Row>
                <Row>
                    {
                        dataOne.map((cValue) => (
                            <Col className='mb-3'>
                                <Cards status={{ isOtherCards: true }} dataOne={cValue} data={data[0]} key={cValue.title} />
                            </Col>
                        ))
                    }
                </Row>
            </div>

        </div>
        {
            screenWidth > 1000 && <div id={styles.dashboardEndItem}>
                <div style={{ background: "#fff", width: "3rem", height: "3rem", padding: "0.5rem", borderRadius: '2px' }}>
                    <FaBell fontSize={40} color='blue' />
                </div>
                <div>
                    <div id={styles.dashboardSquare}></div>
                    <div ><FaCirclePlus fontSize={40} /></div>
                </div>
            </div>

        }

    </div>
}