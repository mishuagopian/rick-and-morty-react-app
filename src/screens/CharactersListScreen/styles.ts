export const styles = {
  container: (responsive: boolean, drawerWidth: string) => ({
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    paddingLeft: responsive ? drawerWidth : 0,
  }),
  list: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginBottom: "50px",
  },
  pagination: {
    alignSelf: "center",
    backdropFilter: "blur(5px)",
    position: "fixed",
    bottom: 5,
  },
  error: {
    margin: 5,
  },
};
