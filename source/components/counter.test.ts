
import {CounterStore} from "./counter"

describe("counter store", () => {

	it("increments from zero to three", async() => {
		const counterStore = new CounterStore()
		expect(counterStore.count).toBe(0)
		counterStore.increment()
		expect(counterStore.count).toBe(1)
		counterStore.increment()
		counterStore.increment()
		expect(counterStore.count).toBe(3)
	})
})
