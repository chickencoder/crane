# Crane

Crane is a tiny (935 Bytes) grid system for lightweight use in small projects.
It's easy to implement and shouldn't mess up any pre-defined styles.

A row is defined by the *row* tag and is 100% of it's parent container. The system uses **border-box** and applies it too all column elements. 

## Dependencies
Gulp is used to compile and minify the sass source code and the repository is a node module. To install the dependencies just use npm... (requires root)...

```bash
npm install
```

By default the grid system is based on a twelve column system. This is easily changed in the crane sass source file at the top.

Just link it...
```html
  <link rel="stylesheet" href="dist/crane.css">
```

Tadahh!
