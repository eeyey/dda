import React from "react";
import { Box, Card, SvgIconProps, Typography } from "@mui/material";
import styleConfigs from "../../configs/styleConfigs";

interface PageHeaderProps {
  title: string;
  icon: React.ElementType<SvgIconProps>;
  subTitle?: string;
}

const cardStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 65,
  height: 65,
  borderRadius: 2,
  boxShadow: 1,
};

const iconStyles = {
  color: styleConfigs.primary,
  fontSize: 40,
};

const containerStyles = {
  display: "flex",
  alignItems: "center",
};

const PageHeader = ({ title, subTitle, icon: Icon }: PageHeaderProps) => {
  return (
    <Box
      sx={{
        padding: styleConfigs.content.padding,
        backgroundColor: styleConfigs.pageHeader.bg,
      }}
    >
      <Box sx={containerStyles}>
        <Card sx={cardStyles}>{Icon && <Icon sx={iconStyles} />}</Card>
        <Box sx={{ marginLeft: 3 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          {subTitle && (
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ opacity: 0.6 }}
            >
              {subTitle}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PageHeader;
