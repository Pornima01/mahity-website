"use client";
import React, { useState, useEffect } from "react";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    position: "",
    employmentStatus: "",
    resume: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    if (window.location.hash === "#formsubmitted") {
      setIsFormSubmitted(true);
    }
  }, []);

  // Country and City data
  const countriesAndCities: Record<string, string[]> = {
    India: [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Surat",
    ],
    "United States": [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
    ],
    "United Kingdom": [
      "London",
      "Birmingham",
      "Manchester",
      "Liverpool",
      "Leeds",
      "Sheffield",
      "Bristol",
      "Newcastle",
      "Leicester",
      "Nottingham",
    ],
    Canada: [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Calgary",
      "Ottawa",
      "Edmonton",
      "Winnipeg",
      "Quebec City",
      "Hamilton",
      "Kitchener",
    ],
    Australia: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Gold Coast",
      "Canberra",
      "Newcastle",
      "Wollongong",
      "Logan City",
    ],
    Germany: [
      "Berlin",
      "Hamburg",
      "Munich",
      "Cologne",
      "Frankfurt",
      "Stuttgart",
      "Düsseldorf",
      "Dortmund",
      "Essen",
      "Leipzig",
    ],
    Singapore: ["Singapore"],
    UAE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" ? { city: "" } : {}),
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          resume: "Please upload a PDF or Word document",
        }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          resume: "File size should not exceed 5MB",
        }));
        return;
      }
      setFormData((prev) => ({ ...prev, resume: file }));
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.country) {
      newErrors.country = "Please select a country";
    }
    if (!formData.city) {
      newErrors.city = "Please select a city";
    }
    if (!formData.position.trim()) {
      newErrors.position = "Please enter the position you're applying for";
    }
    if (!formData.employmentStatus) {
      newErrors.employmentStatus = "Please select your employment status";
    }
    if (!formData.resume) {
      newErrors.resume = "Please upload your resume";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBackToHome = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
    setIsFormSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields correctly",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("country", formData.country);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("employmentStatus", formData.employmentStatus);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      console.log("Submitting application...");

      const response = await fetch("/api/career-application", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      console.log("Response:", result);

      if (response.ok && result.success) {
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          city: "",
          position: "",
          employmentStatus: "",
          resume: null,
        });

        // Reset file input
        const fileInput = document.getElementById("resume") as HTMLInputElement;
        if (fileInput) {
          fileInput.value = "";
        }

        // Update URL and show thank you page
        window.history.pushState(
          {},
          document.title,
          window.location.pathname + "#formsubmitted"
        );

        setIsFormSubmitted(true);
      } else {
        throw new Error(result.message || "Failed to submit application");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to submit application. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Thank You Page
  if (isFormSubmitted) {
    return (
      <div className="bg-gradient-to-br from-orange-100 via-yellow-100 to-orange-200 min-h-screen flex items-center justify-center px-4 py-12">
        <style>{`
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
            }
          }
          
          @keyframes checkmark {
            0% {
              stroke-dashoffset: 100;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
          
          .animate-bounceIn {
            animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
        `}</style>
        
        <div className="max-w-2xl mx-auto text-center animate-bounceIn">
          <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    strokeDasharray: 100,
                    strokeDashoffset: 0,
                    animation: 'checkmark 0.5s ease-out 0.3s backwards'
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Thank You!
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Your application has been submitted successfully!
              <br />
              <span className="text-orange-600 font-medium">
                Our HR team will review your application and get in touch with you shortly.
              </span>
            </p>

            <button
              onClick={handleBackToHome}
              className="px-10 py-4 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-2xl"
            >
              Back to Careers Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Form
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Country and City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${
                  errors.country ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-white`}
              >
                <option value="">Select a country</option>
                {Object.keys(countriesAndCities).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="mt-1 text-sm text-red-500">{errors.country}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                City <span className="text-red-500">*</span>
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                disabled={!formData.country}
                className={`w-full px-4 py-3 border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-white disabled:bg-gray-100 disabled:cursor-not-allowed`}
              >
                <option value="">Select a city</option>
                {formData.country &&
                  countriesAndCities[formData.country]?.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
              {errors.city && (
                <p className="mt-1 text-sm text-red-500">{errors.city}</p>
              )}
            </div>
          </div>

          {/* Position */}
          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              What position are you applying for?{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border ${
                errors.position ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition`}
              placeholder="e.g., Software Developer, DevOps Engineer, etc."
            />
            {errors.position && (
              <p className="mt-1 text-sm text-red-500">{errors.position}</p>
            )}
          </div>

          {/* Employment Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              What is your current employment status?{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {[
                { value: "experienced", label: "Experienced Professional" },
                { value: "fresher", label: "Fresher" },
                { value: "student", label: "Student" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="employmentStatus"
                    value={option.value}
                    checked={formData.employmentStatus === option.value}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
            {errors.employmentStatus && (
              <p className="mt-1 text-sm text-red-500">
                {errors.employmentStatus}
              </p>
            )}
          </div>

          {/* Resume Upload */}
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Resume <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <label
                htmlFor="resume"
                className={`flex justify-center px-6 py-8 border-2 border-dashed ${
                  errors.resume ? "border-red-500" : "border-gray-300"
                } rounded-lg cursor-pointer hover:border-orange-500 transition`}
              >
                <div className="space-y-2 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-sm text-gray-600">
                    {formData.resume ? (
                      <span className="font-medium text-orange-500">
                        {formData.resume.name}
                      </span>
                    ) : (
                      <>
                        <span className="font-medium text-orange-500">
                          Upload a file
                        </span>{" "}
                        or drag and drop
                      </>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF or Word document up to 5MB
                  </p>
                </div>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  className="sr-only"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            {errors.resume && (
              <p className="mt-1 text-sm text-red-500">{errors.resume}</p>
            )}
          </div>

          {/* Submit Status Message - Only show errors */}
          {submitStatus.type === "error" && !isFormSubmitted && (
            <div className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="inline-block w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></span>
                  Submitting...
                </span>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;