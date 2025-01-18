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
- After a Mac software update - make sure that you have Xcode installed from App Store
- Managing different ruby versions on your MAC via https://github.com/rbenv/rben
  - edit ~/.zshrc include `eval "$(rbenv init -)"`
  - to see local stable versions `rbenv install -l`
  - to install one of the stable ones `rbenv install 3.4.1`
  - to see installed versions `rbenv versions`
  - to set local folder's ruby version `rbenv local 3.4.1`
  - to test local ruby version `ruby -v`
  - to update bundler via gem `gem update bundler`
  - to update all gems `gem update`
  - to install all new bundles `bundle install`
  - to server and test locally `bundle exec jekyll serve`
  - to update all dependencies `bundle update`
### Dependency Vulnerabilty Checks
  - to check dependency issues `gem install bundle-audit`
  - to update `bundler-audit download`        # Downloads ruby-advisory-db
  - to check `bundler-audit check .`

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