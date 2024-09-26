import { Box, Button, Modal, ModalProps, Typography } from "@mui/material";
import SearchSelect from "../controls/SearchSelect";
import styleConfigs from "../../configs/styleConfigs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface InseminationAddFormProps extends Omit<ModalProps, "children"> {}

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

const InseminationAddForm = (props: InseminationAddFormProps) => {
  return (
    <Modal {...props}>
      <Box sx={styleConfigs.modalForm.main}>
        <Typography
          variant="h5"
          component="div"
          sx={styleConfigs.modalForm.header}
        >
          Добавление осеменения
        </Typography>
        <DatePicker
          sx={{ width: "100%", marginBottom: 2 }}
          label="Дата осеменения"
          value={dayjs().subtract(1, "day")}
          onChange={(newValue) => console.log(newValue)}
          format="DD.MM.YYYY"
        />
        <SearchSelect queryCallback={queryCallback} />
        <Button sx={{ marginTop: 2 }} variant="contained">
          Сохранить
        </Button>
      </Box>
    </Modal>
  );
};

export default InseminationAddForm;
