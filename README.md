# Plura

[![npm version](https://badge.fury.io/js/plura.svg)](https://badge.fury.io/js/plura)   

Super simple functional programming library

# Installation

```
npm install laiva --save
```

# Usage

## Summary

* [compose](#compose)
* [curry](#curry)
* [map](#map)
* [filter](#filter)
* [reduce](#reduce)
* [isArray](#isarray)
* [isObject](#isobject)
* [isString](#isstring)
* [isNumber](#isnumber)


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
- array
  - array to reduce over

### Return value

Any

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
