import { Mocks } from './types';


export const mocks: Mocks = [
  [
    {
      description: '0 = ""',
      value: 0
    },
    ''
  ],
  [
    {
      description: 'undefined = ""',
      value: undefined
    },
    ''
  ],
  [
    {
      description: 'NaN = ""',
      value: NaN
    },
    ''
  ],
  [
    {
      description: '1 = a',
      value: 1
    },
    'a'
  ],
  [
    {
      description: '26 = z',
      value: 26
    },
    'z'
  ],
  [
    {
      description: '52 = az',
      value: 52
    },
    'az'
  ],
  [
    {
      description: '78 = bz',
      value: 78
    },
    'bz'
  ],
  [
    {
      description: '104 = cz',
      value: 104
    },
    'cz'
  ],
  [
    {
      description: '702 = zz',
      value: 702
    },
    'zz'
  ],
  [
    {
      description: '703 = aaa',
      value: 703
    },
    'aaa'
  ],
  [
    {
      description: '703 = AAA',
      value: 703,
      upper: true
    },
    'AAA'
  ],
  
];
