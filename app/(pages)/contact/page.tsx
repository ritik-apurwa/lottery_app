import { Mail, Phone } from "lucide-react";
import React from "react";

import { FaYoutube } from "react-icons/fa";

const page = () => {
  return (
    <section className="mx-auto bg-blue-100 min-h-screen">
      <div className="flex flex-col gap-y-3 pt-4">
        <div className="flex flex-row gap-x-2 p-2">
          <Phone />
          +915665566565
        </div>
        <div className="flex flex-row gap-x-2 p-2">
          <Mail />
        Hamari Mail 
        </div>
        <div className="flex flex-row gap-x-2 p-2">
          <FaYoutube size={28} />
          hamara youtube
        </div>
      </div>
    </section>
  );
};

export default page;
