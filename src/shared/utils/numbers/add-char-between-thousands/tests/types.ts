import { Config } from '..'

interface MockItem {
  description : string
  str         : string | number
  config?     : Config
}

type MockResult = string

interface Mock extends Array<MockItem | MockResult> {
  0: MockItem
  1: MockResult
}

export type Mocks = Mock[]
