import emailjs from "emailjs-com";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ii5tw18', 'Cosmica-form', form.current, 'user_OiDyCSZB10s9kmuktK1rP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <section className="max-w-[900px] py-[100px] mx-auto" id="contact">
      <div className="flex SFMono items-baseline justify-center w-full text-orange-text">
        <span className="md:text-sm font-semibold mr-2">04.</span>
        <h2 className="md:text-base w-auto font-light whitespace-nowrap">What&apos;s next?</h2>
      </div>
      <div className="flex flex-col text-center pt-4">
        <h2 className="font-heebo font-semibold text-gray-300 text-5xl">Get In Touch</h2>
        <div className="pt-10 w-full">
          <form className="grid space-y-5" action="" method="POST" onSubmit={sendEmail} ref={form} >
            <input
              className="bg-light-gray-bg placeholder:text-gray-400 h-10 pl-3 SFMono text-orange-text focus:outline-none"
              type="text"
              placeholder="Name"
              name="name"
              required />
            <input
              className="bg-light-gray-bg placeholder:text-gray-400 h-10 px-3 SFMono text-orange-text focus:outline-none"
              type="email"
              placeholder="Email"
              name="user_email"
              required />
            <textarea
              className="bg-light-gray-bg placeholder:text-gray-400 px-3 pt-2 SFMono text-orange-text focus:outline-none h-40"
              placeholder="Enter your message"
              name="message"
              required />
            <button
              className="border border-orange-border text-orange-text py-4 px-3 w-56 rounded-md mt-12 hover:bg-orange-bg hover:bg-opacity-20 transition duration-300 ease-out justify-self-center"
              type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
