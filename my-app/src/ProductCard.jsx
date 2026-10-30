function ProductCard(props) {
  let availabilityText = ""

  if (props.inStock === true) {
    availabilityText = "here"
  } else {
    availabilityText = "not here"
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>Price: {props.price} тг</p>
      <p>{availabilityText}</p>
    </div>
  )
}

export default ProductCard