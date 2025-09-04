import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d8f72a2-a545-453c-85aa-cbcfe5dbc371");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult();
    }};
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden ' id='contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 font-light'>With US</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'> Ready to make a move?Lets Build Your Future Together</p>


            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap ' >
                    <div className='w-full md:w-1/2 text-left ' >
                        Your Name
                        <input type="text" placeholder='Your name'  className=' w-full border border-gray-300 rounded py-3 px-4 mt-2' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4' >
                        Your Email
                        <input type="email" placeholder='Your Email'   className=' w-full border border-gray-300 rounded py-3 px-4 mt-2'  required/>
                    </div>                  
                </div>
                <div className="my-6 text-left">
                    Message
                    <textarea placeholder='Message'className=' w-full border border-gray-300 rounded py-3 px-4 mt-2 h-40 ' required></textarea>
                   
                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ?result :"Send message"}</button>
            </form>
    </div>
  )
}

export default Contact
