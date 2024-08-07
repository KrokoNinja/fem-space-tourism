import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <img src='/shared/logo.svg' alt='Logo' className='m-6 h-10 w-10' />
    </Link>
  );
};

export default Logo;
