
interface MockItem {
  description : string
  value       : number
  upper?      : boolean
}

type MockResult = string

interface Mock extends Array<MockItem | MockResult> {
  0: MockItem
  1: MockResult
}

export type Mocks = Mock[]
