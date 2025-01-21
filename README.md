# BoostBNB.io

The source code for [boostbnb.io](https://boostbnb.io)

## Techstack

<img src="https://go-skill-icons.vercel.app/api/icons?i=bun" title="Bun"> <img src="https://go-skill-icons.vercel.app/api/icons?i=daisyui" title="DaisyUI"> <img src="https://go-skill-icons.vercel.app/api/icons?i=supabase" title="Supabase"> <img src="https://go-skill-icons.vercel.app/api/icons?i=svelte" title="SvelteKit"> <img src="https://go-skill-icons.vercel.app/api/icons?i=tailwindcss" title="TailwindCSS"> <img src="https://go-skill-icons.vercel.app/api/icons?i=typescript" title="TypeScript">

## Development Environment

The only supported development environment for this repo is [bun](https://bun.sh) any issues
caused by using a different package manager will be ignored.

## Creating a local instance

1. **Install Bun**: Follow the instructions on [bun.sh](https://bun.sh/docs/installation) to install Bun.

2. **Clone the repository**:

   ```sh
   git clone https://github.com/BoostBNB/boostbnb-io.git
   cd ./boostbnb-io/
   ```

3. **Build Prod Server or Run Dev Server**:<br>
   3.1. To start a production server, run `bun build` and `bun preview`<br>
   3.2. To start a development server with hot reloading, run `bun dev`

## Commit Guide

This codebase uses the [Conventional Commits](https://www.conventionalcommits.org) standard for commits and Pull Requests.
Note that we do not require the scope parameter (`fix(scope)`), and only require the fix/feat/etc part of the standard.

- For naming branches, the branch should be called `commit-type/branchname`. (EX: `fix/broken-homepage`)
- For naming PRs and Commits, the PR/Commit should be titled `commit-type: message`. (EX: `fix: Broken homepage`)

### Conventional Commits Quick Reference

- **build:** Changes that affect the build system, git, or external dependencies
- **ci:** Changes that affect our GitHub CI or Issue/PR Templates
- **docs:** Update or enhance documentation without affecting code behavior
- **feat:** Introduce new features or functionality
- **fix:** Address bugs or resolve issues in the codebase
- **perf:** Implement changes that improve application performance
- **style:** Changes to code style
  - Whitespace
  - Semicolons
  - Formatting
  - Trailing commas
  - Style-only CSS Updates
    - Nesting
    - Removing duplicate properties
    - Bringing related properties closer together
  - Fixing Typos
  - Etc

## Style Guide

This codebase uses [Prettier](https://prettier.io/) for styling.
Please run prettier (`bun format`) after changing any code in the codebase to keep everything readable.
If you forget to run it before commiting your changes,
you may run prettier and then commit its changes with `git commit -a -m "style: Prettier format"`.
The prettier rules are viewable in our [.prettierrc](https://github.com/BoostBNB/frontend-software/blob/master/.prettierrc) or below.

### Prettier Configuration

```json
{
  "tabWidth": 2,
  "printWidth": 150,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSameLine": false,
  "plugins": ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  "overrides": [
    {
      "files": "*.svelte",
      "options": {
        "parser": "svelte"
      }
    }
  ]
}
```
