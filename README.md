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

aaa
