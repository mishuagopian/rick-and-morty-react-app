export const styles = {
  container: (responsive: boolean, drawerWidth: string) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: responsive ? drawerWidth : 0,
    marginBottom: "50px",
  }),
  list: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  pagination: {
    backdropFilter: "blur(5px)",
    position: "fixed",
    bottom: 5,
  },
};
