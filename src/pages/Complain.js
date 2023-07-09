import React from "react";
import { useParams } from "react-router-dom";
import ComplainsCard from "../components/complains/complainsCard/ComplainsCard";
import Filter from "../components/complains/filter/Filter";
import Table from "../components/complains/table/Table";
const Complain = ({ data }) => {
  const { id } = useParams();
  const updatedData = data.filter((item) => item.id === parseInt(id));

  return (
    <div className="container py-5">
      <ComplainsCard data={updatedData[0].complainNumber} />
      <Filter />
      <Table data={data[0].details} />
    </div>
  );
};

export default Complain;
