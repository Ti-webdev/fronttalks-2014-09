describe("1. calc", function() {
  it('seven(times(five()))', function () {
    var actual = seven(times(five()));
    actual.should.equal(35);
  });

  it('four(plus(nine()))', function () {
    var actual = four(plus(nine()));
    actual.should.equal(13);
  });

  it('eight(minus(three()))', function () {
    var actual = eight(minus(three()));
    actual.should.equal(5);
  });

  it('six(dividedBy(two()))', function () {
    var actual = six(dividedBy(two()));
    actual.should.equal(3);
  });
});
