import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles'
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motions';

const Contact = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handeleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  const handeleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs.send(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY,
      {
        from_name: form.name,
        to_name: 'Naren',
        from_email: form.email,
        to_email: 'narensakthiit@gmail.com',
        message: form.message
      },
      process.env.REACT_APP_API_KEY
    ).then(() => {
      setLoading(false);
      alert('I will get back to you! Thank you!');
      setForm({ name: '', email: '', message: '' });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong!');
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form ref={fromRef} onSubmit={handeleSubmit} className="mt-12 flex flex-col gap-8">

          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handeleChange} placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium text-white" />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handeleChange} placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium text-white" />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Your Message</span>
            <textarea row='7' name="message" value={form.message} onChange={handeleChange} placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium text-white" />
          </label>

          <button type="submit" className="bg-tertiary outline-none w-fit text-white font-bold rounded-xl shadow-md shadow-primary py-3 px-8">
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, 'contact');