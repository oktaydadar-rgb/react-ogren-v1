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

Shadcn - https://ui.shadcn.com/
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

https://ant.design/
Ant Design Nedir?
Ant Design, Alibaba Group tarafından geliştirilen, React tabanlı bir kullanıcı arayüzü (UI) kütüphanesidir. Web geliştiricilerine yüksek kaliteli ve modern tasarımlara sahip React componentleri sunarak, geliştiricilerin daha az kodla daha işlevsel ve görsel açıdan çekici arayüzler oluşturmalarına olanak sağlar. Entegre tasarım dilinin yanı sıra, esneklik ve modüler yapı, Ant Design’ı modern web geliştiricileri için popüler bir seçenek haline getirir. Bu kütüphane, arayüz tasarımında ihtiyaç duyulan tüm bileşenleri kapsamlı bir şekilde sunar; tablolar, düğmeler, form elemanları ve çok daha fazlası, geliştiricilere zengin bir araç seti sağlar. Ant Design, responsive tasarım prensiplerini destekleyerek, uygulamaların çeşitli cihazlarda ve ekran boyutlarında sorunsuz görüntülenmesini garanti eder. Bu özellik, günümüzün mobil öncelikli web geliştirme dünyasında büyük bir avantaj sunar.

Ant Design’ın Avantajları
Ant Design, özellikle front-end web geliştiricileri için tutarlı bir tasarım dili ve geniş bir bileşen yelpazesi sunarak, kullanıcı deneyimini önemli ölçüde iyileştirir.
React ile entegre çalışması, geliştiricilerin hızlı ve etkili bir şekilde uygulamalar oluşturmasına imkan tanır. Ayrıca, kapsamlı dokümantasyon ve topluluk desteği, öğrenme eğrisini azaltır ve geliştirme sürecini kolaylaştırır.
Ant Design, global bir topluluk tarafından desteklendiği için sürekli güncellenir, bu da kütüphanenin sürekli olarak yeni bileşenler ve özelliklerle zenginleştirilmesini sağlar.
Ant Design’ı Projelerinizde Nasıl Kullanabilirsiniz?
Ant Design’ı projenize entegre etmek oldukça basit. Eğer npm paket yöneticisi kullanıyorsanız: $ npm install antd --save eğer yarn kullanıyorsanız $ yarn add antd komutu ile kolaylıkla projenize kurabilirsiniz.

Projenize ant.design kurduktan sonra örneğin, bir form bileşeni oluşturmak istediğinizde, Ant Design’ın sunduğu Form, Input ve Button bileşenlerini kullanarak hızlıca etkileyici bir form tasarlayabilirsiniz. Bu bileşenler, geliştirme sürecinizi hızlandırırken, uygulamanızın kullanıcı arayüz kalitesini artıracaktır.

Ant Design ayrıca, uygulamanızın görünümünü ve hissini özelleştirmenize olanak tanıyan temalar ve stil seçenekleri sunar. Böylece, projenizin marka kimliğine uygun bir kullanıcı arayüzü oluşturabilirsiniz.

Siz de kendi projelerinizde Ant Design’ı deneyerek, geliştirme sürecinizi hızlandırabilir ve kullanıcı deneyimini iyileştirebilirsiniz. Bu kütüphane, modern web geliştirmenin karşılaştığı pek çok zorluğa çözüm sunar ve projelerinizi bir sonraki seviyeye taşımanıza yardımcı olur.

# kodlara javascipt olursa back-ticks (``) kullanilir

**Destructuring Nedir?**

Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.

Bu şekilde bir objemiz olduğunu düşünelim;

const foo = { a: 123, b: true }
Bu obje içinde a ve b değerlerini almak istersek foo.a; ve foo.b; yazarak erişebiliriz. Ama bu değerlere erişmek istediğimizde her seferinde foo mu yazmak zorundayız? Elbette bunun da bir çözümü var, a ve b değerlerini bir lokal değişkene yazabiliriz bu sayede her seferinde foo yazmak zorunda kalmayız. Örneğin;

