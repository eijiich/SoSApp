const useStyles = makeStyles((theme) => ({
  nomeQueVcIncenta: {
    width: "30vw",
    border: "5px solid green",
  },
  outroNomeQueVcInventa: {
    width: "30vw",
    border: "5px solid green",
  },
}));

export default function AdminView() {
  const classes = useStyles();
  return (
    <div className={classes.nomeQueVcIncenta}>
      <h1>ADMIN VIEW</h1>
    </div>
  );
}
