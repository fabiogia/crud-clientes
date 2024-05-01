import { useEffect } from "react";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
    useEffect(() => {
        var modal = document.getElementById("modal");
        document.addEventListener('keydown', function (e) {
            let keyCode = e.keyCode;
            if (e.key === 'Escape') {
                setModalOpen(false);
            }
        });
    }, []);

    return (
        <div id={'modal'} className={`modal ${modalOpen ? "modal-open" : ""}`}>
            <div className='modal-box relative'>
                <label
                    onClick={() => setModalOpen(false)}
                    className='btn btn-sm btn-circle absolute right-2 top-2'
                >
                    ✕
                </label>
                {children}
            </div>
        </div>
    );
};

export default Modal;