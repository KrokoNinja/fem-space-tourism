interface Props {
  number: string;
  text: string;
}

const Heading = ({ number, text }: Props) => {
  return (
    <div className='flex justify-center gap-6 font-barlow-condensed uppercase tracking-[2px] md:mb-6 md:justify-start lg:mb-0 lg:text-lg'>
      <span className='text-white/25'>{number}</span>
      {text}
    </div>
  );
};

export default Heading;
