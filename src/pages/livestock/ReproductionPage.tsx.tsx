import { useEffect, useState } from "react";
import { Box, Paper, Toolbar } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

import PageHeader from "../../components/common/PageHeader";
import SearchInput from "../../components/controls/SearchInput";
import AddButton from "../../components/controls/AddButton";
import ReproductionGrid from "../../components/datatables/ReproductionGrid";
import InseminationAddForm from "../../components/forms/InseminationAddForm";

import styleConfigs from "../../configs/styleConfigs";

const ReproductionPage = () => {
  const [addInseminationOpen, setAddInseminationOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("first render ");
  }, []);

  return (
    <>
      <InseminationAddForm
        open={addInseminationOpen}
        onClose={() => setAddInseminationOpen(false)}
      />
      <PageHeader
        title="Воспроизводство"
        subTitle="Отслеживание осеменений"
        icon={PetsIcon}
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
              text="Добавить осеменение"
            />
          </Toolbar>
          <ReproductionGrid filter={searchTerm} />
        </Paper>
      </Box>
    </>
  );
};

export default ReproductionPage;
