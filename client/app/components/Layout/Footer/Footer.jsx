import Link from 'next/link'
import Image from 'next/image'
import './footer.scss'

import fb from './assets/fb.png'
import ig from './assets/insta.png'
import tw from './assets/twitter.png'
import yt from './assets/yt.png'

export default function Footer() {
  return (
    <footer>
      <div className='footer-section'>
        <div className='footer-title'>
          Menu
        </div>
        <div className='footer-menu'>
          <ul>
            <li>
              <Link href='../'>Home</Link>
            </li>
            <li>
              <Link href='../about'>About</Link>
            </li>
            <li>
              <Link href='../contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-section'>
        <div className='footer-title'>
          Socials
        </div>
        <div className='footer-socials'>
          <Image src={fb} alt='fb' className='footer-social' />
          <Image src={ig} alt='ig' className='footer-social' />
          <Image src={tw} alt='tw' className='footer-social' />
          <Image src={yt} alt='yt' className='footer-social' />
        </div>
      </div>
      <div className='footer-section'>
        <div className='footer-title'>
          Contact
        </div>
        <div className='footer-contact'>
          <span>Number: 1234567890</span>
          <span>Email: test@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}