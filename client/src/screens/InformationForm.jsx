import React, { useEffect, useState } from "react";
import useScoreStore from "../zustand/scoreStore";
import { Slider, DropDown } from "../components";

const interestedSubjectsOption = [
  "programming",
  "Management",
  "data engineering",
  "networks",
  "Software Engineering",
  "cloud computing",
  "parallel computing",
  "IOT",
  "Computer Architecture",
  "hacking",
];
const interestBookTypeOptions = [
  "Series",
  "Autobiographies",
  "Travel",
  "Guide",
  "Health",
  "Journals",
  "Anthology",
  "Dictionaries",
  "Prayer books",
  "Art",
  "Encyclopedias",
  "Religion-Spirituality",
  "Action and Adventure",
  "Comics",
  "Horror",
  "Satire",
  "Self help",
  "History",
  "Cookbooks",
  "Math",
  "Biographies",
  "Drama",
  "Diaries",
  "Science fiction",
  "Poetry",
  "Romance",
  "Science",
  "Trilogy",
  "Fantasy",
  "Childrens",
  "Mystery",
];
const certificationOptions = [
  "information security",
  "shell programming",
  "r programming",
  "distro making",
  "machine learning",
  "full stack",
  "hadoop",
  "app development",
  "python",
];
const workShopOptions = [
  "Testing",
  "database security",
  "game development",
  "data science",
  "system designing",
  "hacking",
  "cloud computing",
  "web technologies",
];
const companyToSettleOptions = [
  "BPA",
  "Cloud Services",
  "product development",
  "Testing and Maintainance Services",
  "SAaS services",
  "Web Services",
  "Finance",
  "Sales and Marketing",
  "Product based",
  "Service Based",
];
const interestedCareerOptions = [
  "testing",
  "system developer",
  "Business process analyst",
  "security",
  "developer",
  "cloud computing",
];

