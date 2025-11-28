function kullanıcısifre(){
 var ad=prompt("Adınızı Giriniz");
var sifre=prompt("Şifrenizi Giriniz");
if(ad=="ykoc" && sifre=="123")
{
document.write("Tebrikler Giriş Başarılı:", ad,sifre);
}
else
{
document.write("Kullanıcı adı veya şifre hatalı");
}
}