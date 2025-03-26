import { useState } from "react";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {/* Toggle Button */}
      {!isOpen ? (
        <button
          onClick={toggleChat}
          className="bg-primary text-white rounded-full shadow-lg"
        >
          <Image src="/messages.svg" alt="chat" width={60} height={60} />
        </button>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-primary text-white rounded-full shadow-lg"
        >
          <Image src="/cross.svg" alt="close chat" width={60} height={60} />
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed z-[200] bottom-32 right-2  md:right-10 w-[90%] justify-between   md:w-96  md:h-auto bg-white rounded-xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <Link href={"/"}>
              <div className="relative flex items-center w-48 md:w-52 h-10">
                <Image
                  src="/pharmabin-logo-w.svg"
                  alt="pharmabin"
                  className="w-full h-full"
                  layout="fill"
                />
              </div>
            </Link>
          </div>

          <div className="h-[15rem]"></div>

          {/* Input Box */}
          <div className="p-4 border-t">
            <div className="flex relative">
              <input
                type="text"
                placeholder="Choose an Option"
                className="flex-1 px-4 py-2 border w-full bg-white rounded-l focus:outline-none"
              />
              <button className="bg-primary text-white absolute right-2 top-1.5 px-2 py-2 rounded hover:bg-primary/90 transition-colors">
                <Rocket className="w-5 h-5 " />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
