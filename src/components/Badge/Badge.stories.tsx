import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    type: { control: "select", options: ["number", "dot", "AI", "Highlight", "Label", "Ranking"] },
    state: { control: "select", options: ["alert", "success", "error", "neutral"] },
    size: { control: "select", options: ["L", "S"] },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const AlertNumber: Story = { args: { type: "number", state: "alert", size: "L", badgeNumber: "1" } };
export const SuccessNumber: Story = { args: { type: "number", state: "success", size: "L", badgeNumber: "1" } };
export const ErrorDot: Story = { args: { type: "dot", state: "error", size: "S" } };
export const SuccessDot: Story = { args: { type: "dot", state: "success", size: "S" } };
export const Ai: Story = { args: { type: "AI", state: "neutral", size: "L" } };
export const Highlight: Story = { args: { type: "Highlight", state: "neutral", size: "L" } };
export const Label: Story = { args: { type: "Label", state: "neutral", size: "L", badgeTextLabel: "ラベル" } };
export const Ranking: Story = { args: { type: "Ranking", state: "neutral", size: "L", badgeNumber: "1" } };
