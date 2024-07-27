import base_url from "./bootapi";
import axios from "axios";
import { toast } from "react-toastify";

// fetching data from server
const getAllCoursesFromServer = (courses, setCourses) => {
  axios.get(`${base_url}/courses`).then(
    (response) => {
      toast.success("Courses has been loaded", { position: "bottom-center" });
      let data = response.data;
      setCourses((curr) => [...curr, ...data]);
    },
    (error) => {
      console.log(error);
      toast.error("Server down", { position: "bottom-center" });
    }
  );
};

// adding data to server
const postDataToServer = (data) => {
  axios
    .post(`${base_url}/add`, data)
    .then((response) => {
      toast.success("Courses has been added successfully!!", {
        position: "bottom-center",
      });
      console.log(response);
      console.log("data added successfully");
    })
    .catch((error) => {
      toast.error("Something went wrong!!", { position: "bottom-center" });
      console.log(error);
      console.log("Something went wrong!!");
    });
};

// deleting data at server
const deleteDataFromServer = (id, updateCourses) => {
  axios
    .delete(`${base_url}/delete/${id}`)
    .then((response) => {
      console.log(response);
      console.log("data removed successfully");
      updateCourses(id);
    })
    .catch((error) => {
      console.log(error);
      console.log("Something went wrong");
    });
};

export { getAllCoursesFromServer, postDataToServer, deleteDataFromServer };
