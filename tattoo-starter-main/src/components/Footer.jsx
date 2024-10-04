import React from 'react';
import { footerData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// stagger container
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // corrected the key to staggerChildren
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  const { about, links, program, newsletter } = footerData;

  return (
    <footer className='section bg-dark'>
      <div className="container mx-auto">
        {/* grid */}
        <motion.div 
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          {/* about */}
          <motion.div
            variants={fadeIn('up')}
            className="flex-1"
          >
            {/* title */}
            <div className="font-primary text-xl uppercase tracking-[0.08em]">{about.title}</div>
            {/* subtitle */}
            <div className="leading-relaxed text-[#dbdbdb]">{about.subtitle}</div>
            {/* address, phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold text-[#dbdbdb]">
              <div className="flex items-center gap-x-[10px]">
                <div className="">{about.address.icon}</div>
                <div className="">{about.address.name}</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div className="">{about.phone.icon}</div>
                <div className="">{about.phone.number}</div>
              </div>
              <div className="">
                <div className="">{about.email.icon}</div>
                <div className="">{about.email.name}</div> {/* corrected email field */}
              </div>
            </div>
          </motion.div>

          {/* links */}
          <motion.div 
            variants={fadeIn('up')}
            className="flex-1 flex flex-col xl:items-center"
          >
            <div className="">
              <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{links.title}</div>
              <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
                {links.items.map((item, index) => {
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a href={href} className='hover:text-white transition'>
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* program */}
          <motion.div 
            variants={fadeIn('up')}
            className="flex-1"
          >
            <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{program.title}</div>
            <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
              {program.items.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </motion.div>

          {/* newsletter */}
          <motion.div 
            variants={fadeIn('up')}
            className="flex-1"
          >
            <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{newsletter.title}</div>
            <div className="leading-relaxed mb-9 text-[#dbdbdb]">{newsletter.subtitle}</div>
            <form className='flex justify-between items-start border-b border-[#b6b6b6]'>
              <input
                className='outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-2'
                placeholder={newsletter.form.placeholder}
                type="text"
              />
              <button className='text-2xl cursor-pointer' type='submit'>{newsletter.form.icon}</button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
