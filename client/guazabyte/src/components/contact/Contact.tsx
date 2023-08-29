import { useState } from "react";
import validate from "validate.js";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import Alert, { IAlert } from "../alert/Alert";

const schema = {
  name: {
    presence: { allowEmpty: false, message: "^name is required" },
    length: {
      maximum: 100,
      tooLong: "Is too long",
    },
  },
  email: {
    presence: { allowEmpty: false, message: "^Email is required" },
    email: true,
  },
  phone: {
    presence: { allowEmpty: false, message: "^Phone is required" },
    length: {
      maximum: 100,
      tooLong: "Is too long",
    },
  },
};

interface IFormState {
  isValid: boolean;
  values: IFormInput;
  touched: any;
  errors: any;
}
interface IFormInput {
  name: string;
  email: string;
  phone: string;
}

function Contact() {
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const [formState, setFormState] = useState<IFormState>({
    isValid: false,
    values: {
      name: "",
      email: "",
      phone: "",
    },
    errors: {},
    touched: {},
  });
  const [dataAlert, setDataAlert] = useState<IAlert>({
    open: false,
    severity: undefined,
    message: "",
  });

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState: IFormState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
      errors: {
        ...formState.errors,
        [event.target.name]: "",
      },
    }));
  };

  const validateFields = () => {
    const errors = validate(formState.values, schema);
    setFormState((formState: IFormState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  };

  const hasError = (field: string) => {
    return formState.touched[field] && formState.errors[field] ? true : false;
  };

  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validate(formState.values, schema);
    setFormState((formState: IFormState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));

    if (formState.isValid) {
      setDisableBtn(true);
      setTimeout(() => {
        setDataAlert({
          open: true,
          severity: "success",
          message: "Data sent successfully!",
        });
        setFormState({
          isValid: false,
          values: {
            name: "",
            email: "",
            phone: "",
          },
          errors: {},
          touched: {},
        });
        setDisableBtn(false);
      }, 800);
    }
  };

  const handleCloseAlert = () => {
    setDataAlert((value: IAlert) => ({
      ...value,
      open: false,
    }));
  };

  return (
    <>
      <form onSubmit={hanldeSubmit}>
        <fieldset disabled={disableBtn} style={{ border: "none", padding: 5 }}>
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12}>
              <TextField
                required
                autoComplete="off"
                error={hasError("name")}
                fullWidth
                helperText={hasError("name") ? formState.errors.name[0] : null}
                onChange={onChangeInput}
                value={formState.values.name || ""}
                variant="outlined"
                label="Name"
                name="name"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                onBlur={validateFields}
                inputProps={{
                  maxLength: 100,
                  minLength: 1,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                autoComplete="off"
                error={hasError("email")}
                fullWidth
                helperText={
                  hasError("email") ? formState.errors.email[0] : null
                }
                onChange={onChangeInput}
                value={formState.values.email || ""}
                variant="outlined"
                label="Email"
                name="email"
                type="text"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                onBlur={validateFields}
                inputProps={{
                  maxLength: 100,
                  minLength: 1,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                autoComplete="off"
                error={hasError("phone")}
                fullWidth
                helperText={
                  hasError("phone") ? formState.errors.phone[0] : null
                }
                onChange={onChangeInput}
                value={formState.values.phone || ""}
                variant="outlined"
                label="Phone"
                name="phone"
                type="text"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                onBlur={validateFields}
                inputProps={{
                  maxLength: 50,
                  minLength: 1,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                size="large"
                type="submit"
                variant="contained"
                disabled={disableBtn}
                fullWidth
                startIcon={disableBtn && <CircularProgress color="secondary" />}
                sx={{
                  marginTop: 1,
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </fieldset>
      </form>
      <Alert
        open={dataAlert.open}
        onClose={handleCloseAlert}
        severity={dataAlert.severity}
        message={dataAlert.message}
      />
    </>
  );
}

export default Contact;
