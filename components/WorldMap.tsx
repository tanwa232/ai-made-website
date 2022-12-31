import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const data = [
  {
    id: 'AFG',
    name: 'Afghanistan',
    value: 123456,
  },
  {
    id: 'ALB',
    name: 'Albania',
    value: 789012,
  },
  {
    id: 'Other',
    name: 'Temp',
    value: 777777,
  },
];

const WorldMap = () => {
  return (
    <ComposableMap className="w-full h-full relative">
      <Geographies geography="geo.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={
                (data.find((country) => country.id === geo.id) || data[2]).value > 500000
                  ? '#663399'
                  : '#D6D6DA'
              }
              className="border-gray-500 border-2"
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default WorldMap;
