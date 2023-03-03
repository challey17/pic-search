import ImageShow from "./ImageShow";
function ImageList({ images }) {
  const imageShow = images.map((image) => {
    return <ImageShow url={image.urls.thumb} key={image.id} />;
  });

  return <div>{images.length ? imageShow : null}</div>;
}

export default ImageList;
