# amazing.js ([demo](http://alexcoplan.github.com/amazingjs))

a colour cycling thing in javascript.

## usage

```javascript
amazing(options, element);
```

Both arguments are optional. The options argument should be an object containing the desired settings. The element argument is the element to apply it to, which is by default the body element.

## options

`step` represents the the number of iterations that are skipped across the rgb spectrum

`delay` represents the time in milliseconds between each iteration

## api

```javascript
amazing.stop(); // does what it says on the tin
amazing.start(i); // i is optional - start at iteration i or resume
```

## amazing?

No, not at all.