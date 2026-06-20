import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setMsg("Please fill in all fields.");
      return;
    }

    setMsg("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#FFF7FA]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-pink-500 font-medium">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            We'd Love To Hear From You
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Have questions about our skincare products? Send us a message
            and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h3 className="text-2xl font-semibold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <FiMail className="text-pink-500 text-xl" />
                </div>

                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-500">
                    support@glowskin.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <FiPhone className="text-pink-500 text-xl" />
                </div>

                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-500">
                    +234 800 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <FiMapPin className="text-pink-500 text-xl" />
                </div>

                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-500">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <h4 className="font-semibold mb-4">
                Follow Us
              </h4>

              <div className="flex gap-4">
                <FiInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition" />
                <FiFacebook className="text-2xl cursor-pointer hover:text-pink-500 transition" />
                <FiTwitter className="text-2xl cursor-pointer hover:text-pink-500 transition" />
              </div>
            </div>

            <div className="mt-10 p-5 bg-pink-50 rounded-2xl">
              <h4 className="font-semibold">
                Business Hours
              </h4>

              <p className="text-gray-500 mt-2">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>

              <p className="text-gray-500">
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h3 className="text-2xl font-semibold mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl font-medium transition"
              >
                Send Message
              </button>

              {msg && (
                <p className="text-center text-pink-600 font-medium">
                  {msg}
                </p>
              )}

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}