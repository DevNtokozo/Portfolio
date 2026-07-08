import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Particles } from '../components/Particles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send('service_mx5ja71', 'template_mtl6v8p',
       {from_name: formData.name,
        to_name: 'Ntokozo',
        from_email: formData.email,
        to_email: 'ntokozombuliz@gmail.com',
        message: formData.message,
        }, "yIS7tfhZzhRVnxANZ")
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
      alert('Message sent successfully!');
      setFormData({name:'', email:'', message:''})
    }
  };
  
  return (
    <section id='contact' className='relative flex items-center
     c-space section-spacing '>
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        <div className='flex flex-col items-center justify-center 
        max-w-md p-5 mx-auto border border-white/10 rounded-2xl 
        bg-primary'>
            <div className='flex flex-col items-start w-full gap-5 mb-10'>
                <h2 className='text-heading'>Let's Connect</h2>
                <p className='font-normal text-neutral-400'>
                  Whether your're looking to collaborate,
                   have a question, or just want to say hello, 
                   feel free to reach out!</p>
            </div>
            <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
                <input
                    value={formData.name}
                    onChange={handleChange}
                    id='name' required
                    type='text'
                    placeholder='Full Name'
                    className='bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg'
                />
                <input
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    id='email' required
                    placeholder='Email'
                    className='bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg'
                />
                <textarea
                    value={formData.message}
                    onChange={handleChange}
                    id='message' required
                    placeholder='Message'
                    rows={5}
                    className='bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg'
                ></textarea>
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer'
                >
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact
