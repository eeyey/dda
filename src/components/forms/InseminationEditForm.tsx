import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  ModalProps,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchSelect from "../controls/SearchSelect";
import styleConfigs from "../../configs/styleConfigs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { InseminationRecord } from "../../types/types";
import { useState } from "react";

interface InseminationEditFormProps extends Omit<ModalProps, "children"> {
  data: InseminationRecord;
}

const boxStyles = {
  display: "flex",
  justifyContent: "space-between",
  gap: 2,
  marginTop: 2,
};

const getResultFromData = (data: InseminationRecord) => {
  return data.result == "Аборт" ? 0 : data.result == "Отел" ? 1 : undefined;
};

const InseminationEditForm = ({
  data,
  ...props
}: InseminationEditFormProps) => {
  const [result, setResult] = useState<number | "">(
    getResultFromData(data) ?? ""
  );

  console.log(result);

  return (
    <Modal {...props}>
      <Box sx={styleConfigs.modalForm.main}>
        <Typography
          variant="h5"
          component="div"
          sx={styleConfigs.modalForm.header}
        >
          Изменение беременности
        </Typography>
        <DatePicker
          sx={{ width: "100%", marginBottom: 2 }}
          label="Дата осеменения"
          value={dayjs(data["insemination-date"])}
          disabled
          format="DD.MM.YYYY"
        />
        <SearchSelect disabled value={{ id: data.id, label: data["cow-id"] }} />
        <FormControl sx={{ width: "100%", marginTop: 2 }}>
          <InputLabel id="result-label">Исход</InputLabel>
          <Select
            labelId="result-label"
            value={result}
            onChange={(event) => setResult(+event.target.value)}
            label="Исход"
          >
            <MenuItem value={0}>Аборт</MenuItem>
            <MenuItem value={1}>Отел</MenuItem>
          </Select>
        </FormControl>
        {result ? (
          <>
            <Box sx={boxStyles}>
              <TextField
                type="number"
                label="Кол-во живых телят"
                variant="outlined"
                fullWidth
              />
              <TextField
                type="number"
                label="Кол-во мертвых телят"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box sx={boxStyles}>
              <TextField
                type="number"
                label="Кол-во живых бычков"
                variant="outlined"
                fullWidth
              />
              <TextField
                type="number"
                label="Кол-во мертвых бычков"
                variant="outlined"
                fullWidth
              />
            </Box>
          </>
        ) : (
          result !== "" && (
            <TextField
              sx={{ marginTop: 2 }}
              label="Причина"
              variant="outlined"
              fullWidth
            />
          )
        )}

        <Button sx={{ marginTop: 2 }} variant="contained">
          Сохранить
        </Button>
      </Box>
    </Modal>
  );
};

export default InseminationEditForm;
