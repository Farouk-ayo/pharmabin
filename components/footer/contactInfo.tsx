import { MapPin, Mail, Phone, Rocket } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-primary mb-4">Contact Info</h3>
      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 !text-white fill-black mt-1 flex-shrink-0" />
          <span className="text-gray-600">OAU, Ile-Ife, Osun State</span>
        </li>
        <li className="flex items-center space-x-3">
          <Phone className="w-5 h-5 !text-white fill-black flex-shrink-0" />
          <span className="text-gray-600">08120967788 / 09039539042</span>
        </li>
        <li className="flex items-center space-x-3">
          <Mail className="w-5 h-5 !text-white fill-black flex-shrink-0" />
          <span className="text-gray-600">pharmabin@gmail.com</span>
        </li>
      </ul>

      <div className="mt-6">
        <h4 className="text-lg font-semibold text-primary mb-3">
          Subscribe To Our Newsletter
        </h4>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-primary bg-transparent rounded-l focus:outline-none"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-r hover:bg-primary/90 transition-colors">
            <Rocket className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
