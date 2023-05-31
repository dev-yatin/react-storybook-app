/** @type { import('@storybook/react').Preview } */
import React from "react";
import { addDecorator } from "@storybook/react";
import HCenter from "../src/components/HCenter/HCenter";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// global decorator
export const decorators = [(story) => <HCenter>{story()}</HCenter>];

export default preview;
