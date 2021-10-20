import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <div className="home_contact">
      Kyle CLutter
      <div className="home_contact-left"></div>
      <div className="home_contact-right">
        <div className="form">
            <h2>We Can Do This Together.</h2>
          <div className="form-field">
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              style={{width: '100%'}}
            />
          </div>
          <div className="form-field">
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              style={{width: '100%'}}
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              style={{width: '100%'}}
            />
          </div>
          <div className="form-field">
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              style={{width: '100%'}}
            />
          </div>
          <div className="form-field">
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              style={{width: '100%'}}
            />
          </div>

          <TextField
            className="form-field"
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            style={{width: '100%', marginTop: '2rem'}}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
