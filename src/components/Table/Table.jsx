import React from "react";
import { Table, Divider } from "antd";
import { useDispatch } from "react-redux";
import { buferRequest } from "../../redux/reducers/index";

const columns = [
  {
    title: "Номер заявки",
    dataIndex: "requestNumber",
    key: "requestNumber",
  },
  {
    title: "Координаты ОТ lat",
    dataIndex: "coordinatesFromLat",
    key: "coordinatesFromLat",
  },
  {
    title: "Координаты ОТ lng",
    dataIndex: "coordinatesFromLng",
    key: "coordinatesFromLng",
  },
  {
    title: "Координаты ДО lat",
    key: "coordinatesToLat",
    dataIndex: "coordinatesToLat",
  },
  {
    title: "Координаты ДО lng",
    key: "coordinatesToLng",
    dataIndex: "coordinatesToLng",
  },
];

const TebleMap = ({ arrRequest }) => {
  const dispatch = useDispatch();
  const rowSelection = {
    onChange: (selectedRows) => {
      dispatch(buferRequest(selectedRows[0]));
    },
  };

  return (
    <>
      <Divider />
      <Table
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={arrRequest}
      />
    </>
  );
};
export default TebleMap;
