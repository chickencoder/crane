# Crane

Crane is a tiny (935 Bytes) grid system for lightweight use in small projects.
It's easy to implement and shouldn't mess up any pre-defined styles.

The system uses **border-box** and applies it too all elements on the DOM (using the * selector) which may cause trouble if you're web page relies on a different setting.

By default the grid system is based on a twelve column system. This is easily changed in the crane sass source file at the top.

Just link it...
```html
  <link rel="stylesheet" href="dist/crane.min.css">
```

Tadahh!
