import Button from "@/components/buttons";
import Header from "@/components/header/header";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <section className="">
      <Header
        title="Contact Us"
        description={
          <p className="text-lg text-medium text-white">
            We are really fun to talk to, but if you’re not a big talker and
            prefer e-mail, please send us a note here! We would love to hear
            from you.
          </p>
        }
      />{" "}
      <section className="px-4 lg:px-28  md:pt-32 my-32  relative z-10">
        <div className="">
          <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Customer Service Section */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Customer Service
                </h2>
                <p>
                  Feel free to contact us with any of your questions, press
                  requests, or comments. Please use the phone number or email
                  address below:
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col space-x-3">
                    <span className="text-lg flex items-center gap-2 font-semibold">
                      <Phone
                        className="w-5 h-5 !text-white fill-black flex-shrink-0"
                        fill="black"
                      />{" "}
                      Phone No
                    </span>
                    <span className="text-gray-800">
                      +234-819-050-3222 / +234-903-953-9042
                    </span>
                  </div>
                  <div className="flex flex-col  space-x-3">
                    <span className="flex items-center  text-lg gap-2 font-semibold">
                      <Mail
                        className="w-5 h-5 !text-white fill-black flex-shrink-0"
                        fill="black"
                      />{" "}
                      Email Address
                    </span>
                    <span className="text-gray-800">pharmabin@gmail.com</span>
                  </div>
                  <div className="flex  flex-col  space-x-3">
                    <span className="flex items-center  text-lg gap-2 font-semibold">
                      <MapPin className="w-5 h-5 !text-white fill-black flex-shrink-0" />{" "}
                      Location
                    </span>
                    <span className="text-gray-800">
                      OAU, Ile-Ife, Osun State
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Have Something Special To Tell Us?
                </h2>
                <p>
                  Do you have something special to tell us? Please fill in the
                  form with your request and any other information:
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block  text-black font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="w-full border-[0.5px] border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary  "
                    />
                  </div>
                  <div>
                    <label className="block  text-black font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full border-[0.5px] border-gray-300 rounded-md p-2 focus:ring-primary  focus:border-primary "
                    />
                  </div>
                  <div>
                    <label className="block  text-black font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full border-[0.5px] border-gray-300 rounded-md p-2 focus:ring-primary  focus:border-primary "
                    />
                  </div>
                  <div>
                    <label className="block  text-black font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full border-[0.5px] border-gray-300 rounded-md p-2 focus:ring-primary  focus:border-primary "
                    />
                  </div>
                  <div>
                    <label className="block  text-black font-semibold">
                      Pharmacy/Company/Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter business name"
                      className="w-full border-[0.5px] border-gray-300 rounded-md p-2 focus:ring-primary  focus:border-primary "
                    />
                  </div>
                  <div>
                    <label className="block  text-black font-semibold">
                      Others (Any special time?)
                    </label>
                    <textarea
                      placeholder="Enter what you need help for"
                      className="w-full border-[0.5px] border-gray-300 rounded-md p-2 focus:ring-primary  focus:border-primary "
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="checkbox"
                      id="news-updates"
                      className="text-primary focus:ring-primary  rounded accent-primary"
                    />
                    <label
                      htmlFor="news-updates"
                      className="text-black font-medium text-base "
                    >
                      Please keep me informed concerning <strong> News</strong>{" "}
                      and <strong>Updates</strong> from PharmaBin
                    </label>
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-full  text-white "
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
