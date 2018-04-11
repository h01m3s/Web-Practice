# Media Query

### Don't print content with class named "screen-only"

```css
@media print {
/* .screen-only is class name */
    .screen-only {
        display: none;
    }
}
```

### Change background color in different size
> Background is red when width of window at least 500px
> Background is blue when width of window less than 499px

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0">
@media (min-width: 500px) {
    body {
        background-color: red;
    }
}

@media (max-width: 499px) {
    body {
        background-color: blue;
    }
}
```