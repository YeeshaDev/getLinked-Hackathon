//import {useState} from 'react'
import Congrats from "../assets/congrats.png";
import Wink from "../assets/wink1.png";
import { Link } from "react-router-dom";
import PurpleStar from "../assets/purple-star.png";
function Modal({ showModal, heading, subText }) {
  return (
    <div
      className={` fixed top-[40%] lg:top-[40%]  left-[50%] translate-x-[-50%] translate-y-[-50%]  p-8 !z-[999] ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="relative border border-solid border-purple p-8 max-w-[400px]">
        <img src={PurpleStar} alt="" className="star -top-10 right-5 " />
        <img src={PurpleStar} alt="" className="star -bottom-10 right-5 " />
        <figure>
          <img src={Congrats} alt="" />
        </figure>
        <article className="flex flex-col items-center justify-center mx-auto">
          <h3 className="text-[20px] text-center">{heading}</h3>

          <p className=" mt-5 text-center">
            {subText}
            <span className="modal-text flex items-center justify-center gap-1">
              step{" "}
              <img
                src={Wink}
                width="14px"
                height="14px"
                alt=""
                className=" wink-icon object-cover "
              />{" "}
            </span>
          </p>

          <Link to="/">
            <button>Back</button>
          </Link>
        </article>
      </div>
    </div>
  );
}

export default Modal;
//<div className={`border border-solid border-purple p-8 ${showModal ? 'block' : 'hidden'}`}>
