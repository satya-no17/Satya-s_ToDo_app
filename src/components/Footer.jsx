import React from 'react'
import './Footer.css'
const Footer = ({Mode}) => {
  return (
    <footer className={`footer ${Mode ? "dark" : ""}`}>
     <div className="footer-container flex flex-col items-center justify-center text-center ">
          <div><p>
            Built by Satya😎 in collaboration with Cute GPT💙 using React.
          </p></div>
          <div>
            <div className='pt-5'><h3><b>Connect</b></h3></div>
<div className="flex justify-evenly items-center gap-4 mb-5">
            <a href="https://github.com/satya-no17" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/satyam-kumar-929b97325/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:satyarajbarnwal2008@gmail.com">Email</a>
          </div>
          </div>
      </div>
      <div className="bottom p-5">
        <p>&copy; {new Date().getFullYear()} Satya's Task App. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
