import '../components/ContactSection.scss';
import Swal from 'sweetalert2'


const ContactSection = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "18e0222c-06ec-4f23-97d2-241274cbdc58");

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
                            <h2>Contact Form</h2>
                            <h3>Please provide your dog's breed and a date you'd like to book</h3>
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
               <div className='col-md-6'>

               </div>
            </div> 
        );
}
 
export default ContactSection;