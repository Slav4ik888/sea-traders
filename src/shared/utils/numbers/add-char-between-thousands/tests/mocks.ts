import { Mocks } from './types';


export const mocks: Mocks = [
  [
    {
      description: 'str: NaN - must be ``',
      str: NaN
    }, ''
  ],
  [
    {
      description: 'str: undefined - must be ``',
      str: undefined
    }, ''],
  [
    {
      description: 'str: null - must be ``',
      str: null
    }, ''
  ],
  [
    {
      description: 'str: `` - must be ``',
      str: ''
    }, ''
  ],
  [
    {
      description: 'str: 0 - must be `0`',
      str: 0
    }, '0'
  ],
  [
    {
      description: 'str: 1 - must be `1`',
      str: 1
    }, '1'
  ],
  [
    {
      description: 'str: `0` - must be `0`',
      str: '0'
    }, '0'
  ],
  [
    {
      description: 'str: `1` - must be `1`',
      str: '1'
    }, '1'
  ],
  [
    {
      description: 'str: `1234sdf` - must be `1 234`',
      str: '1234sdf'
    }, '1 234'
  ],
  [
    {
      description: 'str: `123456789.1234asdf` - must be `123 456 789`',
      str: '123456789.1234asdf'
    }, '123 456 789'
  ],
  [
    {
      description: 'str: `123456789.1234asdf`, rest: true - must be `123 456 789.1234`',
      str: '123456789.1234asdf',
      config: { rest: true }
    }, '123 456 789.1234'
  ],
  [
    {
      description: 'str: `123456789.1234asdf`, rest: true, div: `*` - must be `123*456*789.1234`',
      str: '123456789.1234asdf',
      config: { rest: true, divider: '*' }
    }, '123*456*789.1234'
  ],
  [
    {
      description: 'str: `123456789,1234asdf` - must be `123 456 789`',
      str: '123456789,1234asdf'
    }, '123 456 789'
  ],
  [
    {
      description: 'str: `123456789,1234asdf` rest: true - must be `123 456 789.1234`',
      str: '123456789,1234asdf',
      config: { rest: true }
    }, '123 456 789.1234'
  ],
  [
    {
      description: 'str: `sdf123456789.1234asdf` - must be `1 234 567 890`',
      str: 'sdf1234567890.1234asdf'
    }, '1 234 567 890'
  ],
  [
    {
      description: 'str: `sd00f001234567890.123asdf` - must be without zero `1 234 567 890`',
      str: 'sd00f001234567890.123asdf'
    }, '1 234 567 890'
  ],
  [
    {
      description: 'str: 123456789.1234 - must be `123 456 789`',
      str: 123456789.1234
    }, '123 456 789'
  ],
  [
    {
      description: 'str: 123456789.1234 - must be `1 234`',
      str: 123456789.1234,
      config: { rest: true }
    }, '123 456 789.1234'
  ]
];
