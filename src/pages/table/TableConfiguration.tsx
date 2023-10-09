import React, { useState, useEffect ,memo} from "react";
import ReactPaginate from "react-paginate";

type DataType = {
  accountID: number;
  accountHolder: number;
  accountType: string;
  maxOrderValue: number;
  grossLimit: number;
  netLimit: number;
  status: boolean;
  lastUpdateOn: string;
};

const TableConfiguration = () => {
  const [rows, setRows] = useState<Array<DataType>>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(rows.length / itemsPerPage);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const entriesOptions = [5, 20, 50, 100]; // Các tùy chọn số dòng hiển thị trên mỗi trang

  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(0); // Đặt lại trang hiện tại về 0 khi số lượng dòng hiển thị thay đổi
  };
  useEffect(() => {
    // Gọi hàm loadData khi component được render lần đầu tiên
    loadData();
  }, []);
  console.log("render")
  const loadData = () => {
    // Tạo dữ liệu mới cho 20 dòng
    const newData: Array<DataType> = [];
    for (let i = 1; i <= 20; i++) {
      const newRow: DataType = createData(
        i * 100,
        i * 10,
        `Institution ${i}`,
        i * 1.5,
        i * 3,
        i * 4,
        false,
        `${i}/10/2021`
      );
      newData.push(newRow);
    }

    setRows(newData); // Cập nhật state rows với dữ liệu mới
  };

  function createData(
    accountID: number,
    accountHolder: number,
    accountType: string,
    maxOrderValue: number,
    grossLimit: number,
    netLimit: number,
    status: boolean,
    lastUpdateOn: string
  ): DataType {
    return {
      accountID,
      accountHolder,
      accountType,
      maxOrderValue,
      grossLimit,
      netLimit,
      status: false,
      lastUpdateOn,
    };
  } // Mặc định trạng thái là false (không được chọn)
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <table className="table">
        {/* Phần đầu bảng */}
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Account Holder</th>
            <th>Account Type</th>
            <th>Max Order Value (USD)</th>
            <th>Gross Limit</th>
            <th>Net Limit</th>
            <th>Status</th>
            <th>Last Updated On</th>
          </tr>
        </thead>

        {/* Nội dung bảng */}
        <tbody>
          {rows
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((row, index) => (
              <tr key={index}>
                <td>{row.accountID}</td>
                <td>{row.accountHolder}</td>
                <td>{row.accountType}</td>
                <td>{row.maxOrderValue}</td>
                <td>{row.grossLimit}</td>
                <td>{row.netLimit}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.status}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].status = e.target.checked;
                      setRows(updatedRows);
                    }}
                  />
                </td>
                <td>{row.lastUpdateOn}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        Show:{" "}
        <select value={entriesPerPage} onChange={handleEntriesChange}>
          {entriesOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>{" "}
        entries
      </div>
      {/* Phân trang */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default memo(TableConfiguration);
