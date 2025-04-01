"use client";
import React, { useEffect, useState, Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import TestService from "@/services/Test/test.service";
import Link from "next/link";
import { ListOfAllObjects } from "@/model/Test/list-of-all-objects-res";
import styles from "@/styles/Test/MainTest.module.scss";

export default function MainTestWrapper() {
  const testService = new TestService();
  const [detailData, setDetailData] = React.useState<{
    dataTest: ListOfAllObjects[];
  }>({ dataTest: [] });
  React.useEffect(() => {
    testService.list().then((res) => {
      setDetailData({ ...detailData, dataTest: res });
    });
  }, []);
  return (
    <Fragment>
      <Container>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {detailData.dataTest.map((item) => (
            <ListItem
              key={item.id}
              disableGutters
              secondaryAction={
                <Link href={`/Test/${item.id}/detail`}>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                </Link>
              }
            >
              <ListItemText primary={`Line item ${item.name}`} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Fragment>
  );
}
