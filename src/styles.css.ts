import { createGlobalTheme, style } from "@vanilla-extract/css";

const vars = createGlobalTheme(":root", {
  focusWithin: {
    highlightBoxShadow: `
      0px 0px 0px 4px #DEEFFF
    `,
  },
});

export const container = style({
  boxShadow: vars.focusWithin.highlightBoxShadow
})
