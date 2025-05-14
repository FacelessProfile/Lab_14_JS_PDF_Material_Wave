import '../css/style.css';
const html2pdf = window.html2pdf;

document.querySelector('#app').innerHTML = `
  <div id="resume" class="resume-container">
    <h1 class="editable" contenteditable="true">Иван Иванов</h1>
    <h2 class="editable" contenteditable="true">Frontend Developer</h2>
    <p class="editable" contenteditable="true">Email: ivan@example.com</p>
    <p class="editable" contenteditable="true">Телефон: +7 900 123 45 67</p>
    <p class="editable" contenteditable="true"> Django networks</p>
    <button id="downloadBtn">Скачать PDF</button>
  </div>
`;

const resumeEl = document.getElementById('resume');
const downloadBtn = document.getElementById('downloadBtn');

function createRipple(e) {
  const circle = document.createElement('span');
  circle.classList.add('ripple-effect');
  const rect = downloadBtn.getBoundingClientRect();
  circle.style.left = `${e.clientX - rect.left}px`;
  circle.style.top = `${e.clientY - rect.top}px`;
  downloadBtn.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}

downloadBtn.addEventListener('click', (e) => {
  if (document.activeElement) document.activeElement.blur();

  createRipple(e);
  downloadBtn.style.display = 'none';

  setTimeout(() => {
    html2pdf().set({
      margin:       0.5,
      filename:     'resume.pdf',
      html2canvas:  { scale: 3 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).from(resumeEl).save().finally(() => {
      downloadBtn.style.display = '';
    });
  }, 200);
});
