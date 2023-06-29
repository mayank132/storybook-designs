// ./src/stories/Button.js
import { Button, Flex } from "@mantine/core";
import { createStyles, getStylesRef, rem, Table, px } from "@mantine/core";
import React, { useMemo } from "react";

const getSizeClasses = (size) => {
  switch (size) {
    case "small": {
      return "px-4 py-2.5";
    }
    case "large": {
      return "px-6 py-3";
    }
    default: {
      return "px-5 py-2.5";
    }
  }
};

const getModeClasses = (isPrimary) =>
  isPrimary ? "text-white bg-blue-500" : "text-slate-700 bg-green-500";

const getBackgroundClasses = (isPrimary) => {
  // console.log('hhhhhhhhhh',isPrimary)

  console.log(`bg-[${isPrimary}]`);
  return `bg-[${isPrimary}]`;
};

const BASE_BUTTON_CLASSES =
  "cursor-pointer rounded-full border-2 font-bold leading-none inline-block";

/**
 * Primary UI component for user interaction
 */
export const BoxShadow = ({
  // primary = false,
  size = "medium",
  backgroundColor = "red",
  label,
  ...props
}) => {
  const useStyles = createStyles((theme) => ({
    wrapper: {
      // subscribe to color scheme changes right in your styles
      // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      // maxWidth: rem(400),
      // width: '100%',
      // height: rem(180),
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      // marginLeft: 'auto',
      // marginRight: 'auto',
      // borderRadius: theme.radius.sm,
      // // Dynamic media queries, define breakpoints in theme, use anywhere
      // [theme.fn.smallerThan('sm')]: {
      //   // Child reference in nested selectors via ref
      //   [`& .${getStylesRef('child')}`]: {
      //     fontSize: theme.fontSizes.xs,
      //   },
      // },
    },

    icon: {
      marginRight: "1rem",
      transform: "translateY(1px)",
    },
    box: {
      width: props.width,
      height: props.height,
      background: "#FFFFFF",
      border: "10px",
      boxShadow: props.boxShadow,
      marginLeft:'4rem'
      // backgroundColor: props.background,
      // fontFamily:'Inter',
      // color:props.color,
      // borderRadius:'50%',
      // display:'flex',
      // fontSize:"52.14px",
      // alignItems:'center',
      // justifyContent:"center",
      // textTransform: 'uppercase'

      //   border: props.border ? "2px solid #FCA312" : "",
      //   color: props.text,
      //   borderRadius: px(6),
      //   // padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
      //   cursor: "pointer",
      //   marginLeft: rem(20),
      //   marginTop: rem(6),
      //   width : props.width,
      //   span: {
      //     height: rem(30),
      //   },
      //   display:'flex',
      //   alignItems:'center'
    },

    child: {
      // assign ref to element
      ref: getStylesRef("child"),
      input: {
        // backgroundColor: theme.colors.blue[9],
        borderRadius: rem(16),
        paddingLeft: rem(18),
      },

      // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      padding: theme.spacing.lg,
      borderRadius: rem(16),
      width: "50%",

      // boxShadow: theme.shadows.md,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  }));

  //   console.log("m", props);

  const computedClasses = useMemo(() => {
    // const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);
    const backgroundClass = getBackgroundClasses(backgroundColor);

    // return [modeClass, sizeClass, backgroundClass].join(" ");
  }, [size, backgroundColor]);

  const { classes } = useStyles();

  return (
    <div className={classes.box} {...props}>
      {/* {props.icon ?  <div className={classes.icon}>  {props.icon} </div>  : '' } */}
      {/* {label} */}
    </div>
  );
};
