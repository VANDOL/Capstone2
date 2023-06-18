import React, { useState, useEffect } from "react";
import "./user_table.css";
import db from "../firebase";
import Pagination from "react-js-pagination";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const User_table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [dataList, setDataList] = useState([]);

  const fetchData = async () => {
    const firestore = getFirestore(db);
    const testCollection = collection(firestore, "Users");
    const data = await getDocs(testCollection);

    const items = [];
    data.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    setDataList(items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataList.slice(indexOfFirstItem, indexOfLastItem);
  // 페이지 변경
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = async (checked, id) => {
    const valueToSave = checked ? 0 : 1;

    // Firestore의 'items' 컬렉션에서 해당 문서의 'adminvalue' 필드를 업데이트
    const firestore = getFirestore(db);
    const userDocRef = doc(firestore, "Users", id);

    try {
      await updateDoc(userDocRef, { adminvalue: valueToSave });
      console.log(userDocRef);

      setDataList((prevDataList) =>
        prevDataList.map((item) =>
          item.id === id ? { ...item, adminvalue: valueToSave } : item
        )
      );
    } catch (error) {
      console.error("값 업데이트 중 오류가 발생했습니다:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmed) {
      return;
    }

    const firestore = getFirestore(db);
    const userDocRef = doc(firestore, "Users", id);

    try {
      await deleteDoc(userDocRef);
      console.log("문서가 성공적으로 삭제되었습니다.");

      setDataList((prevDataList) =>
        prevDataList.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("문서 삭제 중 오류가 발생했습니다:", error);
    }
  };

  function Checkbox({ items, disabled }) {
    return (
      <label>
        <input
          type="checkbox"
          disabled={false}
          checked={items.adminvalue === 0}
          onChange={({ target: { checked } }) =>
            handleChange(checked, items.id)
          }
        />
      </label>
    );
  }

  return (
    <div className="container">
      <div className="text-xl">사용자들</div>
      <table className="table-user">
        <thead className="justify-between">
          <tr className="gray">
            <th className="table-top user-name">이름</th>
            <th className="table-top user-nick">닉네임</th>
            <th className="table-top user-id">아이디</th>
            <th className="table-top user-birth">생년월일</th>
            <th className="table-top user-address">주소</th>
            <th className="table-top user-time">전화번호</th>
            <th className="table-top user-price">금액</th>
            <th className="table-top user-order">가입 날짜</th>
            <th className="table-top user-check">관리자</th>
            <th className="table-top user-delete">삭제</th>
          </tr>
        </thead>
        <tbody className="justify-between">
          {currentItems.map((items) => (
            <tr className="list-border" key={items.id}>
              <td className="list text-center">{items.name}</td>
              <td className="list text-center">{items.nickname}</td>
              <td className="list text-center">{items.email}</td>
              <td className="list text-center">{items.birthdate}</td>
              <td className="list text-center">{items.address}</td>
              <td className="list text-center">{items.phonenumber}</td>
              <td className="list text-center">{items.cash}</td>
              <td className="list text-center">
                {items.order.toDate().toLocaleString()}
              </td>
              <td className="list text-center">
                <Checkbox items={items} />
              </td>
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
          itemsCountPerPage={itemsPerPage} // 한 페이지랑 보여줄 아이템 갯수
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

export default User_table;
