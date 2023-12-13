import { config } from 'dotenv'

config()

export function greet() {
  return 'hello world!'
}

export function init() {
  console.log(greet())
}

init()
