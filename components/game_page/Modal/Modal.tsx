import {ReactChild, ReactFragment, ReactPortal} from "react";
import styles from './modal.module.scss'


type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export interface IModal {
    active: Boolean,
    setActive: Function,
    children: ReactNode
}

const Modal = (props: IModal) => {
    return (
        // <div className={props.active ? modal.modal + ' ' + modal.active : modal.modal} onClick={props.setActive(false)}>
        <div className={ props.active ? styles.modal + ' ' + styles.active : styles.modal} onClick={() => props.setActive( false)}>
            {/*<div className={props.active ? modal.modal_content + ' ' + modal.active : modal.modal_content} onClick={e => e.stopPropagation()}>*/}
            <div className={props.active ? styles.modal_content + ' ' + styles.active : styles.modal_content} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;