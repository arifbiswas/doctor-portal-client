import React from "react";
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const CareSection = () => {
  return (
    <div className="hero my-24 ">
    <div className="hero-content flex-col lg:flex-row gap-16 justify-center items-center">
      <img src={treatment} alt="" className="rounded-lg shadow-2xl h-96 lg:h-[80vh]" />
      <div className="w-full lg:w-[45%]">
        <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  </div>
  );
};

export default CareSection;
