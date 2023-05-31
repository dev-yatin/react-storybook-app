## Storybook

It is playground for UI components, showcase components interactively in an isolated development environment.
It run outside of React application.
It provides following capabilities:

- Able to view different developed components
- Able to see what different props component accepts
- Ability to showcase components to stakeholders for feedback
- Dynamically change props and accessibility score

## Getting started

- `npx sb init` : It will install storybook dependencies, add storybook script in package.json and eslint plugins. It creates .storybook directory that contains storybook configuration and a stories directory in src directory that contains sample components and their stories.

## Sorting Stories

You can sort stories by tweaking storybook configuration.

## Stories inside Stories

Stories can be used inside Stories. Refer Subscription

## Decorators

You can add decorator locally or globally. For global decorator preview.js file has to be created in .storybook and export decorators array. Locally in stories it can be added in form of callback in decorator option(in export default).
Globally in decorator we can provide ThemeProviders.

## Viewport addon

To enable viewport addon on windows, add `@storybook/addon-viewport` in addons in main.js file in .storybook. Restart storybook.

## Console add on

We can add console add on and can also configure it to print source of console.

## Docs Add on

## Knob add on

## a11y Add on

## Environment variable

Prefix them with `STORYBOOK_` and they will be available in storybook.
