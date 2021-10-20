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
              label="Company Name"
              variant="standard"
              autoComplete="password"
              style={{ width: "100%" }}
            />
          </div>
          <div className="form-field">
            <TextField
              id="standard-basic"
              label="Your Name"
              variant="standard"
              autoComplete="password"
              style={{ width: "100%" }}
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="standard-basic"
              label="Your Email"
              required
              autoComplete="password"
              type="email"
              variant="standard"
              style={{ width: "100%" }}
            />
          </div>
          <div className="form-field">
            <TextField
              id="standard-basic"
              label="Your Phone Number"
              autoComplete="password"
              type="tel"
              variant="standard"
              style={{ width: "100%" }}
            />
          </div>

          <div className="form-field">
            <TextField
              className="form-field"
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={6}
             
              style={{ width: "100%", marginTop: "2rem" }}
            />
          </div>
          <button className="form-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
