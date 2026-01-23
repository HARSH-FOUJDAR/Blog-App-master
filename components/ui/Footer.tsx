import { ListVideoIcon } from "lucide-react";
import { RiLiveFill } from "react-icons/ri";
import { MdFiberNew } from "react-icons/md";
export function Footer() {
  return (
    <footer className="text-indigo body-font bg-white ">
      <div className="container mx-auto px-5 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[#d1701f] text-3xl md:text-4xl font-bold">
            Contact
          </h1>

          <p className="mt-4 text-lg md:text-xl font-semibold text-black font-sans">
            Feel free to contact me if any assistance is needed in the future
          </p>
        </div>
        <br />
        <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {/* Icon */}
          <div className="flex flex-col items-center gap-3">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#DA954B"
              >
                <path d="M480.09-490q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.29-192.9Q589.42-820 480-820t-184.71 75.1Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold">Location</h3>

            <p className="text-sm text-muted-foreground">
              Bharatpur, Rajasthan, India
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#DA954B"
              >
                <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h434q-3 15-4 30t1 30H145l335 218 151-98q10 9 21 16.67 11 7.68 23 13.33L480-462 140-685v465h680v-360q16.79-4.78 31.4-13.39Q866-602 880-613v393q0 24-18 42t-42 18H140Zm0-580v520-520Zm619.88 90Q714-650 682-682.12q-32-32.12-32-78T682.12-838q32.12-32 78-32T838-837.88q32 32.12 32 78T837.88-682q-32.12 32-78 32Z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold">Email</h3>

            <p className="text-sm text-muted-foreground">
              harshbtp738@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#DA954B"
              >
                <path d="M776-487q-5-121-89-205t-205-89v-60q72 2 135.5 30.5T729-734q48 48 76.5 111.5T836-487h-60Zm-169 0q-5-50-40-84.5T482-611v-60q75 5 127.5 57T667-487h-60Zm188 367q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold">Phone</h3>

            <p className="text-sm text-gray-500 font-semibold">
              +91 978 345 49 78
            </p>
          </div>
        </div>
      </div>

      <hr />
      {/* Bottom Bar */}
      <div className="bg-[#d1701f]">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2020 Tailblocks — <span className="itelic">Subscribe Now</span>
            <a className="ml-3 text-blue-500 cursor-pointer">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-youtube-logo-icon-svg-download-png-721990.png?f=webp&w=512"
                className="w-8 h-8"
              />
            </a>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-blue-500 cursor-pointer">
              <svg fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-blue-500 cursor-pointer">
              <svg fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 cursor-pointer ">
              <img
                src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                className="w-8 h-8"
              />
            </a>
            <a className="ml-3 text-blue-500 cursor-pointer">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-logo-icon-svg-download-png-498418.png?f=webp&w=512"
                className="w-8 h-8"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
