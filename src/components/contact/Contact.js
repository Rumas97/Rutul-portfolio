import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.scss'

function Contact() {

    const { register, formState: { errors } ,handleSubmit, reset } = useForm();

    const toastifySuccess = () => {
        toast('Message sent! 🚀', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };


    //emailjs.send(serviceID, templateID, templateParams, userID)
    //React Hook Form's reset method will reset all field values, and will also clear all errors within the form.
    const onSubmit = async (data) => {
        
        try{
            const templateParams = {
                name: data.name,
                email: data.email,
                message: data.message
            }

            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            )
            reset();
            toastifySuccess();
        }

        catch(err){
            console.log(err)
        }
    }
    

    return (
        <div className='contact' id='contact'>
            <h1>Contact</h1>
            <h3>I'd love to hear from you. Whether it's a project, job opportunity or just a chat!</h3>
            <div className='container'>
                
                <div className='left' >
                    <h2>Find me here!</h2>
                    <div className='wrapper'>
                        <div className='item'>
                            <a href='https://github.com/Rumas97'><img src='assets/github.svg'></img></a>
                            <p><a href='https://github.com/Rumas97'>GitHub</a></p>
                        </div>
                        <div className='item'>
                            <a href='https://www.linkedin.com/in/rutul-maskar9743/'><img className='linkedin' src='assets/LinkedInLogo.svg'></img></a>
                            <p><a href='https://www.linkedin.com/in/rutul-maskar9743/'>LinkedIn</a></p>
                        </div>
                        <div className='item'>
                            <a href='https://twitter.com/Rumas24410288'><img src='assets/Twitter.svg'></img></a>
                            <p><a href='https://twitter.com/Rumas24410288'>Twitter</a></p>
                        </div>
                        <div className='item'>
                            <a href='mailto:rutulmaskar@gmail.com'><img src='assets/mail.svg'></img></a>
                            <p><a href='mailto:rutulmaskar@gmail.com'>E-Mail</a></p>
                        </div>
                    </div>
                </div>
                <div className='right' >
                    <h2>Or drop a message here!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type='name'
                            placeholder='Name'
                            {...register('name',{
                                required:true,
                                message: 'Please enter your name'
                            })}>
                        </input>
                        {errors.name && <span className='errorMessage'>Please enter a name</span>}

                        <input
                            type='email'  
                            {...register('email',{
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                            placeholder='Email address'>
                        </input>
                        {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}

                        <textarea  
                            placeholder='Message' 
                            {...register('message',{
                            required: true
                            })}>
                        </textarea>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}

                        <button type='submit'>Send</button>

                        {/* {message && <span>Thanks, I will get back to you soon :D </span>} */}
                    </form>
                    
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact
