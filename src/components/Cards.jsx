import { FaUser, FaUpload, FaVoicemail, FaArrowRight, FaAngleRight } from 'react-icons/fa6'
import styles from './styles/cards.module.css'


export default function Cards(props) {
    const { title, price, oldPrice, benifit, btBgColor } = props?.data
    const { isOtherCards } = props?.status

    if (isOtherCards) {
        return <div id={styles.otherCardsContainer}>
            <div>
                <div>
                    <div style={{background:props.dataOne.btBgColor,width:"7rem",borderRadius:'5px',padding:'5px',marginBottom:'0.5rem'}}>{props.dataOne.status}</div>
                    <h4>{props.dataOne.title}</h4>
                    <p>{props.dataOne.description}</p>
                    <div style={{background:props.dataOne.btBgColor,width:"10rem",borderRadius:'5px',padding:'5px'}}>{props.dataOne.button} &nbsp;<FaArrowRight fontSize={20} /></div>
                </div>
            </div>
            <div>
                <h6>What you'll get:</h6>
                {
                    props.dataOne?.benifit?.users && <><FaUser color='gray' /> &nbsp;<span>Upto {props.dataOne?.benifit.users} users</span><br /></>
                }
                {
                    props.dataOne?.benifit.storage && <><FaUpload color='gray' /> &nbsp;<span>Upto {props.dataOne?.benifit.storage}gb Storage</span><br /></>
                }
                {
                    props.dataOne?.benifit.email && <><FaVoicemail color='gray' /> &nbsp;<span>{props.dataOne?.benifit.email}</span><br /></>
                }

                {
                    props.dataOne?.benifit.done && <><FaAngleRight color='gray' /> &nbsp;<span>{props.dataOne?.benifit.done}</span><br /></>
                }

            </div>
        </div>
    }
    return <div id={styles.cardsContainer}>
        <h5>{title}</h5>
        <span className={styles.strikePrice}>${oldPrice}.99/mo</span>
        <h3>${price}.99/mo</h3>
        <div style={{
            width: '10rem', height: '2rem', background: `${btBgColor}`,
            border: "none", padding: '5px', borderRadius: '0.5rem'
        }}>
            Get started &nbsp;<FaArrowRight fontSize={20} /></div>
        <hr />
        <h6>What you'll get:</h6>
        <div>
            <FaUser color='gray' /> &nbsp;<span>Upto {benifit.users} users</span><br />
            <FaUpload color='gray' /> &nbsp;<span>Upto {benifit.storage}gb Storage</span><br />
            <FaVoicemail color='gray' /> &nbsp;<span>{benifit.email}</span><br />
            <div style={{ paddingLeft: "1rem" }}>
                <a href='#' className='text-uppercase text-black'>Explore features</a>
            </div>
        </div>
    </div>
}