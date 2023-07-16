import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";

export default function InputForm() {
  return (
    <Paper
      component="form"
      sx={{ p: "4px 4px", display: "flex", alignItems: "center", width: 300 }}
    >
      <InputBase sx={{ ml: 1, flex: 2 }} />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="info"
        type="button"
        sx={{ p: "10px" }}
        aria-label="Edit"
      >
        <UpdateIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="error"
        type="button"
        sx={{ p: "10px" }}
        aria-label="Delete"
      >
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}
