export const drawerWidth = "240px";

export const styles = {
  nav: {
    width: { sm: drawerWidth },
    flexShrink: { sm: 0 },
  },
  permanent: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  },
  temporary: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
    zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 2,
  },
};
