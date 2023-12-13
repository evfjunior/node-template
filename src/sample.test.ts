import { greet } from './main'

test('Sample test', () => {
  const greeting = 'hello world!'
  const output = greet()

  expect(output).toBe(greeting)
})
