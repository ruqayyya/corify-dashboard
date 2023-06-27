import { useState } from "react";

// Icons
import { FaTrash, FaEdit } from "react-icons/fa";

// Router
import { Link } from "react-router-dom";

const AllCars = () => {
  const [data, setData] = useState([]);

  return (
    <section className="allCars">
      <div className="container">
        <div className="row">
          <h2 className="title">All Cars List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Car Image</th>
                <th>Car Name</th>
                <th>Car Details</th>
                <th>Car Price</th>
                <th>Edit Car</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>1</td>
                  <td className="carImg">
                    <img src="" alt="" />
                  </td>
                  <td>Name</td>
                  <td>Details</td>
                  <td>$0</td>
                  <td className="edit">
                    <Link to={`/edit-car/carID`}>
                      <FaEdit />
                    </Link>
                    <FaTrash />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllCars;
