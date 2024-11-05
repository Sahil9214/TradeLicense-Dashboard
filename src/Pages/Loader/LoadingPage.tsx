import { Box } from "@mui/material";

export default function LoadingPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <img
        src="https://pngimagesfree.com/wp-content/uploads/Karnataka-Govt-Logo-PNG@pngimagesfree.com_.png"
        alt="Logo"
        style={{ marginBottom: "20px", width: "200px", height: "200px" }}
      />
    </Box>
  );
}
