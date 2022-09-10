import Svg, { G, Path } from 'react-native-svg';

const UpwardIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path d='m5.518 15.445 6.964-6.963 6.963 6.963' stroke='#14142B' />
      </G>
    </Svg>
  );
};

export default UpwardIcon;
