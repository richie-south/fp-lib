# Plura

[![npm version](https://badge.fury.io/js/plura.svg)](https://badge.fury.io/js/plura)

Super simple functional programming library

# Installation

```
npm install plura --save
```

# Roadmap

- monads...

# Usage

Check tests for more usage information

## Summary

* [always](#always)
* [ap](#ap)
* [chain](#chain)
* [compose](#compose)
* [curry](#curry)
* [curryDestructed](#currydestructed)
* [curryObject](#curryobject)
* [filter](#filter)
* [find](#find)
* [isArray](#isarray)
* [isNumber](#isnumber)
* [isObject](#isobject)
* [isString](#isstring)
* [map](#map)
* [pipe](#pipe)
* [reduce](#reduce)
* [reduceObjIndexed](#reduceobjindexed)


## always

### Syntax

```javascript
const getTen = always(10) // >> function
getTen() // >> 10
```

### Parameters

- value

### Return value

Function and if executed get value

## ap

### Syntax

```javascript
ap([addTwo, minusOne], [1, 2, 3]) // >> [3, 4, 5, 0, 1, 2]
```

### Parameters

- fns
  - array of functions
- values
  - array of values

### Return value

Array of applied functions to a array of values

## chain

`Aka: flatMap`

### Syntax

```javascript
chain(duplicate, [1, 2]) // >> [1, 1, 2, 2]
```

### Parameters

- fn
  - function to change values
- array
  - array to change

### Return value

Array

## compose

### Syntax

```javascript
const minusOneTimesTo = compose(timeTwo, minusOne)
minusOneTimesTo(2) // >> 2
```

### Parameters

- fns
  - as many functions you want
- arguments
  - initial arguments

### Return value

Composed functions

## curry

### Syntax

```javascript
const addC = curry(add)
addC(1, 1, 1) // >> 3
addC(1)(1)(1) // >> 3
addC(1)(1, 1) // >> 3
```

### Parameters

- fn
  - function you want to curry
- arguments
  - as many arguments needed to fulfill fn parameters

### Return value

Curry:ed function

## curryDestructed

## Syntax

```javascript
// add must have simple destruction! : no rest ... or nested destructions
const add = ({ a, b, c}) => a + b + c

const addC = curryDestructed(add)
addC({a: 1, b: 1, c: 1})     // >> 3
addC({a: 1})({b: 1})({c: 1}) // >> 3
addC({c: 1})({b: 1, a: 1})   // >> 3

```

### Parameters

  - function you want to curry
- arguments
  - as many arguments needed to fulfill fn parameters

### Return value

Curry:ed function

## curryObject

### Syntax

```javascript
// with object
const objectTemplate = {
  a: '',
  b: '',
  c: '',
}
const addC = curryObject(objectTemplate, add)
addC({a: 1, b: 1, c: 1})     // >> 3
addC({a: 1})({b: 1})({c: 1}) // >> 3
addC({c: 1})({b: 1, a: 1})   // >> 3

// with array
const arrayTemplate = [
  'a',
  'b',
  'c',
]
const addC = curryObject(arrayTemplate, add)
addC({a: 1, b: 1, c: 1})     // >> 3
addC({a: 1})({b: 1})({c: 1}) // >> 3
addC({c: 1})({b: 1, a: 1})   // >> 3
```

### Parameters

- template
  - template of object keys, object|array
- fn
  - function you want to curry
- arguments
  - as many arguments needed to fulfill fn parameters

### Return value

Curry:ed function

## filter

### Syntax

```javascript
filter(isEven, [2, 3, 6]) // >> [2]
```

### Parameters

- fn
  - function you want to apply to check array elements
- array
  - array to filter over

### Return value

Altred array

## find

### Syntax

```javascript
find(hasIdOfOne, [{ id: 10 }, { id: 1 }]) // >> { id: 1 }
```

### Parameters

- fn
  - function to evaluate values
- array
  - array to find value in
- initailValue
  - optional
  - if find doesn't find anything initialValue will be returned, default: undefined

### Return value

Any, found value

## isArray

### Syntax

```javascript
isArray([1, 2]) // >> true
```

### Parameters

- any
  - checks if array or not

### Return value

Boolean

## isNumber

### Syntax

```javascript
isNumber(10) // >> true
```

### Parameters

- any
  - checks if number or not

### Return value

Boolean


## isObject

### Syntax

```javascript
isObject({ x: 1 }) // >> true
```

### Parameters

- any
  - checks if object or not

### Return value

Boolean

## isString

### Syntax

```javascript
isString('abc') // >> true
```

### Parameters

- any
  - checks if string or not

### Return value

Boolean

## map

### Syntax

```javascript
map(addOne, [1, 2, 3]) // >> [2, 3, 4]
```

### Parameters

- fn
  - function you want to apply to array elements
- array
  - array to map over

### Return value

Altred array

## pipe

### Syntax

```javascript
const minusOneTimesTo = pipe(timeTwo, minusOne)
minusOneTimesTo(2) // >> 3
```

### Parameters

- fns
  - as many functions you want
- arguments
  - initial arguments

### Return value

Composed functions

## reduce

### Syntax

```javascript
reduce(merge, 0, [2, 3, 6]) // >> 9
```

### Parameters

- fn
  - function you want to apply on array elements
- initialValue
  - start value for your reduce
- array || object
  - array || object to reduce over

### Return value

Any

## reduceobjindexed

### Syntax

```javascript
const addToArray = (a, [key, value]) => a.concat(key, value)

reduceObjIndexed(addToArray, [], {x: 2, y: 4}) // >> ['x', 2, 'y', 4]
```

### Parameters

- fn
  - function you want to apply on array elements
- initialValue
  - start value for your reduce
- object
  - object to reduce over

### Return value

Any
