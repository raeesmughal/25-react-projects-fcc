// const StarRating = ({ totalStars = 5 }) => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   return (
//     <div className="star-rating">
//       {[...Array(totalStars)].map((_, index) => {
//         const starValue = index + 1;
//         return (
//           <FaStar
//             key={index}
//             onClick={() => setRating(starValue)}
//             onMouseEnter={() => setHover(starValue)}
//             onMouseLeave={() => setHover(0)}
//             color={starValue <= (hover || rating) ? "gold" : "black"}
//             size={40}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default StarRating;

















export default function StarRating({ totalStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const stars = [];
    for (let i = 0; i < totalStars; i++) {
        stars.push(i);
    }

    function handleClick(idx) {
        setRating(idx);
    }

    function mouseEnter(idx) {
        setHover(idx);

    }

    function mouseLeave(idx) {
        setHover(0)
    }


    return (
        <div className="star-rating">
            {
                stars.map((_, index) => {
                    return <FaStar
                        key={index}
                        onClick={() => { handleClick(index + 1) }}
                        onMouseEnter={() => { mouseEnter(index + 1) }}
                        onMouseLeave={() => { mouseLeave(index + 1) }}
                        style={{ color: index < (hover || rating) ? 'gold' : 'black' }}
                    />
                })
            }
        </div>
    )
}