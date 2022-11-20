import axios from 'axios';
import { useCallback, useState } from 'react';

const Form: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    CompanyName: '',
    email: '',
    phone: '',
    address: '',
    businessType: '',
    website: '',
    message: '',
  });

  const handleOnChange = useCallback((e: any) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  }, []);

  const handleServerResponse = useCallback((ok: any, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        CompanyName: '',
        email: '',
        phone: '',
        address: '',
        businessType: '',
        website: '',
        message: '',
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      });
    }
  }, []);

  const handleOnSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: 'POST',
        url: 'https://formspree.io/f/mbjbyywa',
        data: inputs,
      }).then(
        () => {
          handleServerResponse(
            true,
            'Thanks for your response! We will get back to you shortly.'
          );
        },
        (error) => {
          handleServerResponse(false, error.response.data.error);
        }
      );
    },
    [inputs, handleServerResponse]
  );

  return (
    <form
      onSubmit={handleOnSubmit}
      id="form"
      className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[700px]"
    >
      {status.info.error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative "
          role="alert"
        >
          <strong className="font-bold">Error</strong>:{' '}
          <span className="block sm:inline">{status.info.msg}</span>
        </div>
      )}
      {status.submitted ? (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative "
          role="alert"
        >
          <strong className="font-bold">Success</strong>:{' '}
          <span className="block sm:inline">{status.info.msg}</span>
        </div>
      ) : (
        <>
          <input
            type="text"
            id="CompanyName"
            required
            name="CompanyName"
            maxLength={100}
            placeholder="Company Name*"
            onChange={handleOnChange}
            value={inputs.CompanyName}
            className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={100}
            placeholder="Email*"
            onChange={handleOnChange}
            value={inputs.email}
            className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
          />
          <input
            type="number"
            id="phone"
            name="phone"
            required
            maxLength={10}
            placeholder="Phone Number*"
            onChange={handleOnChange}
            value={inputs.phone}
            className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
          />

          <input
            type="text"
            id="address"
            name="address"
            required
            maxLength={200}
            placeholder="Address*"
            onChange={handleOnChange}
            value={inputs.address}
            className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
          />

          <input
            type="text"
            id="businessType"
            name="businessType"
            maxLength={100}
            placeholder="Business Type"
            onChange={handleOnChange}
            value={inputs.businessType}
            className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
          />

          <input
            type="text"
            id="website"
            name="website"
            maxLength={220}
            placeholder="Website"
            onChange={handleOnChange}
            value={inputs.website}
            className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
          />

          <textarea
            id="message"
            name="message"
            maxLength={500}
            placeholder="Message"
            onChange={handleOnChange}
            value={inputs.message}
            className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
          />
          <p className="text-gray-500">Mandatory Fields *</p>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-red-400 text-black font-bold rounded-3xl px-8 py-2"
            >
              {!status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting...'}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default Form;
