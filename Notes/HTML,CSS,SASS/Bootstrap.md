# Bootstrap

> Bootstrap use column based model (12 columns)

### Render 4 sections in Page

```html
<div class="container">
    <div class="row">
        <div class="col-3">
            This is a section.
        </div>
        <div class="col-3">
            This is another section.
        </div>
        <div class="col-3">
            This is a third section.
        </div>
        <div class="col-3">
            This is a fourth section.
        </div>
    </div>
</div>
```

### Render sections base on page width
> 4 in a row to 2 in a row until page fits only one section

```html
<div class="container">
    <div class="row">
        <div class="col-lg-3 col-sm-6">
            This is a section.
        </div>
        <div class="col-lg-3 col-sm-6">
            This is another section.
        </div>
        <div class="col-lg-3 col-sm-6">
            This is a third section.
        </div>
        <div class="col-lg-3 col-sm-6">
            This is a fourth section.
        </div>
    </div>
</div>
```