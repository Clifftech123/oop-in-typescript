## Variables in Go 

Go has various value types including strings, integers, floats, booleans, etc. Here are a few basic examples.


In Go, variables are explicitly declared and used by the compiler to e.g. check type-correctness of function calls.

The var statement declares a list of variables; as in function argument lists, the type is last.

A var statement can be at package or function level. We see both in this example.

```go
package main

import "fmt"

// The var statement declares a list of variables; as in function argument lists, the type is last.

var c, python, java bool

func main() {
    var i int
    fmt.Println(i, c, python, java)
}
```

Output:

```bash

0 false false false

```


## Variables with initializer

A var declaration can include initializers, one per variable.

If an initializer is present, the type can be omitted; the variable will take the type of the initializer.

```go

package main

import "fmt"

var i, j int = 1, 2

func main() {
    var c, python, java = true, false, "no!"
    fmt.Println(i, j, c, python, java)
}

```

Output:

```bash

1 2 true false no!

```

## Short variable declarations

Inside a function, the := short assignment statement can be used in place of a var declaration with implicit type.

Outside a function, every statement begins with a keyword (var, func, and so on) and so the := construct is not available.

```go

package main

import "fmt"

func main() {
    var i, j int = 1, 2
    k := 3
    c, python, java := true, false, "no!"
    fmt.Println(i, j, k, c, python, java)
}

```


Output:

```bash

1 2 3 true false no!

```

## Type inference

When declaring a variable without specifying an explicit type (either by using the := syntax or var = expression syntax), the variable's type is inferred from the value on the right hand side.

When the right hand side of the declaration is typed, the new variable is of that same type:

```go

var i int
j := i // j is an int

```

But when the right hand side contains an untyped numeric constant, the new variable may be an int, float64, or complex128 depending on the precision of the constant:

```go

i := 42           // int

j := 42.1956      // float64

k := 0.867 + 0.5i // complex128

```

