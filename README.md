# T+D coffee sessions

This repository contains source code and generated static files of
http://td-berlin.github.io/coffee-sessions/ website.

Static pages are generated using [Hugo](https://gohugo.io/), published on
GitHub pages.

## Deploying

To deploy new version to GitHub Pages, merge all changes to `master`.

Run `deploy.sh` script which will:
- extract all files from `public` directory to separate branch called `gh-pages`
- `gh-pages` branch will be pushed to `origin`
- it will be updated automatically on GitHub Pages

## Contributing

To create new coffee session do:

1. Generate new post using `hugo` command:

   ```bash
   hugo new post/2016-03-22-One-click-deploys.md
   ```

   Use prefix with date to keep files organized.

2. Create new PR with new post generated static files.

   If other developers like your suggestion, post will be merged into repository
   and your session is on!

## Development

### Installing Hugo

For development you need hugo installed. On Mac you can use brew:

```bash
brew install hugo
```

### Running local copy

You can preview your changes by running `hugo server` command.
It starts localhost server and watches for post/static files for changes.

### CSS styles

If you want to make changes to CSS styles, you have to use `grunt watch.
It compiles `td.scss` to `td.css` (not needed when working on blog content).
