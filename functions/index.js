const functions = require('firebase-functions');
const moji = require('moji');
const credentials = require('./credentials.json');

//*google-translation*の実体
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
//*google-translation*の実体


const express = require('express');
const app = express();

app.use(require('cors')());

app.get('/', async (req, res) => {
  try {
    if (req.query.text) {
      //*google-translation*
      res.json({ translated: await translateText(req.query.text) });
      //*google-translation*

      //*moji-translation*
      // res.json({ translated: moji(req.query.text).convert('HG', 'KK').toString() });
      //*moji-translation*
      
    } else {
      res.status(400).send();
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

exports.translate = functions.https.onRequest(app);
