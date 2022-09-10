import Svg, { G, Path } from 'react-native-svg';

const CloseIcon = () => {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path d='M6 6L18.7742 18.7742' stroke='#14142B' stroke-linejoin='round' />
      <Path
        d='M6 18.7744L18.7742 6.00022'
        stroke='#14142B'
        stroke-linejoin='round'
      />
    </Svg>
  );
};

export default CloseIcon;
