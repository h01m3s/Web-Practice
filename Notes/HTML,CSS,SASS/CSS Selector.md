

# CSS Selector

|CSS	|Meaning|
|---	|---|
|a, b	|Multiple Element Selector|
|a b	|Descendant Selector|
|a > b	|Child Selector|
|a + b	|Adjacent Sibling Selector|
|[a=b]	|Attribute Selector|
|a:b	|Pseudoclass Selector|
|a::b	|Pseudoelement Selector|

### Decendant Selector:

> All `li` in `ol`

```css
ol li {
    color: red;
}
```

### Immediate Child Selector:

> Chose only direct child

```css
ol > li {
    color: red;
}
```

### Style based on attribute

```css
input[type=text] {
    background-color: red;
}

input[type=number] {
    background-color: yellow;
}
```

### Pseudo Class

```css
button:hover {
    background-color: orange;
}
```

### Pseudo Element

```css
a::before {
    content: "\21d2  Click here: ";
    font-weight: bold;
}
```

```css
p::selection {
    color: red;
    background-color: yellow;
}
```