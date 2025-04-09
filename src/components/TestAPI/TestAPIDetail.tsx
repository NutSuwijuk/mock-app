"use client";
import { SingleObject } from "@/model/Test/single-object-res";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";
import { useTransition } from "react";
import styles from "@/styles/Test/TestDetail.module.scss";
import Navbar from "../NavBar_old";
import Container from "@mui/material/Container";
import { TestApiModel } from "@/model/TestAPI/testApiModelRes";
import { TestApiDetailModel } from "@/model/TestAPI/testApiDetailModelRes";

interface serverProps {
  data: TestApiDetailModel;
}

export default function TestAPIDetail(props: serverProps) {
  const t = useTranslations("HomePage");
  const [dataDetail, setDataDetail] = React.useState(props.data);
  console.log(dataDetail)
  React.useEffect(() => {}, []);
  return (
    <>
      {/* <Fragment> */}
        <Navbar />
        <Container>
          {t("GetStartedByEditing")}
          <div>Name:{dataDetail.name}</div>
          {dataDetail && (
            <Fragment>
                <div>CC: {dataDetail.zip}</div>
            </Fragment>
          )}
        </Container>
        {/* <Fragment/> */}
    </>
  );
}
