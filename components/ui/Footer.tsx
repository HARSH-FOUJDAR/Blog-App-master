import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Facebook,
} from "lucide-react";

const CONTACT_INFO = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Location",
    content: "Bharatpur, Rajasthan, India",
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email",
    content: "harshbtp738@gmail.com",
    link: "mailto:harshbtp738@gmail.com",
  },
];

const SOCIAL_LINKS = [
  {
    icon: <Github className="w-6 h-6" />,
    color: "hover:text-gray-900",
    href: "https://github.com/HARSH-FOUJDAR",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    color: "hover:text-blue-700",
    href: "https://www.linkedin.com/in/harsh-fauzdar-a74716333/",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-[#d1701f] text-4xl font-extrabold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Feel free to contact me if any assistance is needed in the future.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 text-center">
          {CONTACT_INFO.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-72"
            >
              <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-[#DA954B] mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-[#d1701f] transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-600">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-100">
        <div className="container px-6 py-8 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm italic">
            © {new Date().getFullYear()} Harsh Foujdar Portfolio
          </p>

          <div className="flex gap-6 mt-4 sm:mt-0">
            {SOCIAL_LINKS.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className={`text-gray-400 transition-colors duration-300 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
