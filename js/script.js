function atomCounter(string) {
	function brackets(regex, leftBracket, rightBracket){
		let bracketMatched = string.match(regex);

		if(bracketMatched){
			for(let j = 0; j < bracketMatched.length; j++){
				let isInt = bracketMatched[j].split(rightBracket);
				isInt[0] += rightBracket;
				let sum = isInt[0];
				if(isInt[1]){
					isInt[1] = parseInt(isInt[1]);
					for(let i = 1; i < isInt[1]; i++){
						sum += isInt[0];
					}
				}
				bracketMatched[j] = sum;
			}
		}

		let checkBrackets = string.match(regex);
		if(checkBrackets){
			for(let i = 0; i < checkBrackets.length; i++){
				string = string.replace(checkBrackets[i], bracketMatched[i]);
			}
		}

		while(string.indexOf(leftBracket) !== -1 || string.indexOf(rightBracket) !== -1){
			string = string.replace(leftBracket, '');
			string = string.replace(rightBracket, '');
		}
	}
  
	function numbers(){
		let regex = /[A-Z]([a-z]*)+?\d*/g;
		let numbers = /\d+/g;
		let elems = string.match(regex);
		if(elems){
			for(let i = 0; i < elems.length; i++){
				if(elems[i].search(numbers) !== -1){
					let elem = elems[i].substr(0, elems[i].search(numbers));
					let sum = parseInt(elems[i].substr(elems[i].search(numbers)));
					let add = elem;
					for(let j = 1; j < sum; j++){
						elem += add;
					}
					elems[i] = elem;
				}
			}
			string = elems;
			string = elems.toString();
			while(string.indexOf(',') !== -1){
				string = string.replace(',', '');
				string = string.replace(',', '');
			}
		}
	}
  
	function countAtoms() {
		string = string.match(/[A-Z][a-z]*/g);
		if(string){
			let sumOfAtomes = {};
			for(let i = 0; i < string.length; i++){
				if(!(string[i] in sumOfAtomes)){
					sumOfAtomes[string[i]] = 1;
				} else if(string[i] in sumOfAtomes){
					sumOfAtomes[string[i]] += 1;
				}
			}
			return sumOfAtomes;
		} else {
			return 'Something goes wrong :( Please, chceck your formula! Remember to use uppercase and lowercase appropriately';
		}
	}
  
	brackets(/\[.+?\]\d*/g, '[', ']');
	brackets(/\{.+?\}\d*/g, '{', '}');
	brackets(/\(.+?\)\d*/g, '(', ')');
	numbers();
	let checkAtoms = countAtoms();
  
	function symbolToName(atomSymbole){
		let atoms = {
		  H: 'Hydrogen',
		  He: 'Helium',
		  Li: 'Lithium',
		  Be: 'Beryllium',
		  B: 'Boron',
		  C: 'Carbon',
		  N: 'Nitrogen',
		  O: 'Oxygen',
		  F: 'Fluorine',
		  Ne: 'Neon',
		  Na: 'Sodium',
		  Mg: 'Magnesium',
		  Al: 'Aluminium',
		  Si: 'Silicon',
		  P: 'Phosphorus',
		  S: 'Sulfur',
		  Cl: 'Chlorine',
		  Ar: 'Argon',
		  K: 'Potassium',
		  Ca: 'Calcium',
		  Sc: 'Scandium',
		  Ti: 'Titanium',
		  V: 'Vanadium',
		  Cr: 'Chromium',
		  Mn: 'Manganese',
		  Fe: 'Iron',
		  Co: 'Cobalt',
		  Ni: 'Nickel',
		  Cu: 'Copper',
		  Zn: 'Zinc',
		  Ga: 'Gallium',
		  Ge: 'Germanium',
		  As: 'Arsenic',
		  Se: 'Selenium',
		  Br: 'Bromine',
		  Kr: 'Krypton',
		  Rb: 'Rubidium',
		  Sr: 'Strontium',
		  Y: 'Yttrium',
		  Zr: 'Zirconium',
		  Nb: 'Niobium',
		  Mo: 'Molybdenum',
		  Tc: 'Technetium',
		  Ru: 'Ruthenium',
		  Rh: 'Rhodium',
		  Pd: 'Palladium',
		  Ag: 'Silver',
		  Cd: 'Cadmium',
		  In: 'Indium',
		  Sn: 'Tin',
		  Sb: 'Antimony',
		  Te: 'Tellurium',
		  I: 'Iodine',
		  Xe: 'Xenon',
		  Cs: 'Cesium',
		  Ba: 'Barium',
		  La: 'Lanthanum',
		  Ce: 'Cerium',
		  Pr: 'Praseodymium',
		  Nd: 'Neodymium',
		  Pm: 'Promethium',
		  Sm: 'Samarium',
		  Eu: 'Europium',
		  Gd: 'Gadolinium',
		  Tb: 'Terbium',
		  Dy: 'Dysprosium',
		  Ho: 'Holmium',
		  Er: 'Erbium',
		  Tm: 'Thulium',
		  Yb: 'Ytterbium',
		  Lu: 'Lutetium',
		  Hf: 'Hafnium',
		  Ta: 'Tantalum',
		  W: 'Tungsten',
		  Re: 'Rhenium',
		  Os: 'Osmium',
		  Ir: 'Iridium',
		  Pt: 'Platinum',
		  Au: 'Gold',
		  Hg: 'Mercury',
		  Tl: 'Thallium',
		  Pb: 'Lead',
		  Bi: 'Bismuth',
		  Po: 'Polonium',
		  At: 'Astatine',
		  Rn: 'Radon',
		  Fr: 'Francium',
		  Ra: 'Radium',
		  Ac: 'Actinium',
		  Th: 'Thorium',
		  Pa: 'Protactinium',
		  U: 'Uranium',
		  Np: 'Neptunium',
		  Pu: 'Plutonium',
		  Am: 'Americium',
		  Cm: 'Curium',
		  Bk: 'Berkelium',
		  Cf: 'Californium',
		  Es: 'Einsteinium',
		  Fm: 'Fermium',
		  Md: 'Mendelevium',
		  No: 'Nobelium',
		  Lr: 'Lawrencium',
		  Rf: 'Rutherfordium',
		  Db: 'Dubnium',
		  Sg: 'Seaborgium',
		  Bh: 'Bohrium',
		  Hs: 'Hassium',
		  Mt: 'Meitnerium',
		  Ds: 'Darmstadtium',
		  Rg: 'Roentgenium',
		  Cn: 'Copernicium',
		  Nh: 'Nihonium',
		  Fl: 'Flerovium',
		  Mc: 'Moscovium',
		  Lv: 'Livermorium',
		  Ts: 'Tennessine',
		  Og: 'Oganesson'
		};
		
		for(let key in atomSymbole){
			if(key in atoms){
				let newKey = atoms[key];
				let number = atomSymbole[key];
				atomSymbole[newKey] = number;
				delete atomSymbole[key];
			}
		}
		return atomSymbole;
	}
	symbolToName(checkAtoms);
  
	function addToHTML(checkAtoms){
		let selector = document.querySelector('#result');
		let result = '';
		if(typeof checkAtoms === 'object'){
			for(let key in checkAtoms){
				result += key + ": " + checkAtoms[key] + "<br>";
			}
		} else {
			result = checkAtoms;
		}
		selector.innerHTML = result;  
	}
	addToHTML(checkAtoms);
}

let form = document.querySelector('.text');
let input = form.querySelector('.formula');
form.addEventListener('submit', function(e){
	e.preventDefault();
	if(input.value){
		atomCounter(input.value);	
	}
});