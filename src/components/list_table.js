import React, { useState, useEffect } from "react";
import "./list_table.css";
import db from "../firebase";
import Pagination from "react-js-pagination";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  deleteDoc,
} from "firebase/firestore";

const List_table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [dataList, setDataList] = useState([]);

  const fetchData = async () => {
    const firestore = getFirestore(db);
    const testCollection = collection(firestore, "Items");
    const data = await getDocs(testCollection);

    const items = [];
    data.forEach((doc) => {
      const data_end = doc.data();
      if (data_end.onoff) {
        items.push({ id: doc.id, ...doc.data() });
      }
    });
    setDataList(items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmed) {
      return;
    } else {
      const firestore = getFirestore(db);
      const userDocRef = doc(firestore, "Items", id);

      try {
        await deleteDoc(userDocRef);
        console.log("문서가 성공적으로 삭제되었습니다.");

        setDataList((prevDataList) =>
          prevDataList.filter((item) => item.id !== id)
        );
      } catch (error) {
        console.error("문서 삭제 중 오류가 발생했습니다:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="text-xl">경매진행내역</div>
      <table className="table-list">
        <thead className="justify-between">
          <tr className="gray">
            <th className="table-top list_id">닉네임</th>
            <th className="table-top list_email">이메일</th>
            <th className="table-top list_table-category">카테고리</th>
            <th className="table-top list_name">경매 이름</th>
            <th className="table-top list_date-time">경매 시작시간</th>
            <th className="table-top list_date-time">경매 끝시간</th>
            <th className="table-top list_price">금액</th>
            <th className="table-top list_price">경매 방식</th>
            <th className="table-top list_time">설정시간</th>
            <th className="table-top list_delete">삭제</th>
          </tr>
        </thead>
        <tbody className="justify-between">
          {currentItems.map((items) => (
            <tr className="list-border">
              <td className="list text-center">{items.nickname}</td>
              <td className="list text-center">{items.email}</td>
              <td className="list text-center">{items.category}</td>
              <td className="list text-center">{items.title}</td>
              <td className="list text-center">
                {items.downtime.toDate().toLocaleString()}
              </td>
              <td className="list text-center">
                {items.order.toDate().toLocaleString()}
              </td>
              <td className="list text-center">{items.start_money}</td>
              <td className="list text-center">
                {items.method === "low" ? "최저값" : "블라인드"}
              </td>
              <td className="list text-center">{items.time}시간</td>
              <td className="list text-center text-purple">
                <button onClick={() => handleDelete(items.id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="page-center">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={dataList.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
          prevPageText="<"
          nextPageText=">"
          firstPageText="..."
          lastPageText="..."
        />
      </div>
    </div>
  );
};

export default List_table;
