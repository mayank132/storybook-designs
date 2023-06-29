// // ./src/stories/Button.js
// import { Button } from "@mantine/core";
// import { createStyles, getStylesRef, rem, Table } from "@mantine/core";

// import React, { useMemo } from "react";

// const useStyles = createStyles((theme) => ({
//   wrapper1: {
//     backgroundColor:
//       theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,

//     // // Dynamic media queries, define breakpoints in theme, use anywhere
//     // [theme.fn.smallerThan('sm')]: {
//     //   // Child reference in nested selectors via ref
//     //   [`& .${getStylesRef('child')}`]: {
//     //     fontSize: theme.fontSizes.xs,
//     //   },
//     // },
//   },
//   wrapper: {
//     backgroundColor:
//       theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
//     padding: theme.spacing.md,
//     borderRadius: theme.radius.sm,
//     boxShadow: theme.shadows.md,
//     color: theme.colorScheme === "dark" ? theme.white : theme.black,
//     // borderRadius: rem(12),

//     // subscribe to color scheme changes right in your styles
//     // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
//     // maxWidth: rem(400),
//     // width: '100%',
//     // height: rem(180),
//     // display: 'flex',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // marginLeft: 'auto',
//     // marginRight: 'auto',
//     overflow: "auto",
//     // border: "2px solid red",
//   },
//   button: {
//     backgroundColor: "blue",
//     border: 0,
//     color: "white",
//     borderRadius: rem(16),
//     padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
//     cursor: "pointer",
//     marginLeft: rem(20),
//     marginTop: rem(6),
//     span: {
//       height: rem(30),
//     },
//   },
//   padding: {
//     textAlign: "center",
//     //  marginRight:rem(100)
//   },
//   child: {
//     // assign ref to element
//     ref: getStylesRef("child"),
//     input: {
//       // backgroundColor: theme.colors.blue[9],
//       borderRadius: rem(16),
//       paddingLeft: rem(18),
//     },

//     // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
//     padding: theme.spacing.lg,
//     borderRadius: rem(16),
//     width: "50%",

//     // boxShadow: theme.shadows.md,
//     color: theme.colorScheme === "dark" ? theme.white : theme.black,
//   },
// }));

// const getSizeClasses = (size) => {
//   switch (size) {
//     case "left": {
//       return "left";
//     }
//     case "right": {
//       return "right";
//     }
//     case "center": {
//       return "center";
//     }
//     default: {
//       return "center";
//     }
//   }
// };

// const getModeClasses = (isPrimary) =>
//   isPrimary ? "text-white bg-blue-500" : "text-slate-700 bg-green-500";

// const getBackgroundClasses = (isPrimary) => {
//   // console.log('hhhhhhhhhh',isPrimary)

//   console.log(`bg-[${isPrimary}]`);
//   return `bg-[${isPrimary}]`;
// };

// const BASE_BUTTON_CLASSES =
//   "cursor-pointer rounded-full border-2 font-bold leading-none inline-block";

// /**
//  * Primary UI component for user interaction
//  */
// export const TableCommon = ({
//   primary = false,
//   size = "medium",
//   backgroundColor = "red",
//   label,
//   ...props
// }) => {
//   const computedClasses = useMemo(() => {
//     // const modeClass = getModeClasses(primary);
//     const sizeClass = getSizeClasses(size);
//     // const backgroundClass = getBackgroundClasses(backgroundColor);

//     return [sizeClass].join(" ");
//   }, [primary, size, backgroundColor]);

//   const { classes } = useStyles();

//   console.log(computedClasses);

//   const ths = (
//     <tr>
//       <th  >Element Id</th>
//       <th>Element position</th>
//       <th> Atomc number </th>
//       <th>Atomic mass</th>
//     </tr>
//   );

//   const rows = [
//     { id: "1", position: "left", atomicNumber: "3", atomicMass: "50" },
//     { id: "2", position: "right", atomicNumber: "6", atomicMass: "50" },
//     { id: "3", position: "bottom", atomicNumber: "8", atomicMass: "50" },
//   ].map((element) => (
//     <tr key={element.id}>
//       <td
//         style={{
//           textAlign: computedClasses,
//         }}
//       >
//         {element.id}
//       </td>
//       <td         style={{
//           textAlign: computedClasses,
//         }} >{element.position}</td>
//       <td         style={{
//           textAlign: computedClasses,
//         }} >{element.atomicNumber}</td>
//       <td         style={{
//           textAlign: computedClasses,
//         }} >{element.atomicMass}</td>
//       {/* <td>{element.symbol}</td>
//       <td>{element.mass}</td> */}
//     </tr>
//   ));

//   return (
//     <div className={classes.wrapper}>
//       <Table {...props} captionSide="bottom" className={classes.wrapper1}>
//         <thead>{ths}</thead>
//         <tbody>{rows}</tbody>
//       </Table>
//     </div>
//   );
// };
