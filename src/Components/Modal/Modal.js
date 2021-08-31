import React, { useRef } from "react";

import "./Modal.scss";

// images
import MrBean from "../../Assests/Images/english.jpg";
import ashamed from "../../Assests/Images/ashamed.png";

function Modal() {
  const elModal = useRef(null);
  return (
    <>
      <div className="modal" ref={elModal}>
        <div className="modal-inner">
          <img
            className="modal__img"
            src={MrBean}
            alt="Mr Bean"
            width={200}
            height={100}
          />
          <button
            className="modal__btn"
            onClick={() => {
              elModal.current.classList.remove("modal--active");
            }}
          >
            Oops. You got me
            <img
              className="modal__ashamed"
              src={ashamed}
              alt="ashamed"
              width={35}
              height={35}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
