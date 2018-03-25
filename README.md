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
 - gem install jekyll bundler --user
 - bundler install
 - bundler update jekyll
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
