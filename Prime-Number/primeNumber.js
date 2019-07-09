function primeNumbers(){
	var primeNumbers = []; /* Where the prime numbers are stored */
	for(var dividend = 2; primeNumbers.length < 10; dividend++){
		var root = Math.sqrt(dividend);
		var isprime = true;
		for(var divisor = 2; divisor <= root; divisor++){
			if(dividend % divisor == 0){
				isprime = false;
				break;
			}
		}
		if (isprime)
		  primeNumbers.push(dividend);
	}
	console.log(primeNumbers.join());
}

primeNumbers()