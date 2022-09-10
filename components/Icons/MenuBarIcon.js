import Svg, { G, Path } from 'react-native-svg';

const MenuBarIcon = (props) => (
  <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G {...props}>
      <Path d='M.307 12h15.675M.307 5h23.386M.307 19h23.386' stroke='#14142B' />
    </G>
  </Svg>
);

export default MenuBarIcon;
