import * as React from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { memo } from "react";
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
  limit: number,
  amount: number,
  lastUpdateOn: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    limit,
    amount,
    lastUpdateOn,
    history: [
      {
        date: "AALA",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "AAL",
        customerId: "1233213",
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <tr>
        <td className="align-middle" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            <span className="align-center"> 
            {row.calories}  
            </span>
        </td>
        <td>{row.name}</td>
        <td align="right">{row.calories}</td>
        <td align="right">{row.fat}</td>
        <td align="right">{row.carbs}</td>
        <td align="right">{row.protein}</td>
        <td align="right">{row.limit}</td>
        <td align="right">{row.amount}</td>
        <td align="right">{row.lastUpdateOn}</td>
      </tr>
      {row.history.map(
        (historyRow) =>
          open && (
            <tr key={historyRow.date} className="dropdown">
              <td align="right" scope="row">
              
              </td>
              <td  align="right" scope="row">
                {historyRow.date}
              </td>{" "}
              <td align="right" scope="row">
                {historyRow.date}
              </td>{" "}
              <td align="right" scope="row">
                {historyRow.date}
              </td>{" "}
              <td align="right" scope="row">
                {historyRow.date}
              </td>
              <td align="right">{historyRow.customerId}</td>
              <td align="right">{historyRow.amount}</td>
              <td align="right">
                {Math.round(historyRow.amount * row.price * 100) / 100}
              </td>
              <td align="right">
                {Math.round(historyRow.amount * row.price * 100) / 100}
              </td>
            </tr>
          )
      )}
    </React.Fragment>
  );
}

const rows = [
  createData("", 159, 6.0, 24, 4.0, 3.99, 5, 5, 5),
  createData("", 237, 9.0, 37, 4.3, 4.99, 5, 5, 5),
  createData("", 262, 16.0, 24, 6.0, 3.79, 1, 2, 3),
  createData("", 305, 3.7, 67, 4.3, 2.5, 4, 5, 6),
  createData("", 356, 16.0, 49, 3.9, 1.5, 6, 7, 8),
];

const CollapsibleTable = (() => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th rowSpan={2} className="text-center align-middle">
            Account ID
          </th>
          <th rowSpan={2} className="text-center align-middle">
            Ticker Code
          </th>
          <th rowSpan={2} className="text-center align-middle">
            Unexecuted Amount
          </th>
          <th rowSpan={2} className="text-center align-middle">
            Unexecuted Amount
          </th>
          <th colSpan={2} className="text-center">
            GROSS
          </th>
          <th colSpan={2} className="text-center">
            NET
          </th>
          <th rowSpan={2} className="text-center align-middle">
            Last Updated On
          </th>
        </tr>
        <tr>
          <th className="text-center">Limit</th>
          <th className="text-center">Amount</th>
          <th className="text-center">Limit</th>
          <th className="text-center">Amount</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <Row key={row.name} row={row} />
        ))}
      </tbody>
    </table>
  );
}); 

export default memo(CollapsibleTable);