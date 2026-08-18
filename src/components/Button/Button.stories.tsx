import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "skeleton"],
    },

    size: {
      control: "select",
      options: ["large", "medium", "small"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;


/* =========================
   Primary
========================= */

export const PrimaryLarge: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Primary Large",
  },
};

export const PrimaryMedium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Medium",
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Primary Small",
    disabled: true
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Disabled",
    disabled: true,
  },
};


/* =========================
   Secondary
========================= */

export const SecondaryLarge: Story = {
  args: {
    variant: "secondary",
    size: "large",
    children: "Secondary Large",
  },
};

export const SecondaryMedium: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Medium",
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "small",
    children: "Secondary Small",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Disabled",
    disabled: true,
  },
};


/* =========================
   Skeleton
========================= */

export const SkeletonLarge: Story = {
  args: {
    variant: "skeleton",
    size: "large",
  },
};

export const SkeletonMedium: Story = {
  args: {
    variant: "skeleton",
    size: "medium",
  },
};

export const SkeletonSmall: Story = {
  args: {
    variant: "skeleton",
    size: "small",
  },
};