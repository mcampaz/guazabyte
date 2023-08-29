import { forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TransitionProps } from "@mui/material/transitions";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Zoom from "@mui/material/Zoom";

interface IProps {
  open: boolean;
  close?: () => void;
  title: string | JSX.Element;
  subTitle?: string | JSX.Element;
  content: string | string[] | JSX.Element | JSX.Element[];
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
  disableEnforceFocus?: boolean;
  size?: "xs" | "md" | "sm" | "lg" | "xl";
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

function Modal(props: IProps) {
  const {
    open,
    title,
    content,
    close,
    subTitle,
    size,
    disableBackdropClick,
    disableEscapeKeyDown,
    disableEnforceFocus,
  } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = (_: any, reason: string) => {
    if (disableBackdropClick && reason === "backdropClick") {
      return false;
    }

    if (disableEscapeKeyDown && reason === "escapeKeyDown") {
      return false;
    }

    if (typeof close === "function") {
      close();
    }
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      disableEnforceFocus={disableEnforceFocus || false}
      maxWidth={size}
      fullWidth={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullScreen={fullScreen}
    >
      <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
        <strong>{title}</strong>
        {close ? (
          <IconButton
            aria-label="close"
            onClick={close}
            sx={{
              position: "absolute",
              right: 5,
              top: 5,
            }}
          >
            <CloseIcon color="primary" />
          </IconButton>
        ) : null}
        <DialogContentText>{subTitle}</DialogContentText>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}

export default Modal;
