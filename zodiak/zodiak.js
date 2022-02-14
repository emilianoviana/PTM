zodiak.onclick = function () {
  let bulan = document.querySelector("#bulan").value;
  let tanggal = document.querySelector("#tanggal").value;
  let zodiak = "";

      if ((tanggal >= 21 && tanggal <= 31 && bulan == 3) || (tanggal >= 1 && tanggal <= 19 && bulan == 4)) {
        hasil.innerHTML = "Aries";
        
      } else if ((tanggal >= 20 && tanggal <= 31 && bulan == 4) || (tanggal >= 1 && tanggal <= 20 && bulan == 5)) {
        hasil.innerHTML = "Taurus";
        
      } else if ((tanggal >= 21 && tanggal <= 31 && bulan == 5) || (tanggal >= 1 && tanggal <= 20 && bulan == 6)) {
        hasil.innerHTML = "Gemini";
        
      } else if ((tanggal >= 22 && tanggal <= 31 && bulan == 6) || (tanggal >= 1 && tanggal <= 22 && bulan == 7)) {
        hasil.innerHTML = "Cancer";
        
      } else if ((tanggal >= 23 && tanggal <= 31 && bulan == 7) || (tanggal >= 1 && tanggal <= 22 && bulan == 8)) {
        hasil.innerHTML = "Leo";
        
      } else if ((tanggal >= 23 && tanggal <= 31 && bulan == 8) || (tanggal >= 1 && tanggal <= 22 && bulan == 9)) {
        hasil.innerHTML = "Virgo";
        
      } else if ((tanggal >= 23 && tanggal <= 31 && bulan == 9) || (tanggal >= 1 && tanggal <= 22 && bulan == 10)) {
        hasil.innerHTML = "Libra";
        
      } else if ((tanggal >= 24 && tanggal <= 31 && bulan == 10) || (tanggal >= 1 && tanggal <= 21 && bulan == 11)) {
        hasil.innerHTML = "Scorpio";
        
      } else if ((tanggal >= 22 && tanggal <= 31 && bulan == 11) || (tanggal >= 1 && tanggal <= 21 && bulan == 12)) {
        hasil.innerHTML = "Sagitarius";
        
      } else if ((tanggal >= 22 && tanggal <= 31 && bulan == 12) || (tanggal >= 1 && tanggal <= 19 && bulan == 1)) {
        hasil.innerHTML = "Capricorn";
        
      } else if ((tanggal >= 20 && tanggal <= 31 && bulan == 1) || (tanggal >= 1 && tanggal <= 18 && bulan == 2)) {
        hasil.innerHTML = "Aquarius";
        
      } else if ((tanggal >= 19 && tanggal <= 31 && bulan == 2) || (tanggal >= 1 && tanggal <= 20 && bulan == 3)) {
        hasil.innerHTML = "Pisces";
        
      } else {
          hasil.innerHTML = "TIDAK ADA";
      }
  }