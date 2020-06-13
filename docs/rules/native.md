# Determine linebreak-style based on host OS (native)

Allows for easy cross platform collobortion bwtween developers

## Rule Details

This rule aims to allow projects to specify line endsings that will work natively with default configurations of git for the host operating systems.

Examples of **incorrect** code for this rule:

### When running on Windows

```js
var a = 'a'; // \n
```

### When running on Unix based OS

```js
var a = 'a'; // \r\n
```


Examples of **correct** code for this rule:

### When running on Unix based OS

```js

var a = 'a', // \n
    b = 'b'; // \n
// \n
function foo(params) { // \n
    // do stuff \n
}// \n
```

### When running on Windows

```js

var a = 'a', // \r\n
    b = 'b'; // \r\n
// \r\n
function foo(params) { // \r\n
    // do stuff \r\n
}// \r\n
```

## When Not To Use It

This rule should not be used when git is configured to force certain line endings. If .gitattribues is configured to use one style of line endings over anotther, or if all developers in a project have core.autocrlf=false

## Further Reading

 * TBA