import React, { useState } from 'react'
import "../Sampleproject/Homepage.css"
import {FcGoogle} from 'react-icons/fc'
import {FiFacebook} from 'react-icons/fi'
import {BiMessage} from 'react-icons/bi'
import "../Sampleproject/Mediaquerie.css"


function Home() {
   let [name,setname]=useState({
    name:"",
    password:""
   }) 
   console.log(name)
  return (
    <div className='maincontainer'>
        <div className='containerimg'>
            <div className='img'>
                <span></span>
            </div>
            <div className='container1'>
              <h3>Welcome back!</h3>
              <h5>Start managing your finance faster and better</h5>
              <h5>Start managing your finance faster and better</h5>

      </div>
        </div>
      
      <div className='container2'>
               <div className='loginpage'>
               <h3>Welcome back!</h3>
              <label htmlFor="" >Start managing your finance faster and better</label><br />
              <span>{BiMessage}</span>
              <input type="text" placeholder='You @ example.com' className='form-control' id='forum' onChange={(event)=>setname({...name,name:event.target.value})} /><br />
              <input type="text" placeholder='At least 8 characters'className='form-control' id='forum' onChange={(event)=>setname({...name,password:event.target.value})} /><br />
              <span className='blue'>Forgot Password?</span><br />
              <button className='btn btn-primary' id='btn' >Login</button>
              <div className='brd'>
                <div className='left'></div>
                <span className='or'>or</span>
                <div className='right'></div>
              </div>
              <div className='socialmedia'>
                   <div className='google'>{<FcGoogle/>}<span>Google</span></div>
                   <div className='facebook'>{<FiFacebook/>}<span>Facebook</span></div>

              </div>
              <footer>
                <h5>Dont have an account?</h5><span>Sign up</span>
              </footer>

               </div>
      </div>
    </div>
  )
}

export default Home
