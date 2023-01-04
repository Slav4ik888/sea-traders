import { Town } from '../../../../types'

interface MockItem {
  description : string
}

type MockResult = Town[]

interface Mock extends Array<MockItem | MockResult> {
  0: MockItem
  1: MockResult
}

export type Mocks = Mock[]
