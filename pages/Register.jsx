import { useState } from "react";
import RegisterImg from "../src/assets/register.png";
import Modal from "../src/component/Modal";
//import Modal from '../src/component/Modal'
import RegisterForm from "../src/component/RegisterForm";
import Header from "../src/component/Header";

export default function Register() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  return (
    <>
      <div className="hidden lg:block">
        <Header />
      </div>
      <section className="relative register flex flex-col lg:flex-row lg:gap-20 py-10">
        <div className="purple-flare w-full lg:w-[50%] h-[300px] lg:h-full top-40 lg:top-3 -left-[100px] lg:-left-[20rem]  "></div>
        <div className="purple-flare w-full lg:w-[50%] h-[300px] lg:h-full -bottom-28  right-1 "></div>
        <div
          className={` fixed lg:absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-modalBg z-[99] ${
            showSuccessModal ? "block" : "hidden"
          }`}
        ></div>
        <h3 className="lg:hidden block text-purple font-semibold text-[24px] sm:text-[32px] text-start ml-10">
          Register
        </h3>
        <figure className="lg:max-w-[50%] w-full lg:w-[500px]">
          <img src={RegisterImg} alt="" />
        </figure>
        <>
          <RegisterForm setShowSuccessModal={setShowSuccessModal} />
          <Modal
            heading="Congratulations you have successfully Registered!"
            subText="Yes, it was easy and you did it! check your mail box for next"
            showModal={showSuccessModal}
          />
        </>
      </section>
    </>
  );
}
