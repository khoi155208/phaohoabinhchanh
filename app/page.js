import Card from "../components/Card";

const products = [
  { name: "Giàn Phun Viên", price: "Liên hệ", description: "Pháo hoa giàn phun viên chính hãng." , image: "/images/gian-phun-vien.jpg"},
  { name: "Giàn Phun Hoa", price: "Liên hệ", description: "Pháo hoa giàn phun hoa rực rỡ." , image: "/images/gian-phun-hoa.jpg"},
];

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1 className="text-3xl font-bold mb-2">Cửa Hàng Pháo Hoa Bộ Quốc Phòng & Thiết Bị PCCC</h1>
        <p className="mb-1"><b>Địa chỉ:</b> 108 đường số 7, KDC Trung Sơn, Bình Chánh</p>
        <p className="mb-4"><b>SĐT:</b> 0918543639 - 0914171719</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Sản phẩm</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((p, idx) => (
            <Card key={idx} name={p.name} description={p.description} price={p.price} image={p.image} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Bản đồ</h2>
        <div className="rounded-xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.872497784696!2d106.6800892!3d10.737997599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0f0e3e7c13%3A0x53d1b34c0c2c7918!2zMTA4IMSQLiBz4buRIDcsIEtodSBk4bqndSBjdSBUcnVuZyBTxqFuLCBCw6xuaCBDaMOhbmgsIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1692700000000!5m2!1svi!2s"
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
