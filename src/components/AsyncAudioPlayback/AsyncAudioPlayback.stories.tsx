import type { Meta, StoryObj } from '@storybook/react';
import AsyncAudioPlayback from '.';


const meta: Meta<typeof AsyncAudioPlayback> = { component: AsyncAudioPlayback };
export default meta;

type Story = StoryObj<typeof AsyncAudioPlayback>;

export const Primary: Story = { args: { primary: true } };