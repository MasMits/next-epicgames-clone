import styles from './backtotopbutton.module.scss'
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import {useEffect, useState} from "react";
import {IconButton} from "@mui/material";

const BackToTopButton = () => {

    // let height = 0;
    const [height, setHeight] = useState(0);
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e: any) => {
        console.log('scrollHeight',e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight));
        setHeight(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight));
    }
    function toTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            {
                height < 500 &&
                <IconButton className={styles.container} onClick={toTop}>
                    <KeyboardArrowUpTwoToneIcon/>
                </IconButton>
            }
        </>

    );
};

export default BackToTopButton;