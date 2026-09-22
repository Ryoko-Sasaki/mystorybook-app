import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import accountIcon from "../../assets/figma/account.svg";
import accountHoverIcon from "../../assets/figma/account-hover.svg";
import accountDisabledIcon from "../../assets/figma/account-disabled.svg";
import accountDangerIcon from "../../assets/figma/account-danger.svg";
import accountDangerHoverIcon from "../../assets/figma/account-danger-hover.svg";
import accountDangerDisabledIcon from "../../assets/figma/account-danger-disabled.svg";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "danger-primary", "skeleton", "skeleton-primary"],
    },

    size: {
      control: "select",
      options: ["large", "medium", "small"],
    },
    state: {
      control: "select",
      options: ["default", "hover"],
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

/* =========================
   Danger
========================= */

export const DangerPrimary: Story = {
  args: {
    variant: "danger-primary",
    size: "large",
    children: "ボタン",
    iconLeft: <img src={accountDangerIcon} alt="" />,
  },
  parameters: {
    layout: "centered",
  },
};

export const DangerPrimaryHover: Story = {
  args: {
    variant: "danger-primary",
    size: "large",
    state: "hover",
    children: "ボタン",
    iconLeft: <img src={accountDangerHoverIcon} alt="" />,
  },
  parameters: {
    layout: "centered",
  },
};

export const DangerPrimaryDisabled: Story = {
  args: {
    variant: "danger-primary",
    size: "large",
    disabled: true,
    children: "ボタン",
    iconLeft: <img src={accountDangerDisabledIcon} alt="" />,
  },
  parameters: {
    layout: "centered",
  },
};

/* =========================
   Tertiary
========================= */

export const TertiaryWithLeadingIcon: Story = {
  args: {
    variant: "tertiary",
    size: "large",
    children: "ボタン",
    iconLeft: <img src={accountIcon} alt="" />,
  },
  parameters: {
    layout: "centered",
  },
};

export const TertiaryHover: Story = {
  args: {
    variant: "tertiary",
    size: "large",
    state: "hover",
    children: "ボタン",
    iconLeft: <img src={accountHoverIcon} alt="" />,
  },
  parameters: {
    layout: "centered",
  },
};

export const TertiaryDisabled: Story = {
  args: {
    variant: "tertiary",
    size: "large",
    disabled: true,
    children: "ボタン",
    iconLeft: <img src={accountDisabledIcon} alt="" />,
  },
  parameters: {
    layout: "centered",
  },
};
