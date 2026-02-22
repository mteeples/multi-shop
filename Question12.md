# StarRating

## What it does

- Takes a rating and baseClass
- Returns the rating represented as stars
- For decimal ratings, a half-star will be displayed if the decimal is greater than .5

## Where it is located

- src/components/Reviews/StarRating.jsx
- Also see utils/calculateAvgRating, which takes an array of reviews and calculates the average rating

## Where it is used

- ProductDetail and ProductTile components
- I didn't realize at first that the reviews themselves implement the card as i elements instead of small, so I would have to rework the component a bit to get it to work across the whole project.
