import Svg, { G, Path } from 'react-native-svg';

const IronLowTemperature = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G {...props}>
        <Path
          d='M7.665 6.059h7.29c1.49 0 4.642.882 5.328 4.41m0 0c.686 3.528.694 6.574.613 7.656H3.01c.122-2.511 1.678-7.534 6.921-7.534 5.244 0 9.086-.081 10.352-.122Z'
          stroke='#000'
        />
        <circle cx={12.749} cy={14.266} r={0.735} fill='#000' />
      </G>
    </Svg>
  );
};

export default IronLowTemperature;
