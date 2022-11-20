import axios from 'axios';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ReactElement, useCallback, useState } from 'react';
import PageOne from '../components/utils/formPages/pageOne';
import { StepForm } from '../components/utils/stepForm';

const PageTwo = dynamic(() => import('../components/utils/formPages/pageTwo'), {
  ssr: false,
});

const PageThree = dynamic(
  () => import('../components/utils/formPages/pageThree'),
  {
    ssr: false,
  }
);

type FormData = {
  Name: string;
  email: string;
  phone: string;
  address: string;
  CompanyName: string;
  businessType: string;
  website: string;
  message: string;
  adType: string;
  location: string;
  imageUrl: string;
};

const INIT_DATA: FormData = {
  Name: '',
  email: '',
  phone: '',
  address: '',
  CompanyName: '',
  businessType: '',
  website: '',
  message: '',
  adType: '',
  location: '',
  imageUrl: '',
};

const AdForm: NextPage = (): ReactElement => {
  const [data, setData] = useState(INIT_DATA);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const updateData = (fields: Partial<FormData>) => {
    setData((prev: any) => {
      return { ...prev, ...fields };
    });
  };

  const {
    steps,
    currentStep,
    step,
    prevStep,
    nextStep,
    isFirstStep,
    isLastStep,
  } = StepForm([
    (<PageOne {...data} updateData={updateData} />) as ReactElement,
    (<PageTwo {...data} updateData={updateData} />) as ReactElement,
    (<PageThree {...data} updateData={updateData} />) as ReactElement,
  ]);

  const handleServerResponse = useCallback((ok: any, msg: any) => {
    if (ok) {
      setData({
        Name: '',
        email: '',
        phone: '',
        address: '',
        CompanyName: '',
        businessType: '',
        website: '',
        message: '',
        adType: '',
        location: '',
        imageUrl: '',
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
      if (isLastStep) {
        setStatus((prevStatus: any) => ({ ...prevStatus, submitting: true }));
        axios({
          method: 'POST',
          url: 'https://formspree.io/f/mbjbyywa',
          data: data,
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
      } else {
        nextStep();
      }
    },
    [data, handleServerResponse, isLastStep, nextStep]
  );

  return (
    <div className="flex md:mx-20 xs:mx-10 lg:mx-32 my-10 rounded-lg justify-center items-center border-2 px-4 pb-16 xs:px-0 md:px-10">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-4 mt-6 px-10 lg:mt-10 min-w-full lg:min-w-[700px]"
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
        {status.submitting ? (
          <>
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative "
              role="alert"
            >
              <strong className="font-bold">Success</strong>:{' '}
              <span className="block sm:inline">
                Thanks for your response! We will get back to you shortly.
              </span>
            </div>
            <div className="flex justify-center items-center">
              <div className="rounded-xl border-2 border-white">
                <Link href="/">
                  <a className="flex justify-center items-center text-white bg-blue-500 rounded-xl px-4 py-2">
                    Go Home
                  </a>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-end justify-end px-4">
              <p className="font-bold items-end justify-end">
                <span className="font-semibold text-lg text-red-400">
                  Step :
                </span>{' '}
                {currentStep + 1} / {steps.length}
              </p>
            </div>
            {step}
            <div>
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded-2xl"
                >
                  Back
                </button>
              )}{' '}
              <div className="inline">
                {!isLastStep && (
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl"
                  >
                    Next
                  </button>
                )}
                {isLastStep && (
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl"
                  >
                    {!status.submitting ? 'Submit' : 'Submitted'}
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default AdForm;
