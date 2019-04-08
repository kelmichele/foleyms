import React from "react";
export default props => (
  <div>
    <legend>List</legend>
    <div className="card" style={{ width: "25rem" }}>
      {renderListItem(props.list, props.loadDetailsPage)}
    </div>
  </div>
);
function renderListItem(list, loadDetailsPage) {
  const listItems = list.map(item => (
    <li
      key={item.id}
      className="list-group-item"
      onClick={() => loadDetailsPage(item.id)}
    >
      {item.name}
    </li>
  ));
  return <ul className="list-group list-group-flush">{listItems}</ul>;
}