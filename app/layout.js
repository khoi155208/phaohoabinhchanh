import '../styles/globals.css'

export const metadata = {
  title: "Cửa Hàng Pháo Hoa Bộ Quốc Phòng",
  description: "Pháo hoa được phép & Thiết bị PCCC tại KDC Trung Sơn, Bình Chánh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
