type Tech = {
  title: string;
  description: string;
};

export const TECH_INFO: { [key: string]: Tech } = {
  'launch-vehicle': {
    title: 'Launch Vehicle',
    description:
      'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth&apos;s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it&apos;s quite an awe-inspiring sight on the launch pad!',
  },
  spaceport: {
    title: 'Spaceport',
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth&apos;s rotation for launch.',
  },
  'space-capsule': {
    title: 'Space Capsule',
    description:
      'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth&apos;s atmosphere without wings. Our capsule is where you&apos;ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
  },
};
