import React, { useState } from "react";
import "../CSS/Role-Management.scss";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const RoleManagement = () => {
  const id = localStorage.getItem("superAdminId");

  const addRoleRequest = async () => {
    try {
      const response = await axios.post(
        `http://174.138.101.222:8080/${id}/roll-creation`,
        roles
      );
      console.log(response);
      alert(response.request.statusText);
    } catch (error) {
      console.log(error);
    }
  };

  let initialRoles = {
    userId: id,
    role_name: "",
    Upload_E_Paper: false,
    View_E_Paper: false,
    Publish_E_Paper: false,
    Edit_E_Paper: false,
    View_Published_E_Paper: false,
    Create_New_Post: false,
    View_Draft_Posts: false,
    Approve_News: false,
    Scheduled_News: false,
    View_Published_News: false,
    Edit_Published_News: false,
    Place_New_Ad: false,
    View_Already_Palaced_Ads: false,
    Edit_Already_Palaced_Ads: false,
    News_Paper_Registration: false,
    View_Registered_News_Papers: false,
    Edit_Registered_News_Papers: false,
    Template_Assign: false,
    Template_Settings_changes_Assigned: false,
    Template_assigned_view_Current_config: false,
    Template_assigned_Edit: false,
    Self_User_Creation: false,
    Self_User_Edit: false,
    Self_User_View: false,
    Self_User_Custom_Rights_assign: false,
    News_Paper_User_Creation: false,
    News_Paper_User_Edit: false,
    News_Paper_User_View: false,
    News_Paper_User_Custom_Rights_assign: false,
    Meta_Parameters_for_categories: false,
    RSS_Feed_Generation: false,
    Site_Map_Generation: false,
    Reports: false,
    Analytics: false,
    Social_Media: false,
    Revenue_Input_for_each_partner: false,
    Final_revenue_after_calculation: false,
    View_Update: false,
  };

  const [roles, setRoles] = useState(initialRoles);
  // const roleKeys = Object.keys(initialRoles);

  const handleChange = (e) => {
    if (e.target.type === "text") {
      setRoles({ ...roles, [e.target.name]: e.target.value });
    } else {
      setRoles({ ...roles, [e.target.name]: e.target.checked });
    }
  };
  // console.log(roles);

  return (
    <div className="RoleManagement">
      <h5>Role Management</h5>
      <div className="mid-container">
        <div className="input1">
          <h6>Role Name*</h6>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            name="role_name"
            value={roles.role_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Menu</th>
              <th>Permission</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <p>E-Paper</p>
            </tr>
            <tr>
              <td>Upload E-Paper</td>
              <td>
                <input
                  type="checkBox"
                  // checked={roles.Upload_E_Paper}
                  name="Upload_E_Paper"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>View E-Paper</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="View_E_Paper"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Publish E-Paper</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Publish_E_Paper"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Edit E-Paper</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Edit_E_Paper"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>View Published E-Paper</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="View_Published_E_Paper"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <p>News Management</p>
            </tr>
            <tr>
              <td>Create New Post</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Create_New_Post"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>View Draft Posts</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="View_Draft_Posts"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Approve News</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Approve_News"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Scheduled News</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Scheduled_News"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>View (Published News)</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="View_Published_News"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Edit (Published News)</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Edit_Published_News"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <p>Ads Management</p>
            </tr>
            <tr>
              <td>Place New Ad</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Place_New_Ad"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>View Already Placed Ads</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="View_Already_Palaced_Ads"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Edit Already Placed Ads</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Edit_Already_Palaced_Ads"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <p>News Paper Management</p>
            </tr>
            <tr>
              <td>News Paper Registration</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="News_Paper_Registration"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>View Registered News Papers</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="View_Registered_News_Papers"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Edit Registered News Papers</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Edit_Registered_News_Papers"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <p>Template Management</p>
            </tr>
            <tr>
              <td>Template Assign (First time Config for News Paper)</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Template_Assign"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Template Settings Changes</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Template_Settings_changes_Assigned"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Template Assigned View Current Config</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Template_assigned_view_Current_config"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Template Assigned Edit</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Template_assigned_Edit"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <p>User Management</p>
            </tr>
            <tr>
              <td>Self User Creation</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Self_User_Creation"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Self User Edit</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Self_User_Edit"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Self User View</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Self_User_View"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Self User Custom Rights Assign</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Self_User_Custom_Rights_assign"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>News Paper User Creation</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="News_Paper_User_Creation"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>News Paper User Edit</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="News_Paper_User_Edit"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>News Paper User View</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="News_Paper_User_View"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>News Paper User Custom Rights Assign</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="News_Paper_User_Custom_Rights_assign"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <p>SEO</p>
            </tr>
            <tr>
              <td>Meta Parameters for categories</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Meta_Parameters_for_categories"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>RSS Feed Generation</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="RSS_Feed_Generation"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Site Map Generation</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Site_Map_Generation"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Reports</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Reports"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Analytics"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Social Media</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Social_Media"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <p>Revenue Calculator</p>
            </tr>
            <tr>
              <td>Revenue Input for each partner</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Revenue_Input_for_each_partner"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Final Revenue after calculation</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="Final_revenue_after_calculation"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <p>User Profile</p>
            </tr>
            <tr>
              <td>View/Update</td>
              <td>
                <input
                  type="checkBox"
                  // checked={false}
                  name="View_Update"
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/* <But>Add Role</But> */}
        <Button
          onClick={addRoleRequest}
          variant="contained"
          className="d-block mx-auto mt-3"
        >
          Add Role
        </Button>
      </div>
    </div>
  );
};

export default RoleManagement;
