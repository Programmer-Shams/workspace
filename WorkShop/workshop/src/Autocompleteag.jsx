import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Countries from "./Dummy";
const AutocompleteTag = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Countries}
      sx={{
        width: 300,
        "& .MuiInputLabel-root": {
          color: "blue", // Customize label color
        },
        "& .MuiInputBase-input": {
          backgroundColor: "lightgray", // Customize input background color
        },
        // Add more custom styles as needed
      }}
      renderInput={(params) => <TextField {...params} label="Countries" />}
    />
  );
};

export default AutocompleteTag;
