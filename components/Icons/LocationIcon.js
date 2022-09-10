import Svg, { G, Path } from 'react-native-svg';

const LocationIcon = () => {
  return (
    <Svg width={24} height={25} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path
          d='M22 11c0 5.523-10 13-10 13S2 16.523 2 11 6.477 1 12 1s10 4.477 10 10Z'
          stroke='#14142B'
        />
        <circle cx={12} cy={11} r={3} stroke='#14142B' />
      </G>
    </Svg>
  );
};

export default LocationIcon;
