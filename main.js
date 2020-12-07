const stem1 = 'https://rdl.train.army.mil/catalog-ws/view/ARIManagingComplexProblems/video/';
const stem2 = 'https://rdl.train.army.mil/catalog-ws/view/AnotherWebsite/';

try {
  document.getElementById('video1').src = `${stem1}McMaster/McMaster_Question_27A.mp4`;
} catch {}
try {
  document.getElementById('video2').src = `${stem2}AnotherVideo.mp4`;
} catch {}