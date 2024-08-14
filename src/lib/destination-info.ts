type Destination = {
  name: string;
  description: string;
  distance: string;
  travel_time: string;
};

export const DESTINATION_INFO: { [key: string]: Destination } = {
  moon: {
    name: 'Moon',
    description:
      'See our planet as you&apos;ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you&apos;re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travel_time: '3 Days',
  },
  mars: {
    name: 'Mars',
    description:
      'Don&apos;t forget to pack your hiking boots. You&apos;ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It&apos;s two and a half times the size of Everest!',
    distance: '225 Mil. km',
    travel_time: '9 Months',
  },
  europa: {
    name: 'Europa',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover&apos;s dream. With an icy surface, it&apos;s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 Mil. km',
    travel_time: '2 Years',
  },
  titan: {
    name: 'Titan',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 Bil. km',
    travel_time: '7 Years',
  },
};
