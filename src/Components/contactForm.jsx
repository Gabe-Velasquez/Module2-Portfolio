import { useForm, ValidationError }from "@formspree/react"

function contactForm(){
    const [state, handleSubmit] = useForm("mdoyovzj");
    if (state.succeeded) {
        return <p>Thanks for your submission!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="form-email"
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

export default contactForm;