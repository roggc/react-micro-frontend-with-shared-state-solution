import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    status: { initialArg: "completed" },
    count1: { initialArg: 17 },
    count2bis: {
      initialState: 17,
      reducers: {
        increment: (state) => state + 1,
      },
    },
  },
});
