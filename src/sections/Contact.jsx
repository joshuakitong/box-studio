import { useState } from "react";
import { Mail, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formsubmit.co/boxeightyfour@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setShowAlert(true);
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Contact Us
      </h2>

      {showAlert && (
        <div className="mb-6 w-full max-w-lg p-4 rounded-lg border border-green-400 bg-green-100 text-green-700 text-center">
          Your message has been sent successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-black text-white rounded-3xl p-8 border border-white focus:border-white outline-none transition"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 rounded-lg bg-transparent border border-white focus:border-white outline-none transition"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 rounded-lg bg-transparent border border-white focus:border-white outline-none transition"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="topic" className="block mb-2 font-medium">
            Topic
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            required
            className="w-full p-2 rounded-lg bg-transparent border border-white focus:border-white outline-none transition"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full p-2 rounded-lg bg-transparent border border-white focus:border-white outline-none transition resize-none"
          ></textarea>
        </div>

        <input type="hidden" name="_captcha" value="false" />

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-2 rounded-full border border-white text-white font-semibold transition-colors duration-300 cursor-pointer flex items-center justify-center ${
            loading
              ? "opacity-70 hover:cursor-not-allowed"
              : "hover:bg-white hover:text-black"
          }`}
        >
          {loading ? (
            <div className="h-6 w-6 border-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* Direct Contact Section */}
      <div className="mt-4 w-full max-w-lg text-center">
        <p className="mb-2 text-lg font-medium text-white">
          Or message us directly through:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:boxeightyfour@gmail.com"
            className="w-full sm:w-auto p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.facebook.com/box84official/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/box84official"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
