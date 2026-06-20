import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const data = [
  {
    q: "Are your skincare products safe for sensitive skin?",
    a: "Yes. All products are dermatologist-tested and formulated for sensitive skin.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes, we ship worldwide with secure and trackable delivery options.",
  },
  {
    q: "Are your products cruelty-free?",
    a: "Absolutely. We do not test on animals at any stage of production.",
  },
  {
    q: "Can I return a product?",
    a: "Yes. Unopened items can be returned within 7 days of delivery.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#2D2D2D]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-5">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center gap-4"
            >
              <span className="font-semibold text-left text-gray-800">
                {item.q}
              </span>

              <FiChevronDown
                className={`text-pink-500 transition-transform duration-300 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open === i
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}