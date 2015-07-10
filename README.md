<<<<<<< HEAD
=======
<link rel="stylesheet" href="dist/crane.css">
<link rel="stylesheet" href="dist/readme.css">
>>>>>>> d48d3ebeb3f3fbd05e6075973280c05bdc4f9fc7
# Crane

Crane is a tiny ( ...KB) grid system for lightweight use in small projects.
It's easy to implement and shouldn't mess up any pre-defined styles.

The system uses **border-box** and applies it too all elements on the DOM (using the * selector) which may cause trouble if you're web page relies on a different setting.

By default the grid system is based on a twelve column system. This is easily changed in the crane sass source file at the top.

Just link it...
```html
  <link rel="stylesheet" href="dist/crane.min.css">
```
<styles>
  [class*="col"] {
    font-family: 'Open Sans', sans-serif;
    background: #287D9E;
    color: white;
    border: 2px solid #359D9E;
  }
</styles>

<link rel="stylesheet" href="./dist/crane.css">

<div class="container">

  <div class="row">
    <div class="col-1">
      col-1
    </div>
    <div class="col-11">
      col-11
    </div>
  </div>

  <div class="row">
    <div class="col-2">
      col-2
    </div>
    <div class="col-10">
      col-10
    </div>
  </div>

  <div class="row">
    <div class="col-3">
      col-3
    </div>
    <div class="col-9">
      col-9
    </div>
  </div>

  <div class="row">
    <div class="col-4">
      col-4
    </div>
    <div class="col-8">
      col-8
    </div>
  </div>

  <div class="row">
    <div class="col-5">
      col-5
    </div>
    <div class="col-7">
      col-7
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      col-6
    </div>
    <div class="col-6">
      col-6
    </div>
  </div>

</div>
