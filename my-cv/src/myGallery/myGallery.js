import Gallery from "react-photo-gallery";
import { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import "./myGallery.css";

function MyGallery(props) {
  const { folder, float, title, video, description } = props;

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <div className={window.innerWidth > 1200 ? float : "phone"}>
        <div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
          </div>
        <div className="gallery">
          {!video ? (
            <Gallery
              className="gallery"
              photos={folder}
              onClick={openLightbox}
            />
          ) : (
            folder.map((photo) => {
              return (
                <video className="video" controls autoPlay loop muted>
                  <source src={photo.src} type="video/mp4" />
                </video>
              );
            })
          )}
        </div>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={folder.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      <hr width="40%" />
    </>
  );
}

export default MyGallery;
