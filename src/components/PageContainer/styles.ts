export const styles = (appBarHeight: string) => {
  return {
    flex: 1,
    height: "100%",
    paddingTop: appBarHeight,
  } as const;
};
