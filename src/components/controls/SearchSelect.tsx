import { useState, useEffect } from "react";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";

interface Option {
  id: number;
  label: string;
}

interface SearchSelectProps {
  queryCallback?: (search: string) => Promise<Option[]>;
  disabled?: boolean;
  value?: Option;
}

const SearchSelect = ({
  queryCallback,
  disabled,
  value,
}: SearchSelectProps) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    (async () => {
      if (inputValue === "") {
        setOptions([]);
        return;
      }

      if (!queryCallback) return;

      setLoading(true);

      await queryCallback(inputValue)
        .then((options) => {
          setOptions(options);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    })();
  }, [inputValue]);

  return (
    <Autocomplete
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.label}
      options={options}
      loading={loading}
      value={value}
      disabled={disabled}
      noOptionsText={
        inputValue != "" ? "Нет вариантов" : "Начните вводить номер"
      }
      loadingText="Загрузка..."
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Номер коровы"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchSelect;
