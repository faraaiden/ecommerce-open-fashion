import Svg, { G, Path } from 'react-native-svg';

const ArrowIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path
          d='M14.283 5 21 12l-6.717 7M20.628 12.109H2.895'
          stroke='#14142B'
        />
      </G>
    </Svg>
  );
};

export default ArrowIcon;
