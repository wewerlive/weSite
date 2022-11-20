import Image from 'next/image';
import React from 'react';
import Form from './utils/forms';

const ContactUs: React.FC = () => {
  return (
    <div
      id="ContactUs"
      className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen"
    >
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image src="/logo.png" height={50} width={80} alt="form-Logo"></Image>
        </div>
        <h2 className="text-4xl font-bold">Register</h2>
        <div className="flex min-w-full justify-center items-center mx-auto">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
