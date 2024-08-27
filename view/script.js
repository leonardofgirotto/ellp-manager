const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');

nextBtn.addEventListener('click', () => {
    form1.classList.add('hidden');
    form2.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
    form2.classList.add('hidden');
    form1.classList.remove('hidden');
});
