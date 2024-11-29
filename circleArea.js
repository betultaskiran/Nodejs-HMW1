// circleArea.js

// Komut satırından gelen parametreyi al
const args = process.argv.slice(2); // İlk iki parametre Node.js ve dosya yolu

// Yarıçapı al
const radius = parseFloat(args[0]); //Arrayden dönen Stringi floata çeviriyor

if (isNaN(radius) || radius <= 0) {
  console.log("Lütfen pozitif bir sayı olarak yarıçap giriniz.");
} else {
  // Alanı hesapla
  const area = Math.PI * Math.pow(radius, 2);

  // Sonucu yazdır
  console.log(`Yarıçapı (${radius}) olan dairenin alanı: ${area.toFixed(2)}`);
}
