import { Fragment } from 'react';
import data from '../data.json';
import styles from './styles/menubar.module.css'
import { FaFlipboard, FaFan, FaPuzzlePiece, FaCircleQuestion, FaCircleInfo, FaPowerOff } from 'react-icons/fa6'
const renderTags = (tags, key) => {
    switch (tags) {
        case "FaFlipboard":
            return <div><FaFlipboard fontSize={26} color='darkblue' /><span>{key}</span></div>
        case "FaFan":
            return <div><FaFan fontSize={26} color='darkblue' /><span>{key}</span></div>
        case "FaCircleInfo":
            return <div><FaCircleInfo fontSize={26} color='darkblue' /><span>{key}</span></div>
        case "FaCircleQuestion":
            return <div><FaCircleQuestion fontSize={26} color='darkblue' /><span>{key}</span></div>
        case "FaPazzlePiece":
            return <div><FaPuzzlePiece fontSize={26} color='darkblue' /><span>{key}</span></div>
        default:
            null
    }
}
export default function MenuBar() {
    return <div id={styles.menubarContainer}>
        <div>
            <div id={styles.menubarProfile}>
                <img style={{ width: '5rem', height: '5rem', borderRadius: '5rem' }} src="https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.webp?s=2048x2048&w=is&k=20&c=nyOxOKJQvvUOXIZ1s7mPF4zUySY1eKBIl88Vbwi7wLA=" alt="" />
                <h6 className='m-0 text-bold'>Ram Mohan &gt;</h6>
                <p className='m-0'>shahi@gmail.com</p>
            </div>
            <div id={styles.menubarMenuList}>
                {
                    data?.menubar?.map((key) => (
                        <Fragment>
                            {renderTags(key.icon, key.key)}
                        </Fragment>
                    ))
                }

            </div>
        </div>
        <div></div>
        <div className='text-primary text-center' id={styles.menubarLogout}>
            Logout &nbsp; <FaPowerOff />
        </div>
    </div>
}