const foo = { a: 123, b: true }
const a = foo.a;
const b = foo.b;
Ama eğer erişmek istediğimiz değer sayısı çok fazla olsa idi gerçekten çok uğraşmak durumunda kalırdık. İşte bu noktada destructuring bizim isimizi kısaltan bir işlev görür ve ayni işlemi şu şekilde yapabiliriz;

const foo = { a: 123, b: true }
const {a,b} = foo;
Ama en önemlisi destructuring bir fonksiyonun bir objeyi parametre olarak alması sırasında çok kullanışlıdır. Yani fonksiyona parametre girerken de destructuring yapabiliriz;

const cikarma = ( { sayi1, sayi2 } ) => {
// Bu satira dikkat
﻿return sayi1 - sayi2;
}
const sayilar = {
sayi2: 3,
sayi1: 5
}
cikarma(sayilar);
// sonuc 2
Artık fonksiyon içinde devamlı sayilar.sayi1, sayilar.sayi2 diye tekrarlamamamıza gerek yok ama çıkarma fonksiyonunun parametresine dikkat edin. orada süslü parantezler {} bir objeyi temsil etmez, destructuring işlemini temsil eder. Yani çıkarma fonksiyonuna gelen sayılar objesinin içinde sayi1 ve sayi2 property'leri bulunup parçalanıp fonksiyon içinde kullanılabilir hale gelecektir. Destructuring işlemi sırasında sıralama önemsizdir, yani fonksiyonu su şekilde yazmış olsaydık da bir şey değişmeyecekti.

const cikarma = ( { sayi2, sayi1 } ) => {
// Siralama farklireturn sayi1 - sayi2;
}
artık fonksiyon içinde obje propertyl'eri kullanılabilir.

Destructuring Yapan Fonksiyona Gönderilen Obje Eksik Property İçeriyor İse Ne Olacak?
Çıkarma işlemi için problem değil ama bölme işlemi için bu bir problem. Örneğin;

const bolme = ( { sayi1, sayi2} ) => {
return sayi1 / sayi2;
}
const sayilar = {
sayi1: 8
// dikkat sayi1 gonderdik ama sayi2 unuttuk
}
bolme(sayilar);
// NaN yani 'Not a Number' donecektir.
işte bu örnekte bolme fonksiyonunda güzelce destructuring yaptık, sayi1 ve sayi2'yi parçalayıp birbirine böldük. Bölme işleminde sıralama önemli ama ayni zamanda ikinci sayı 0 veya hiçbir şey içermeyen null veya undefined olursa bölme işlemi tanımsız olur. Bu durumda da fonksiyon NaN döner.

Fonksiyonu çağıran geliştiricinin böyle bir hata yapmasının önüne geçmek için fonksiyon içinde olmazsa olmaz, mutlaka değer içermesi gereken değişkenlere default yani varsayılan bir değer atayabiliriz.

const bolme = ( { sayi1, sayi2 = 1} ) => {
// default deger atadikreturn sayi1 / sayi2;
}
const sayilar = {
sayi1: 8
// yine ikinci sayiyi unuttuk
}
bolme(sayilar);
// ama bu sefer sonuc 8, NaN degil
Burada yine ikinci sayıyı unuttuk ama bu sefer destructuring sırasında olmazsa olmaz ikinci sayıya varsayılan olarak 1 değerini atadık. Artık göndermesek bile sayi2 her zaman 1 olacaktır ve sayi1'in belirsiz bir sayıya bölünmesi hatasından kurtulmuş olacağız.

Peki Fazladan Gönderdiğimiz Bu Değerlere Ne Oluyor?
Destructuring sırasında açıkça belirmediğimiz değer fonksiyon içinde erişilemez. Örneğin burada fonksiyon parametresinde sayi2'ye varsayılan değer atamayı geç komple destructure yapmayı unuttuk.

