## Regex syntax:regular expretion syntax

# example

  Regex pattern for naming in js:^[a-zA-Z-][a-zA-Z0-9]
  a-z:a b c...x y z
  A-Z:A B...Y Z
  0-9:0 1...8 9

  so we cant start with number like 
  2number but we can set number2 as varible

# we start regex with /  and and it with another / => /hi/ 

# optinal: i(Abbreviation for ignoer) = flag meaning ignore case so if we say /hello/i  it means the hello in underline are valid
hello
Hello
HELLO
HeLLo

# in js the are shortcut for new RegExp("hello", "i")

# when we need to use \ like in telegram bot we need to use /\ <our regex>  /  for example /start=> /\ /start   /