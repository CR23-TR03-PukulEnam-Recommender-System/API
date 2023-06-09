import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';


const Register = () => {
  // State untuk menyimpan nilai dari dropdown
  const [selectedProjectType, setSelectedProjectType] = useState(null);
  const [selectedTopik, setSelectedTopik] = useState(null);
  const [selectedSubTopik, setSelectedSubTopik] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedTimeBudget, setSelectedTimeBudget] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedCompleteness, setSelectedCompleteness] = useState(null);
  const [selectedDataType, setSelectedDataType] = useState(null);
  const [data, setData] = useState(null);


  // Fungsi untuk mengirim data ke backend
  const handleSubmit = async () => {
    try {
      const projectType = selectedProjectType.map(option => option.value);
      const topik = selectedTopik.map(option => option.value);
      const subTopik = selectedSubTopik.map(option => option.value);
      const difficulty = selectedDifficulty.map(option => option.value);
      const timeBudget = selectedTimeBudget.map(option => option.value);
      const feature = selectedFeature.map(option => option.value);
      const completeness = selectedCompleteness.map(option => option.value);
      const dataType = selectedDataType.map(option => option.value);
  
      const payload = {
        testype: selectedProjectType[0].value,
        testopic: selectedTopik[0].value,
        testopicsub: selectedSubTopik[0].value,
        testdif:
          parseInt(selectedDifficulty[0].value) +
          parseInt(selectedTimeBudget[0].value) +
          parseInt(selectedFeature[0].value) +
          parseInt(selectedCompleteness[0].value) +
          parseInt(selectedDataType[0].value)
      };      
      
      console.log(payload);

      
  //    const testdif = difficulty.reduce((total, value) => total + parseInt(value), 0) +
          //            timeBudget.reduce((total, value) => total + parseInt(value), 0) +
        //              feature.reduce((total, value) => total + parseInt(value), 0) +
      //                completeness.reduce((total, value) => total + parseInt(value), 0) +
    //                  dataType.reduce((total, value) => total + parseInt(value), 0);
  //    const testopicsub = subTopik;
  //    const testopic = topik;
 //     const testype = projectType;
      
      const test={
        testype: payload.testype,
        testopic: payload.testopic,
        testopicsub: payload.testopicsub,
        testdif: payload.testdif
      }
      console.log(test)

      const jsonData = JSON.stringify(test);
      console.log(jsonData);

      const response = await axios.post('http://35.223.81.192:8080/predict', jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setData(response.data);
      console.log(data);
      console.log(response.data) // Menampilkan respon dari backend
    } catch (error) {
      console.error(error);
    }

  };
  

  // Opsi untuk setiap dropdown
  const projectTypeOptions = [
    { value: 'Front End', label: 'Front-End' },
    { value: 'Back End', label: 'Back End' },
    { value: 'Machine Learning', label: 'Machine Learning' }
  ];

  const topikOptions = [
    { value: 'Back End', label: 'Back-End' },
    { value: 'Data Engineering', label: 'Data Engineering' },
    { value: 'Front End', label: 'Front End' },
    { value: 'Classification & Regression', label: 'Classification & Regression' },
    { value: 'Computer Vision', label: 'Computer Vision' },
    { value: 'NLP', label: 'NLP' },
    { value: 'Speech / Audio', label: 'Speech / Audio' },
    { value: 'Time-series', label: 'Time-series' }
  ];

  const subTopikOptions = [
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Express.js', label: 'Express.js' },
    { value: 'Django', label: 'Django' },
    { value: 'Data Warehousing', label: 'Data Warehousing' },
    { value: 'React', label: 'React' },
    { value: 'Ember.js', label: 'Ember.js' },
    { value: 'Angular', label: 'Angular' },
    { value: 'LSTM', label: 'LSTM' },
    { value: 'ARIMA', label: 'ARIMA' },
    { value: 'Music Information Retrieval', label: 'Music Information Retrieval' },
    { value: 'Topic Modeling', label: 'Topic Modeling' },
    { value: 'Sentiment Analysis', label: 'Sentiment Analysis' },
    { value: 'Object Detection', label: 'Object Detection' },
    { value: 'Logistic Regression', label: 'Logistic Regression' },
    { value: 'Linear Regression', label: 'Linear Regression' }
  ];

  const difficultyOptions = [
    { value: '1', label: 'S1 EASY' },
    { value: '2', label: 'S1 MED' },
    { value: '3', label: 'S1 HARD' },
    { value: '4', label: 'S2 EASY' },
    { value: '5', label: 'S2 MED' },
    { value: '6', label: 'S2 HARD' },
    { value: '7', label: 'S3 EASY' },
    { value: '8', label: 'S3 MED' },
    { value: '9', label: 'S3 HARD' },
    { value: '10', label: 'S3 XHARD' }
  ];

  const timeBudgetOptions = [
    { value: '6', label: '1 Month' },
    { value: '4', label: '2 Month' },
    { value: '2', label: '3 Month' },
    { value: '2', label: '4 Month' },
    { value: '1', label: '5 Month' },
    { value: '2', label: '6 Month' },
    { value: '2', label: '7 Month' },
    { value: '4', label: '8 Month' },
    { value: '6', label: '9 Month' },
    { value: '10', label: '10 Month' }
  ];

  const featureOptions = [
    { value: '1', label: 'Dibawah 5' },
    { value: '2', label: '5 sampai 10' },
    { value: '3', label: 'Lebih dari 10' }
  ];

  const completenessOptions = [
    { value: '1', label: 'Langsung pake' },
    { value: '2', label: 'Preproses' },
    { value: '3', label: 'Bantu cari' }
  ];

  const dataTypeOptions = [
    { value: '1', label: 'Binary' },
    { value: '2', label: 'Multiclass/regressor' },
    { value: '3', label: 'Time-series' }
  ];

  return (

    
    <div className="container">
      <div className="box">
        <h1 className="title">Project Type</h1>
        <div className="field">
          <label className="label">Project-Type</label>
          <div className="control">
            <Select
              options={projectTypeOptions}
              isMulti
              onChange={setSelectedProjectType}
              value={selectedProjectType}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Topik</label>
          <div className="control">
            <Select
              options={topikOptions}
              isMulti
              onChange={setSelectedTopik}
              value={selectedTopik}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Sub-Topik</label>
          <div className="control">
            <Select
              options={subTopikOptions}
              isMulti
              onChange={setSelectedSubTopik}
              value={selectedSubTopik}
            />
          </div>
        </div>
      </div>

      <div className="box">
        <h1 className="title">Difficulty Point</h1>
        <div className="field">
          <label className="label">Complexity of the problem</label>
          <div className="control">
            <Select
              options={difficultyOptions}
              isMulti
              onChange={setSelectedDifficulty}
              value={selectedDifficulty}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Time and budget constraints (month)</label>
          <div className="control">
            <Select
              options={timeBudgetOptions}
              isMulti
              onChange={setSelectedTimeBudget}
              value={selectedTimeBudget}
            />
          </div>
        </div>
      </div>

      <div className="box">
        <h1 className="title">Size and Quality of the Data</h1>
        <div className="field">
          <label className="label">Berapa feature</label>
          <div className="control">
            <Select
              options={featureOptions}
              isMulti
              onChange={setSelectedFeature}
              value={selectedFeature}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Seberapa lengkap</label>
          <div className="control">
            <Select
              options={completenessOptions}
              isMulti
              onChange={setSelectedCompleteness}
              value={selectedCompleteness}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Jenis Data-Sheet</label>
          <div className="control">
            <Select
              options={dataTypeOptions}
              isMulti
              onChange={setSelectedDataType}
              value={selectedDataType}
            />
          </div>
        </div>
      </div>

      <div className="field is-grouped is-centered">
        <div className="control">
          <button className="button is-primary" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      
      <div className="container" style={{ width: '350px', height: '200px', display: 'flex', flexDirection: 'column' }}>
  {data && Object.keys(data).map((name) => (
    <p key={name} className="notification has-text-centered" style={{ margin: '5px', fontWeight: 'bold' }}>
      {name}: {data[name][0]}
    </p>
  ))}
</div>



      <div className="container" style={{ marginBottom: '100px' }}>
      </div>

    </div>
  );
};

export default Register;
