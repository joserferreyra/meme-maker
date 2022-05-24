
function getImage(file) {
  if (typeof file === "string") {
      return file;
  }
  else return URL.createObjectURL(file);
}

const ImageCard = ({ file, id = 0, handler = null, width = null }) => {
  return (
    <>
      <img key={id}
        src={getImage(file)}
        alt={file.name}
        width={width}
        onClick={handler}
        className="img-thumbnail"
      />
    </>
  )
}

export default ImageCard;