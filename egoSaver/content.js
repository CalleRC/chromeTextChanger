var elements = document.getElementsByTagName('*');

var before = ["Matematik A", "Matematik B", "Matematik C", "7.-9. klasse", "FGU", "EUD-matematik", "Overgang til gymnasiet"];


for (var i = 0; i < elements.length; i++) {

    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];


        if (node.nodeType === 3) {
            var text = node.nodeValue;
            for (var x = 0; x < before.length; x++) {
                var replacedText = text.replace(before[x], "PHD studerende");

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}