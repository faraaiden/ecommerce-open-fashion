import Svg, { G, Path } from 'react-native-svg';

const ShoppingCartIcon = (props) => (
  <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G {...props}>
      <Path
        d='m3.496 23.28.816-16.56h16.347l.816 16.56H3.495Z'
        stroke='#14142B'
      />
      <Path
        d='M8.16 10.15V5.55a4.325 4.325 0 0 1 8.65 0v4.598'
        stroke='#14142B'
      />
    </G>
  </Svg>
);

export default ShoppingCartIcon;
