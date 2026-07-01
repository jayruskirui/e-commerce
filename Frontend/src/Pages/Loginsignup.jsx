import { useState } from 'react'
import React from 'react'
import './CSS/LoginSignup.css'

const Loginsignup = () => {

const [state, setState] = useState ('Login');

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
          {state === 'Sign Up' ? <input type="text" placeholder='Your Name' /> : <></>}
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
          <button>Continue</button>

          {state === 'Sign Up' ?
          <p className='loginsignup-login'>Already have an account? <span onClick={() => setState('Login')}>Login Here</span></p>
          :
          <p className='loginsignup-login'>Create an account? <span onClick={() => setState('Sign Up')}>Click Here</span></p>}

          <div className='loginsignup-agree'>
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the Terms of use and Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup