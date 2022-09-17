export const styles = {
  list: (responsive: boolean, drawerWidth: string) => ({
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    paddingLeft: responsive ? drawerWidth : 0,
  }),
};
