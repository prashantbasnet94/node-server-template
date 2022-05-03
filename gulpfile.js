const
config = require('./config/index.js'),
livereload = require('gulp-livereload'),
nodemon = require('gulp-nodemon'),
{parallel, series, task, watch} = require('gulp')


 function clean(cb) {
  // body omitted
  cb()
}

function cssTranspile(cb) {
  // body omitted
  cb()
}

function cssMinify(cb) {
  // body omitted
  cb()
}

function jsTranspile(cb) {
  // body omitted
  cb()
}

function jsBundle(cb) {
  // body omitted
  cb()
}
function liveReload(cb) {
  livereload.listen({port: 3000})
}
function jsMinify(cb) {
  // body omitted
  cb()
}

function publish(cb) {
  // body omitted
  cb()
}
// task('server', (cb) => {exec})

// task('appnode', () => {
//   console.log('startig up yard one @', config.port)
//   nodemon({
//     script: './yardOne/app.js',
//     // script: './relay/',

//     ext: 'js',
//     env: {
//       PORT: config.port
//     },
//     ignore: ['./node_modules/**']
//   })
//     .on('restart', () => {
//       console.log('server restarting at @', config.port)

//     })
// })

task('yardone', () => {
  console.log('startig up yard one @', config.port)
  nodemon({
    script: './yardOne/app.js',
    ext: 'js',
    env: {
      PORT: config.port
    },
    ignore: ['./node_modules/**']
  })
    .on('restart', () => {
      console.log('server restarting at @', config.port)

    })
})

task('yardtwo', () => {
  console.log('server starting at @', config.port2)
  nodemon({
    // script: './app/app.js',
    script: './yardTwo/src/',

    ext: 'js',
    env: {
      PORT: config.port2
    },
    ignore: ['./node_modules/**']
  })
    .on('restart', () => {
      console.log('server restarting at @', config.port2)

    })
})
// exports.default = series(liveReload)


