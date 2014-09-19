describe("1. calc", function() {
  it('seven(times(five()))', function () {
    seven(times(five())).should.equal(35);
  });

  it('four(plus(nine()))', function () {
    four(plus(nine())).should.equal(13);
  });

  it('eight(minus(three()))', function () {
    eight(minus(three())).should.equal(5);
  });

  it('six(dividedBy(two()))', function () {
    six(dividedBy(two())).should.equal(3);
  });
});

describe("2. object path", function() {
  it('a.b.e', function () {
    jpath({
      a: {
        b: {
          e: "d"
        },
        c: ["e", "f"]
      }
    }, "a.b.e").should.equal('d');
  });
});

describe("3. Valid Parentheses", function() {
  it('invalid parentheses', function () {
    isValid(")\
(())\
)").should.equal(false);
  });

  it('valid parentheses', function () {
    isValid("\
(())\
{}[]").should.equal(true);
  });
});

describe("4. Randomize Objects", function() {
  it('1, 2 or 3', function () {
    var result = random({
      a: {
        b: {
          e: 1
        },
        c: 2,
        d: 3
      }
    });
    (-1 < [1, 2, 3].indexOf(result)).should.equal(true);
  });
});

describe("5. Factorions", function() {
  it('has 40585', function () {
    (-1 < getFactorions().indexOf(40585)).should.equal(true);
  });
});
