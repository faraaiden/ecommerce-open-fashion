import Svg, { G, Path } from 'react-native-svg';

const SearchIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path
          d='M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM22 22l-3.218-3.218'
          stroke='#14142B'
        />
      </G>
    </Svg>
  );
};

export default SearchIcon;
