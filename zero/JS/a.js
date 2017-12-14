function fun(n, o) {
  console.log(o);
  return {
    fun: function(m) {
      return fun(m, n);
    }
  }
}
fun(0).fun(1).fun(2);
let fn = fun(0).fun(1).fun;
fn(2);
fn(3)
