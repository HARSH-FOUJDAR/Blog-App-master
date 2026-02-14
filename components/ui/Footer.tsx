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
    <footer id="contact" className="bg-gradient-to-b from-white via-gray-50 to-gray-200 dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-200">
      <hr />
      <section id="Contect" className="py-12 ">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

          <form action="" className=" border-2 p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium  mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium  mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@mail.com"
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium  mb-1">
                  Message
                </label>
                <textarea
                  placeholder=" Send Message"
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors duration-300 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Bottom Bar */}
      <div className="bg-slate-900">
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
