function extract(filterFn, mapFn, col) {
    // body...
}
var array = [{
    count: 1,
    succed_count: 11,
    end_date: "2018-01-18",
    price: 1,
    box_type: 1,
    charge: 1,
    start_date: "2017-12-16"
}];
function formatData(currentValue){
	let object = {};
		object.price=currentValue.price;
		return object;
}
function extractData(arr,mapFn) {
	return arr.map(mapFn)
}
console.log(extractData(array,formatData));