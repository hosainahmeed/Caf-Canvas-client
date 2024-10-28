import { useForm } from "react-hook-form";
import SectionHeader from "../../Components/utils/sectionHeader";
import Swal from "sweetalert2";
import useAuth from "../../Components/Hook/useAuth";

function Contact() {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  // Handle form submission
  const onSubmit = (data) => {
    // console.log("Form Data:", data);
    Swal.fire({
      title: "Success!",
      text: "Your Massege has been deliverd.",
      icon: "success",
    });
    // Process form data here
  };

  return (
    <div className="mt-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      {/* Header Section */}
      <SectionHeader head={"Contact Us"} />

      {/* Contact Details */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mt-8">
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Contact Details</h1>
          <p className="mb-2">
            785 15th Street, Office 478
            <br />
            Berlin, De 81566
          </p>
          <p className="mb-2">info@email.com</p>
          <code className="text-gray-500">+88 348 834 939</code>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded-lg p-6 md:p-8 space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={user?.email}
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12">
        <SectionHeader head={"Location"} />
        <div className="flex justify-center mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29213.88618726395!2d90.4298496!3d23.7568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c788e712a621%3A0x6eb8d2bd905f82c0!2sBanasree%20U%20Loop%20Chattar!5e0!3m2!1sen!2sbd!4v1730099174059!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
