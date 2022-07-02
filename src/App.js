import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <container>
      <div
        style={{
          backgroundColor: "#f6f4f4",
          margin: "200px",
          width: "1440px",
          height: "1024px",
        }}
      >
        <div
          className="title"
          style={{
            textAlign: "center",
            paddingTop: "173px",
            fontSize: "72px",
            color: "#000000",
          }}
        >
          <a> Decimal-To-Binary </a>
          <div
            className="subtitle"
            style={{
              textAlign: "center",
              paddingTop: "3px",
              fontSize: "25px",
              color: "#585858",
            }}
          >
            <a> App to convert decimal numbers to binary numbers </a>
          </div>
        </div>
        <div
          className="content"
          style={{ paddingTop: "93px", paddingLeft: "382px", fontSize: "40px" }}
        >
          <a> Decimal: </a>
        </div>
        <TextField
          variant="outlined"
          type="number"
          inputProps={{
            style: {
              width: "676px",
              height: "82px",
              borderRadius: "15px",
            },
          }}
          style={{ top: "20px", left: "382px" }}
        />
        <div
          className="content"
          style={{
            paddingTop: "30px",
            paddingLeft: "382px",
            fontSize: "40px",
          }}
        >
          <a> Binary: </a>
        </div>
        <TextField
          type="text"
          variant="outlined"
          inputProps={{
            readOnly: true,
            style: {
              width: "676px",
              height: "176px",
              borderRadius: "15px",
            },
          }}
          style={{
            top: "20px",
            left: "382px",
          }}
        />
        <Button
          variant="contained"
          style={{
            color: "white",
            backgroundColor: "#9F0000",
            borderRadius: "10px",
            width: "224px",
            height: "60px",
            fontSize: "30px",
            textTransform: "none",
            marginLeft: "627px",
            top: "40px",
          }}
        >
          Convert
        </Button>
        <Button
          variant="contained"
          style={{
            color: "white",
            backgroundColor: "#585858",
            borderRadius: "10px",
            width: "175px",
            height: "60px",
            fontSize: "30px",
            textTransform: "none",
            left: "30px",
            top: "40px",
          }}
        >
          Clear
        </Button>
      </div>
    </container>
  );
}

export default App;
