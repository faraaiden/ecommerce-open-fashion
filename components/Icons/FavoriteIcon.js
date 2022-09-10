import Svg, { G, Path } from 'react-native-svg';

const FavoriteIcon = () => {
  return (
    <Svg width={24} height={22} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path
          d='M2.772 2.772a6.05 6.05 0 0 0 0 8.557l9.165 9.165.063-.063.063.063 9.165-9.165a6.05 6.05 0 1 0-8.557-8.557l-.317.318a.5.5 0 0 1-.707 0l-.318-.318a6.05 6.05 0 0 0-8.557 0Z'
          stroke='#14142B'
        />
      </G>
    </Svg>
  );
};

export default FavoriteIcon;
