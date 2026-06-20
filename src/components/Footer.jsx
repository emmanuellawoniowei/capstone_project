import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#FFFDFE] border-t border-pink-100">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-[#E75480]">
              AuraBeauty
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Premium skincare crafted to nourish, protect, and reveal your natural glow.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5">Shop</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Face Creams</li>
              <li>Moisturizers</li>
              <li>Night Care</li>
              <li>Body Care</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">Follow Us</h3>

            <div className="flex gap-4 text-2xl text-[#E75480]">
              <FiInstagram className="cursor-pointer hover:scale-110 transition" />
              <FiFacebook className="cursor-pointer hover:scale-110 transition" />
              <FiTwitter className="cursor-pointer hover:scale-110 transition" />
              <FiMail className="cursor-pointer hover:scale-110 transition" />
            </div>

            <p className="mt-5 text-gray-600">
              support@aurabeauty.com
            </p>
          </div>

        </div>

        <div className="border-t border-pink-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 AuraBeauty. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Shipping</span>
          </div>

        </div>
      </div>

    </footer>
  );
}