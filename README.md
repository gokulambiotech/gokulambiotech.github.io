# GokulamBioTech New Webpage

[![Build Status](https://api.travis-ci.org/gokulambiotech/gokulambiotech.github.io.svg?branch=master)]


## Live Website

Our Live website is at [[Gokulambiotech Website](https://www.gokulambiotech.com)]

# Notes
This website is built based on Jekyll static webspages https://jekyllrb.com/.

## Installation in Ubuntu

```
 - sudo apt-get install gem
 - sudo apt-get install ruby-dev
 - set $RUBY=/home/pksec/.gem/ruby/2.3.0/bin
 - gem install jekyll bundler --user
 - bundler install
 - bundler update jekyll
 - bundle exec jekyll serve
```
## Installatio on Mac M1

```
 - gem install bundler:2.2.28 --user
 - bundle config set --local path 'vendor/bundle'
 - bundle config build.ffi --enable-libffi-alloc
 - bundler install
 - bundle update
 - bundle config set force_ruby_platform true
 - bundle exec jekyll serve
```

### Firefox dev plugin
Google Analytis blocker plugin will block page visits.

## Run the local site

```
 - bundle exec jekyll serve
```
### Resize your images

´´´
convert biofarm.jpg -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB -resize 50% biofarm.jpg
´´´

Renaming Spaces into _

```
$ for f in *\ *; do mv "$f" "${f// /_}"; done

```
## Price List Info
- Internal Google Docs: https://docs.google.com/spreadsheets/d/1kVW-dQZzqnjYmA7QcmAS3TTTwmJLmX143qSj_bP9vRg/edit?usp=sharing