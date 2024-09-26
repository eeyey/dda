const CONTENT_PADDING = 3;

const styleConfigs = {
  secondary: "#222c4a",
  primary: "#393a89",
  sidebar: {
    bg: "#263051",
    color: "#eeeeee",
    hoverBg: "#222c4a",
    activeBg: "#1e2642",
    width: "300px",
  },
  content: {
    padding: CONTENT_PADDING,
  },
  pageHeader: {
    bg: "#fefbff",
  },
  mainBg: "#f4f4ff",
  modalForm: {
    main: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 600,
      bgcolor: "background.paper",
      boxShadow: 24,
      borderRadius: 2,
      p: CONTENT_PADDING,
    },
    header: {
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: CONTENT_PADDING,
    },
  },
};

export default styleConfigs;
