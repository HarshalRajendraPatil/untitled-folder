import "./Home.Module.css";

function Home() {
  return (
    <div className="home">
      <div className="homebg"></div>
      <h1 className="heading-primary">Explore the trend!</h1>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="fileInput">Choose a file:</label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            accept=".jpg, .jpeg, .png"
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectOption">Select an Category:</label>
          <select id="selectOption" name="selectOption">
            <option value="option1">Maths</option>
            <option value="option2">Physics</option>
            <option value="option3">Chemistry</option>
          </select>
        </div>

        <button type="button">Upload</button>
      </div>
    </div>
  );
}

export default Home;
