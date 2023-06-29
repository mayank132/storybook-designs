// Avatar.stories.ts|tsx
// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "@mantine/core";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
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
type Story = StoryObj<typeof Avatar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const color1: Story = {
  args: {
    //  primary: true,
    background: "#FFCCCC",
    color: "#964545",
    label: "SK",
  },
};

export const color2: Story = {
  args: {
    //  ...HourPressed.args,
    background: "#CCFFFF",
    color: "#1C7575",
    label: "SK",
  },
};

export const color3: Story = {
  args: {
    //  ...HourPressed.args,
    background: "#CCFFD7",
    color: "#306F3E",
    label: "SK",
  },
};

export const color4: Story = {
  args: {
    color: "#9E9F50",
    background: "#F7F8C6",

     label: 'SK',
    // icon: <Image width={30} height={30} src="/loader.png" />,
    // width: "140px",
  },
};

export const color5: Story = {
  args: {
    color: "#424F95",
    background: "#CCD4FF",
    label: "SK",
    icon: <Image width={10} height={10} src="/circle.png" />,
    //  width:"140px"
  },
};

export const color6: Story = {
  args: {
    color: "#C03F8D",
    background: "#FFCCEB",
    border: "12.4194px solid #FCA312",
    label: "SK",
    text: "#FFC530",
  },
};

export const color7: Story = {
  args: {
    color: "#BD5B14",
    background: "#FFE1CC",
    border: "12.4194px solid #FCA312",
    label: "SK",
    text: "#FFC530",
  },
};
