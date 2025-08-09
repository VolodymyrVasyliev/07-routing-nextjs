'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import css from './NoteModal.module.css';

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>
  );
};

export default Modal;

//-------------------------------------------------------------------------

// 'use client';

// import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';
// import { redirect } from 'next/navigation';

// interface ModalProps {
//   onClose: () => void;
//   children: React.ReactNode;
// }

// export default function Modal({ onClose, children }: ModalProps) {
//   const [mounted, setMounted] = useState(false);
//   const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null);

//   useEffect(() => {
//     const existingRoot = document.getElementById('modal-root');

//     if (!existingRoot) {
//       const div = document.createElement('div');
//       div.id = 'modal-root';
//       document.body.appendChild(div);
//       setModalContainer(div);
//     } else {
//       setModalContainer(existingRoot);
//     }

//     setMounted(true);

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose();
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = '';
//     };
//   }, [onClose]);

//   const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   if (!mounted || !modalContainer) return null;

//   return createPortal(
//     <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
//       <div className={css.modal}>{children}</div>
//     </div>,
//     modalContainer
//   );
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import { createPortal } from 'react-dom';
// import { useEffect } from 'react';
// import css from './NoteModal.module.css';

// interface ModalProps {
//   onClose: () => void;
//   children: React.ReactNode;
// }

// export default function Modal({ onClose, children }: ModalProps) {
//   const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = '';
//     };
//   }, [onClose]);

//   return createPortal(
//     <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
//       <div className={css.modal}>{children}</div>
//     </div>,
//     document.getElementById('modal-root') as HTMLDivElement
//   );
// }
