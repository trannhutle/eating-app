import React, { Component } from "react";
import Detail from "../foods/Detail";
import Layout from "../layouts/Layout";

function FoodDetail(props) {
  console.log("render is called");
  return (
    <Layout>
      <Detail />
    </Layout>
  );
}
export default FoodDetail;
