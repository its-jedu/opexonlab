import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    message: "",
  });

  // Error state for validation
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    organization: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      organization: "",
      message: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    // Organization is optional, so no validation required

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send to API)
      console.log("Form submitted:", formData);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        organization: "",
        message: "",
      });
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white font-roboto">
      <div className="max-w-5xl py-4 mx-auto w-full ">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Send us a Message
        </h1>
        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-3 sm:mt-4 leading-relaxed">
          Fill out the form below and we’ll get back to you within 24hours.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-5xl py-4 mx-auto w-full ">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Full Name */}
          <div className="flex flex-col text-left">
            <label
              htmlFor="fullName"
              className="text-sm sm:text-base font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-1 px-4 py-2 border border-[#38A109] rounded-lg text-sm sm:text-base text-gray-900 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all duration-200"
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                className="text-red-500 text-xs sm:text-sm mt-1"
              >
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col text-left">
            <label
              htmlFor="email"
              className="text-sm sm:text-base font-medium text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="mt-1 px-4 py-2 border border-[#38A109] rounded-lg text-sm sm:text-base text-gray-900 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all duration-200"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-red-500 text-xs sm:text-sm mt-1"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Organization */}
          <div className="flex flex-col text-left">
            <label
              htmlFor="organization"
              className="text-sm sm:text-base font-medium text-black"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Enter your organization (optional)"
              className="mt-1 px-4 py-2 border border-[#38A109] rounded-lg text-sm sm:text-base text-gray-900 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all duration-200"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col text-left">
            <label
              htmlFor="message"
              className="text-sm sm:text-base font-medium text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or inquiry"
              rows={5}
              className="mt-1 px-4 py-2 border border-[#38A109] rounded-lg text-sm sm:text-base text-gray-900 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all duration-200 resize-y"
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p
                id="message-error"
                className="text-red-500 text-xs sm:text-sm mt-1"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#38A109] text-black cursor-pointer font-semibold max-w-3xl  px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg font-roboto hover:bg-green-700 hover:shadow-md transition-all duration-300 w-full "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className="max-w-2xl mx-auto justify-beteween mt-8 sm:mt-12 flex flex-col sm:flex-row gap-6 sm:gap-8">
        {/* Email Container */}
        <div className="w-full bg-gray-100 rounded-lg p-4 sm:p-6 flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-[#38A109]" />
            <span className="text-lg sm:text-xl font-semibold text-black">
              Email
            </span>
          </div>
          <div className="mt-3 text-center sm:text-left">
            <a
              href="mailto:opexonlab@gmail.com"
              className="text-sm sm:text-base text-gray-700 hover:text-[#38A109] hover:underline transition-colors duration-200"
              aria-label="Email opexonlab@gmail.com"
            >
              opexonlab@gmail.com
            </a>
            <br />
            <a
              href="mailto:support@opexonlab.com"
              className="text-sm sm:text-base text-gray-700 hover:text-[#38A109] hover:underline transition-colors duration-200"
              aria-label="Email support@opexonlab.com"
            >
              support@opexonlab.com
            </a>
          </div>
        </div>

        {/* Phone Container */}
        <div className="w-full bg-gray-100 rounded-lg p-4 sm:p-6 flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#38A109]" />
            <span className="text-lg sm:text-xl font-semibold text-black">
              Phone
            </span>
          </div>
          <div className="mt-3 text-center sm:text-left">
            <a
              href="tel:+1234567890"
              className="text-sm sm:text-base text-gray-700 hover:text-[#38A109] hover:underline transition-colors duration-200"
              aria-label="Call +1234567890"
            >
              + (123) 456-7890
            </a>
            <br />
            <a
              href="tel:+1234567891"
              className="text-sm sm:text-base text-gray-700 hover:text-[#38A109] hover:underline transition-colors duration-200"
              aria-label="Call +1234567891"
            >
              + (123) 456-7891
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
