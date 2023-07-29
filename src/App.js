import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";

// // Your existing data and nithish arrays..

const apfPanelList=[
  {
    "profer_forment": 0,
    "added_by": "143620071466608200",
    "added_on": "2023-03-18 12:23:15",
    "added_user_name": "YVR",
    "bank": [
      { "bank_id": "5", "bank_name": "HDFC Bank" },
      { "bank_id": "7", "bank_name": "ICICI Bank" }
    ],
    "id": "",
    "panel_name": "Panel1",
    "panel_remark": "testing",
    "status": "Active"
  },
  {
    "profer_forment": 1,
    "added_by": "143620071466608200",
    "added_on": "2023-03-18 12:23:15",
    "added_user_name": "YVR",
    "bank": [
      { "bank_id": "5", "bank_name": "HDFC Bank" },
      { "bank_id": "7", "bank_name": "ICICI Bank" }
    ],
    "id": "1",
    "panel_name": "Panel2",
    "panel_remark": "testing",
    "status": "Active"
  },
  {
    "profer_forment": 2,
    "added_by": "143620071466608200",
    "added_on": "2023-03-18 12:23:15",
    "added_user_name": "YVR",
    "bank": [
      { "bank_id": "5", "bank_name": "HDFC Bank" },
      { "bank_id": "7", "bank_name": "ICICI Bank" }
    ],
    "id": "2",
    "panel_name": "Panel2",
    "panel_remark": "testing",
    "status": "Active"
  }
]
export default function App() {
  // ... Your existing code ...

  // State to keep track of selected panel IDs
  const [apfPanelIDs, setApfPanelIDs] = useState([]);

  // Function to handle checkbox change
  const apfCheckBoxChange = (value, isAll) => {
    console.log(value, isAll, "nithish");
    if (isAll) {
      if (value.length === apfPanelIDs.length) {
        setApfPanelIDs([]);
      } else {
        let _ids = [];
        value.forEach((item) => {
          _ids.push(item.id); // Assuming 'id' is the property that holds the panel ID
        });
        setApfPanelIDs(_ids);
      }
    } else {
      if (apfPanelIDs.includes(value.id)) {
        setApfPanelIDs(apfPanelIDs.filter((item) => item !== value.id));
      } else {
        setApfPanelIDs([...apfPanelIDs, value.id]);
      }
    }
  };

  return (
    <div>
      {/* ... Your existing code ... */}

      {/* Rendering the Checkbox */}
      
      <table>
                        <thead style={{ background: "aliceblue" }}>
                          <tr>
                            <th>Sl No</th>
                            <th>Panel</th>
                            <th>Bank</th>
                            <th>
                              <Checkbox
                                size="small"
                                checked={
                                  apfPanelIDs?.length == apfPanelList?.length
                                }
                                onChange={() =>
                                  apfCheckBoxChange(apfPanelList, true)
                                }
                              />
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {apfPanelList &&
                            apfPanelList.length > 0 &&
                            apfPanelList.map((item, index) => {
                              return (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{item?.panel_name}</td>
                                  {/* <td>{item?.bank?.join(', ')}</td> */}
                                  <td>
                                    {item?.bank
                                      ?.map((bank) => bank.bank_name)
                                      .join(", ")}
                                  </td>

                                  <td>
                                    <Checkbox
                                      size="small"
                                      // disabled={item.status_name == "Completed"}
                                      checked={apfPanelIDs.includes(item)}
                                      onChange={() => apfCheckBoxChange(item)}
                                    />
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
    </div>
  );
}
