# 🚀 Web Geliştirme Öğrenme Yolculuğu (Web Development Learning Journey)

Bu depo, Web Geliştirme (Web Authorship) öğrenme sürecimde oluşturduğum temel **HTML**, **PHP** ve **SQL** çalışmalarını içermektedir. Projeler; ön yüz tasarımı, arka uç mantığı ve veritabanı yönetimi temellerini kapsamaktadır.

## 📂 Dosya İçerikleri ve Özellikler

### 1. Ön Yüz (Front-End) - HTML
**Dosya:** `1.html`
HTML5 etiketlerinin yapısal kullanımı ve özelliklerini içeren bir referans/çalışma dosyasıdır.
* **Metin Biçimlendirme:** `<b>`, `<i>`, `<strong>`, `<sub>`, `<sup>` gibi temel tipografi etiketleri.
* **Tablo Yapısı:** `rowspan` ve `colspan` kullanılarak oluşturulmuş karmaşık tablo hücre yapıları.
* **Form Elemanları:** Kullanıcıdan veri almak için farklı `input` türleri (`text`, `date`, `color`, `checkbox`, `email`, `button` vb.).
* **Semantik Etiketler:** `<abbr>`, `<cite>`, `<code>` gibi anlamsal etiket kullanımları.

### 2. Arka Uç (Back-End) - PHP
**Dosyalar:** `index.php`, `php.php`
Sunucu taraflı mantık kurma, değişken yönetimi ve karar yapıları üzerine çalışmalar.
* **Kontrol Yapıları:** `switch-case` yapısı kullanılarak veri eşleştirme örnekleri (Şehir plakaları, Ürün türleri).
* **Değişkenler ve Aritmetik:** Değişken tanımlama ve matematiksel işlem (çıkarma işlemi) mantığı.
* **Koşullu İfadeler:** İşlem sonuçlarına göre (`if-else`) kullanıcıya özel mesaj döndüren algoritmalar.

### 3. Veritabanı (Database) - SQL
**Dosya:** `finallysql.sql`
Verilerin kalıcı olarak saklanması ve yönetilmesi için SQL komutları.
* **DDL (Data Definition Language):** Veritabanı (`CREATE DATABASE`) ve Tablo (`CREATE TABLE`) oluşturma işlemleri.
* **Veri Tipleri ve Kısıtlamalar:** `INT`, `VARCHAR` veri tipleri ve `PRIMARY KEY`, `NOT NULL`, `IDENTITY` kısıtlamaları.
* **DML (Data Manipulation Language):** Tabloya toplu veri ekleme (`INSERT INTO`) işlemleri.
* **Tablo Yönetimi:** Tabloyu sıfırlama (`TRUNCATE`) ve silme (`DROP`) komutları.

---

## 🛠️ Kullanılan Teknolojiler

* **HTML5:** Sayfa iskeleti ve form yapıları için.
* **PHP:** Sunucu taraflı programlama ve mantıksal işlemler için.
* **SQL (T-SQL/MSSQL Syntax):** Veritabanı sorgulama ve yönetimi için.

## 📝 Notlar

* SQL dosyasında `IDENTITY(1,1)` kullanılmıştır; bu sözdizimi Microsoft SQL Server (MSSQL) ile uyumludur. MySQL kullanımı durumunda `AUTO_INCREMENT` ile değiştirilmelidir.
* HTML dosyasındaki form elemanları ve tablolar, etiketlerin işlevlerini öğrenmek amacıyla "Cheat Sheet" (Kopya Kağıdı) formatında hazırlanmıştır.

---

### 🎯 Gelecek Hedefleri
* HTML formundan girilen verileri PHP ile yakalayıp SQL veritabanına dinamik olarak kaydetmek.
* Veritabanındaki verileri PHP ile çekip HTML tablosunda listelemek.
