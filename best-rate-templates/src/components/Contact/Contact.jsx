import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMail, IoCall } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";

const Contact = () => {
  return (
    <div>
      <div
        id="contact"
        className="contact-area section-padding bg-light-alt section"
      >
        <div className="container">
          <div className="section-title text-center">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae risus nec dui venenatis dignissim. Aenean vitae metus in
              augue pretium ultrices.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="contact">
                <form
                  className="form"
                  name="enq"
                  method="post"
                  action="contact.php"
                  onSubmit={() => validation()}
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control mb-3"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control mb-3"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control mb-3"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        rows="6"
                        name="message"
                        className="form-control mb-3"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        value="Send message"
                        name="submit"
                        id="submitButton"
                        className="btn btn-contact-bg"
                        title="Submit Your Message!"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="single_address">
                <i>
                  <IoLocationSharp />
                </i>
                <h4>Our Address</h4>
                <p>3481 Melrose Place, Beverly Hills</p>
              </div>
              <div className="single_address">
                <i>
                  <IoMail />
                </i>
                <h4>Send your message</h4>
                <p>Info@example.com</p>
              </div>
              <div className="single_address">
                <i>
                  <IoCall />
                </i>
                <h4>Call us on</h4>
                <p>(+1) 517 397 7100</p>
              </div>
              <div className="single_address">
                <i>
                  <LuClock4 />
                </i>
                <h4>Work Time</h4>
                <p>
                  Mon - Fri: 08.00 - 16.00. <br />
                  Sat: 10.00 - 14.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
