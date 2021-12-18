//файл
let imageSource
let fileInput = document.getElementById('freelancer-image-to-upload')

fileInput.addEventListener('change', function (e) {
    for (let i = 0, file; file = fileInput.files[i]; i++) {
        let imageType = 'image.*';

        if (file.type.match(imageType)) {
            let reader = new FileReader();
            reader.onload = function (e) {
                imageSource = e.target.result;
            }
            reader.readAsDataURL(file)
        }
    }
}, false)

document.getElementsByClassName('create-freelance-profile')[0].addEventListener('submit', function (e) {
    localStorage.setItem('imageSource', imageSource)
})