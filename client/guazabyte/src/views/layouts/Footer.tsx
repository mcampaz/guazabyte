import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        height: 50,
        bottom: 0,
        padding: 10,
        width: "100%",
      }}
    >
      <Typography variant="h5">
        <strong>
          Whatsapp: +1 346 628 8000; +1 619 548 5880; +1 619 673 3815; +1 858
          583 1005
        </strong>
      </Typography>
    </footer>
  );
}

export default Footer;
