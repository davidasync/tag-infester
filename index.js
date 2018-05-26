const _ = require('lodash');
const fs = require('fs');
const tags = require('./data/tags.json');

let post = fs.readFileSync('data/post.txt', 'utf8');
const foundedTags = [];

_.forEach(tags, tag => {
  const { text, slug } = tag;

  const searchString = new RegExp(text, "i");

  const url = `<a href="https://nginy.net/tag/${slug}/">${text}</a>`

  const isMatched = post.search(searchString);

  if (isMatched >= 0) {
    post = post.replace(searchString, url);
    foundedTags.push(text)
  }
});

fs.writeFileSync('processed-data/tagged-post.txt', post);
fs.writeFileSync('processed-data/founded-tags.txt', foundedTags.join(' ,'));