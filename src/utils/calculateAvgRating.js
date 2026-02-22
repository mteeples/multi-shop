export function calculateAvgRating(reviews) {
  const ratings = reviews.map((review) => review.rating);
  const numReviews = reviews.length;
  // Code snippet from GeeksForGeeks
  const sumOfRatings = ratings.reduce(function (x, y) {
    return x + y;
  }, 0);
  return sumOfRatings / numReviews;
}
