"use client";

import { ListOfAllObjects } from "@/model/Test/list-of-all-objects-res";
import TestService from "@/services/Test/test.service";
import TestAPI from "@/services/TestAPI/testapi.service";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { Fragment } from "react";
import styles from "@/app/[locale]/page.module.scss";
import Navbar from "@/components/NavBar";
import { TestApiModel } from "@/model/TestAPI/testApiModelRes";
import Link from "next/link";
import CommentIcon from "@mui/icons-material/Comment";

export default function TestAPIPage() {
  const testApi = new TestAPI();
  // const testApi =new TestService()

  const [detailData, setDetailData] = React.useState<{
    dataTest: TestApiModel[];
  }>({ dataTest: [] });
  React.useEffect(() => {
    testApi.list().then((res) => {
      console.log('res',res)
      setDetailData({ ...detailData, dataTest: res });
    });
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Container>
        <List>
          {detailData.dataTest.map((item) => (
            <ListItem
              key={item.id}
              disableGutters
              secondaryAction={
                <Link href={`/TestAPI/${item.id}/detail`}>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                </Link>
              }
            >
              <ListItemText primary={`Name ${item.name}`} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Fragment>
  );
}
