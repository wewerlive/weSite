type FormWrapProps = {
  title: string;
  children: React.ReactNode;
};

const FormWrap = ({ title, children }: FormWrapProps) => {
  return (
    <>
      <h2 className=" font-bold text-3xl mb-10 md:mb-4 xs:mb-2 text-center">
        {title}
      </h2>
      <div>{children}</div>
    </>
  );
};

export default FormWrap;
