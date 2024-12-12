// explain the difference between getBy, findBy, queryBy:

// ! Method	Behavior	Use When
// !getBy	Synchronous, throws error if no match	Element must exist immediately.
// !findBy	Asynchronous, waits for element to appear, throws error on timeout	Element appears after a delay.
// !queryBy	Synchronous, returns null if no match	Verify that an element does not exist.