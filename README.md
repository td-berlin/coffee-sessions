# T+D Coffee sessions: Today I Learned

This repository contains source code and generated static files of
http://td-til.github.io website.

Static pages are generated using [Hugo](https://gohugo.io/), published on
GitHub pages.

## Deploying

In order to deploy to GitHub Pages, commit/merge all changes to `master`.

Then run `deploy.sh` which will extract all files from `public` directory to
separate branch called `gh-pages`. It is going to be published to public.

## Contributing

In order to create new coffee session do:

1. Generate new post using `hugo` command:

   ```bash
   hugo new post/2016-03-22-One-click-deploys.md
   ```

   Use prefix with date to keep directory organized

2. Create new PR with new post generated static files.
   If other developers like your suggestion, page will be merged and your
   session is on!

## Development

You can preview your changes by running `hugo server` command.
It starts localhost server and watches for post/static files changes.

If you want to make changes to CSS styles, you have to use `grunt watch.
It compiles `td.scss` to `td.css` (not needed when working on blog content).
