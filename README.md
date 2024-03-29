# boundary [![Actions Status: test](https://github.com/textlint/boundary/workflows/test/badge.svg)](https://github.com/textlint/boundary/actions?query=workflow%3A"test")

## About

Provides binary search functions.

## Installation

```sh
npm install boundary
```

## Usage

```js
import boundary from 'boundary';
function lessThan(v1, v2) {
    return v1 < v2;
}

// boundary.upperBound(sortedArray, value, compare = lessThan);
assert(boundary.upperBound([ 0, 0, 2, 3, 4 ], -1) === 0);
assert(boundary.upperBound([ 0, 0, 2, 3, 4 ], 0) === 2);
assert(boundary.upperBound([ 0, 0, 2, 3, 4 ], 1) === 2);
assert(boundary.upperBound([ 0, 0, 2, 3, 4 ], 2) === 3);
assert(boundary.upperBound([ 0, 0, 2, 3, 4 ], 3) === 4);
assert(boundary.upperBound([ 0, 0, 2, 3, 4 ], 4) === 5);
assert(boundary.upperBound([ 0, 0, 2, 3, 4 ], 5) === 5);

// boundary.lowerBound(sortedArray, value, compare = lessThan);
assert(boundary.lowerBound([ 0, 0, 2, 3, 4 ], -1) === 0);
assert(boundary.lowerBound([ 0, 0, 2, 3, 4 ], 0) === 0);
assert(boundary.lowerBound([ 0, 0, 2, 3, 4 ], 1) === 2);
assert(boundary.lowerBound([ 0, 0, 2, 3, 4 ], 2) === 2);
assert(boundary.lowerBound([ 0, 0, 2, 3, 4 ], 3) === 3);
assert(boundary.lowerBound([ 0, 0, 2, 3, 4 ], 4) === 4);
assert(boundary.lowerBound([ 0, 0, 2, 3, 4 ], 5) === 5);

// boundary.binarySearch(sortedArray, value, compare = lessThan);
assert(boundary.binarySearch([ 0, 0, 2, 3, 4 ], -1) === false);
assert(boundary.binarySearch([ 0, 0, 2, 3, 4 ], 0) === true);
assert(boundary.binarySearch([ 0, 0, 2, 3, 4 ], 1) === false);
assert(boundary.binarySearch([ 0, 0, 2, 3, 4 ], 2) === true);
assert(boundary.binarySearch([ 0, 0, 2, 3, 4 ], 3) === true);
assert(boundary.binarySearch([ 0, 0, 2, 3, 4 ], 4) === true);
assert(boundary.binarySearch([ 0, 0, 2, 3, 4 ], 5) === false);
```

### License

Copyright (C) 2012-2014 [Yusuke Suzuki](http://github.com/Constellation)
 (twitter: [@Constellation](http://twitter.com/Constellation)) and other contributors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.

  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
