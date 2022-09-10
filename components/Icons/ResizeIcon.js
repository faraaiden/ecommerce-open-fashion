import Svg, { G, Path } from 'react-native-svg';

const ResizeIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path d='M13.087 3.646h7.275v7.29' stroke='#14142B' />
        <Path
          transform='rotate(134.935 9.199 5.828)'
          stroke='#14142B'
          d='M0-.5h10.165'
        />
        <Path d='M10.912 20.355H3.637v-7.29' stroke='#14142B' />
        <Path
          transform='rotate(-45.065 26.733 5.118)'
          stroke='#14142B'
          d='M0-.5h10.165'
        />
      </G>
    </Svg>
  );
};

export default ResizeIcon;
