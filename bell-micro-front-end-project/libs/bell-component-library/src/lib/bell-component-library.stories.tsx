import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BellComponentLibrary } from './bell-component-library';

const Story: ComponentMeta<typeof BellComponentLibrary> = {
  component: BellComponentLibrary,
  title: 'BellComponentLibrary',
};
export default Story;

const Template: ComponentStory<typeof BellComponentLibrary> = (args) => (
  <BellComponentLibrary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
