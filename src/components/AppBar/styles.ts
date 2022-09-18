export const styles = {
  appBar: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 1,
    bgcolor: "#2f3237",
  },
  image: {
    height: 50,
  },
  leftButtons: {
    position: "absolute",
    left: "40px",
  },
  toolbar: {
    justifyContent: "center",
    width: "100%",
    display: "flex",
  },
} as const;
