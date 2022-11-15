import { Container } from "@mui/system";

export const EmptyContainer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#EFEFEF",
        height: "400px",
      }}
    >
      This container is empty
    </Container>
  );
};
