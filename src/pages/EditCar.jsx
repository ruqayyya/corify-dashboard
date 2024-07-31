const EditCar = () => {
  return (
    <section className="editCar">
      <div className="container">
        <div className="row">
          <h2 className="title">Edit car's data</h2>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input type="text" name="name" />
                <label>Product Name</label>
              </div>
              <div className="user-box">
                <input type="text" name="details" />
                <label>Product Details</label>
              </div>
              <div className="user-box">
                <input type="text" name="price" />
                <label>Product Price</label>
              </div>
              <div className="user-box">
                <input type="file" name="productImage" id="cImg" />
                {/* <div className="previewImage">
                    <img src={preview} alt="old-img" />
                  </div> */}
                <div className="previewImage">
                  <img src="" alt="new-img" />
                </div>
              </div>
              <div className="btn">
                <button>
                  Edit product
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
