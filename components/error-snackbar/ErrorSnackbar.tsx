"use client";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";
import { useActions } from "@/redux/hooks/useActions";
import { appActions } from "@/redux/slicies/appSlice";
import { useAppSelector } from "@/redux/hooks/hooks";

export function ErrorSnackbar() {
  const error = useAppSelector((state) => state.app.error);
  const success = useAppSelector((state) => state.app.success);

  const { setAppError, setAppSuccess } = useActions(appActions);

  const severity: AlertColor = error ? "error" : "success";
  const message = error ? error : success;

  const handleClose = async () => {
    success && setAppSuccess({ success: null });
    error && setAppError({ error: null });
  };

  const isOpen: boolean = !!error || !!success;

  return (
    <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
      <Alert variant="filled" severity={severity} sx={{ width: "600px" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
