import Svg, { G, Path } from 'react-native-svg';

const DoNotBleachIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path
          d='m7.65 11.446-3.81 7.095h16.14L11.988 3.547 8.735 9.34M3.779 6.955 21.809 16'
          stroke='#000'
        />
      </G>
    </Svg>
  );
};

export default DoNotBleachIcon;
