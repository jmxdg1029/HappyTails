import '../components/ContactSection.scss';


const ContactSection = () => {
        return ( 
            <div className="contact-section">
                <div className="col-md-6 mt-3">
                    <form>
                            <h2>Contact Form</h2>
                            <h3>Please provide your dog's breed and a date you'd like to book</h3>
                                <div className='input-box'>
                                    <label>Full Name</label>
                                    <input type="text" className="field" placeholder='Enter your name' required />
                                </div>
                                <div className='input-box'>
                                    <label>Email Address</label>
                                    <input type="text" className="field" placeholder='Email Address' required />
                                </div>
                                <div className='input-box'>
                                    <label>Message</label>
                                    <textarea type="text" className="field text" placeholder='message' required />
                                </div>
                                <button type="submit">Send Message</button>
                    </form>
               </div>
               <div className='col-md-6'>

               </div>
            </div> 
        );
}
 
export default ContactSection;