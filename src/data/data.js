export const projects = [
  {
    id: 1,
    imageUrl: '/assets/projects/prelovnes.jpeg',
    title: 'Prelovnes',
    description: 'UNNES preloved marketplace mobile app',
    bgColor: '#FACC15',
    className: 'md:row-span-2',
    imageClassName:
      'left-1/2 translate-x-[-50%] mt-8 w-52 rounded-xl md:w-32 md:rounded-lg',
    details: {
      introduction:
        'Prelovnes adalah aplikasi marketplace berbasis React Native yang dirancang khusus untuk mahasiswa Universitas Negeri Semarang. Aplikasi ini memungkinkan pengguna untuk membeli dan menjual barang bekas dengan fitur keamanan data transaksi menggunakan AES.',
      features: [
        'Pencarian Produk',
        'Keamanan Data Transaksi',
        'Notifikasi Real-Time',
        'Autentikasi',
      ],
      technologies: ['React Native', 'Expo', 'Nativewind', 'Clerk', 'Supabase'],
    },
  },
  {
    id: 2,
    imageUrl: '/assets/projects/xballacc.png',
    title: 'Xballacc',
    description: 'Website toko online aksesoris HP',
    bgColor: '#22C55E',
    className: '',
    imageClassName:
      'left-1/2 w-64 translate-x-[-50%] mt-8 rounded-xl md:mt-4 md:w-32 md:rounded-lg',
    details: {
      introduction:
        'Xballacc merupakan sebuah toko aksesoris HP yang berada di Kecamatan Kaliwungu, Kendal. Website ini berfungsi sebagai platform informasi toko sekaligus e-commerce yang menampilkan berbagai produk yang dijual.',
      features: [
        'Katalog Produk',
        'Pencarian Produk',
        'Pesan Kilat ke Whatsapp',
      ],
      technologies: ['Wordpress'],
    },
  },
  {
    id: 3,
    imageUrl: '/assets/projects/everymindmap.png',
    title: 'everymindmap',
    description: 'Mindmap belajar ilmu pengetahuan',
    bgColor: '#3B82F6',
    className: 'md:col-span-2',
    imageClassName:
      'left-1/2 w-72 translate-x-[-50%] mt-8 rounded-xl md:mt-4 md:rounded',
    details: {
      introduction:
        'everymindmap adalah website yang menyediakan mind map atau peta konsep untuk berbagai bidang ilmu pengetahuan. Dengan adanya website ini, pengunjung dapat mengetahui arah atau urutan dalam belajar suatu bidang ilmu',
      features: ['Figma Jamboard Embed'],
      technologies: ['Next JS', 'Tailwind'],
    },
  },
  {
    id: 4,
    imageUrl: '/assets/projects/artharupa.png',
    title: 'Artharupa Logam',
    description: 'Website Perajin Logam',
    bgColor: '#EF4444',
    className: 'md:col-span-2 md:h-44',
    imageClassName:
      'left-1/2 w-64 translate-x-[-50%] mt-8 rounded-xl md:mt-4 md:rounded-lg',
    details: {
      introduction:
        'Website perajin yang memproduksi berbagai macam kerajinan dari bahan tembaga, kuningan, aluminium dan lain-lain.',
      features: ['Profil Perusahaan'],
      technologies: ['Wordpress'],
    },
  },
  {
    id: 5,
    imageUrl: '/assets/projects/macode.png',
    title: 'Macode.',
    description: 'Slicing UI Website',
    bgColor: '#A3E635', // bg-lime-400
    className: 'md:row-span-2',
    imageClassName:
      'left-1/2 w-52 translate-x-[-50%] rounded-xl mt-8 md:mt-4 md:w-32 md:rounded',
    details: {
      introduction:
        'Macode. merupakan website belajar pemrograman. Website ini dibuat hanya untuk keperluan belajar slicing frontend web menggunakan React JS dan Tailwind CSS',
      features: [],
      technologies: ['React JS', 'Tailwind'],
    },
  },
  {
    id: 6,
    imageUrl: '/assets/projects/sipekat.png',
    title: 'Sipekat',
    description: 'Manajemen Kendaraan',
    bgColor: '#8B5CF6', // bg-violet-600
    className: 'md:col-span-2',
    imageClassName:
      'mt-20 ml-24 scale-150 md:scale-100 rounded md:mt-4 md:ml-0',
    details: {
      introduction:
        'Sipekat atau Sistem Informasi Perawatan Kendaraan Terpusat merupakan website untuk memantau kondisi kendaraan. Website ini masih dalam tahap pengembangan, sehingga saat ini belum digunakan secara publik',
      features: ['Autentikasi', 'Integrasi Map', 'Pencarian'],
      technologies: ['Next JS', 'Tailwind'],
    },
  },
  {
    id: 7,
    imageUrl: '/assets/projects/positivus.png',
    title: 'Positivus',
    description: 'Slicing UI',
    bgColor: '#818CF8',
    imageClassName:
      'mt-8 w-64 left-1/2 translate-x-[-50%] rounded-xl md:mt-4 md:w-32 md:rounded',
    details: {
      introduction:
        'Website hasil belajar slicing UI dari figma. Belajar membuat website responsive from scratch menggunakan React JS dan Tailwind CSS',
      features: [],
      technologies: ['React JS', 'Tailwind'],
    },
  },
]

