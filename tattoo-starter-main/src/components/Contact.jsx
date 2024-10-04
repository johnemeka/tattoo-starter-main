import React from 'react'
import { contactData } from '../data'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const Contact = () => {
  //destructuring contact data
   const {title, info, form} = contactData
  return (
  <section className='section' id='Contact'>
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-y-16">
        {/* text */}
        <motion.div 
        variants={fadeIn('right')}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.1}}
        className="flex-1">
          <h2 className='h2 max-w-[490px]'>{title}</h2>
          {/* info item */}
          <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
            {info.map((item,index) => {
              // destructure item
              const {title, subtitle, address, phone, email, link} = item;
              return(
                <div className="" key={index} >
                  <div className="font-primary uppercase font-medium text-xl mb-3">{title}</div>
                  <div className="mb-5 text-[#333] leading-[187%] tracking-[0.2em]">{subtitle}</div>
                  <div className="flex flex-col gap-y-3 mb-8">
                    {/* address */}
                    <div className="flex items-center gap-[10px]">
                      <div className="">{address.icon}</div>
                      <div className="font-medium">{address.name}</div>
                    </div>
                    {/* phone */}
                    <div className="flex items-center gap-[10px]">
                      <div className="">{phone.icon}</div>
                      <div className="font-medium">{phone.name}</div>
                    </div>
                    {/* email */}
                    <div className="flex items-center gap-[10px]">
                      <div className="">{email.icon}</div>
                      <div className="font-medium">{email.name}</div>
                    </div>
                    {/* link */}
                  </div>
                    <a href="" className='font-medium border-b border-dark pb-[5px]'>{link}</a>
                </div>
              )
            })}
          </div>
        </motion.div>
        {/* form */}
        <motion.div 
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.4}}
        className="flex-1 xl:pl-[40px] flex justify-center items-center xl:mt-[160px]">
        <form className='flex flex-col gap-y-10 w-full'>
            <input className='border-b border-dark placeholder=text-[#555] italic tracking-[0.06em] outline-none pb-4 ' placeholder={form.name} type="text"  />
            <input className='border-b border-dark placeholder=text-[#555] italic tracking-[0.06em] outline-none pb-4 ' placeholder={form.email} type="text"  />
            <input className='border-b border-dark placeholder=text-[#555] italic tracking-[0.06em] outline-none pb-4 ' placeholder={form.message} type="text"  />
            {/* button */}
            <button className='btn btn-sm btn-dark self-start'>Send message</button>
        </form>
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default Contact