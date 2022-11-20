import Image from 'next/image';
import Link from 'next/link';

interface MemberProps {
  name: string;
  title: string;
  image: string;
  linkedin: string;
  github: string;
}

const Member: React.FC<MemberProps> = ({
  name,
  title,
  image,
  linkedin,
  github,
}) => {
  return (
    <div className="drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
      <div className="overflow-hidden">
        <Image
          height={122}
          width={120}
          src={`https://github.com/${image}.png`}
          alt="avatar"
        ></Image>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold">{name}</h3>
      <h4 className="text-sm lg:text-md">
        <em>{title}</em>
      </h4>
      <div className="flex gap-4 items-center justify-center">
        <Link href={linkedin}>
          <a target="_blank" className="">
            <Image
              height={24}
              width={24}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg`}
              alt="socials"
            ></Image>
          </a>
        </Link>
        <Link href={github}>
          <a target="_blank" className="">
            <Image
              height={24}
              width={24}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg`}
              alt="socials"
            ></Image>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Member;
