const Painting = ({ name, image, alt, artist }) => {
  return (
    <figure className="painting">
      <img className="image-thumb" src={image} alt={alt} />
      <h4>{name}</h4>
      <p>
        <i>{artist}</i>
      </p>
    </figure>
  )
}

export default Painting
