import React, { useState } from "react";

import AddBatbatchesches from "./AddBatches";
import AddCourses from "./AddCourses";
import VeiwCourses from "./VeiwCourses";
import Contacts from "./Contacts";
import ViewBatches from "./ViewBatches";
import Nopage from "./Nopage";

const Admindasboard = () => {
  const [view, setview] = useState("");

  const Dashboardview = () => {
    if (view === "") {
      return <Nopage />;
    }

   else if (view === "viewBatches") {
      return <ViewBatches />;
    }

    else if (view === "AddBatches") {
      return <AddBatbatchesches />;
    }

    else if (view === "Addcourses") {
      return <AddCourses />;
    }
    else if (view === "ViewCourses") {
      return <VeiwCourses />;
    }
    else if (view === "Contacts") {
      return <Contacts />;
    }
  };
  return (
    <div>
      <div className="row">
        <aside className="col-12 col-xl-3 py-5">
          <h2 className="header">Admin Dashboard</h2>
          <button
            onClick={() => setview("AddBatches")}
            className="border-primary rounded-4"
          >
            AddBatches
          </button>
          <button
            onClick={() => setview("viewBatches")}
            className="border-primary rounded-4"
          >
            view Batches
          </button>
          <button
            onClick={() => setview("Addcourses")}
            className="border-primary rounded-4"
          >
            AddCourses
          </button>
          <button
            onClick={() => setview("ViewCourses")}
            className="border-primary rounded-4"
          >
            ViewCourses
          </button>
          <button
            onClick={() => setview("Contacts")}
            className="border-primary rounded-4"
          >
            Contacts
          </button>
        </aside>
        <div className="col-12 col-xl-9 kiran">{Dashboardview()}</div>
      </div>
    </div>
  );
};

export default Admindasboard;
