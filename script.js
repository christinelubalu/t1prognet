document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('biodataForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    const inputs = form.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.addEventListener('input', validateForm);
    });

    function validateForm() {
        const nama = form.nama.value;
        const umur = form.umur.value;
        const alamat = form.alamat.value;
        const email = form.email.value;

        if (nama === '') {
            alert('Nama harus diisi');
            return;
        }

        if (umur === '' || isNaN(umur)) {
            alert('Umur harus diisi dengan angka');
            return;
        }

        if (alamat === '') {
            alert('Alamat harus diisi');
            return;
        }

        if (email === '' || !isValidEmail(email)) {
            alert('Email harus diisi dengan format yang benar');
            return;
        }

        alert('Form berhasil divalidasi, data siap dikirim.');
    }

    function isValidEmail(email) {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return pattern.test(email);
    }
});
