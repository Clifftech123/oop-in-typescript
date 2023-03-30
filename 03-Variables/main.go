package main

import (
	"fmt"
	"reflect"
)

func main() {
	var a string = "initial"
	fmt.Println(a)  // initial 
	fmt.Println( reflect.TypeOf(a)) // string

	var b, c int = 1, 2
	fmt.Println(b, c) // 1 2
	fmt.Println( reflect.TypeOf(b)) // int



	var d = true
	fmt.Println(d) // true
	fmt.Println( reflect.TypeOf(d)) // bool



	var e int // zero value for int is 0  and for string is "" and for bool is false 

	fmt.Println(e) // 0
	fmt.Println( reflect.TypeOf(e)) // int


	// short hand declaration
	f := "apple"
	fmt.Println(f) // apple


	// short hand declaration

	g := 1

	fmt.Println(g) // 1

	fmt.Println( reflect.TypeOf(g)) // int

	// short hand declaration

	h := true

	fmt.Println(h) // true

	fmt.Println( reflect.TypeOf(h)) // bool


	// short hand declaration

	i := 1.1

	fmt.Println(i) // 1.1

	fmt.Println( reflect.TypeOf(i)) // float64


	// short hand declaration

	j := 1.1 + 1.1

	fmt.Println(j) // 2.2




}