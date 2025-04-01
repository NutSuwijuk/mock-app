"use client";
import React, { Fragment, useEffect, useState } from 'react';
import { Grid2, List, ListItem, ListItemText, Button, Paper, TextField } from '@mui/material';

interface DataItem {
  code: string;
  name: string;
}

interface MTransferListProps {
  dataNotSelect: string[];
  dataSelect: string[];
  dataMain: DataItem[];
  actionSelect: (selected: string[]) => void;
  actionNotSelect: (notSelected: string[]) => void;
}

const useStyles = {
  root: {
    margin: 'auto',
    "& .Grid--Width": {
      width: "34%"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: '1px solid #E0E5F2',
    },
    "& .MuiListItem-button:hover": {
      backgroundColor: "#DBEEFF"
    },
    "& .MuiListItem-root.select": {
      backgroundColor: "#DBEEFF"
    },
    "& .MuiGrid-item:first-child": {
      marginRight: "3rem",
    },
    "& .MuiGrid-item:last-child": {
      marginLeft: "3rem",
    },
    "& .MuiPaper-elevation1": {
      boxShadow: "0px 5px 15px #0000001a"
    },
    "& .MuiTypography-body2,.MuiInputBase-root": {
      fontFamily: "'kalatexa','ubuntu'",
      fontWeight: "bold",
      fontSize: "16px",
    },
    "& .MuiTextField-root": {
      width: "100%",
      marginBottom: "1rem"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "6px"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:hover": {
      border: '1px solid #089cc9',
      borderRadius: "6px",
    },
    "& .MuiHeadList": {
      borderRadius: "4px 4px 0px 0px",
      padding: "10px",
      textAlign: "center",
      fontFamily: "'kalatexa','ubuntu'",
      fontWeight: "bold",
      fontSize: "16px",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 15px #0000001a",
      borderBottom: "1px solid #E0E5F2"
    },
    "& .MuiPaper-rounded": {
      borderRadius: "0px 0px 4px 4px",
    }

  },
  paper: {
    overflow: 'auto',
    width: "100%",
    height: 230,
    // [theme.breakpoints.down("xs")]: {
    //   width: 155,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: 155,
    // },
  },
  button: {
    margin: "5px"
  },
}

const MTransferList: React.FC<MTransferListProps> = (props) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [left, setLeft] = useState<string[]>(props.dataNotSelect);
  const [right, setRight] = useState<string[]>(props.dataSelect);
  const [filterLeft, setFilterLeft] = useState<string>('');
  const [filterRight, setFilterRight] = useState<string>('');

  useEffect(() => {
    setLeft(props.dataNotSelect);
    setRight(props.dataSelect);
    setChecked([]);
  }, [props.dataNotSelect, props.dataSelect]);

  const handleToggle = (value: string) => () => {
    setChecked((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const handleAllRight = () => {
    props.actionSelect([...right, ...left]);
    props.actionNotSelect([]);
    setRight([...right, ...left]);
    setLeft([]);
  };

  const handleCheckedRight = () => {
    const leftChecked = intersection(checked, left);
    props.actionSelect([...right, ...leftChecked]);
    props.actionNotSelect(not(left, leftChecked));
    setRight([...right, ...leftChecked]);
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    const rightChecked = intersection(checked, right);
    props.actionSelect(not(right, rightChecked));
    props.actionNotSelect([...left, ...rightChecked]);
    setLeft([...left, ...rightChecked]);
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    props.actionSelect([]);
    props.actionNotSelect([...left, ...right]);
    setLeft([...left, ...right]);
    setRight([]);
  };

  const customList = (items: string[], filter: string, position: 'Left' | 'Right') => (
    <Fragment>
      <div className="MuiHeadList">{position === 'Left' ? 'Select' : 'Selected'}</div>
      <Paper sx={useStyles.paper}>
        <List dense component="div" role="list">
          {items.map((value) => {
            const item = props.dataMain.find((item) => item.code === value);
            if (item && (item.name.toUpperCase().includes(filter.toUpperCase()) || !filter)) {
              return (
                <ListItem key={value} role="listitem" onClick={handleToggle(value)}>
                  <ListItemText primary={item.name} />
                </ListItem>
              );
            }
            return null;
          })}
        </List>
      </Paper>
    </Fragment>
  );

  return (
    <Fragment>
      <Grid2 sx={useStyles.root} container spacing={2} justifyContent="center" alignItems="center">
        <Grid2 className="Grid--Width">
          <TextField onChange={(e) => setFilterLeft(e.target.value)} value={filterLeft} variant="outlined" size="small" placeholder="Search" />
          {customList(left, filterLeft, 'Left')}
        </Grid2>
        <Grid2>
          <Grid2 container direction="column" alignItems="center">
            <Button variant="outlined" size="small" sx={useStyles.button} onClick={handleAllRight} disabled={left.length === 0}>
              ≫
            </Button>
            <Button variant="outlined" size="small" sx={useStyles.button} onClick={handleCheckedRight} disabled={intersection(checked, left).length === 0}>
              &gt;
            </Button>
            <Button variant="outlined" size="small" sx={useStyles.button} onClick={handleCheckedLeft} disabled={intersection(checked, right).length === 0}>
              &lt;
            </Button>
            <Button variant="outlined" size="small" sx={useStyles.button} onClick={handleAllLeft} disabled={right.length === 0}>
              ≪
            </Button>
          </Grid2>
        </Grid2>
        <Grid2 className="Grid--Width">
          <TextField onChange={(e) => setFilterRight(e.target.value)} value={filterRight} variant="outlined" size="small" placeholder="Search" />
          {customList(right, filterRight, 'Right')}
        </Grid2>
      </Grid2>
    </Fragment>
  );
};

export default MTransferList;

function not(a: string[], b: string[]): string[] {
  return a.filter((value) => !b.includes(value));
}

function intersection(a: string[], b: string[]): string[] {
  return a.filter((value) => b.includes(value));
}