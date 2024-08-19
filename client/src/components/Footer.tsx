// import { useRef, FormEvent } from "react";
// import emailjs from "emailjs-com";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  // const form = useRef<HTMLFormElement>(null);
  // const userID = import.meta.env.VITE_USER_ID; // Ensure this is correctly set in your .env file

  // const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formCurrent = form.current;

  //   if (!formCurrent) return; // Exit if form is not initialized

  //   emailjs
  //     .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formCurrent, userID)
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         toast.success("Email sent successfully!");
  //         formCurrent.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         toast.error("Failed to send the email.");
  //       }
  //     );
  };

  return (
    <footer className="w-full bg-black text-white p-10">
      <ToastContainer />
      <div className="container mx-auto flex flex-wrap justify-between items-start md:items-stretch">
        <div className="w-full md:w-1/2 lg:w-1/2 p-5">
          {/* <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            <h1
              className="text-4xl md:text-5xl leading-normal"
              style={{
                color: "#FFFAE2",
                fontFamily: "'Abhaya Libre', serif",
                fontWeight: "600",
              }}
            >
              Get in touch....
            </h1>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-2 bg-transparent border-double border-4 border-[#BB945C] text-[#FFFAE2] focus:outline-none focus:border-[#BB945C] focus:ring-1 focus:ring-[#BB945C]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-2 bg-transparent border-double border-4 border-[#BB945C] text-[#FFFAE2] focus:outline-none focus:border-[#BB945C] focus:ring-1 focus:ring-[#BB945C]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="p-2 bg-transparent border-double border-4 border-[#BB945C] text-[#FFFAE2] focus:outline-none focus:border-[#BB945C] focus:ring-1 focus:ring-[#BB945C]"
            ></textarea>
            <button
              type="submit"
              className="mt-4 py-2 px-4 bg-[#BB945C] hover:bg-[#BB945C] text-[#FFFAE2] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form> */}
          <div>
            <h1
              className="text-4xl md:text-5xl leading-normal mb-4"
              style={{
                color: "#FFFAE2",
                fontFamily: "'Abhaya Libre', serif",
                fontWeight: "600",
              }}
            >
              Get in touch....
            </h1>
            <p className="mb-2 text-[#FFFAE2]">
              <span className="mr-2">
                {/* SVG Icon for Location */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block"
                  fill="#BB945C"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </span>
              6 Front St, Cullercoats, NE30 4QB
            </p>
            {/* Phone Icon */}
            <p className="mb-2 text-[#FFFAE2]">
              <span className="mr-2">
                {/* SVG Icon for Phone */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block"
                  fill="#BB945C"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 016.59-6.59l2.2-1.1a1 1 0 011.36.36l2.77 5.55a1 1 0 01-.19 1.16l-2.17 2.17a1 1 0 01-1.41 0l-1.79-1.8a1 1 0 00-1.36 0l-3.65 3.65a1 1 0 000 1.36l1.8 1.8a1 1 0 010 1.41l-2.17 2.17a1 1 0 01-1.16.19l-5.55-2.77a1 1 0 01-.36-1.36l1.1-2.2z" />
                </svg>
              </span>
              +0191 606 0667
            </p>

            {/* Email Icon */}
            <p className="mb-2 text-[#FFFAE2]">
              <span className="mr-2">
                {/* SVG Icon for Email */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block"
                  fill="#BB945C"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Manager@queensheadcullercoats.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFAE2] underline"
              >
                Manager@queensheadcullercoats.co.uk
              </a>
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 p-5">
          <iframe
            className="w-full h-64 mb-4 border-double border-8 border-[#BB945C]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9145.501143754644!2d-1.4321433!3d55.03664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e6ea1e28c5fb9%3A0x46fce2c7c40a1dd0!2sThe%20Queens%20Head%20Cullercoats!5e0!3m2!1sen!2suk!4v1708379190927!5m2!1sen!2suk"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
