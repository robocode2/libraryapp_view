import "./BookCard.css";

const BookCard = ({ bookData }) => {
  return (
    <div className="card">
      <div className="card__title">{bookData.title}</div>
      <div className="card__body">
        {bookData.description}
        {/*  <Description description={bookDetails.description} /> */}
        {/*  <Phone number={bookDetails.phone} type="Home"/>
                <Phone number={bookDetails.cell} type="Cell"/> */}
        {/* <div className="card__image">
          <img src={bookDetails.picture.medium} /> */}
      </div>
    </div>
    /* </div> */
  );
};

export default BookCard;
