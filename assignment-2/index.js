class Countries {
	constructor(url) {
		this.url = url;
	}

	async getAllCountries() {
		const res = await fetch(`${this.url}/all`)
			.then((response) => {
				return response.json();
			})
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	}

	async getCountryName(countryName) {
		const res = await fetch(`${this.url}/name/${countryName}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	}

	async getCountryBorders(countryBorderName) {
		const res = await fetch(`${this.url}/name/${countryBorderName}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => console.log(data[0].borders))
			.catch((error) => console.log(error));
	}

	async getCountryLanguage(countryLang) {
		const res = await fetch(`${this.url}/lang/${countryLang}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	}

	async getCountryLargerPop(countryPopulation) {
		const countries = await fetch(`${this.url}/all`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const result = data.filter(
					({ population }) => population > countryPopulation
				);
				console.log(result);
			})
			.catch((error) => console.log(error));
	}
}

const countries = new Countries('https://restcountries.com/v2');

countries.getAllCountries();
countries.getCountryName('Finland');
countries.getCountryBorders('Finland');
countries.getCountryLanguage('de');
countries.getCountryLargerPop('200000000');
