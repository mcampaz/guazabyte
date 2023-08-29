import { forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Slide, { SlideProps } from "@mui/material/Slide";

type TransitionProps = Omit<SlideProps, "direction">;

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

export interface IAlert {
  open: boolean;
  severity: "success" | "error" | undefined;
  message: string;
}

interface IProps extends IAlert {
  onClose: () => void;
}

function AlertSnackbar(props: IProps) {
  const { open, severity, message, onClose } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      TransitionComponent={TransitionUp}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%", backgroundColor: "#121212", color: "white" }}
      >
        <Typography variant="body1">{message}</Typography>
      </Alert>
    </Snackbar>
  );
}

export default AlertSnackbar;
