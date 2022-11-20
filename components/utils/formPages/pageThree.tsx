import FormWrap from '../formWrap';

type UseFormProps = {
  adType: string;
  location: string;
  imageUrl: string;
  message: string;
  // eslint-disable-next-line no-unused-vars
  updateData: (fields: Partial<UseFormProps>) => void;
};

const PageThree = ({
  adType,
  location,
  imageUrl,
  message,
  updateData,
}: UseFormProps) => {
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <FormWrap title="Advertisement Details">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          id="adType"
          name="adType"
          required
          maxLength={20}
          placeholder="Type: Banner, Poster, Floating-Panel, etc*"
          onChange={handleOnChange}
          value={adType}
          className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
        />
        <input
          type="text"
          id="location"
          name="location"
          required
          maxLength={50}
          placeholder="Location: Dubai, Delhi, Odisha, etc*"
          onChange={handleOnChange}
          value={location}
          className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
        />
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          required
          maxLength={300}
          placeholder="Image URL*"
          onChange={handleOnChange}
          value={imageUrl}
          className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
        />
        <textarea
          id="message"
          name="message"
          maxLength={500}
          placeholder="Message"
          onChange={handleOnChange}
          value={message}
          className="bg-black text-white outline-none border-2 border-white rounded-2xl px-8 py-2"
        />
      </div>
    </FormWrap>
  );
};

export default PageThree;
