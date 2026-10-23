## Fix for vips library error

If you see `Could not open library 'vips.42'` when running Jekyll on macOS, install libvips:

```bash
brew install vips
```

## Starting the server

```bash
$ bundle exec jekyll serve --livereload

# To serve on a different port
$ bundle exec jekyll serve --port 4001 --livereload
```

## Delete all branch aside main and master

```bash
git branch | grep -Ev "main|master" | xargs git branch -D
```
