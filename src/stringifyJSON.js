// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// All property names have to be surrounded by double quotes

var stringifyJSON = function(obj) {

	//console.log("checking object: "+ obj);
	//console.log("type of object = "+ (typeof(obj)));

	if (typeof(obj) == "function" || typeof(obj)== "undefined"){
		return '';
	} else if (obj == null){
		//console.log("added null");
		return "null";
	} else if (typeof(obj) == "number" || typeof(obj) == "boolean"){
		//console.log("added number or boolean: " + obj);
		return '' + obj;
	} else if (typeof(obj) == "string"){
		//console.log("added string, function, or undefined: " + obj);
		return "\""+obj+ "\"";
	} else if (Array.isArray(obj)){
		if (obj.length == 0){
			return '[]';
		} else {
			var stringified = '[';

			for (var i = 0; i < obj.length ; i++){
				//console.log("going into another instance! " + stringifyJSON(obj[i]));
				stringified = stringified.concat(stringifyJSON(obj[i]));
				//console.log("after finding results from another instance, stringified now = " + stringified);
				stringified = stringified.concat(',');
			}

			//console.log("stringified now = " + stringified);
			var final = stringified.slice(0, stringified.length-1);
			//console.log("delete , so stringified is now " + stringified);
			final+=(']');
			//console.log("after a lot of stuff, stringified now = " + final);
			return final;
		}
	} else if (typeof(obj) == "object"){
		var stringified = '{';

		for (var key in obj){
			//console.log("going into another instance! " + stringifyJSON(obj[key]));
			stringified = stringified.concat(stringifyJSON(key)+ ":" + stringifyJSON(obj[key]));
			stringified = stringified.concat(',');
		}
		//console.log("stringified now = " + stringified);
		if (stringified == '{'){
			return '{}';
		}
		var final = stringified.slice(0, stringified.length-1);
		//console.log("delete , so stringified is now " + stringified);
		final+=('}');
		//console.log("after a lot of stuff, stringified now = " + final);
		return final;

	}

};
