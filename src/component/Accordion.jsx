import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="  mb-4">
      <div
        className="flex justify-between items-center py-4 cursor-pointer border-b border-b-purple transition-all duration-500"
        onClick={toggleAccordion}
      >
        <div className="px-2">{title}</div>
        <div>
          {isOpen ? (
            <FaMinus className="text-purple" />
          ) : (
            <FaPlus className="text-purple" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-4 bg-purple shadow-lg transition-all duration-500">
          <div>{content}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
