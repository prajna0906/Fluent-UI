import { TextField } from '@fluentui/react/lib/TextField';

const style = {
  display: "flex",
  justifyContent: "center",
  maxwidth: "400px",
  marginTop: "25px"
};

export const App = () => {
  return (
    <div style = { style }>
      <TextField type="file" />
    </div>
  );
};
