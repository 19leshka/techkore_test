import s from "./Modal.module.css"
import ReactDOM from "react-dom";

const Modal =({ title, isOpen, onClose, children })=> {
    if (!isOpen) return null
    return ReactDOM.createPortal(
        <div className={s.overlay}>
            <div className={s.modalContainer}>
                <div className={s.modalTitle}>
                    <p>{title}</p>
                    <svg onClick={() => onClose()} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1.82486L14.1751 1L8 7.17514L1.82486 1L1 1.82486L7.17514 8L1 14.1751L1.82486 15L8 8.82486L14.1751 15L15 14.1751L8.82486 8L15 1.82486Z" fill="#AFB6C6" stroke="#AFB6C6"/>
                    </svg>
                </div>
                <div className={s.main}>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('portal'))
}

export default Modal

