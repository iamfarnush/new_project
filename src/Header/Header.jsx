import styles from './Header.module.css'
import React from "react"
import openhearts from '../../public/Artboard 1@4x 1.png'

export default function Header(){
    return(
        <div className={styles.headerDiv}>
            <div><img className='w-[100px] h-[60px]' src={openhearts} alt="" /></div>
            <div>
                <button className={styles.button}>EN</button>
            </div>
        </div>
    )
}