const bolme = ( { sayi1 } ) => {
// dikkat sayi2 unutuldureturn sayi1 / sayi2;
}
const sayilar = {
sayi1: 8,
sayi2: 4
﻿// ama sayi2 gonderdik
}
bolme(sayilar);
// ReferenceError: sayi2 is not defined
Bu durumda ReferenceError: sayi2 is not defined yani sayı iki tanımlanmamış diye bir hata alırız, çünkü fonksiyona sayi2 göndersek bile fonksiyon içinde sayi2 ye olan erişimimizi tamamen kaybettik.

Bu durum bu örnekteki gibi iki tane değer içeren objelerde problem değil ama eğer obje birçok değer içeriyor ise bu hata çok kez yapılan bir hata. Bu noktada spreading operator imdadımıza yetişiyor.

Rest Operator
Örneğin fonksiyonumuz ikiden fazla değer alması gerekiyor ise ne olacak? Örneğin bir toplama fonksiyonumuz var bu fonksiyon 5 sayıyı toplayacak.

const toplama = ({ sayi1, sayi2 }) => {
// dikkat sadece 2 sayireturn sayi1 + sayi2 + sayi3 + sayi4 + sayi5;
}
const sayilar = {
sayi1: 8,
sayi2: 4,
sayi3: 7,
sayi4: 9,
sayi5: 11
}
toplama(sayilar);
//ReferenceError: sayi3 is not defined
Örneğin fonksiyona gönderdiğimiz obje 5 tane sayı içeriyor ama biz sadece ilk ikisini destructure yaptık. Bu durumda sayi3 için bu şekilde hata alırız. ReferenceError: sayi3 is not defined

Ama Rest Operator ile diyebiliriz ki sayi1 ve sayi2'yi destructure yap. Bu sefer de diğer sayıları kaybederiz. Bu durumda spreading operator ile diyebiliriz ki tamam destructuring yap ama geri kalan diğer sayıları da bana ver.

const toplama = ({ sayi1, sayi2, ...args }) => {
let sonuc = sayi1 + sayi2;
for (let sayi in args){
sonuc += args[sayi];
}
return sonuc;
}
const sayilar = {
sayi1: 8,
sayi2: 4,
sayi3: 7,
sayi4: 9,
sayi5: 11
}
toplama(sayilar);
// 39 doner
Yani burada {sayi1, sayi2, ...args} ile diyoruz ki sayi1 ve sayi2 destructure olsun ama geri kalanlar args değişkende obje olarak kalsın yani args { sayi3: 7, sayi4: 9, sayi5: 11 } seklinde bir obje kalır ve bu obje destructuring'ten arta kalan değerleri içeren bir objedir.

Bir obje içindeki tüm değerleri de for...in ile teker teker dolaşabilir. for...in seklinde oluşturduğumuz döngü yani for (let sayi in args) satiri der ki args içindeki tüm property'lerin key'lerini dön bana. Bu döngüdeki sayi değişken her bir property için bize sayi3 , sayi4, sayi5 string anahtarını döner. Ama biz anahtar değil de değerleri almak istersek args[sayi] yazabiliriz. bu bize teker teker 7, 9, 11 sayılarını dönecektir ve toplama işlemine bunu bir döngüde dahil edebiliriz.

Elbette gerçek hayat için mantıklı bir işlem değil bu ama spreading özelliğinin anlaşılması için böyle bir fonksiyon yazılabilir. hatta for...in yerine map() veya reduce() fonksiyonları kullanarak bu örnek daha da iyi hale getirilebilir.

**Şablon Form örneği**

<form>
      <label>
        Title <input type="text" name="title" placeholder="Bir Title Ekle!" />
      </label>
    </form>

**Onclick de parametre gönder için kodu arrow functşon ile yazılmalıdır.**

event.preventDefault() form nesnelerindeki onsubmit olan refreh olmayı durdurur.

3 hafta 2.ders 48.00 dk
