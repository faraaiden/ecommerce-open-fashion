import Svg, { G, Path } from 'react-native-svg';

const PlusIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path d='M12 3v18M3 12h18' stroke='#000' />
      </G>
    </Svg>
  );
};

export default PlusIcon;
