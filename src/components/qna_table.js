import React, { useState, useEffect } from "react";
import "./qna_table.css";
import db from "../firebase";
import Pagination from "react-js-pagination";
import {
  collection,
  getDocs,
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Email from "./email_send";
import Modal from "./Modal";

const Mun_table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [dataList, setDataList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedName, setSelectedName] = useState(null);

  const fetchData = async () => {
    const firestore = getFirestore(db);
    const testCollection = collection(firestore, "QnA");
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

  const handleDelete = async (id) => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmed) {
      return;
    }

    const firestore = getFirestore(db);
    const userDocRef = doc(firestore, "QnA", id);

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

  const openModal = (email, name) => {
    setSelectedName(name);
    setSelectedEmail(email);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedName(null);
    setSelectedEmail(null);
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="text-xl">문의 내역</div>
      <table className="table-qna">
        <thead className="justify-between">
          <tr className="gray">
            <th className="table-top qna-id">아이디</th>
            <th className="table-top qna-name">이름</th>
            <th className="table-top qna-title">문의 이름</th>
            <th className="table-top qna-de">문의 내용</th>
            <th className="table-top qna-time">올린 날짜</th>
            <th className="table-top delte">답변</th>
            <th className="table-top delete">삭제</th>
          </tr>
        </thead>
        <tbody className="justify-between">
          {currentItems.map((items) => (
            <tr className="list-border">
              <td className="list text-center qna-id">{items.email}</td>
              <td className="list text-center qna-name">{items.name}</td>
              <td className="list text-center qna-title">{items.qnatitle}</td>
              <td className="list text-center qna-de">
                {items.qnadescription}
              </td>
              <td className="list text-center qna-time">
                {items.QnA_Time.toDate().toLocaleString()}
              </td>
              <td className="list text-center">
                <button onClick={() => openModal(items.email, items.name)}>
                  답변
                </button>
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
      {showModal && (
        <Modal closeModal={closeModal}>
          <Email
            user_email={selectedEmail}
            user_name={selectedName}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Mun_table;
