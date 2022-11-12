import React from 'react';
import TestimonialHeading from '../TestimonialHeading/TestimonialHeading';
import people1 from "../../../../assets/images/people1.png"
import people2 from "../../../../assets/images/people2.png"
import people3 from "../../../../assets/images/people3.png"
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const testimonialInfo = [
        {
            id : 1,
            testimonial : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name : "Wasim Walton",
            img : people1,
            location : "London",
        },
        {
            id : 2,
            testimonial : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name : "Julina Angela",
            img : people2,
            location : "California",
        },
        {
            id : 3,
            testimonial : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name : "Lerry peady",
            img : people3,
            location : "USA",
        },
    ]
    return (
        <div className='mt-16 mx-5'>
            <TestimonialHeading></TestimonialHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20' >
                {
                    testimonialInfo.map(testiInfo => <TestimonialCard
                    key={testiInfo.id}
                    testiInfo={testiInfo}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;