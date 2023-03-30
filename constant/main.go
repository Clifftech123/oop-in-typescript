package main

	
import (
    "fmt"
    "math"
)
func main() {
	
	var a string = "initial"
	fmt.Println(a) // initial


	const string = "constant"
	fmt.Println(string) // constant

	const n = 500000000

	const d = 3e20 / n

	fmt.Println(d) // 6e+11

	fmt.Println(int64(d)) // 600000000000


	fmt.Println(math.Sin(n)) // 0.9092974268256817

	// more examples of constants

	const ( 
		// Create a huge number by shifting a 1 bit left 100 places.

		// In other words, the binary number that is 1 followed by 100 zeroes.

		Big = 1 << 100 // 1267650600228229401496703205376

		// Shift it right again 99 places, so we end up with 1<<1, or 2.


		Small = Big >> 99 // 2




	)

	const (
		name = "Clifford Opoku"
		age = 23
		school = "University of Ghana"
		department = "Computer Science"

	)

	fmt.Println(name, age, school, department) // Clifford Opoku 23 University of Ghana Computer Science
	

}