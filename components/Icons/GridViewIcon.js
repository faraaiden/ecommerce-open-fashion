import Svg, { G, Path } from 'react-native-svg';

const GridViewIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path
          stroke='#14142B'
          d='M4.5 4.5h6v6h-6zM4.5 13.5h6v6h-6zM13.5 4.5h6v6h-6zM13.5 13.5h6v6h-6z'
        />
      </G>
    </Svg>
  );
};

export default GridViewIcon;
