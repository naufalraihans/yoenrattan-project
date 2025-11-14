
export interface Product {
  id: number;
  nama: string;
  harga: string;
  gambar: string;
  deskripsi: string;
  kategori: string;
}

export enum Page {
  Home,
  Gallery,
  About,
  Contact,
}