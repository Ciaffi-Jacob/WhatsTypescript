// Import stylesheets
import './style.css';


const form: HTMLFormElement = document.querySelector('#defineform')!;


form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  console.log('Hello there');
  const text = formData.get('defineword') as string;
  console.log(text);
  return false; // prevent reload
};