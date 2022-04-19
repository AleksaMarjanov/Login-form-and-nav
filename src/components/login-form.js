import React from 'react'
// Creating LoginForm that contains username and password input, h3 that says Login and a border.

export default class LoginForm extends React.Component {
  render() {
    return (
    <div className='container'>
        <div className='form-wrapper'>
            <form  action="https://formsubmit.co/aleksa.marjanov@outlook.com" method="POST">
                <h3>Log In</h3>
                {/* Honeypot */}
                <input type="text" name="_honey" style={{display: 'none' }}/>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="https://aleksamarjanov.github.io/Bootstrap-Website/success.html"/>
            <div>   
                <input required type='text' className='userName' name='userName' placeholder='Please enter username'/>
            </div>
            <div>
                <input required type='password' className='password' name='password' placeholder='Please enter password'/>
            </div>
            <div>
            <div>
                <input className='checkbox' type='checkbox'/> Remember Me
            </div>
                <button type='submit' className='btn'>Login</button>
            </div>
            </form>
        </div>
    </div>
  )
}

}