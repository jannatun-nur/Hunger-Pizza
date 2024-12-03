import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


const Review = () => {

    const [review , setReview] = useState([])

    useEffect( ()=>{
        fetch('Review.json')
        .then( res => res.json())
        .then(data =>setReview(data))
    },[])
    return (
        <div>
            <div>
                {
                    review.map( reviews =><ReviewCard key={reviews} reviews={reviews}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;