// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var HTMLCollection = [];

  //Check to see if this object has className. If so, add to HTMLCollection.
  var checkNode = function (node){
    if ($(node).hasClass(className)){
  	  HTMLCollection.push(node);
    }

	//Check to see if object has children. If so, traverse down.
	if(node.hasChildNodes()){
	  //check all children in the node
	  for (var i = 0 ; i< node.children.length ; i++){
		checkNode(node.children[i]);
	  }
	}
  };

  checkNode(document.body);

  return HTMLCollection;

};
