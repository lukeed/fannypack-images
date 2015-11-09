# fannypack-less
Official Fannypack task for compiling LESS files

## Installation
`npm install fannypack-images --save-dev`

## Usage
```javascript
// gulpfile.js

var Fannypack = require('fannypack')

require('fannypack-images')

Fannypack.Config.images = {
  // Config.root.src + 'src' dir
  src: 'img',
  // Config.root.dest + 'dest' dir
  dest: 'assets/img',
  // Auto-run this task in dev mode?
  watchTask: true,
  assetTask: true,
  // flatten all images to destination folder?
  flatten: true,
  // File extensions to watch
  extensions: ['jpg', 'png', 'svg', 'gif']
}

Fannypack.init()
```

## Flattening

If set to true, images within `src/assets/img/home/*.jpg`, `src/assets/img/app/*.jpg` and `src/assets/img/*.jpg` will ALL be merged into `build/assets/img/*.jpg` **without** retaining the subdirectories `home` and `app`.

If you want to keep **any** subdirectories, set `flatten` to `false`.
