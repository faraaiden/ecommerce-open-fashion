import Svg, { G, Path } from 'react-native-svg';

const ListViewIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path d='M12.205 17h7.772M12.228 7H20' stroke='#14142B' />
        <Path stroke='#14142A' d='M2.513 3.455h7v7h-7zM2.513 13.514h7v7h-7z' />
      </G>
    </Svg>
  );
};

export default ListViewIcon;
