https://react-egitim-planlamasi.notion.site/1-Hafta-1-G-n-d00a63f9e06b4846acea68e28a11c8a6 --> react önce bilinmesi gereken temel javascript konuları

git hub vscode dosya aktarmak için https://git-scm.com/ adresindeki dosya kurulmalıdır.

https://fakestoreapi.com/ api ve resimler buunabilir.

Counter.jsx useState ornegi
React projelerinde ekranda değişiklik görmek istiyorsak ekrandaki değer bir STATE'e bağlı olması gerekiyor!!!

---

display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

## grid columlarda auto ekran ozelligi icin kullanılır. bu kodta 250px gelince otomatik resize hesaplamasi yapar.

**_---_**parent child tüm title kolonu değiştirmek için kod örneği

products içereği
const [titleState, setTitleState] = useState("Title");

props için :
titleState={titleState}
setTitleState={setTitleState}

productCard içeriği

function handleTitleChange() {
props.setTitleState("Title Değişti");
}

<strong className="product-title">{props.titleState}</strong>

<button onClick={handleTitleChange}> Sepete Ekle</button>

**_---_**

Shadcn
Shadcn UI Felsefesi - Yeni Bir İnşa Yöntemi
Tek bir kod satırı yazmadan önce, Shadcn UI'nin neden var olduğunu ve hangi sorunları çözdüğünü anlamak çok önemlidir. Bu temel felsefeyi kavramak, tam potansiyelini ortaya çıkarmanın anahtarıdır.

Shadcn UI Ne Değildir
Geleneksel bir npm paketi değildir. shadcn-ui'yi package.json'unuzun bağımlılıklar listesinde bulamazsınız. Bu en önemli ayrımdır.
Tek parça (monolithic) bir kütüphane değildir. Yalnızca bir düğme ve bir giriş alanı ihtiyacınız varken yüzlerce bileşeni yüklemeye zorlamaz.
Kısıtlayıcı değildir. Belirli bir tasarım estetiğine asla bağlı kalmazsınız veya bir kütüphanenin bakımcıları tarafından sağlanan tema yetenekleriyle sınırlı kalmazsınız.
Shadcn UI Nedir
Yeniden Kullanılabilir Kod Koleksiyonu: Bunu uzmanlıkla küratörlüğü yapılmış bir tarifler seti gibi düşünün. İstediğiniz tarifi (örneğin, bir Card bileşeni) seçersiniz ve talimatlar (kod) kendi mutfağınızda (projeniz) pişirmeniz için size verilir.
Kod Sahipliğine Bağlılık: Bir Shadcn bileşeni eklediğinizde, kaynak kodu—bir .tsx dosyası—doğrudan kod tabanınıza, genellikle components/ui/ altına yerleştirilir. Artık bu sizin bileşeninizdir. Yapısını, stillerini, mantığını—her şeyi değiştirebilirsiniz. Bu, basit bir görsel ince ayar elde etmek için !important CSS geçersiz kılmalarıyla veya karmaşık prop API'leriyle boğuşma gibi sinir bozucu deneyimi ortadan kaldırır.
Modern, Sağlam Bir Temel Üzerine İnşa Edilmiştir: Shadcn UI tekerleği yeniden icat etmez. Devlerin omuzlarında yükselir:
Tailwind CSS: İşaretlemenizde doğrudan herhangi bir tasarım oluşturmak için düşük seviyeli yapı taşları sağlayan bir yardımcı sınıf (utility-first) CSS çerçevesi. Shadcn bileşenleri yalnızca Tailwind ile stilize edilmiştir, bu da çerçeveye aşina iseniz özelleştirmeyi inanılmaz derecede kolaylaştırır.
Radix UI: Stilsiz, erişilebilir, düşük seviyeli UI primitifleri kütüphanesi. Radix, klavye navigasyonu, odak yönetimi ve erişilebilirlik (a11y) için ARIA öznitelikleri gibi UI bileşenlerinin tüm karmaşık ve genellikle gözden kaçan yönlerini ele alır. Shadcn, bu güçlü, başsız (headless) primitifleri alır ve Tailwind CSS ile güzel stil ekler.
Bu modelin temel avantajı, hız ve kontrolün birleşimidir. Kendi kodunuza sahip olmaktan gelen uzun vadeli esneklik ve sürdürülebilirliği feda etmeden, hazır bileşenleri kullanmanın başlangıç hızını elde edersiniz.
