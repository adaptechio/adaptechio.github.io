# SOURCE: https://github.com/Starefossen/docker-github-pages
FROM starefossen/ruby-node:2-6-alpine

ENV GITHUB_GEM_VERSION 202
ENV JSON_GEM_VERSION 1.8.6

RUN apk --update add --virtual build_deps \
    build-base ruby-dev libc-dev linux-headers \
  && gem install --verbose --no-document \
    json:${JSON_GEM_VERSION} \
    github-pages:${GITHUB_GEM_VERSION} \
    jekyll-include-cache \
    jekyll-github-metadata \
    minitest \
    jekyll-theme-primer:0.5.3 \
  && apk del build_deps \
  && apk add git \
  && mkdir -p /usr/src/app \
  && rm -rf /usr/lib/ruby/gems/*/cache/*.gem

WORKDIR /usr/src/app

COPY _sass ./_sass

EXPOSE 4000 80
CMD jekyll serve -d /_site --watch --force_polling -H 0.0.0.0 -P 4000