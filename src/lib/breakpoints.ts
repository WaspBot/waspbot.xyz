export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type BreakpointKey = keyof typeof breakpoints;

export const isScreenSm = (width: number) => width >= breakpoints.sm;
export const isScreenMd = (width: number) => width >= breakpoints.md;
export const isScreenLg = (width: number) => width >= breakpoints.lg;
export const isScreenXl = (width: number) => width >= breakpoints.xl;
export const isScreen2Xl = (width: number) => width >= breakpoints['2xl'];

export const isScreenSmallerThan = (width: number, breakpoint: BreakpointKey) => width < breakpoints[breakpoint];
export const isScreenLargerThan = (width: number, breakpoint: BreakpointKey) => width >= breakpoints[breakpoint];
