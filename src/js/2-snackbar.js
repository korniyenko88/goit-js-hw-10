import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const delayPromise = (delay, radioChecked) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioChecked === 'fulfilled') {
        resolve({ delay });
      } else {
        reject({ delay });
      }
    }, delay);
  });
};

form.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
  event.preventDefault();

  const form = event.target;
  const delay = Number(form.elements.delay.value);
  const radioChecked = form.elements.state.value;

  delayPromise(delay, radioChecked)
    .then(({ delay }) => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay} ms`,
        position: 'topRight',
      });
    })
    .catch(({ delay }) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay} ms`,
        position: 'topRight',
      });
    });

  form.reset();
}
