import React, { useEffect } from "react";

const Modal = ({ active, setActive }) => {
  // Функция для обработки события нажатия клавиши "Escape"
  const handleEscapeKey = (event) => {
    if (active && event.key === "Escape") {
      setActive(false);
    }
  };

  // Добавление обработчика события при монтировании компонента
  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    // Удаление обработчика события при размонтировании компонента
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [active]); // Эффект будет перезапускаться только при изменении active

  return (
    <div className='modal' onClick={() => setActive(false)}>
      <div className='modal__content'>{/* Контент модального окна */}</div>
    </div>
  );
};

export default Modal;
