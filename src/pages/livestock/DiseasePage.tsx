import { useEffect, useState } from "react";
import { Box, Paper, Toolbar } from "@mui/material";
import EarbudsIcon from "@mui/icons-material/Earbuds";

import PageHeader from "../../components/common/PageHeader";
import SearchInput from "../../components/controls/SearchInput";
import DisposalGrid from "../../components/datatables/DisposalGrid";
import AddButton from "../../components/controls/AddButton";
import InseminationAddForm from "../../components/forms/InseminationAddForm";

import useDebounce from "../../hooks/useDebounce";

import styleConfigs from "../../configs/styleConfigs";
import DisposalForm from "../../components/forms/DisposalForm";

const DiseasePage = () => {
  const [addInseminationOpen, setAddInseminationOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <DisposalForm
        open={addInseminationOpen}
        onClose={() => setAddInseminationOpen(false)}
      />
      <PageHeader
        title="Заболевания"
        subTitle="Отслеживание заболеваний"
        icon={EarbudsIcon}
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
              text="Добавить корову"
            />
          </Toolbar>
          <DisposalGrid filter={searchTerm} />
        </Paper>
      </Box>
    </>
  );
};

export default DiseasePage;
