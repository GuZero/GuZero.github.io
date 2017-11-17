var str='455636460793';
var result='';
for(let i=0;i<str.length;i++){
	result+='*';
}
console.log(result+str.substr(str.length-4));