import type { Meta, StoryObj } from "@storybook/react";
import { HitCounter } from "./HitCounter";

const meta: Meta<typeof HitCounter> = {
  title: "HitCounter",
  component: HitCounter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof HitCounter>;
