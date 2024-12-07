const ProjectsPage = () => {
  return (
    <div className="text-white p-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <div className="w-full bg-red-500 aspect-square rounded-3xl" />
      <div className="mt-4 md:mt-0 lg:col-span-2">
        <h1 className="text-xl font-gasoek">Prelovnes</h1>
        <p className="text-sm text-justify font-inter text-gray-400 text-secondary">
          Prelovnes adalah aplikasi marketplace berbasis React Native yang
          dirancang khusus untuk mahasiswa Universitas Negeri Semarang. Aplikasi
          ini memungkinkan pengguna untuk membeli dan menjual barang bekas
          dengan fitur keamanan data transaksi menggunakan AES.
        </p>
        <p className="font-bold font-inter mt-4">Fitur:</p>
        <ul className="list-disc list-inside font-inter text-sm text-secondary">
          <li>Pencarian Produk</li>
          <li>Keamanan Data Transaksi</li>
          <li>Notifikasi Real-Time</li>
          <li>Autentikasi</li>
        </ul>

        <p className="font-bold font-inter mt-4">Teknologi:</p>
        <ul className="list-disc list-inside font-inter text-sm text-secondary">
          <li>
            <strong>Frontend: </strong>
            React Native, Tailwind CSS.
          </li>
          <li>
            <strong>Backend: </strong> Supabase, AES Encryption
          </li>
          <li>
            <strong>Autentikasi: </strong> Clerk Expo
          </li>
          <li>
            <strong>Routing:</strong> Expo Router
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectsPage
