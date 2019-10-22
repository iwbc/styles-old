'use strict'

var path = require('path')
var sassTrue = require('sass-true')

var sassFile = path.join(__dirname, 'test.scss')
sassTrue.runSass(
  {
    file: sassFile
  },
  {
    sass: require('node-sass'),
    describe,
    it
  }
)
