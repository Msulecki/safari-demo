import type { Meta, StoryObj } from '@storybook/react';
import TransitionResize from '.';

const meta: Meta<typeof TransitionResize> = { component: TransitionResize,parameters:{ layout:'fullscreen'} };
export default meta;

type Story = StoryObj<typeof TransitionResize>;

export const Primary: Story = { args: { primary: true } };