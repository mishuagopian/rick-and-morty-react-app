export const styles = {
  card: {
    borderRadius: 8,
    boxShadow: 2,
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "50px",
  },
  description: (theme: any) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      marginTop: 5,
      textAlign: "center",
    },
  }),
};
