import { Button, ButtonProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddButtonProps extends ButtonProps {
  text: string;
}

const AddButton = (props: AddButtonProps) => {
  return (
    <Button variant="outlined" sx={{ flexShrink: 0 }} {...props}>
      <AddIcon sx={{ marginRight: "5px" }} /> {props.text}
    </Button>
  );
};

export default AddButton;
