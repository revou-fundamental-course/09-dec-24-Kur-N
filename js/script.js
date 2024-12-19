// Ini JavaScript
let indexSlide = 0;

nextSlide();

// Fungsi untuk memvalidasi
function validateForm(e) {
    // Mencegah form disubmit dan halaman ter-refresh
    e.preventDefault();

    // Mengambil nilai
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const interestSelect = document.getElementById('interest').value;

    // Reset error message
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const interestError = document.getElementById('interest-error');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;

    // Validasi jika nama user tidak kosong
    if (nameInput === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Validasi email
    if (emailInput === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(emailInput)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

     // Validasi interest
    if (interestSelect === "") {
        interestError.textContent = 'Please select an option.';
        isValid = false;
        console.log('invalid')
    } else {
        interestError.textContent = '';
    }

    if (isValid) {
        alert('Form is valid, data will be submitted');
        console.log('valid')
    }
    console.log('validateForm executed');
}

function nextSlide() {
    showBanner(indexSlide += 1);
}

function showBanner(n) {
    const imageList = document.getElementsByClassName('banner-img');

    if (n > imageList.length - 1) indexSlide = 0;

    // Hide semua banner
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }

    // Show 1 Banner sesuai Posisi yang diinginkan
    imageList[indexSlide].style.display = "block";
}

// Automate banned slide
setInterval(nextSlide, 3000);