A node js script to add tag url to matches string

This script will read this file

```
data
  /tags.json -> json tag will be added
  /post.txt -> html text that will be replaced
```

And process it to 

```
processed-data
  /founded-tags.txt -> tags that founded at the post
  /tagged-post -> post that already processed
```