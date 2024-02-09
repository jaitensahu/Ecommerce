import React from "react";
import prod from "../JSONdata/pro.json";

const ProductSpecification = () => {
  return (
    <div className={`tab-content h-[50vh] overflow-hidden`} id="ex1-content">
      <div
        className="tab-pane fade show active"
        id="ex1-pills-1"
        role="tabpanel"
        aria-labelledby="ex1-tab-1"
      >
        <table className="table border mt-3 mb-2">
          <tbody>
            {prod.product.specifications.map((ele, idx) => {
              return (
                <tr key={"abz" + idx}>
                  <th className="py-2">{ele.name}:</th>
                  <td className="py-2">{ele.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSpecification;
