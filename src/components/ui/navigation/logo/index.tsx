import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-8 w-36 relative">
      <Link href="/">
        <Image
          className="object-contain"
          src="/nanovoltz-logo.png"
          alt="Nanovoltz logo"
          fill
        />
      </Link>
    </div>
  );
};

export default Logo;
