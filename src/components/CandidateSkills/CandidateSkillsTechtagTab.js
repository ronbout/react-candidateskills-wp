/* CandidateSkillsTechtagTab.js */
import React, { useState, useEffect } from "react";
import SelectList from "components/SelectList/";
import { objCopy } from "assets/js/library";

const CandidateSkillsTechtagTab = props => {
	const [tagNdx, setTagNdx] = useState(0);
	const [tagList, setTagList] = useState(
		objCopy(props.candidateSkills.techtags || [])
	);
	const [skillList, setSkillList] = useState(
		tagList[tagNdx] ? tagList[tagNdx].skills : []
	);

	useEffect(() => {
		setTagList(objCopy(props.candidateSkills.techtags || []));
	}, [props.candidateSkills.techtags]);

	const handleTagSelect = ndx => {
		setTagNdx(ndx);
		setSkillList(tagList[ndx].skills);
	};

	const dataList = tagList.map(tag => {
		return { display: tag.name, hover: tag.description };
	});
	return (
		<div style={{ paddingTop: "24px" }}>
			{tagList.length ? (
				<div className="candidate-skill-tab-container">
					<div className="candidate-skill">
						<label>Selected Techtag:</label>
						<input type="text" disabled value={tagList[tagNdx].name} />
						<p>Double-click from list below to change Techtag</p>
						<SelectList dataList={dataList} handleRowSelect={handleTagSelect} />
					</div>
					<div className="candidate-skill-techtag">
						<p>Skills</p>
						<div>
							{skillList.map((skill, ndx) => {
								return <p key={ndx}>{skill.skillName}</p>;
							})}
						</div>
					</div>
				</div>
			) : (
				<h4>No Resume Techtag groups have been set up for this candidate</h4>
			)}
		</div>
	);
};

export default CandidateSkillsTechtagTab;
