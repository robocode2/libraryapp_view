import React from "react";

const CardGroup = () => {
  return (
    <CardGroup>
      {books.map((book, index) => (
        <div key={index} id="cardItem" className="col-xs-1">
          <TestCard key={index} bookData={book} />
        </div>
      ))}
      ;
    </CardGroup>
  );
};

export default CardGroup;
