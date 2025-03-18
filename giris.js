let kayitEkrani = true;
let kullanicilar = {};

function formGecis(cafeKayit) {
  kayitEkrani = cafeKayit;
  document.getElementById("baslik").textContent = kayitEkrani
    ? "Kayıt Ol"
    : "Giriş Yap";

  document
    .getElementById("kayit-ekrani")
    .classList.toggle("aktif", kayitEkrani);
  document
    .getElementById("giris-ekrani-sec")
    .classList.toggle("aktif", !kayitEkrani);
}

function kimlikIslemi() {
  let email = document.getElementById("email").value.trim();
  let sifre = document.getElementById("sifre").value.trim();

  if (email === "") {
    alert(
      kayitEkrani
        ? "Lütfen bir e-posta adresi giriniz."
        : "Lütfen giriş için e-posta adresinizi giriniz."
    );
    return;
  }
  if (sifre === "") {
    alert(
      kayitEkrani
        ? "Lütfen bir şifre belirleyiniz."
        : "Lütfen giriş için şifrenizi giriniz."
    );
    return;
  }

  if (kayitEkrani) {
    if (kullanicilar[email]) {
      alert(
        "Bu e-posta ile zaten bir hesap oluşturulmuş. Lütfen giriş yapın."
      );
    } else {
      kullanicilar[email] = sifre;
      alert("Kayıt başarılı. Şimdi giriş yapabilirsiniz.");
      formGecis(false);
    }
  } else {
    if (!kullanicilar[email]) {
      alert("Bu e-posta adresi ile kayıtlı bir hesap bulunamadı.");
    } else if (kullanicilar[email] !== sifre) {
      alert("Hatalı şifre. Lütfen tekrar deneyiniz.");
    } else {
      alert("Giriş başarılı.");
      window.location.href = "anasayfa.html";
    }
  }
}
