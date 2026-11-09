function ajukanIzin(event) {
    event.preventDefault();

    // Mengambil data dari formulir
    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;
    const tanggal = document.getElementById("tanggal").value;
    const jam = document.getElementById("jam").value;
    const jenis = document.getElementById("jenis").value;
    const alasan = document.getElementById("alasan").value;

    // Mengubah format tanggal 
    const tanggal = new  Date(tanggal).tolocaleDateString("id-ID", {
        day: "numeric",
        month:"long",
        year: "numeric"
    });
    //Mengamankan teks yang di maksukkan menggunakan fungsi function
    function aman (teks) {
        return teks.replace(/[&<>"']/g, function (karakter) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[karakter];
        });
    }