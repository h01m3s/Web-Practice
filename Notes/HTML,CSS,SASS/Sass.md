# Sass

### Installatioin:

`npm install -g sass`
`brew install --devel sass/sass/sass`


> Sass is a extension of CSS

> Store in scss file, need to convert to css file

### Compile scss file

`sass variables.scss variables.css`

```sass
$color: red;

ul {
    font-size: 14px;
    color: $color;
}

ol {
    font-size: 18px;
    color: $color;
}
```

**No need to compile scss file every time. Use watch.**

`sass --watch variables.scss:variables.css`

---
### Nesting

```sass
div {
    font-size: 18px;

    p {
        color: blue;
    }

    ul {
        color: green;
    }
}
```

Will generate css below:

```css
div {
	font-size: 18px;
}
div p {
	color: blue;
}
div ul {
	color: green;
}
```

---
### Inheritance

```sass
%message {
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid black;
    padding: 20px;
    margin: 20px;
}

.success {
    @extend %message;
    background-color: green;
}

.warning {
    @extend %message;
    background-color: orange;
}

.error {
    @extend %message;
    background-color: red;
}
```