document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;

    // vCard
    let vcard =
`BEGIN:VCARD
VERSION:3.0
N:${apellido};${nombre};;;
FN:${nombre} ${apellido}
TEL;TYPE=CELL:${telefono}
EMAIL;TYPE=INTERNET:${email}
ADR;TYPE=HOME:;;${direccion};;;;
END:VCARD`;

    
    new QRious({
        element: document.getElementById("qrcode"),
        size: 260,
        value: vcard
    });
});
