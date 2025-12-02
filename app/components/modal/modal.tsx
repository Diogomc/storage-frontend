import { ReactNode } from "react";
import { IoClose } from "react-icons/io5"
import "@/app/components/modal/modal.css"

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title: string
}

export const Modal = ({ isOpen, onClose, children, title }: Props) => {
    if (!isOpen) return null;
    return (
        <div className="modal-container">
            <div className="modal-header">
                <h1 className="modal-title">Adicionar {title}</h1>
                <button onClick={onClose} className="cursor-pointer"><IoClose size={30} /></button>
            </div>
            <div className="form-area">
                {children}
            </div>
        </div>
    )
}