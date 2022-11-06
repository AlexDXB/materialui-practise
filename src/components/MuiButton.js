import React from "react";
import { Button, Stack, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https:/google.com/">
          Text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Primary
        </Button>
        <Button variant="outlined" color="error">
          Primary
        </Button>
        <Button variant="contained" color="warning">
          Primary
        </Button>
        <Button variant="contained" color="info">
          Primary
        </Button>
        <Button variant="contained" color="success">
          Primary
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small" disableRipple>
          Small
        </Button>
        <Button variant="contained" size="medium" disableElevation>
          Medium
        </Button>
        <Button variant="contained" size="large" startIcon={<SendIcon />}>
          Large
        </Button>
        <IconButton size="small" aria-label="send" color="success">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical">
          <Button onClick={() => alert("Hello")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
