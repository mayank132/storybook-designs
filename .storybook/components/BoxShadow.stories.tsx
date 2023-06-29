// BoxShadow.stories.ts|tsx
// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "@mantine/core";

import { BoxShadow } from "./BoxShadow";

const meta: Meta<typeof BoxShadow> = {
  component: BoxShadow,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BoxShadow>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const boxShadow1: Story = {
  args: {
    //  primary: true,
    // background: "#FFCCCC",
    boxShadow: '0px 5.360376834869385px 10.72075366973877px 0px #0000001A',
    width: "240px",
    height: "240px",
  },
};

export const boxShadow2: Story = {
  args: {
    //  ...HourPressed.args,
    boxShadow: '0px 0px 53.60376739501953px 0px #0000001F',
    width: "240px",
    height: "240px",
  },
};

export const boxShadow3: Story = {
  args: {
    //  ...HourPressed.args,
    boxShadow: '0px 53.60376739501953px 80px 0px #0000000F',
    width: "240px",
    height: "240px",
  },
};


