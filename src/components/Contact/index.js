import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import 'materialize-css/dist/css/materialize.min.css';
// import { validateEmail } from '../../utils/helpers'; 

// function Contact() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       setFormState({ [e.target.name]: e.target.value });
//       console.log('Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//   };

//   return (
//     <div className="row contact about">
//       <div  className="col s12 m12 l12 ">
//         <div className="card aboutCard">
//           <h1 data-testid="h1tag">Contact Me</h1>
//           <div className="card-content">
//             <form id="contact-form" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//               </div>
//               <div>
//                 <label htmlFor="email">Email address:</label>
//                 <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//               </div>
//               <div>
//                 <label htmlFor="message">Message:</label>
//                 <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//               </div>
//               {errorMessage && (
//                 <div>
//                   <p className="error-text">{errorMessage}</p>
//                 </div>
//               )}
//               <div className="center">
//                 <button className="btn teal darken-2" data-testid="button" name="action" type="submit">
//                 <i className="material-icons right">send</i>Submit
//                 </button>
//                 </div>
//             </form>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Contact() {
  const [state, handleSubmit] = useForm("mrgrzejr");
  console.log(state)
  return (
    <div className="row contact about">
      <div  className="col s12 m12 l12 ">
        <div className="card aboutCard">
          <h1 data-testid="h1tag">Contact Me</h1>
          <div className="card-content">
            { state.succeeded?(<><p className="center">Thank you for your message!</p>
            {/* <div className= "center">
              <button className="btn teal darken-2" data-testid="button" name="action" type="submit">
                <i className="material-icons right" onCLick={()=>window.open()} >send</i>Close
              </button>
            </div> */}
            </>):
            (<form id="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" rows="5" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div className="center">
                <button className="btn teal darken-2" data-testid="button" name="action" type="submit">
                <i className="material-icons right">send</i>Submit
                </button>
                </div>
            </form>)}
            </div>
        </div>
      </div>
    </div>
  );
}

// need to refresh page when message is submit


export default Contact;
