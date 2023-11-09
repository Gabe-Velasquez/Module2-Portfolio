import { useForm, ValidationError } from '@formspree/react'

function ContactForm() {
    const [state, handleSubmit] = useForm('xnqkrlge')
    if (state.succeeded) {
        return <p className='contact-thanks'>Thanks for reaching out! I'll reply to your email as soon as possible</p>;
    }
    return (
        <form className='form-card' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="form-name"
                placeholder="Your name"/>
            <input 
                type="email" 
                className="form-email"
                placeholder="Your email address"
                id="email"
                name="email"/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
            <textarea
                className="form-message"
                placeholder="Message"
                id="message"
                name="message"/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            <button className="button" type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    )
}

export default ContactForm;