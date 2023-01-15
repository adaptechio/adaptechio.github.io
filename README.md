# Getting Started
## Requirements
- Ruby
- Bundler

## Local Development Instructions
1. Obtain necessary dependencies/packages `bundle`
2. Run ```gem install bundler jekyll``` to install necessary ruby package manager and github-page framework
3. Run ```bundler install``` to install necessary ruby/gem dependencies
4. Run ```bundle exec jekyll serve``` to serve client

## Docker
- Build
```docker-compose build```

- Run
```docker-compose up```
ctrl-c to quit and shutdown container


# Layout

###Portfolio 

Portfolio projects are in '/_posts'

Images are in '/img/portfolio'

###About

Images are in '/img/about/'

###Team

Team members and info are in '_config.yml'

Images are in '/img/team/'

=========
For more details, read [documentation](http://jekyllrb.com/)

Based on Agency Jekyll from:
 - Agency theme based on [Agency bootstrap theme ](https://startbootstrap.com/template-overviews/agency/)
 - https://github.com/y7kim/agency-jekyll-theme
 - https://y7kim.github.io/agency-jekyll-theme
