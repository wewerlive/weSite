import FormWrap from '../formWrap';

type UseFormProps = {
  CompanyName: string;
  businessType: string;
  website: string;
  // eslint-disable-next-line no-unused-vars
  updateData: (fields: Partial<UseFormProps>) => void;
};

const PageTwo = ({
  CompanyName,
  businessType,
  website,
  updateData,
}: UseFormProps) => {
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <FormWrap title="Company Details">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          id="CompanyName"
          autoFocus
          required
          name="CompanyName"
          maxLength={100}
          placeholder="Company Name*"
          onChange={handleOnChange}
          value={CompanyName}
          className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
        />

        <input
          type="text"
          id="businessType"
          name="businessType"
          maxLength={50}
          placeholder="Business Type"
          onChange={handleOnChange}
          value={businessType}
          className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
        />

        <input
          type="text"
          id="website"
          name="website"
          maxLength={220}
          placeholder="Website"
          onChange={handleOnChange}
          value={website}
          className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
        />
      </div>
    </FormWrap>
  );
};

export default PageTwo;
