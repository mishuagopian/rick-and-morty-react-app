export const styles = {
  tabs: (theme: any) => ({
    margin: "auto",
    marginTop: 4,
    paddingBottom: "40px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 3,
      marginRight: 3,
    },
  }),
  divider: {
    marginBottom: 2,
  },
  loading: {
    paddingBottom: "200px",
  },
};
