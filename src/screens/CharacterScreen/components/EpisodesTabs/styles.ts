export const styles = {
  tabs: (theme: any) => ({
    margin: "auto",
    marginTop: 4,
    [theme.breakpoints.up("sm")]: {
      maxWidth: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 3,
      marginRight: 3,
    },
  }),
};
