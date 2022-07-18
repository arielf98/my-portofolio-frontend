import { motion } from 'framer-motion'
import React from 'react'
import { images } from '../../constant'

import './About.scss'
export default function About() {

  const abouts = [
    {
      skill: "Web Development", description: "I am a good web developer", img: images.about01
    },
    {
      skill: "Web Design", description: "I am a good web design", img: images.about02
    },
    {
      skill: "UI/UX", description: "I am a good UI/UX", img: images.about03
    },
  ]
  return (
    <>
      <h2 className='head-text'>
        I know that <span>Good Design</span>
        <br /> means
        {" "}
        <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {
          abouts.map((about, index) => (
            <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.skill + index}
            >
              <img src={about.img} alt={about.skill} />
              <h2 className='bold-text' style={{marginTop: 20}}>{about.skill}</h2>
              <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}
