import "./BookCard.css";

const BookCard = ({ bookData }) => {
  //9780747532699
  const bookCover = `https://covers.openlibrary.org/b/isbn/${bookData.isbn}-M.jpg`;
  console.log(bookCover);
  return (
    <div className="card">
      <div className="card__title">{bookData.title}</div>
      <div className="card__body">
        {bookData.description}
        {/*  <Description description={bookDetails.description} /> */}
        {/*  <Phone number={bookDetails.phone} type="Home"/>
                <Phone number={bookDetails.cell} type="Cell"/> */}
        <div className="card__image">
          <img src={bookCover} alt="book cover" />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
