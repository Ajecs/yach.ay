export const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false)
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true
  }

  return (
    <>
      {ratingArray.map((star) =>
        star ? (
          <i key={Math.random()} className='bi bi-star-fill text-yellow-400'></i>
        ) : (
          <i key={Math.random()} className='bi bi-star text-yellow-400'></i>
        )
      )}
    </>
  )
}
