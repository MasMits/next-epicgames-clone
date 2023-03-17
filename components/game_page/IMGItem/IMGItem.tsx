import Modal from "../Modal/Modal";
import React, {useState} from "react";
import styles from "./imgitem.module.scss";

interface IImgItem{
    src: string
}

const ImgItem = (props: IImgItem) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div>
            <input type="image" src={props.src} alt="" width='100%' className={styles.button} onClick={(e) => {
                setModalActive(true);
                e.stopPropagation()
            }
            }/>

            <Modal active={modalActive} setActive={setModalActive}>
                <img src={props.src} alt="" width='100%'/>
            </Modal>
        </div>
    );
};

export default ImgItem;