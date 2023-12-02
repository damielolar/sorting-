
function is_palindrome(word) {
    if (len(word) == 0 || len(word) == 1) {
      return True
    }
    if (word[0] == word[-1]):
      return is_palindrome(word[1:-1])
    return False
  }
  
  print(is_palindrome("gag"))
  print(is_palindrome("kayak"))
  print(is_palindrome("php"))
  print(is_palindrome("radar"))
  Use code with caution. Learn more
  This code defines a function is_palindrome() that takes a word as input and returns True if the word is a palindrome and False otherwise. The function first checks if the word is empty or has only one character, in which case it returns True. Otherwise, it compares the first and last characters of the word. If they are the same, it recursively calls is_palindrome() on the rest of the word. If they are different, it returns False.