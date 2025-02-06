const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => {
    envelope.classList.toggle('open');
    document.getElementById('openBtn').style.display = 'none';
});



document.getElementById('closeBtn').addEventListener('click', function() {
    var envelope = document.getElementById('envelope');
    envelope.classList.remove('open');
    setTimeout(() => {
        document.getElementById('openBtn').style.display = 'block';
    }, 500); 
});