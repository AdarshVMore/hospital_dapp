import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./admin.css";
import EachDocApplication from "../eachDocApplication/EachDocApplication";

function AdminHome() {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [heading, setHeading] = useState("");
  const [urlIndex, setUrlIndex] = useState("");
  const [data, setData] = useState([
    {
      name: "Jhony",
      time: "2023-04-19 10:30",
      state: "new",
    },
    {
      name: "Bob",
      time: "2023-04-20 14:45 ",
      state: "new",
    },
    {
      name: "Charlie",
      time: "2023-04-18 08:15 ",
      state: "verified",
    },
    {
      name: "David",
      time: "2023-04-21 16:00 ",
      state: "new",
    },
    {
      name: "Eve",
      time: "2023-04-17 19:20 ",
      state: "under verification",
    },
    {
      name: "Bob",
      time: "2023-04-20 14:45 ",
      state: "rejected",
    },
    {
      name: "Charlie",
      time: "2023-04-18 08:15 ",
      state: "verified",
    },
  ]);

  useEffect(() => {
    if (selectedBtn === 0) {
      setHeading("All Applications");
    }
    if (selectedBtn === 1) {
      setHeading("New Applications");
    }
    if (selectedBtn === 2) {
      setHeading("Under Applications");
    }
    if (selectedBtn === 3) {
      setHeading("Verified Applications");
    }
    if (selectedBtn === 4) {
      setHeading("Rejected Applications");
    }

    // remove the "selected" class from all buttons except the clicked one
    const buttons = document.querySelectorAll(".btns button");
    buttons.forEach((button, index) => {
      if (index !== selectedBtn) {
        button.classList.remove("selected");
      }
    });
  }, [selectedBtn]);

  return (
    <div className="admin">
      <Routes>
        <Route
          path={`/Doc${urlIndex}`}
          element={<EachDocApplication data={data[urlIndex]} />}
        />
        <Route
          path=""
          element={
            <>
              <div className="btns">
                <button
                  id={`${selectedBtn === 0 ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedBtn(0);
                  }}
                >
                  All
                </button>
                <button
                  id={`${selectedBtn === 1 ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedBtn(1);
                  }}
                >
                  New Applications
                </button>
                <button
                  id={`${selectedBtn === 2 ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedBtn(2);
                  }}
                >
                  UnderVerification
                </button>
                <button
                  id={`${selectedBtn === 3 ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedBtn(3);
                  }}
                >
                  Verified
                </button>
                <button
                  id={`${selectedBtn === 4 ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedBtn(4);
                  }}
                >
                  Rejected
                </button>
              </div>
              <div className="listOfApplicants">
                <div className="top">
                  <p className="heading">{heading}</p>
                  <div className="colors">
                    <div
                      className="c new"
                      onClick={() => {
                        setSelectedBtn(0);
                      }}
                    ></div>
                    <div
                      className="c under-verification"
                      onClick={() => {
                        setSelectedBtn(2);
                      }}
                    ></div>
                    <div
                      className="c verified"
                      onClick={() => {
                        setSelectedBtn(3);
                      }}
                    ></div>
                    <div
                      className="c rejected"
                      onClick={() => {
                        setSelectedBtn(4);
                      }}
                    ></div>
                  </div>
                </div>

                <div className="allList">
                  {selectedBtn === 0 &&
                    data.map((item, index) => (
                      <Link
                        to={`/admin/Doc${index}`}
                        onClick={() => setUrlIndex(index)}
                      >
                        <div className="eachList" key={index}>
                          <div className="docName">
                            Dr. {selectedBtn === 0 ? item.name : ""}
                          </div>
                          <div className="right">
                            <div className="timeDate">
                              {item.time.toString()}
                            </div>
                            {item.state === "new" ? (
                              <div className="c new"></div>
                            ) : (
                              ""
                            )}
                            {item.state === "under verification" ? (
                              <div className="c under-verification"></div>
                            ) : (
                              ""
                            )}
                            {item.state === "verified" ? (
                              <div className="c verified"></div>
                            ) : (
                              ""
                            )}
                            {item.state === "rejected" ? (
                              <div className="c rejected"></div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  {selectedBtn === 1 && (
                    <div>
                      {data
                        // .filter((item) => item.state === "new")
                        .map((item, index) => {
                          if (item.state === "new") {
                            return (
                              <Link
                                to={`/admin/Doc${index}`}
                                onClick={() => setUrlIndex(index)}
                              >
                                <div className="eachList" key={index}>
                                  <div className="docName">Dr. {item.name}</div>
                                  <div className="right">
                                    <div className="timeDate">
                                      {item.time.toString()}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          }
                        })}
                    </div>
                  )}
                  {selectedBtn === 2 && (
                    <div>
                      {data
                        // .filter((item) => item.state === "under verification")
                        .map((item, index) => {
                          if (item.state === "under verification") {
                            return (
                              <Link
                                to={`/admin/Doc${index}`}
                                onClick={() => setUrlIndex(index)}
                              >
                                <div className="eachList" key={index}>
                                  <div className="docName">Dr. {item.name}</div>
                                  <div className="right">
                                    <div className="timeDate">
                                      {item.time.toString()}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          }
                        })}
                    </div>
                  )}
                  {selectedBtn === 3 && (
                    <div>
                      {data.map((item, index) => {
                        if (item.state === "verified") {
                          return (
                            <Link
                              to={`/admin/Doc${index}`}
                              onClick={() => setUrlIndex(index)}
                            >
                              <div className="eachList" key={index}>
                                <div className="docName">Dr. {item.name}</div>
                                <div className="right">
                                  <div className="timeDate">
                                    {item.time.toString()}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        }
                      })}
                    </div>
                  )}
                  {selectedBtn === 4 && (
                    <div>
                      {data.map((item, index) => {
                        if (item.state === "rejected") {
                          return (
                            <Link
                              to={`/admin/Doc${index}`}
                              onClick={() => setUrlIndex(index)}
                            >
                              <div className="eachList" key={index}>
                                <div className="docName">Dr. {item.name}</div>
                                <div className="right">
                                  <div className="timeDate">
                                    {item.time.toString()}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        }
                      })}
                    </div>
                  )}
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default AdminHome;
