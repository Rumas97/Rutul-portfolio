import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.scss'

function Contact() {

    const { register, formState: { errors } ,handleSubmit, reset } = useForm();

    const toastifySuccess = () => {
        toast('Form sent! 🚀', {
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
    

    // const[message, setMessage]= useState(false)

    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     setMessage(true)
    // }

    return (
        <div className='contact' id='contact'>
            <div className='left' >
                <img src='assets/Handshake.svg' alt='handshake'/>
            </div>
            <div className='right' >
                <h2>Contact</h2>
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
            <ToastContainer />
        </div>
    )
}

export default Contact
