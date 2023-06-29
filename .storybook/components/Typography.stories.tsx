// Typography.stories.ts|tsx
 // @ts-nocheck
 import type { Meta,StoryObj } from '@storybook/react';

 import {Typography} from "../components/Typography"
 
 const meta: Meta<typeof Typography> = {
   component: Typography,
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
 type Story = StoryObj <typeof Typography>;
 
 /*
  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
  * See https://storybook.js.org/docs/react/api/csf
  * to learn how to use render functions.
  */
 export const Black: Story = {
   args: {
     color:'#3D4A5C',
     weight:900,
     label:"Keep It Simple",
     fontsize:'2.25rem'
   },
 };
 
 
 export const ExtraBold: Story = {
   args: {
    //  ...HourPressed.args,
    color:'#3D4A5C',
    weight:800,
    label:"Keep It Simple",
    fontsize:'1.75rem'
   },
 };

 export const Bold: Story = {
   args: {
    //  ...HourPressed.args,
    color:'#3D4A5C',
    weight:700,
    label:"Keep It Simple",
    fontsize:'1.5rem'
   },
 };

 export const SemiBold: Story = {
   args: {
    //  ...HourPressed.args,
    color:'#3D4A5C',
    weight:600,
    label:"Keep It Simple",
    fontsize:'1.25rem'
   },
 };

 export const Medium: Story = {
   args: {
    //  ...HourPressed.args,
    color:'#3D4A5C',
    weight:500,
    label:"Keep It Simple",
    fontsize:'1.125rem'
   },
 };

 export const Regular: Story = {
   args: {
    color:'#3D4A5C',
    weight:400,
    label:"Keep It Simple",
    fontsize:'1rem'
   },
 };
 export const Light: Story = {
   args: {
    color:'#3D4A5C',
    weight:300,
    label:"Keep It Simple",
    fontsize:'0.875rem'
   },
 };
 export const ExtraLight: Story = {
   args: {
    color:'#3D4A5C',
    weight:200,
    label:"Keep It Simple",
    fontsize:'0.75rem'
   },
 };
 export const Thin: Story = {
   args: {
    color:'#3D4A5C',
    weight:100,
    label:"Keep It Simple",
    fontsize:'0.625rem'
   },
 };


 export const H1: Story = {
   args: {
    color:'#000000',
    weight:500,
    label:"This is new Design system",
    fontsize:'60px'
   },
 };
 export const H2: Story = {
   args: {
    color:'#000000',
    weight:500,
    label:"This is new Design system",
    fontsize:'52px'
   },
 };
 export const H3: Story = {
   args: {
    color:'#000000',
    weight:500,
    label:"This is new Design system",
    fontsize:'44px'
   },
 };
 export const H4: Story = {
   args: {
    color:'#000000',
    weight:500,
    label:"This is new Design system",
    fontsize:'36px'
   },
 };
 export const H5: Story = {
   args: {
    color:'#000000',
    weight:500,
    label:"This is new Design system",
    fontsize:'28px'
   },
 };
 export const Body: Story = {
   args: {
    color:'#000000',
    weight:500,
    label:"This is new Design system",
    fontsize:'20px'
   },
 };
 export const PlainText: Story = {
   args: {
    color:'#000000',
    weight:500,
    label:"This is new Design system",
    fontsize:'12px'
   },
 };