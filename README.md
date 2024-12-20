# Javascript Type Coercion Pitfall: Unexpected Addition Behavior

This example demonstrates a common Javascript pitfall involving type coercion and the + operator.  When adding a number and a string, Javascript concatenates the values instead of performing numerical addition. This can lead to unexpected and difficult-to-debug errors.

## Bug

The `foo` function is intended to add two numbers. However, when a string is passed as an argument, Javascript interprets the + operator as string concatenation.

## Solution

The solution involves explicitly converting both inputs to numbers before the addition using `Number()` or `parseInt()`.  This ensures that the addition operation is performed numerically, resulting in the expected outcome.