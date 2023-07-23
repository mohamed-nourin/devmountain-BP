// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// For example:

// >>> has_balanced_parens("()")
// // true

// >>> has_balanced_parens("(Oh Noes!)(")
// // false

// >>> has_balanced_parens("((There's a bonus open paren here.)")
// // false

// >>> has_balanced_parens(")")
// // false

// >>> has_balanced_parens("(")
// // false

// >>> has_balanced_parens("(This has (too many closes.) ) )")
// // false
// You may consider a string with no parentheses balanced:

// >>> has_balanced_parens("Hey...there are no parens here!")
// // true
// Sample Strings
// let sample1 = "This ( is unbalanced."
// let sample2 = "(This (is (a) balanced) string.)"
// let sample3 = "This is () also ) unbalanced."
// let sample4 = "Balanced."


    function has_balanced_parens(str) {
        var answer = [];
      
        for (var i = 0; i < str.length; i++) {
          var char = str[i];
      
          if (char === '(') {
            answer.push(char);
          } else if (char === ')') {
            if (answer.length === 0) {
              return false; 
            } else {
              answer.pop(); 
            }
          }
        }
    }
        return answer.length === 0; 
      

console.log(has_balanced_parens("()")); 
console.log(has_balanced_parens("(Oh Noes!)(")); 
console.log(has_balanced_parens("((There's a bonus open paren here.)")); 
console.log(has_balanced_parens(")")); 
console.log(has_balanced_parens("(")); 
console.log(has_balanced_parens("(This has (too many closes.) ) )")); 
console.log(has_balanced_parens("Hey...there are no parens here!")); 