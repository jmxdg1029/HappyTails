/* eslint-disable jsx-a11y/iframe-has-title */
import '../components/ContactSection.scss';
import Swal from 'sweetalert2'


const ContactSection = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "35c0ae97-eb5c-46f7-b58b-fec0d5b1de3f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     Swal.fire({
        title: "Success!",
        text: "Your message has been sent!",
        icon: "success"
        });
    }
};
        return ( 
            <div className="contact-section">
                <div className="col-md-6 mt-3">
                    <form onSubmit={onSubmit}>
                            <h2>CONTACT US</h2>
                            <h4>Ready to book? Feel free to provide your dog's breed and the date you'd like to book</h4>
                                <div className='input-box'>
                                    <label>Full Name</label>
                                    <input type="text" className="field" placeholder='Enter your name' name='name' required />
                                </div>
                                <div className='input-box'>
                                    <label>Email Address</label>
                                    <input type="text" className="field" placeholder='Email Address' name='email' required />
                                </div>
                                <div className='input-box'>
                                    <label>Message</label>
                                    <textarea name='message' type="text" className="field text" placeholder='message' required />
                                </div>
                                <button type="submit">Send Message</button>
                    </form>
               </div>
               <div className='col-md-6 maps'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.0703473907524!2d-79.59796208708731!3d44.12317112178573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84eea19fb9dff979%3A0x5f3b41fe6cb4f546!2sHappy%20Tails%20Pet%20Sitting!5e0!3m2!1sen!2sca!4v1756087992674!5m2!1sen!2sca" 
                    width="900" 
                    height="850" 
                     allowfullscreen="" 
                     loading="lazy" 
                     referrerpolicy="no-referrer-when-downgrade">
                     </iframe>
               </div>
            </div> 
        );
}
 
export default ContactSection;