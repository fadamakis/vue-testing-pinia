// stores/counter.spec.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from './counter'

describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('increment with no parameters should add one to the counter', () => {
    const counter = useCounterStore()
    expect(counter.count).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it('increment by amount should update the counter', () => {
    const counter = useCounterStore()
    counter.increment(10)
    expect(counter.count).toBe(10)
  })


  it('doubleCount getter should be double the counter at all times', () => {
    const counter = useCounterStore()
    expect(counter.doubleCount).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
    expect(counter.doubleCount).toBe(2)
  })
})