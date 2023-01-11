const btnStartCam = document.querySelector('[data-video-botao]');
const Cam = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');

const btnPhoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');

const btnSendPhoto = document.querySelector('[data-enviar]');
let imageURL = '';

btnStartCam.addEventListener('click', async function (){
    const startVideo = await navigator.mediaDevices.getUserMedia({video: true,audio: false});

    btnStartCam.style.display = 'none';
    Cam.style.display = 'block';

    video.srcObject = startVideo;
})

btnPhoto.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video ,0 ,0 ,canvas.width, canvas.height);

    imageURL = canvas.toDataURL('image/jpeg');

    Cam.style.display = 'none';
    mensagem.style.display = 'block';
})

btnSendPhoto.addEventListener('click', () => {
    const reciveData = localStorage.getItem('cadastro');
    const convertData = JSON.parse(reciveData);

    convertData.imagem = imageURL;

    localStorage.setItem('cadastro', JSON.stringify(convertData));

    window.location.href = './abrir-conta-form-3.html';
})