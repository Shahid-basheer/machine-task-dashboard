import styles from './styles/header.module.css';
import cd from '../assets/cd.png'
import pImg from "../assets/p.png"
import {FaChevronDown} from 'react-icons/fa6'
import { useState } from 'react';
export default function Header(){
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
  window.addEventListener('resize', updateScreenWidth);
    return <div id={screenWidth < 700 ?styles.headerContainerColumn:styles.headerContainerRow}>
      <div className="img">
        <div id={styles.headerLogo}>
        </div>
      </div>
      <div id={styles.profileContainer}>
        <div id={styles.headerSelection}>
            <img src={cd} alt="image" />
           <span>XYZ Enterprises Pvt Ltd</span> 
        </div>
        <div id={styles.headerArrow}>
            <FaChevronDown/>
        </div>
      </div>
      <div style={{position:"absolute",top:0}}>
        <img src={pImg} width={400} height={150} alt="" />
      </div>
    </div>
}