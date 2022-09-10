import Svg, { G, Path } from 'react-native-svg';

const FilterIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3 7.5v1h18v-1H3Zm7 9h4v-1h-4v1Zm8-4H6v-1h12v1Z'
          fill='#000'
        />
      </G>
    </Svg>
  );
};

export default FilterIcon;
