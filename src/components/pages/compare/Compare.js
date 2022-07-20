import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsXLg } from "react-icons/bs";
import { clear, removeCompare } from "../../store/compareSlice";
const Compare = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.compare.compareItems);
  const handleRemove = (pid) => {
    dispatch(removeCompare(pid));
  };
  return (
    <div>
      <div className="bg-dark bg-gradient py-5 mb-5">
        <h1 className="text-uppercase text-white">
          <BsArrowLeft
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />{" "}
          Compare{" "}
        </h1>
      </div>
      <Container>
        {data.length > 0 ? (
          <div>
            <div className="d-flex justify-content-between mb-5">
              <div className="d-flex align-items-center">
                <Button
                  className="shadow-none ps-0 border-0 bg-transparent text-dark"
                  onClick={() => navigate("/")}
                >
                  home
                </Button>{" "}
                /
                <Button
                  className="shadow-none border-0 bg-transparent text-dark"
                  onClick={() => navigate("/compare")}
                >
                  compare
                </Button>
              </div>
              <Button
            style={{borderRadius:"15px"}}    className="shadow-none border-0 bg-dark px-3 py-2"
                onClick={() => dispatch(clear())}
              >
                Clear
              </Button>
            </div>
            <Table>
              <tbody>
                <tr>
                  <th className="border-1 p-2 border-end text-start">Image</th>
                  {data.map((item) => (
                    <td key={item.id} className="border-1 p-2 border-start">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "100px" }}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="border-1 p-2 border-end text-start">Name</th>
                  {data.map((item) => (
                    <td
                      key={item.id}
                      className="border-1 p-2 border-start text-start"
                    >
                      {item.title}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="border-1 p-2 border-end text-start">
                    Description
                  </th>
                  {data.map((item) => (
                    <td
                      key={item.id}
                      className="border-1 p-2 border-start text-start"
                    >
                      {item.description}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="border-1 p-2 border-end text-start">Rating</th>
                  {data.map((item) => (
                    <td
                      key={item.id}
                      className="border-1 p-2 border-start text-start"
                    >
                      {item.rating.count}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="border-1 p-2 border-end text-start">Price</th>
                  {data.map((item) => (
                    <td
                      key={item.id}
                      className="border-1 p-2 border-start text-start"
                    >
                      {item.price}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="border-1 p-2 border-end text-start">Remove</th>
                  {data.map((item) => (
                    <td
                      key={item.id}
                      className="border-1 p-2 border-start text-start"
                    >
                      <Button
                        className="shadow-none bg-transparent text-dark border-0"
                        onClick={() => handleRemove(item.id)}
                      >
                        <BsXLg />
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </div>
        ) : (
          <div>
            <h3>Empty Compare List</h3>
            <Button
              className="shadow-none border-0 bg-dark rounded-0 mt-2"
              onClick={() => navigate("/shop")}
            >
              Go To Shop
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Compare;
