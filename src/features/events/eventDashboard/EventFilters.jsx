import React from "react";
import { Calendar } from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function EventFilters() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="All Events" />
        <Menu.Item content="Im Going" />
        <Menu.Item content="All Hosting" />
      </Menu>
      <Header icon="calender" attached color="teal" content="Select Date" />
      <Calendar />
    </>
  );
}