function InformationForm() {
  const {
    aptitudeScore,
    codingScore,
    writingScore,
    memoryScore,
    certificationCategory,
  } = useScoreStore();
  console.log(writingScore);
  const [numHackathons, setNumHackathons] = useState(0);
  const [publicSpeakingPoints, setPublicSpeakingPoints] = useState(0);
  const [learningCapability, setLearningCapability] = useState(0);
  const [extraCourse, setExtraCourses] = useState(0);
  const inputsFromSenior = 0;
  const [workedInTeams, setWorkedInTeams] = useState(0);
  const introvert = 0;
  const [readWritingSkills, setReadingWritingSkills] = useState(0);
  const [memoryCapabilityScore, setMemoryCapabilityScore] = useState(0);
  const b_hard_worker = 0;
  const b_smart_worker = 1;
  const [isTechnical, setIsTechnical] = useState(0);
  const [interestedSubject, setInterestedSubject] = useState(0);
  const [interestedBookType, setInterestedBookType] = useState(0);
  const [certificationCode, setCertificationCode] = useState(0);
  const [workShopCode, setWorkShopCode] = useState(0);
  const [companyToSettle, setCompanyToSettle] = useState(0);
  const [interestedCareer, setInterestedCareer] = useState(0);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    console.log(
      "certificationCategory: ",
      certificationOptions.indexOf(certificationCategory)
    );
    setCertificationCode(certificationOptions.indexOf(certificationCategory));
  });

  const mapScore = (score) => {
    if (score >= 0 && score <= 3) return [0, "Poor"];
    else if (score <= 6) return [1, "Medium"];
    else return [2, "Excellent"];
  };

  const handlePredict = async () => {
    const data = {
      "Logical quotient rating": aptitudeScore,
      "coding skills rating": codingScore,
      hackathons: numHackathons,
      "public speaking points": publicSpeakingPoints,
      "self-learning capability?": learningCapability,
      "Extra-courses did": extraCourse,
      "Taken inputs from seniors or elders": inputsFromSenior,
      "worked in teams ever?": workedInTeams,
      Introvert: introvert,
      "reading and writing skills": mapScore(writingScore)[0],
      "memory capability score": mapScore(memoryScore)[0],
      "B_hard worker": b_hard_worker,
      "B_smart worker": b_smart_worker,
      A_Management: !isTechnical,
      A_Technical: isTechnical,
      "Interested subjects_code": interestedSubject,
      "Interested Type of Books_code": interestedBookType,
      certifications_code: certificationCode,
      workshops_code: workShopCode,
      "Type of company want to settle in?_code": companyToSettle,
      "interested career area _code": interestedCareer,
    };

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    const resJson = await response.json();
    setPrediction(resJson.prediction);
  };

  return (
    <div className="h-full w-full">
      <p className="text-start mb-2">{`Aptitude Score: ${aptitudeScore}`}</p>
      <p className="text-start mb-2">{`Coding Score: ${codingScore}`}</p>
      <p className="text-start mb-2">{`Writing Score: ${
        mapScore(writingScore)[1]
      }`}</p>
      <p className="text-start mb-2">{`Memory Score: ${
        mapScore(memoryScore)[1]
      }`}</p>
      <p className="text-start mb-2">{`Certification: ${certificationCategory}`}</p>
      <Slider
        className=" mb-3 "
        min={0}
        max={10}
        value={numHackathons}
        setValue={setNumHackathons}
        label={"Enter number of Hackathons participated"}
      />

      <Slider
        className=" mb-3 "
        min={0}
        max={10}
        value={publicSpeakingPoints}
        setValue={setPublicSpeakingPoints}
        label={"Rate Your Public Speaking"}
      />

      <DropDown
        label="Self Learning Capability"
        value={learningCapability}
        setValue={setLearningCapability}
        options={["No", "Yes"]}
      />
      <DropDown
        label="Extra courses"
        value={extraCourse}
        setValue={setExtraCourses}
        options={["No", "Yes"]}
      />
      <DropDown
        label="Team Co-ordination Skill"
        value={workedInTeams}
        setValue={setWorkedInTeams}
        options={["No", "Yes"]}
      />
      {/* <DropDown label="Reading and writing skills" value={readWritingSkills} setValue={setReadingWritingSkills} options={["Poor", "Medium", "Excellent"]} /> */}
      {/* <DropDown
        label="Memory capability score"
        value={memoryCapabilityScore}
        setValue={setMemoryCapabilityScore}
        options={["Poor", "Medium", "Excellent"]}
      /> */}
      <DropDown
        label="Management or Techinical"
        value={isTechnical}
        setValue={setIsTechnical}
        options={["Management", "Technical"]}
      />
      <DropDown
        label="Interested Subjects"
        value={interestedSubject}
        setValue={setInterestedSubject}
        options={interestedSubjectsOption}
      />
      <DropDown
        label="Interested Books Category"
        value={interestedBookType}
        setValue={setInterestedBookType}
        options={interestBookTypeOptions}
      />
      {/* <DropDown
        label="Certification"
        value={certificationCode}
        setValue={setCertificationCode}
        options={certificationOptions}
      /> */}
      <DropDown
        label="Workshop Attended"
        value={workShopCode}
        setValue={setWorkShopCode}
        options={workShopOptions}
      />
      <DropDown
        label="Type of Company You Want to Settle In"
        value={companyToSettle}
        setValue={setCompanyToSettle}
        options={companyToSettleOptions}
      />
      <DropDown
        label="Interested Career Area"
        value={interestedCareer}
        setValue={setInterestedCareer}
        options={interestedCareerOptions}
      />

      <button
        onClick={handlePredict}
        className="w-full border-sky-400 border hover:bg-sky-200 rounded-md p-2"
      >
        Predict
      </button>
      {prediction && (
        <div className="w-full bg-green-400/10 p-2 my-5">
          Prediction: {prediction}
        </div>
      )}
    </div>
  );
}

export default InformationForm;
