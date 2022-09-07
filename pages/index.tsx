import type { NextPage } from "next";
import {
  Button,
  Grid,
  MenuItem,
  OutlinedInputProps,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import axios from "axios";

const Home: NextPage = () => {
  const [feature, setFeature] = useState("");
  const [myClass, setClass] = useState("");
  const [method, setMethod] = useState("");
  const [myPackage, setPackage] = useState("");
  const [directory, setDirectory] = useState("");
  const [responseJson, setResponseJson] = useState("");
  const [requestJson, setRequestJson] = useState("");

  const handleFeatureChange: OutlinedInputProps["onChange"] = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setFeature(e.target.value);
  };

  const handleClassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClass(e.target.value);
  };

  const handleMethodChange = (e: SelectChangeEvent) => {
    setMethod(e.target.value);
  };

  const handlePackageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPackage(e.target.value);
  };

  const handleDirectoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDirectory(e.target.value);
  };

  const handleResponseJsonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResponseJson(e.target.value);
  };

  const handleRequestJsonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRequestJson(e.target.value);
  };

  const requestTemplate = async (): Promise<void> => {
    try {
      let request = {
        feature: feature,
        class: myClass,
        method: method,
        package: myPackage,
        directory: directory,
        requestJson: requestJson,
        responseJson: responseJson,
      };
      await axios.post("http://localhost:3000/api/request/create", request);
      // enqueueSnackbar("Create Template Success", { variant: "success" });
    } catch (e) {
      // enqueueSnackbar("Error to create template", { variant: "error" });
    }
  };

  return (
    <>
      <Grid container justifyContent="center" sx={{ paddingTop: 6 }}>
        <Grid item xs={10} md={8}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h4">Lazy Clean Architecture</Typography>
            <TextField
              id="feature-text-field"
              label="Feature"
              placeholder="landing"
              onChange={handleFeatureChange}
            />
            <TextField
              id="class-text-field"
              label="Class"
              placeholder="LandingDetail"
              onChange={handleClassChange}
            />
            <Select
              labelId="method-text-field-label"
              id="method-text-field"
              value={method}
              label="Method"
              onChange={handleMethodChange}
            >
              <MenuItem value={"GET"}>GET</MenuItem>
              <MenuItem value={"POST"}>POST</MenuItem>
              <MenuItem value={"PUT"}>PUT</MenuItem>
              <MenuItem value={"DELETE"}>DELETE</MenuItem>
            </Select>
            <TextField
              id="package-text-field"
              label="Package Name"
              placeholder="com.example.myproject"
              onChange={handlePackageChange}
            />
            <TextField
              id="directory-text-field"
              label="Directory"
              placeholder="Your project location"
              onChange={handleDirectoryChange}
            />
            <TextField
              id="request-json-text-field"
              label="Request JSON"
              placeholder="Input response"
              multiline
              rows={10}
              onChange={handleRequestJsonChange}
            />
            <TextField
              id="response-json-text-field"
              label="Response JSON"
              placeholder="Input response"
              multiline
              rows={10}
              onChange={handleResponseJsonChange}
            />
            <Button variant="contained" onClick={requestTemplate}>
              Generate
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
