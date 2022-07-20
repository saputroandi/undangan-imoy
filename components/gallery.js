import Image from "next/image";
import React, { useEffect, useState } from "react";
import Flower from "./flower";
import ModalGallery from "./modalGallery";

function Gallery() {
  const images = [
    {
      image: "gambar_1.JPG",
    },
    {
      image: "gambar_3.JPG",
    },
    {
      image: "gambar_4.JPG",
    },
    {
      image: "gambar_5.JPG",
    },
    {
      image: "gambar_2.JPG",
    },
  ];

  const [imageState, setImageState] = useState({
    display: false,
    initialImage: images[0].image,
  });

  // useEffect(() => {
  //   console.log("gallery ", imageState.display);
  // }, [imageState]);

  return (
    <div id="gallery">
      {imageState.display && (
        <ModalGallery setImageState={setImageState} imageState={imageState} />
      )}
      <div className="gallery container">
        <Flower />
        <div className="header">
          <p>Gallery</p>
        </div>
        <div className="image-wrapper">
          {/* <div className="main-image">
            <Image
              className="image"
              src={`/asset/${images[0].image}`}
              layout="fill"
            />
            <img src={`/asset/${images[1].image}`} />
            <div
              className="image"
              style={{ backgroundImage: `url(/asset/${displayImage})` }}
            ></div>
          </div> */}
          {/* <div className="thumbnail-image"> */}
          {images.map((obj, idx) => {
            return (
              // <div
              //   className="thumbnail"
              //   style={{ backgroundImage: `url(/asset/${obj.image})` }}
              // ></div>
              <div
                className="thumbnail"
                key={idx}
                // onClick={() => setDisplayimage(obj.image)}
                data-aos={idx % 2 == 0 ? "fade-left" : "fade-right"}
                data-aos-delay="500"
              >
                <img
                  src={`/asset/${obj.image}`}
                  onClick={() =>
                    setImageState((state) => ({
                      ...state,
                      display: true,
                      initialImage: obj.image,
                    }))
                  }
                />
              </div>
            );
          })}
          {/* </div> */}
        </div>
      </div>
      <style jsx>{`
        .gallery {
          // height: 80vh;
          padding: 2.5rem 2rem;
          margin-bottom: 3rem;
        }

        .header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 2em;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1rem;
        }

        .image-wrapper {
          // display: flex;
          // flex-direction: column;
          // gap: 0.5rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 38% 40% auto;
          justify-items: center;
          gap: 4px;
          z-index: 5;
        }

        // .main-image {
        //   display: flex;
        //   width: 100%;
        //   height: 100%;
        //   border-radius: 0.25rem;
        // }

        // .image {
        //   width: 100%;
        //   height: 18rem;
        //   // background-color: blue;
        //   background-size: cover;
        //   background-position: center;
        //   background-repeat: no-repeat;
        //   border-radius: 0.25rem;
        // }

        // .thumbnail-image {
        //   display: flex;
        //   overflow: scroll;
        //   // gap: 0.8rem;
        //   align-items: center;
        //   width: 100%;
        //   height: 6.5rem;
        //   background-color: rgb(249, 243, 238);
        //   border-radius: 0.25rem;
        // }

        .thumbnail {
          display: flex;
          justify-content: center;
          // align-items: center;
          // background-size: cover;
          // background-position: center;
          // background-repeat: no-repeat;
          height: auto;
          width: 7.8rem;
          // overflow: hidden;
          // margin: 0 0.5rem;
          border: 1px solid violet;
        }

        .thumbnail > img {
          z-index: 50;
          // border-radius: 0.25rem;
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}

export default Gallery;
