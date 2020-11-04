// !permutate
const stringPermutations = (str) => {
	if (str.length <= 2)
		return str.length === 2 ? [str, str[1] + str[0]] : [str];
	return str
		.split("")
		.reduce(
			(acc, letter, i) =>
				acc.concat(
					stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
						(val) => letter + val
					)
				),
			[]
		)
		.filter((v, i, a) => a.indexOf(v) === i);

	//return [...new Set(result)];
};

console.log(stringPermutations("abca"));
