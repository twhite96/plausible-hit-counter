import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { HitCounter } from "./HitCounter";

export default {
  title: "Components/HitCounter",
  component: HitCounter,
  args: {
    baseUrl: "string",
    siteId: "string",
    apiKey: "string",
  },
} as Meta<typeof HitCounter>;

export const Story = Template.bind({});
Story.args = {};
