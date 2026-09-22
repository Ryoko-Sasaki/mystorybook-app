import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    size: { control: "select", options: ["xsmall", "small", "medium", "large", "xlarge"] },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const AccountSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Icon size="xlarge" />
      <Icon size="large" />
      <Icon size="medium" />
      <Icon size="small" />
      <Icon size="xsmall" />
    </div>
  ),
};

export const Account: Story = { args: { size: "xlarge" } };
