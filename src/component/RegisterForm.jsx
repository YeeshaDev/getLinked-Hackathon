import { useState } from "react";
import CustomDropdown from "./customSelect";
import { registerUser } from "../../pages/auth/auth";
import Walking from '../assets/walking.png'
import emailjs from '@emailjs/browser'

function RegisterForm({setShowSuccessModal}) {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [UserData, setUserData] = useState({
        team_name:'',
        email:'',
        phone_number:'',
        group_size:'',
        project_topic:'',
        category:'',
    })

    const [error, setError] = useState({
        team_name:'',
        email:'',
        phone_number:'',
        group_size:'',
        project_topic:'',
        category:'',  
    })

    //This is is for handling the registration

    const handleRegisterForm = async(e) => {
        e.preventDefault();
         // Validate phone number length
        if (UserData.phone_number.length !== 0 && UserData.phone_number.length !== 11) {
            setError({
                ...error,
                phone_number: "Incorrect phone number.",
              });
            return;
          } else{
            setError(error)
          }
          if (!isCheckboxChecked) {
            alert("Please agree to the terms and conditions before registering.");
            return;
          }
    try{
        const response = await registerUser(UserData, {
            headers: {
                "Content-Type": "application/json", // Important for sending file data
              },
        })
        
         
        // Sending an email notification to the user using EmailJS
        const emailParams = {
            to_email: UserData.email,
            to_team: UserData.team_name,
            
            // User's email address
            // Add any other template variables here
          };
    
          // Sending an email after registration using emailJs
          emailjs
            .send(
              "service_5hulf9r",
              "template_nk9rq5h",
              emailParams,
              "Sb11MyaNpQEgE-cBn",
            )
            .then((response) => {
              console.log("Email sent:", response);
            })
            .catch((error) => {
              console.error("Email sending failed:", error);
            });
    
            emailjs
            .send(
            import.meta.env.VITE_SERVICE_ID,
              import.meta.env.VITE_TEMPLATE_ID,
              emailParams,
              import.meta.env.VITE_EMAIL_KEY,
            )
            .then((response) => {
              console.log("Email sent:", response);
            })
            .catch((error) => {
              console.error("Email sending failed:", error);
            });
            console.log("Registration successful", response);
        setShowSuccessModal(true);
        setTimeout(speakResponse(UserData.team_name), 1000);
    }catch(error) {
    console.log('Failed to submit', error)
    setError(error)
    }
    }

    const speakResponse = (teamName) => {
        const message = `Thank you for registering with get linked, team ${teamName}! An Email has been sent to you`;
        const speechSynthesis = window.speechSynthesis;
      
        // Getting the list of available voices
        const voices = speechSynthesis.getVoices();
      
        // Finding a female voice based on language or name for google
        const femaleVoice = voices.find((voice) => {
          return voice.lang.includes('en') && voice.name.includes('Google UK English Female');
        });
      // Finding a female voice based on language or name for Microsoft
        const femaleMicroSoftVoice = voices.find((voice) => {
            return voice.lang.includes('en') && voice.name.includes('Microsoft Zira Desktop - English (United States)');
          });
      
        const speechMessage = new SpeechSynthesisUtterance(message);
      
        // This sets the voice to the female voice if available, otherwise use the default voice
        speechMessage.voice = femaleVoice || femaleMicroSoftVoice || voices[0];
      
        speechSynthesis.speak(speechMessage);
      };
      
    const handleRegisterInputChange = (e) => {
        const { name, value } = e.target;
        setError((prevError) => ({
            ...prevError,
            [name]: "",
          }));
           
            
        if (name === 'category') {
            setUserData((prevState) => ({
              ...prevState,
              category: value,
            }));
          } else if (name === 'group_size') {
            setUserData((prevState) => ({
              ...prevState,
              group_size: value,
            }));
          } else {setUserData({
          ...UserData,
          [name]: value,
        });
        if (!value) {
            setError((prevError) => ({
              ...prevError,
              [name]: `${name} is required.`,
            }));
          }
         
  
        }
      };
      const handleCheckboxChange = (e) => {
        setIsCheckboxChecked(e.target.checked);
      };



      
      
    return (
        <div className=' lg:bg-formBg lg:p-10 lg:px-16 lg:shadow-formShadow rounded-lg flex flex-col  w-[100%] lg:w-[500px]'>
            
          <h3 className='hidden lg:block text-purple font-semibold text-[24px] sm:text-[32px]'>Register</h3>
          <div className='flex items-center justify-center lg:justify-start gap-2 mt-3'>
          <h4 className=' font-semibold text-[16px]'>Be part of this movement!</h4> 
          <img src={Walking} width='80px' height='80px' alt="" className='-mt-3'/>
            </div> 
          
          <p className=' block sm:!text-[22px] font-bold mt-5 text-center lg:text-start'>CREATE YOUR ACCOUNT</p>
          <form action="" className='register-form flex flex-col max-w-full'>
            <div className='register-form flex flex-col  lg:grid lg:grid-cols-2 gap-x-5 gap-y-2  mt-8 w-full'>
            <label htmlFor="">
            Team’s Name
            <input type="text" 
            placeholder='First Name'
             name='team_name' 
             value={UserData.team_name}
             onChange={handleRegisterInputChange}
             className='border border-solid border-white px-5 h-10 lg:w-full rounded-md bg-transparent outline-0 placeholder:text-white placeholder:font-normal'  />
             {error && error.team_name && (
                    <div className="text-red-500">{error.team_name}</div>
                  )}
            </label>
            <label htmlFor="">
            Phone
            <input type="tel" placeholder='Phone Number' 
            name='phone_number'
            value={UserData.phone_number}
            onChange={handleRegisterInputChange}
             className='border border-solid border-white px-5 h-10 lg:w-full rounded-md bg-transparent outline-0 placeholder:text-white placeholder:font-normal'  />
             {error && error.phone_number && (
                    <div className="text-red-500">{error.phone_number}</div>
                  )}
            </label>
            <label htmlFor="">
            Email
            <input type="email" placeholder='Email' 
            name='email' 
            value={UserData.email}
            onChange={handleRegisterInputChange}
            className='border border-solid border-white px-5 h-10 lg:w-full rounded-md bg-transparent outline-0 placeholder:text-white placeholder:font-normal'  />
            {error && error.email && (
                    <div className="text-red-500">{error.email}</div>
                  )}
            </label>
            <label htmlFor="">
            Project Topic
            <input type="text" placeholder='Project Topic'
             name='project_topic' 
             value={UserData.project_topic}
             onChange={handleRegisterInputChange}
             className='border border-solid border-white px-5 h-10 lg:w-full rounded-md bg-transparent outline-0 placeholder:text-white placeholder:font-normal'  />
             {error && error.project_topic && (
                    <div className="text-red-500">{error.project_topic}</div>
                  )}
            </label>
            
            <CustomDropdown 
            error={error}
            setError={setError}
            handleRegisterInputChange={handleRegisterInputChange} />
            </div>
            <p className='!text-[12px] italic text-pink mt-5'>Please review your registration details before submitting</p>
            <label className="container !text-[12px] mt-3">
  <input type="checkbox" checked={isCheckboxChecked}
          onChange={handleCheckboxChange} />
  <span className="checkmark"></span>
  I agreed with the event terms and conditions  and privacy policy
</label>
            <button type='submit'
             onClick={handleRegisterForm} 
             disabled={!isCheckboxChecked}
             className='relative z-0 bg-primaryGradient w-full lg:w-[380px]  h-12 text-white  flex items-center justify-center mx-auto  rounded-lg'>Register</button>
          </form>
 
        </div>
    )
}

export default RegisterForm

