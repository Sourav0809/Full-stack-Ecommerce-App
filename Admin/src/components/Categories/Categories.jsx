import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { MdAddToPhotos } from "react-icons/md";
import TablePagination from "@mui/material/TablePagination";
import AddCategoriesModal from "./AddCategoriesModal";
import CategoriesTable from "./CategoriesTable";

const Categories = () => {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showAddModal, setShowAddModal] = useState(false);

  // paginations
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      {showAddModal && <AddCategoriesModal showModal={setShowAddModal} />}
      <div className="w-full m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
        <div className="  text-xl flex justify-between items-center">
          <div className=" flex justify-center items-center text-4xl file:font-bold gap-4 text-pink-500">
            <h1>Our Categories</h1>
            <button
              className="primary-linear-bg text-white px-3 py-1 rounded-md"
              onClick={() => {
                setShowAddModal(true);
              }}
            >
              <MdAddToPhotos className="text-3xl" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-4 rounded-md font-poppins">
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>

        <div>
          <div className=" mt-5 flex flex-col min-[900px]:flex-row justify-center gap-4 min-[900px]:gap-0  min-[900px]:justify-between items-center ">
            <div className="flex justify-start items-center bg-gray-100 px-2 py-1 w-full min-[900px]:w-[40%] rounded-md">
              <CgSearch className="text-2xl" />
              <input
                type="text"
                placeholder="Search Any orders by order number and order name"
                className=" px-2 py-2 bg-gray-100 w-full outline-none"
              />
            </div>
            <div className=" flex gap-4 justify-center items-center">
              <select
                className=" px-3 py-3 flex justify-center items-center gap-2 bg-gray-100 rounded-md"
                defaultValue={"Status"}
              >
                <option>pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>
              <select
                className=" px-3 py-3 flex justify-center items-center gap-2 bg-gray-100 rounded-md"
                defaultValue={"Sort"}
              >
                <option>Low to High</option>
                <option>High To Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-18rem)] m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
        <CategoriesTable />
      </div>
    </>
  );
};

export default Categories;
