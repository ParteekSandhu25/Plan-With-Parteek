import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  const description =
    readMore === true ? info : `${info.substring(0, 200)}....`;

  const readmoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="card">
      <img src={image} className="image" alt={name} />

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price"> ₹ {price}</h4>
          <h3 className="tour-name">{name}</h3>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readMore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interesed
      </button>
    </div>
  );
}

export default Card;
