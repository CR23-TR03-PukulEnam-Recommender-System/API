const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Tambahkan middleware untuk meng-handle body dengan format JSON

app.post('/users', async (req, res) => {
  try {
    const {
      projectType,
      topik,
      subTopik,
      difficulty,
      timeBudget,
      feature,
      completeness,
      dataType
    } = req.body;

    let testType = '';
    if (projectType.includes('Front-End')) {
      testType = 'Front-End';
    } else if (projectType.includes('Back-End')) {
      testType = 'Back-End';
    } else if (projectType.includes('Machine Learning')) {
      testType = 'Machine Learning';
    } else {
      testType = 'Unknown Project Type';
    }

    let testTopic = '';
    if (topik.includes('Back-End [Back-End]')) {
      testTopic = 'Back-End';
    } else if (topik.includes('Data Engineering [Back-End]')) {
      testTopic = 'Data Engineering';
    } else if (topik.includes('Front-End [Front-End]')) {
      testTopic = 'Front-End';
    } else if (topik.includes('Classification & Regression [ML]')) {
      testTopic = 'Classification & Regression';
    } else if (topik.includes('Computer Vision [ML]')) {
      testTopic = 'Computer Vision';
    } else if (topik.includes('NLP [ML]')) {
      testTopic = 'NLP';
    } else if (topik.includes('Speech / Audio [ML]')) {
      testTopic = 'Speech / Audio';
    } else if (topik.includes('Time-series [ML]')) {
      testTopic = 'Time-series';
    } else {
      testTopic = 'Unknown Topic';
    }

    let testTopicSub = '';
    if (subTopik.includes('Node.js [Back-End]')) {
      testTopicSub = 'Node.js';
    } else if (subTopik.includes('Express.js [Back-End]')) {
      testTopicSub = 'Express.js';
    } else if (subTopik.includes('Django [Back-End]')) {
      testTopicSub = 'Django';
    } else if (subTopik.includes('Data Warehousing [Back-End]')) {
      testTopicSub = 'Data Warehousing';
    } else if (subTopik.includes('React [Front-End]')) {
      testTopicSub = 'React';
    } else if (subTopik.includes('Ember.js [Front-End]')) {
      testTopicSub = 'Ember.js';
    } else if (subTopik.includes('Angular [Front-End]')) {
      testTopicSub = 'Angular';
    } else if (subTopik.includes('LSTM [ML]')) {
      testTopicSub = 'LSTM';
    } else if (subTopik.includes('CNN [ML]')) {
      testTopicSub = 'CNN';
    } else if (subTopik.includes('Transformer [ML]')) {
      testTopicSub = 'Transformer';
    } else {
      testTopicSub = 'Unknown';
    }

    const testDif =
      parseInt(difficulty) +
      parseInt(timeBudget) +
      parseInt(feature) +
      parseInt(completeness) +
      parseInt(dataType);

    const flaskAPIUrl = 'http://localhost:8000/predict'; // Ganti dengan URL Flask API Anda
    const flaskAPIData = {
      testype: testType,
      testopic: testTopic,
      testopicsub: testTopicSub,
      testdif: testDif
    };

    const flaskAPIResponse = await axios.post(flaskAPIUrl, flaskAPIData);

    // Menggunakan respons dari Flask API
    console.log(flaskAPIResponse.data);

    res.json({
      message: 'Data berhasil diterima',
      testType,
      testTopic,
      testTopicSub,
      testDif
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan pada server' });
  }
});

app.listen(5000, () => {
  console.log('Server berjalan pada http://localhost:5000');
});
