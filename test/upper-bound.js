/*
  Copyright (C) 2014 Yusuke Suzuki <utatane.tea@gmail.com>

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
*/

import * as assert from 'power-assert'
import { upperBound } from '../'

describe('upper-bound', () => {
    it('less', () => {
        for (let i = 1; i < 10; ++i) {
            assert(upperBound([ 0, 0, 2, 3, 4 ], -i) === 0);
        }
    });

    it('mid', () => {
        assert(upperBound([ 0, 0, 2, 3, 4 ], 0) === 2);
        assert(upperBound([ 0, 0, 2, 3, 4 ], 1) === 2);
        assert(upperBound([ 0, 0, 2, 3, 4 ], 2) === 3);
        assert(upperBound([ 0, 0, 2, 3, 4 ], 3) === 4);
        assert(upperBound([ 0, 0, 2, 3, 4 ], 4) === 5);
    });

    it('greater', () => {
        for (let i = 0; i < 10; ++i) {
            assert(upperBound([ 0, 0, 2, 3, 4 ], 5 + i) === 5);
        }
    });
});

/* vim: set sw=4 ts=4 et tw=80 : */
