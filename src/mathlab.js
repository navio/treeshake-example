export const sum = (...values) => values.reduce((a,b) => a + b ,0);

export const multiply = (...values) =>  values.reduce((a,b) => a * b ,1);

export const invert = (...values) => values.reduce((a,b) => b + a ,'');

export default {
	sum,
    multiply,
    invert
}