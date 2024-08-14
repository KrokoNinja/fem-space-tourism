import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/shared/logo.svg'
        width={40}
        height={40}
        alt='Logo'
        className='m-6'
      />
    </Link>
  );
};

export default Logo;
