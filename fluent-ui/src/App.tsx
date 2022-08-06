import { makeStyles } from "@fluentui/react-components";
import { TextField } from '@fluentui/react/lib/TextField';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    maxwidth: "400px",
    marginTop: "25px"
  }
});

export const Default = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <TextField type="file" /> 
    </div>
  );
};
