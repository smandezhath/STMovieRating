import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleClick = (e) => {
    console.log(title, description, image);
    const formData = new FormData();
    formData.append('title',title);
    formData.append('description',description);
    formData.append('image','')
    axios
      .post("http://localhost:5000/api/services", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="form-horizontal">
        <fieldset>
          <h1>Add Movie</h1>
          <div className="form-group">
            <label className="col-md-4 control-label" for="title">
              Title
            </label>
            <div className="col-md-4">
              <input
                id="title"
                name="title"
                placeholder="Title of the movie"
                className="form-control input-md"
                required=""
                type="text"
                value={title}
                onChange={handleChangeTitle}
              />
            </div>
          </div>

          <div class="form-group">
            <label className="col-md-4 control-label" for="description">
              Product Description
            </label>
            <div className="col-md-4">
              <textarea
                className="form-control"
                id="description"
                name="description"
                placeholder="Movie Description"
                value={description}
                onChange={handleChangeDescription}
              ></textarea>
            </div>
          </div>

          {/* <div className="form-group">
            <label className="col-md-4 control-label" for="crew">
              Crew
            </label>
            <div className="col-md-4">
              <input
                id="product_id"
                name="crewMembers"
                placeholder="Enter crew members separated by comma"
                className="form-control input-md"
                required=""
                type="text"
              />
            </div>
          </div> */}

          <div className="form-group">
            <label className="col-md-4 control-label" for="image">
              Movie Image
            </label>
            <div className="col-md-4">
              <input
                id="image"
                name="image"
                className="input-file"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-4">
              <button className="btn btn-primary" onClick={handleClick}>
                Add Movie
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AddMovie;
