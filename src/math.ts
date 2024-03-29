export function isPrime(n: number): boolean {
	if (Math.floor(n) !== n) {
		return false;
	}
	if (n < 2) {
		return false;
	}
	for (let i = 2; i * i <= n; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}
