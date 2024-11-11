const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const qrCodeDiv = document.getElementById('qr-code');
const downloadBtn = document.getElementById('download-btn'); // Download button

generateBtn.addEventListener('click', () => {
    const text = textInput.value;
    if (text) {
        QRCode.toCanvas(document.createElement('canvas'), text, { color: { dark: "#FF69B4" } }, (error, canvas) => {
            if (error) console.error(error);
            qrCodeDiv.innerHTML = ''; // Clear previous QR code
            qrCodeDiv.appendChild(canvas);
            downloadBtn.style.display = 'inline-block'; // Show the download button

            // Handle download
            downloadBtn.addEventListener('click', () => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'qr-code.png';
                link.click();
            });
        });
    } else {
        alert('Please enter text to generate a QR code.');
    }
});
