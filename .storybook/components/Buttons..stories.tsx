// Button1.stories.ts|tsx
 // @ts-nocheck
 import type { Meta,StoryObj } from '@storybook/react';
 import { Image } from '@mantine/core';

 import {Button1} from './Button1';
 
 const meta: Meta<typeof Button1> = {
   component: Button1,
   decorators: [
     (Story) => (
       <div style={{ margin: '3em' }}>
         {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
         <Story />
       </div>
     ),
   ],
   argTypes: {
    backgroundColor: { control: 'color' },
     size: {
       options: ['small', 'medium','large'],
       control: { type: 'radio' },
     },
   },
   parameters: {
     backgrounds: {
       values: [
         { name: 'red', value: '#f00' },
         { name: 'green', value: '#0f0' },
         { name: 'blue', value: '#00f' },
       ],
     },
   },
 };
 

 export default meta;
 type Story = StoryObj <typeof Button1>;
 
 /*
  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
  * See https://storybook.js.org/docs/react/api/csf
  * to learn how to use render functions.
  */
 export const HourPressed: Story = {
   args: {
    //  primary: true,
     color:'#FFC530',
     label: 'Primary Button',
   },
 };
 
 
 export const Active: Story = {
   args: {
    //  ...HourPressed.args,
    color:'#FCA312',
     label: 'Primary Button',
   },
 };

 export const Focused: Story = {
   args: {
    //  ...HourPressed.args,
    color:'#FCA312',
     label: 'Primary Button',
   },
 };

 export const Disabled: Story = {
   args: {
    //  ...HourPressed.args,
    color:'#BABABA',
     label: 'Primary Button',
   },
 };

 export const Loading: Story = {
   args: {
     color:' #FCA312',
    //  label: 'Primary Button',
     icon:<Image   width={30} height={30}  src="/loader.png"  />,
     width:"140px"
   },
 };

 export const TextWithIcon: Story = {
   args: {
     color:' #FCA312',
     label: 'Primary Button',
     icon:<Image   width={10} height={10}  src="/circle.png"  />,
    //  width:"140px"
   },
 };

 export const SecondaryButton: Story = {
   args: {
     color:'#FFFFFF',
     border: '12.4194px solid #FCA312',
     label: 'Secondary Button',
     text: '#FFC530'
   },
 };