"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2, ArrowRight } from 'lucide-react';

const serviceOptions = [
  'Select a service...',
  'Comprehensive Authority Audit',
  'AI Marketing Automation',
  'AI Content Creation',
  'AEO/GEO Strategy Development',
  'Technical SEO Architecture',
  'Real-Time Analytics & Reporting',
  'Complete AI Transformation',
  'Other'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    serviceInterest: serviceOptions[0],
    projectDetails: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setIsSuccess(false);

    // --- Simulated API Call ---
    // In a real application, you would make a fetch or axios call here.
    setTimeout(() => {
      setIsLoading(false);
      // Simulate success based on response status (e.g., status === 200)
      setIsSuccess(true);
      
      // Optionally reset form data here:
      // setFormData({
      //   fullName: '', email: '', companyName: '', phoneNumber: '',
      //   serviceInterest: serviceOptions[0], projectDetails: '',
      // });
    }, 2000); 
    // --- End Simulated API Call ---
  };

  if (isSuccess) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center p-6 bg-gray-50">
        <div className="max-w-4xl w-full bg-white p-10 rounded-xl shadow-2xl border-t-4 border-blue-600 text-center">
          <Send className="w-16 h-16 mx-auto text-blue-600 mb-6" />
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3">Submission Successful!</h2>
          <p className="text-xl text-gray-600">
            Thank you for reaching out to Adam Silva Consulting. We have received your inquiry and will get back to you within 24 hours with your customized strategy overview.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col lg:flex-row items-start justify-center p-4 sm:p-8 lg:p-12 gap-12 bg-gray-50">
      <div className="w-full lg:w-1/2 bg-white p-6 sm:p-10 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">
          Get Started Today
        </h2>
        <p className="text-md text-neutral-600 mb-8">
          Fill out the form below and we'll get back to you within 24 hours with a customized strategy overview.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name and Email */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Smith"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>
          </div>

          {/* Row 2: Company Name and Phone */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your Company"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>
          </div>

          {/* Row 3: Service Interest */}
          <div>
            <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1">Service Interest <span className="text-red-500">*</span></label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none transition duration-150 cursor-pointer"
            >
              {serviceOptions.map(option => (
                <option key={option} value={option} disabled={option === serviceOptions[0]}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Row 4: Project Details */}
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">Project Details <span className="text-red-500">*</span></label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows="5"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us about your current challenges and goals..."
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 resize-y"
            ></textarea>
          </div>

          {/* Submit Button with Loading State */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center bg-[#025CA2] hover:translate-y-1 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-blue-500 transition cursor-pointer duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Contact Info Sidebar */}
<div className="w-full lg:w-1/2 p-6 sm:p-10 ">
  <h2 className="text-3xl font-bold text-neutral-800 mb-6 border-b pb-3">
    Get In Touch
  </h2>
  <p className="text-md text-neutral-600 mb-8">
    Ready to discuss your AI authority strategy? We're here to help you navigate the transformation from traditional SEO to AI-powered visibility.
  </p>

  <div className="space-y-6">
    {/* Phone */}
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-md" style={{ background: "#CCE7FF" }}>
        <Phone className="w-6 h-6" style={{ color: "#025CA2" }} />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-neutral-800">Phone</h3>
        <p className="text-neutral-600">954-818-9248</p>
        <p className="text-sm text-neutral-500">Monday - Friday, 9AM - 6PM EST</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-md" style={{ background: "#CCE7FF" }}>
        <Mail className="w-6 h-6" style={{ color: "#025CA2" }} />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-neutral-800">Email</h3>
        <p className="text-neutral-600">info@adamsilvaconsulting.com</p>
        <p className="text-sm text-neutral-500">We respond within 24 hours</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-md" style={{ background: "#CCE7FF" }}>
        <MapPin className="w-6 h-6" style={{ color: "#025CA2" }} />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-neutral-800">Location</h3>
        <p className="text-neutral-600">Virtual Consulting Worldwide</p>
        <p className="text-sm text-neutral-500">Serving clients nationwide</p>
      </div>
    </div>

    {/* Response Time */}
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-md" style={{ background: "#CCE7FF" }}>
        <Clock className="w-6 h-6" style={{ color: "#025CA2" }} />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-neutral-800">Response Time</h3>
        <p className="text-neutral-600">24-hour initial response</p>
        <p className="text-sm text-neutral-500">Comprehensive strategy within 48 hours</p>
      </div>
    </div>
  </div>

  {/* What to Expect */}
  <div className="mt-8 pt-6 border bg-neutral-100 p-6 rounded-2xl border-gray-200">
    <h3 className="text-xl font-semibold text-neutral-800 mb-4">What to Expect</h3>
    <ul className="list-disc pl-5 space-y-2 text-neutral-600">
      <li>Comprehensive authority assessment within 48 hours</li>
      <li>Customized AI optimization strategy proposal</li>
      <li>Clear roadmap with measurable milestones</li>
      <li>Transparent pricing and timeline estimates</li>
    </ul>
  </div>
</div>

    </section>
  );
};

export default ContactForm;