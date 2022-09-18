export const styles = {
  container: (responsive: boolean, drawerWidth: string) => ({
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    paddingLeft: responsive ? drawerWidth : 0,
  }),
  list: (theme: any) => ({
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginBottom: "50px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }),
  pagination: {
    alignSelf: "center",
    backdropFilter: "blur(10px)",
    position: "fixed",
    bottom: 12,
  },
  error: {
    margin: 5,
  },
};
