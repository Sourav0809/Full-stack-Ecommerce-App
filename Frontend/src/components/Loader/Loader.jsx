import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center ">
      <CircularProgress disableShrink />;
    </div>
  );
}