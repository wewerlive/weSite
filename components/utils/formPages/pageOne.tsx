import FormWrap from '../formWrap';

type UseFormProps = {
  Name: string;
  email: string;
  phone: string;
  address: string;
  // eslint-disable-next-line no-unused-vars
  updateData: (fields: Partial<UseFormProps>) => void;
};

const PageOne = ({ Name, email, phone, address, updateData }: UseFormProps) => {
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <FormWrap title="User Details">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          id="Name"
          autoFocus
          required
          name="Name"
          maxLength={100}
          placeholder="Name*"
          onChange={handleOnChange}
          value={Name}
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
          value={email}
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
          value={phone}
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
          value={address}
          className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
        />
      </div>
    </FormWrap>
  );
};

export default PageOne;
