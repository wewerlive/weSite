import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => (
  <footer
    id="footer"
    className="min-h-full flex gap-8 items-center justify-center bg-black text-white p-20"
  >
    <Image src="/logo.png" height={20} width={40} alt="footer-Logo"></Image>
    <div className="gap-4 flex lg:flex-row flex-col">
      <div className="flex gap-4">
        <Link href="/">
          <a>Terms</a>
        </Link>
        <Link href="/">
          <a>Privacy Policy</a>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/company/wewer/">
          <a>Linkedin</a>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100085437375692">
          <a>Facebook</a>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="https://www.instagram.com/wewer.live/">
          <a>Instagram</a>
        </Link>
        <Link href="/">
          <a>Twitter</a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
