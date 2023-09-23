import { useState } from "react";
import classNames from "classnames";
import { PiCaretDownLight, PiCaretUpLight } from "react-icons/pi";
const CustomDropdown = ({ handleRegisterInputChange, error }) => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const categories = ["1", "2", "3"];
  const groupSize = ["5", " 10", "15"];

  const handleOptionSelect = (option, type) => {
    if (type === "category") {
      setSelectedCategory(option);
      handleRegisterInputChange({
        target: {
          name: "category",
          value: option,
        },
      });
      setIsOpenCategory(false);
    } else if (type === "size") {
      setSelectedSize(option);
      handleRegisterInputChange({
        target: {
          name: "group_size",
          value: option,
        },
      });

      setIsOpenSize(false);
    }
  };

  return (
    <>
      <div className="relative hidden lg:inline-block ">
        <label htmlFor="category"> Category</label>
        <input
          type="text"
          name="category"
          value={selectedCategory}
          placeholder="Select an option"
          className="relative w-full lg:w-full h-12 border-purple-500 border rounded py-2 px-4 leading-tight focus:outline-none focus:border-purple-700 bg-transparent cursor-pointer"
          readOnly
          onClick={() => setIsOpenCategory(!isOpenCategory)}
          onChange={handleRegisterInputChange}
        />
        <span
          className="absolute top-[3.3rem] -right-[4.5rem] lg:right-2 cursor-pointer"
          onClick={() => setIsOpenCategory(!isOpenCategory)}
        >
          {!isOpenCategory ? <PiCaretDownLight /> : <PiCaretUpLight />}
        </span>
        <ul
          className={classNames("custom-dropdown-options", {
            "absolute z-10 w-full border-t-0  bg-purple rounded-b-lg":
              isOpenCategory,
            hidden: !isOpenCategory,
          })}
        >
          {categories.map((option, index) => (
            <li
              key={index}
              className="  py-2 px-4 cursor-pointer hover:bg-mainBg  border-b-[0.6px] border-b-solid border-b-customWhite "
              onClick={() => handleOptionSelect(option, "category")}
            >
              {option}
            </li>
          ))}
        </ul>
        {error && error.category && (
          <div className="text-red-500">{error.category}</div>
        )}
      </div>
      <div className="relative hidden lg:inline-block">
        <label htmlFor="groupSize">Group Size</label>
        <input
          type="text"
          name="group_size"
          value={selectedSize}
          placeholder="Select"
          className="relative w-[100%] lg:w-full h-12 border-purple-500 border rounded py-2 px-4 leading-tight focus:outline-none focus:border-purple-700 bg-transparent cursor-pointer"
          readOnly
          onClick={() => setIsOpenSize(!isOpenSize)}
          onChange={handleRegisterInputChange}
        />
        <span
          className="absolute top-[3.3rem] right-2 cursor-pointer"
          onClick={() => setIsOpenSize(!isOpenSize)}
        >
          {!isOpenSize ? <PiCaretDownLight /> : <PiCaretUpLight />}
        </span>
        <ul
          className={classNames("custom-dropdown-options", {
            "absolute z-10 w-full border-t-0  bg-purple  rounded-b-lg":
              isOpenSize,
            hidden: !isOpenSize,
          })}
        >
          {groupSize.map((option, index) => (
            <li
              key={index}
              className="py-2 px-4 cursor-pointer hover:bg-mainBg  border-b-[0.6px] border-b-solid border-b-customWhite "
              onClick={() => handleOptionSelect(option, "size")}
            >
              {option}
            </li>
          ))}
        </ul>
        {error && error.group_size && (
          <div className="text-red-500">{error.group_size}</div>
        )}
      </div>
      {/* MOBILE SELECT DROPDOWN */}
      <div className="lg:hidden flex items-center gap-5 ">
        <div className="relative inline-block sm:w-3/4 ">
          <label htmlFor="category"> Category</label>
          <input
            type="text"
            name="category"
            value={selectedCategory}
            placeholder="Select an option"
            className="relative  lg:w-full h-12 border-purple-500 border rounded py-2 px-4 leading-tight focus:outline-none focus:border-purple-700 bg-transparent cursor-pointer placeholder:text-white"
            readOnly
            onClick={() => setIsOpenCategory(!isOpenCategory)}
            onChange={handleRegisterInputChange}
          />
          <span
            className="absolute top-[3.3rem] right-3  lg:right-2 cursor-pointer"
            onClick={() => setIsOpenCategory(!isOpenCategory)}
          >
            {!isOpenCategory ? <PiCaretDownLight /> : <PiCaretUpLight />}
          </span>
          <ul
            className={classNames("custom-dropdown-options", {
              "absolute w-full z-10  border-t-0  bg-purple  rounded-b-lg":
                isOpenCategory,
              hidden: !isOpenCategory,
            })}
          >
            {categories.map((option, index) => (
              <li
                key={index}
                className="py-2 px-4 cursor-pointer hover:bg-mainBg  border-b-[0.6px] border-b-solid border-b-customWhite "
                onClick={() => handleOptionSelect(option, "category")}
              >
                {option}
              </li>
            ))}
          </ul>
          {error && error.category && (
            <div className="text-red-500">{error.category}</div>
          )}
        </div>
        <div className="relative inline-block sm:w-1/4">
          <label htmlFor="groupSize">Group Size</label>
          <input
            type="text"
            name="group_size"
            value={selectedSize}
            placeholder="Select"
            className="relative w-full h-12 border-purple-500 border rounded py-2 px-4 leading-tight focus:outline-none focus:border-purple-700 bg-transparent cursor-pointer placeholder:text-white"
            readOnly
            onClick={() => setIsOpenSize(!isOpenSize)}
            onChange={handleRegisterInputChange}
          />
          <span
            className="absolute top-[3.3rem] right-2 cursor-pointer"
            onClick={() => setIsOpenSize(!isOpenSize)}
          >
            {!isOpenSize ? <PiCaretDownLight /> : <PiCaretUpLight />}
          </span>
          <ul
            className={classNames("custom-dropdown-options", {
              "absolute z-10 w-full border-t-0  bg-purple  rounded-b-lg":
                isOpenSize,
              hidden: !isOpenSize,
            })}
          >
            {groupSize.map((option, index) => (
              <li
                key={index}
                className="py-2 px-4 cursor-pointer hover:bg-mainBg  border-b-[0.6px] border-b-solid border-b-customWhite "
                onClick={() => handleOptionSelect(option, "size")}
              >
                {option}
              </li>
            ))}
          </ul>
          {error && error.group_size && (
            <div className="text-red-500">{error.group_size}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomDropdown;
//max-md:grid max-md:grid-cols-2
