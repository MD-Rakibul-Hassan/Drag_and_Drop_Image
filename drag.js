const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const viewImg = document.getElementById('img-view');

inputFile.addEventListener('change', uploadImg )

function uploadImg() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    viewImg.style.backgroundImage = `url(${imgLink})`;
    viewImg.textContent = '';
    viewImg.style.border = 0;
}

   
dropArea.addEventListener('dragover', function (event) {
    event.preventDefault()
})

dropArea.addEventListener('drop', function (event) {
    event.preventDefault();
    inputFile.files = event.dataTransfer.files;
    uploadImg()
})