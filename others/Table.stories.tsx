// // Table.stories.ts|tsx
//  // @ts-nocheck
//  import type { Meta,StoryObj } from '@storybook/react';

//  import {TableCommon } from './Table';
 
//  const meta: Meta<typeof TableCommon> = {
//    component: TableCommon,
//    decorators: [
//      (Story) => (
//        <div style={{ margin: '3em' }}>
//          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
//          <Story />
//        </div>
//      ),
//    ],
//    argTypes: {
//     backgroundColor: { control: 'color' },
//      size: {
//        options: ['center', 'left','right'],
//        control: { type: 'radio' },
//      },
//    },
//    parameters: {
//      backgrounds: {
//        values: [
//          { name: 'red', value: '#f00' },
//          { name: 'green', value: '#0f0' },
//          { name: 'blue', value: '#00f' },
//        ],
//      },
//    },
//  };
 
 
 
 
//  export default meta;
//  type Story = StoryObj <typeof TableCommon>;
 
//  /*
//   *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//   * See https://storybook.js.org/docs/react/api/csf
//   * to learn how to use render functions.
//   */
//  export const Check: Story = {
// //    args: {
// //     //  primary: true,
// //     //  label: 'Header',
// //    },
//  };
 
 
// //  export const PrimaryLongName: Story = {
// //    args: {
// //      ...Primary.args,
// //      label: 'Primary with a really long name',
// //    },
// //  };