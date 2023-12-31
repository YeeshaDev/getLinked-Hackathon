import { useState } from "react";
import { contactForm } from "../../pages/auth/auth";

function ContactForm({ setShowSuccessModal }) {
  const [contactData, setContactData] = useState({
    first_name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...error, [name]: "" };
    setContactData({
      ...contactData,
      [name]: value,
    });
    setError(updatedErrors);
  };

  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      const response = await contactForm(contactData, {
        headers: {
          "Content-Type": "application/json", // Important for sending file data
        },
      });
      setShowSuccessModal(true);
      setTimeout(speakResponse(contactData.first_name), 1000);
      console.log("Registration successful", response);
    } catch (error) {
      //console.log("Failed to submit", error);
      setError(error);
    }
  };

  const speakResponse = (name) => {
    const message = `Thank you for contacting us, ${name}! You'll hear from us soon`;
    const speechSynthesis = window.speechSynthesis;

    // Getting the list of available voices
    const voices = speechSynthesis.getVoices();

    // Finding a female voice based on language or name for google
    const femaleVoice = voices.find((voice) => {
      return (
        voice.lang.includes("en") &&
        voice.name.includes("Google UK English Female")
      );
    });
    // Finding a female voice based on language or name for Microsoft
    const femaleMicroSoftVoice = voices.find((voice) => {
      return (
        voice.lang.includes("en") &&
        voice.name.includes("Microsoft Zira Desktop - English (United States)")
      );
    });

    const speechMessage = new SpeechSynthesisUtterance(message);

    // This sets the voice to the female voice if available, otherwise use the default voice
    speechMessage.voice = femaleVoice || femaleMicroSoftVoice || voices[0];

    speechSynthesis.speak(speechMessage);
  };
  return (
    <div className=" relative lg:bg-formBg lg:p-10 lg:px-16 lg:shadow-formShadow rounded-lg flex flex-col lg:w-[500px]">
      <h3 className="text-purple font-semibold text-[22px]">
        Questions or need assistance?
      </h3>
      <h3 className="text-purple font-semibold text-[22px]">
        Let us know about it!
      </h3>
      <p className="lg:hidden block text-[1rem] mt-5 ">
        Email us below to any question related to our event
      </p>
      <form action="" className="flex flex-col  gap-y-7 mt-8">
        <>
          <input
            type="text"
            name="first_name"
            value={contactData.first_name}
            placeholder="First Name"
            onChange={handleInputChange}
            className="border border-solid border-white px-8 h-12 w-full rounded-md bg-transparent outline-0 placeholder:text-white placeholder:font-normal"
          />
          {error && error.first_name && (
            <div className="text-red-500">{error.first_name}</div>
          )}
        </>

        <>
          <input
            type="text"
            name="email"
            value={contactData.email}
            placeholder="Email"
            onChange={handleInputChange}
            className="border border-solid border-white px-8 h-12 w-full rounded-md bg-transparent outline-0 placeholder:text-white placeholder:font-normal"
          />
          {error && error.email && (
            <div className="text-red-500">{error.email}</div>
          )}
        </>

        <>
          <textarea
            type="text"
            name="message"
            value={contactData.message}
            placeholder="Message"
            onChange={handleInputChange}
            className=" border border-solid border-white px-4 pt-2  h-28 w-full rounded-md bg-transparent outline-0 mt-0 placeholder:text-white placeholder:font-normal "
          />
          {error && error.message && (
            <div className="text-red-500">{error.message}</div>
          )}
        </>

        <button
          type="submit"
          onClick={handleContactForm}
          className=" bg-primaryGradient w-[150px] h-12 text-white  flex items-center justify-center mx-auto -mt-1 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
