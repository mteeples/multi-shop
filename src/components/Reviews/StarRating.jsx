function getStarClass(starNum, rating, baseClass) {
  let starClass = baseClass;
  if (rating >= starNum) {
    starClass += " fas fa-star";
  } else if (rating >= starNum - 0.5) {
    starClass += " fas fa-star-half-alt";
  } else {
    starClass += " far fa-star";
  }
  return starClass;
}

export default function StarRating({ rating, baseClass = "" }) {
  return (
    <>
      <small className={getStarClass(1, rating, baseClass)}></small>
      <small className={getStarClass(2, rating, baseClass)}></small>
      <small className={getStarClass(3, rating, baseClass)}></small>
      <small className={getStarClass(4, rating, baseClass)}></small>
      <small className={getStarClass(5, rating, baseClass)}></small>
    </>
  );
}
