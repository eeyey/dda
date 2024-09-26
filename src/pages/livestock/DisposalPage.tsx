import { useState } from "react";
import { Box, Paper, Toolbar } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import PageHeader from "../../components/common/PageHeader";
import SearchInput from "../../components/controls/SearchInput";
import DisposalGrid from "../../components/datatables/DisposalGrid";
import AddButton from "../../components/controls/AddButton";

import styleConfigs from "../../configs/styleConfigs";
import DisposalForm from "../../components/forms/DisposalForm";

const DisposalPage = () => {
  const [addInseminationOpen, setAddInseminationOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <DisposalForm
        open={addInseminationOpen}
        onClose={() => setAddInseminationOpen(false)}
      />
      <PageHeader
        title="Выбытие"
        subTitle="Отслеживание выбытия"
        icon={ClearIcon}
      />
      <Box sx={{ padding: styleConfigs.content.padding }}>
        <Paper sx={{ padding: 2 }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: 3,
            }}
          >
            <SearchInput onDebounceChange={(val) => setSearchTerm(val)} />
            <AddButton
              onClick={() => setAddInseminationOpen(true)}
              text="Добавить выбытие"
            />
          </Toolbar>
          <DisposalGrid filter={searchTerm} />
        </Paper>
      </Box>
    </>
  );
};

export default DisposalPage;
