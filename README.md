# BoostBNB.io Frontend
The frontend software that runs BoostBNB.io.
For the backend, see [backend-software](https://github.com/BoostBNB/backend-software)

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
Please run prettier (`bun run format`) after changing any code in the codebase to keep everything readable.
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
  "bracketSameLine": true,
  "plugins": [
    "prettier-plugin-svelte"
  ],
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
