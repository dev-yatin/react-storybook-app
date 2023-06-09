import HCenter from "../HCenter/HCenter";
import Button from "./Button";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    // global args
    children: "Global",
  },
  argTypes: {
    // To enable controls
    variant: { control: "text" },
    children: { control: "text" },
    // To enable click action
    onClick: { action: "clicked" },
  },
  decorators: [(story) => <HCenter>{story()}</HCenter>],
};

export const Primary = () => (
  <Button variant={"primary"} onClick={action("Clickedd")}>
    Primary
  </Button>
);
export const Danger = () => (
  <Button variant={"danger"} {...actions("onClick", "onMouseOver")}>
    Danger
  </Button>
);

export const ConsoleLogButton = () => (
  <Button variant={"primary"} onClick={() => console.log("Button clicked")}>
    Print on Console
  </Button>
);

Primary.storyName = "Primary Button";

const Template = (args) => <Button {...args} />;

export const PrimaryT = Template.bind({});
PrimaryT.args = {
  variant: "primary",
  children: "PrimaryT",
};

// Can extend args
export const SecondaryPrimaryT = Template.bind({});
SecondaryPrimaryT.args = {
  ...PrimaryT.args,
  children: "SecondaryPrimaryT",
};

export const KnobButton = () => (
  <Button variant={"primary"} onClick={() => console.log("Button clicked")} disabled={boolean("Disabled", false)}>
    {text("Label", "Button Label")}
  </Button>
);
