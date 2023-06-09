/** @type { import('@storybook/react').Preview } */
import React from "react";
import HCenter from "../src/components/HCenter/HCenter";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: (a, b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })),
    },
  },
};

// global decorator
// First one to also tell line number and information of console
export const decorators = [
  (story, context) => withConsole()(story)(context),
  withKnobs,
  withA11y,
  (story) => <HCenter>{story()}</HCenter>,
];

export default preview;
