import React from 'react'
import SubHead from '../SubHead/SubHead'
import style from './Contact.module.css'
import telegram from './../../assets/icons8-telegram.gif'
import github from './../../assets/icons8-github.gif'
import whatsapp from './../../assets/icons8-whatsapp.gif'
import gmail from './../../assets/icons8-gmail.gif'



function Contact() {
  return (
    <div className={style.contact} id='Contact'>
     <SubHead subtitle={'Get In Touch'} title={'Contact Me'} />
     <h3 className={style.contactDescribe}>{`(Click On Any Platform To Contact Me📩)`}</h3>
     <h3 className={style.contactDescribe}>{`(To See My Project `} <span  className={style.black}>Git</span> <span className={style.orange}>Hub</span> <span  className={style.blue}>)</span></h3>
     <div className={style.slider}>

        <div className={style.slideTrack}>
            <div className={style.slide}>
            <a href="https://web.telegram.org/k/#@Dzmir12"> <img src={telegram} alt="telegram" /> </a>
            </div>

            <div className={style.slide}>
              <a href="https://github.com/Dzmir12/amir12" > <img src={github} alt="github" /> </a>
            </div>

            <div className={style.slide}>
            <a href="https://api.whatsapp.com/send?phone+98902059111"><img src={whatsapp} alt="whatsapp" /> </a>
            </div>

            <div className={style.slide}>
            <a href="mailto:dzmirrich10@gmail.com" target='_blank'> <img src={gmail} alt="gmail" /> </a>
            </div>
            <div className={style.slide}>
              <a href="https://web.telegram.org/k/#@Dzmir12"> <img src={telegram} alt="telegram" /> </a>
            </div>

            <div className={style.slide}>
            <a href="https://github.com/Dzmir12/amir12"  > <img src={github} alt="github" /> </a>
            </div>

            <div className={style.slide}>
               <a href="https://api.whatsapp.com/send?phone+98902059111"><img src={whatsapp} alt="whatsapp" /> </a>
            </div>

            <div className={style.slide}>
              <a href="mailto:dzmirrich10@gmail.com" target='_blank'> <img src={gmail} alt="gmail" /> </a>
            </div>
        </div>

     </div>


    </div>
  )
}

export default Contact