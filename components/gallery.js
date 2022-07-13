import React from "react";
import ReactImageGallery from "react-image-gallery";

function Gallery() {
  const images = [
    {
      original: "asset/gambar_1.JPG",
    },
    {
      original: "asset/gambar_2.JPG",
    },
    {
      original: "asset/gambar_3.JPG",
    },
    {
      original: "asset/gambar_4.JPG",
    },
    {
      original: "asset/gambar_5.JPG",
    },
  ];

  return (
    <div>
      <div className="gallery container">
        <ReactImageGallery items={images} />
      </div>
      <style jsx>
        {`
          .gallery {
            width: 100px;
          }
        `}
      </style>
    </div>
  );
}

export default Gallery;
