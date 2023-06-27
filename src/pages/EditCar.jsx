import { useState } from "react";

const EditCar = () => {
  // Local states
  const [preview, setPreview] = useState("");

  return (
    <section className="editCar">
      <div className="container">
        <div className="row">
          <h2 className="title">Edit car's data</h2>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input type="text" name="name" />
                <label>Car Name</label>
              </div>
              <div className="user-box">
                <input type="text" name="details" />
                <label>Car Details</label>
              </div>
              <div className="user-box">
                <input type="text" name="price" />
                <label>Car Price</label>
              </div>
              <div className="user-box">
                <input type="file" name="productImage" id="cImg" />
                {preview && (
                  <div className="previewImage">
                    <img src={preview} alt="uploaded-img" />
                  </div>
                )}
              </div>
              <div className="btn">
                <button>
                  Edit car
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditCar;

/*
  const base64 = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setPreview(reader.result);
    };
    reader.onerror = function (error) {
      console.log(error);
    };
  };
*/
