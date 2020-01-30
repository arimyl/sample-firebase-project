const functions = require('firebase-functions');
const credentials = require('./credentials.json');


const { TranslationServiceClient } = require('@google-cloud/translate').v3beta1;
const translationClient = new TranslationServiceClient({ credentials });


const translateText = async text => {

  const [response] = await translationClient.translateText({
    parent: translationClient.locationPath(credentials.project_id, 'global'),
    contents: [text],
    mimeType: 'text/plain',
    sourceLanguageCode: 'ja-JP',
    targetLanguageCode: 'en-US',
  });

  return response.translations.map(t => t.translatedText).join('');
}


const express = require('express');
const app = express();

app.use(require('cors')());

app.get('/', async (req, res) => {
  try {
    if (req.query.text) {
      res.json({ translated: await translateText(req.query.text) });
    } else {
      res.status(400).send();
    }
  } catch (e) {
    res.status(500).send();
  }
});

exports.translate = functions.https.onRequest(app);
