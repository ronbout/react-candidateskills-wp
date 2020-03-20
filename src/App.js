import React, { Component } from "react";

import "./css/styles.css";
import "./css/app.css";

import CandidateSkills from "components/CandidateSkills/";

// setup global api url
// will be coming from wp react page
// through window.apiLoc

const API_HOST = window.apiLoc === "local" ? "localhost" : "13.90.143.153";

window.imgLoc = `http://${API_HOST}/3sixd/imgs/`;
window.apiUrl = `http://${API_HOST}/3sixd/api/`;
window.resumeUrl = `http://${API_HOST}/3sixd/resume-build/resume-pdf.php`;
class App extends Component {
	render() {
		return <CandidateSkills />;
	}
}

export default App;
