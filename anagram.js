function Anagram(input) {
    return {
        matches: function(words) {
            var word = input.toLowerCase();
            
            // allow multiple string arguments rather than an array
            var wordsArr = [];
            if (arguments.length > 1) {
                for (var arg in arguments) {
                    wordsArr.push(arguments[arg]);
                }
            }
            // allow single string as argument
            else if (arguments.length === 1 && typeof words === 'string') {
                wordsArr = [words];
            }
            else {
                wordsArr = words;
            }
            
            return wordsArr.filter(isMatch);
            
            function isMatch(str) {
                // make sure strings are the same length
                if (word.length !== str.length) { return false; }
                // make sure not the exact same string
                if (word === str.toLowerCase()) { return false; }
                var originalArray = word.split('');
                var inputArray = str.toLowerCase().split('');
                
                while(originalArray.length > 0) {
                    var matchIndex = inputArray.indexOf(originalArray[0]);
                    if (matchIndex !== -1) {
                        originalArray.splice(0, 1);
                        inputArray.splice(matchIndex, 1);
                    }
                    else {
                        return false;
                    }
                }
                
                if (originalArray.length === inputArray.length) {
                    return true;
                }
                return false;
            }
        }
    };
}

module.exports = Anagram;
