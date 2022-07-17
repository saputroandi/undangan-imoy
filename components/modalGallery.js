import React, { useEffect } from "react";

function ModalGallery(props) {
  useEffect(() => {
    console.log(props.imageState.initialImage);
  }, []);
  return (
    <div>
      <div
        className="modal"
        onClick={() =>
          props.setImageState((state) => ({ ...state, display: false }))
        }
      >
        <div className="image-wrapper">
          <img src={`/asset/${props.imageState.initialImage}`} />
        </div>
      </div>
      <style jsx>
        {`
          .modal {
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 100;
            position: fixed;
            height: 100vh;
            width: 100vw;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          // .image-wrapper {
          //   display: flex;
          //   justify-content: center;
          // }

          .image-wrapper > img {
            z-index: 100;
            height: auto;
            width: 85vw;
          }
        `}
      </style>
    </div>
  );
}

export default ModalGallery;
