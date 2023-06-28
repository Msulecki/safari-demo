import { useState } from 'react';
import styles from './TransitionResize.module.scss';

const TransitionResize = () => {

    const [key, setKey] = useState(0);


    return<div key={key} className={styles.container}>
     
        <div className={styles.rectangle}></div>
        <button onClick={()=>setKey(prev=>prev+1)}>Re-render</button>
        </div>
}

export default TransitionResize;