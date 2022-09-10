import Svg, { G, Path } from 'react-native-svg';

const ExportIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path d='m17 6-5.5-5L6 6M11.5 1v13M3 12v10h17V12' stroke='#14142B' />
      </G>
    </Svg>
  );
};

export default ExportIcon;
