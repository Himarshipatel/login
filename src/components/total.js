// import React, { Component } from "react";
// import { connect } from "react-redux";

// class Total extends Component {
//   render() {
//      const { total } = this.props;
//     return <div>Total: {total}$</div>;
//   }
// }

// const mapStateToProps = (state) => ({
//   total: state.products.total,
// });

// export default connect(mapStateToProps)(Total);
import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state) => state.products.total);

  return <div className="total">Total : ${total}</div>;

  // const mapStateToProps = (state) => ({
  //   total: state.products.total,
  // });
};
export default Total;