export const Skills = [
  {
    id: 1,
    name: 'Website Dev',
    imageUrl: '/assets/skills/1.png',
    color: 'bg-blue-600',
  },
  {
    id: 2,
    name: 'Mobile Dev',
    imageUrl: '/assets/skills/2.png',
    color: 'bg-red-600',
  },
  {
    id: 3,
    name: 'Graphic Design',
    imageUrl: '/assets/skills/3.png',
    color: 'bg-green-600',
  },
  {
    id: 4,
    name: 'UI/UX Design',
    imageUrl: '/assets/skills/4.png',
    color: 'bg-green-600',
  },
]

export const educationTimelines = [
  {
    title: 'Semarang State University',
    description: 'Informatics and Computer Engineering Education | 3.72 GPA',
    timePeriod: '2020 - 2024',
  },
  {
    title: 'State Vocational High School 01 Sragi',
    description: 'Computer and Network Engineering',
    timePeriod: '2017 - 2020',
  },
]

export const certificationTimelines = [
  {
    title: 'Junior Web Developer',
    description: 'BNSP',
    timePeriod: '2024',
  },
  {
    title: 'Android Developer',
    description: 'Intermediate Android Application Developer Dicoding',
    timePeriod: '2022',
  },
  {
    title: 'Basic UX Design',
    description: 'Dicoding Learn Basic UX Design',
    timePeriod: '2022',
  },
  {
    title: 'Junior Graphic Designer',
    description: 'BPPTIK Kemenkominfo Junior Graphic Designer',
    timePeriod: '2021',
  },
]

export const workExperienceTimelines = [
  {
    title: 'Web Developer - Stechoq Academy',
    description: 'Create UI app design and build a website using wordpress',
    timePeriod: 'August 2023 – December 2023',
  },
  {
    title: 'Education Engineer - Stechoq Academy',
    description: 'Create UI app design and build a website using wordpress',
    timePeriod: 'August 2023 – December 2023',
  },
  {
    title: 'Web Developer & UI Designer - Ardata',
    description: 'Create UI app design and build a website using wordpress',
    timePeriod: 'March 2023 – July 2023',
  },
  {
    title: 'Dicoding Academy Independence Study',
    description:
      'Learn native android development, UX design, and digital era soft skills',
    timePeriod: 'August 2022 – December 2022',
  },
  {
    title: 'Graphic Designer - Guru Juara',
    description:
      'Create posters, virtual backgrounds, twibbons, and certificates design',
    timePeriod: 'February 2022 – June 2022',
  },
  {
    title: 'UKM Seni Rupa & Desain',
    description:
      'Communication and Information Media Staff & Head of the computer photography division',
    timePeriod: 'January 2021 – October 2022',
  },
]
