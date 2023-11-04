import { useState } from 'react';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (e) => {
    const { target } = e;
    const inputValue = target.value;
    const inputType = target.name;
    if (inputType == 'email') {
      setEmail(inputValue);
    } else if (inputType == 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //TODO: create a validator for email
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={email}
          name='email'
          onChange={handleInput}
          type='email'
          placeholder='Enter Your Email'
        />
        <textarea
          value={name}
          name='name'
          onChange={handleInput}
          type='text'
          placeholder='Enter Your Name'
        />
        <textarea
          value={message}
          name='message'
          onChange={handleInput}
          type='text'
          placeholder='Enter Your Message'
        />
        <button type='submit'>Submit</button>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}
