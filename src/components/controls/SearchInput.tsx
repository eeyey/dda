import { useEffect, useState } from "react";
import { TextField, InputAdornment, TextFieldProps } from "@mui/material";
import Search from "@mui/icons-material/Search";
import useDebounce from "../../hooks/useDebounce";

const inputStyles = {
  width: "100%",
  marginRight: "100px",
};

type SearchInputProps = TextFieldProps & {
  onDebounceChange?: (value: string) => any;
  debounceDelay?: number;
};

const SearchInput = ({
  onDebounceChange,
  debounceDelay,
  ...props
}: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay ?? 1000);

  useEffect(() => {
    if (debouncedSearchTerm && onDebounceChange) {
      onDebounceChange(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <TextField
      variant="outlined"
      sx={inputStyles}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        },
      }}
      label={"Поиск"}
      onChange={(e) => setSearchTerm(e.target.value)}
      value={searchTerm}
      {...props}
    />
  );
};

export default SearchInput;
