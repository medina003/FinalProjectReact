import styles from "./Buttons.module.scss"
import {Link} from "react-router-dom"

function Buttons(){
    return(
            <ul className={styles.ul}> 
                <CustumeLink to='/'>All</CustumeLink>  
                <CustumeLink to='/done'>Done</CustumeLink>  
                <CustumeLink to='/remainded'>Remainded</CustumeLink>   
            </ul>
    )
}

 function CustumeLink({to,children, ...props}){
    const path = window.location.pathname;  
    return( 
        <li className={path === to ? 'active' : ''} >
            <Link to={to} className={styles.a}>
                <h1>
                    {children}
                </h1> 
            </Link>
        </li>
    )
 }
export const custumeLink = CustumeLink
export default Buttons;