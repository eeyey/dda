import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  ModalProps,
  Select,
  Typography,
} from "@mui/material";
import SearchSelect from "../controls/SearchSelect";
import styleConfigs from "../../configs/styleConfigs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DisposalRecord } from "../../types/types";
import { useState } from "react";

interface DisposalFormProps extends Omit<ModalProps, "children"> {
  data?: DisposalRecord;
}

const globalOptions = [
  {
    id: 1,
    label: "001",
  },
  {
    id: 2,
    label: "002",
  },
  {
    id: 3,
    label: "003",
  },
  {
    id: 4,
    label: "004",
  },
  {
    id: 5,
    label: "005",
  },
  {
    id: 6,
    label: "006",
  },
  {
    id: 7,
    label: "007",
  },
  {
    id: 8,
    label: "008",
  },
  {
    id: 9,
    label: "009",
  },
  {
    id: 10,
    label: "010",
  },
  {
    id: 11,
    label: "011",
  },
  {
    id: 12,
    label: "012",
  },
  {
    id: 13,
    label: "013",
  },
  {
    id: 14,
    label: "014",
  },
  {
    id: 15,
    label: "015",
  },
  {
    id: 16,
    label: "016",
  },
];

const queryCallback = async (
  search: string
): Promise<{ id: number; label: string }[]> => {
  return new Promise((resolve, _) => {
    setTimeout(
      () =>
        resolve(globalOptions.filter(({ label }) => label.includes(search))),
      1000
    );
  });
};

const getResultFromData = (data: DisposalRecord | undefined) => {
  switch (data?.reason) {
    case "Падеж":
      return 0;
    case "Забой":
      return 1;
    case "Продажа":
      return 2;
    default:
      return undefined;
  }
};

const DisposalForm = ({ data, ...props }: DisposalFormProps) => {
  const [result, setResult] = useState<number | "">(
    getResultFromData(data) ?? ""
  );

  const dateValue = data
    ? dayjs(data["disposal-date"])
    : dayjs().subtract(1, "day");

  const searchValue = data ? { id: data.id, label: data["cow-id"] } : undefined;

  return (
    <Modal {...props}>
      <Box sx={styleConfigs.modalForm.main}>
        <Typography
          variant="h5"
          component="div"
          sx={styleConfigs.modalForm.header}
        >
          Добавление выбытия
        </Typography>
        <DatePicker
          sx={{ width: "100%", marginBottom: 2 }}
          label="Дата выбытия"
          value={dateValue}
          format="DD.MM.YYYY"
        />
        <SearchSelect queryCallback={queryCallback} value={searchValue} />
        <FormControl sx={{ width: "100%", marginTop: 2 }}>
          <InputLabel id="result-label">Исход</InputLabel>
          <Select
            labelId="result-label"
            value={result}
            onChange={(event) => setResult(+event.target.value)}
            label="Исход"
          >
            <MenuItem value={0}>Падеж</MenuItem>
            <MenuItem value={1}>Забой</MenuItem>
            <MenuItem value={2}>Продажа</MenuItem>
          </Select>
        </FormControl>

        <Button sx={{ marginTop: 2 }} variant="contained">
          Сохранить
        </Button>
      </Box>
    </Modal>
  );
};

export default DisposalForm;
