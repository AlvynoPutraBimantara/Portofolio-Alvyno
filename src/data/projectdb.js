export const projects = [
  {
    id: 1,
    title: 'Aplikasi Pengelola Buku Agenda',

    shortDesc:
      'Aplikasi web yang dikembangkan untuk Sub Bagian Umum dan Kepegawaian Dinas Lingkungan Hidup Provinsi Jawa Timur',

    tech: ['Vue.js', 'Node.js', 'MySQL', 'Bootstrap', 'Apache', 'CSS', 'Express'],

    thumbnail: new URL('../assets/images/project1/Project1.png', import.meta.url).href,

    mainImage: {
      src: new URL('../assets/images/project1/Project1.png', import.meta.url).href,
      caption: '',
    },

    description: {
      intro:
        'Aplikasi web yang dikembangkan untuk Sub Bagian Umum dan Kepegawaian Dinas Lingkungan Hidup Provinsi Jawa Timur untuk:',
      points: [
        'Membantu pegawai sub bagian Umum dan Kepegawaian menyusun buku agenda',
        'Mempermudah kegiatan pengarsipan surat masuk atau keluar dan lembar disposisinya',
        'Mempermudah kegiatan mengkaji ulang buku agenda, surat, dan lembar disposisi',
      ],
    },

    gallery: [
      {
        src: new URL('../assets/images/project1/Project1.png', import.meta.url).href,
        caption:
          'Diatas adalah tampilan halaman landing aplikasi, tampilan sederhana dengan menampilkan kantor dengan logo Jawa Timur sebagai background dan menu login ditengah halaman',
      },
      {
        src: new URL('../assets/images/project1/Project2.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman buku agenda, baik untuk surat masuk, maupun nota dinas. Buku agenda ditampilkan dalam tabel yang memiliki tiga belas kolom, dua diantaranya merupakan kolom menu untuk menampilkan lampiran surat dan menu aksi (edit dan hapus).',
      },
      {
        src: new URL('../assets/images/project1/Project10.png', import.meta.url).href,
        caption:
          'Pada atas tabel terdapat menu untuk mencari atau filter data berdasarkan kata kunci, berdasarkan bulan dan tahun, menu untuk ekspor data menjadi spreadsheet .xlsx dan menu untuk ekspor data menjadi pdf untuk dicetak.',
      },
      {
        src: new URL('../assets/images/project1/Project3.png', import.meta.url).href,
        caption:
          'Pada kolom ketiga dari kiri tabel terdapat menu untuk menampilkan lampiran surat, menu ini ditujukan untuk mempermudah pengguna untuk mengkaji ulang (crosscheck) data pada bukuagenda  ',
      },
      {
        src: new URL('../assets/images/project1/Project4.png', import.meta.url).href,
        caption:
          'Gambar diatas adalah halaman untuk pengguna bisa menyusun buku agenda, untuk menyusun buku agenda aplikasi menggunakan input from untuk kemudian akan disimpan dalam tabel. Untuk kemudahan merefrensi data dari lembar surat, sekaligus mengarsipkan surat terdapat fitur untuk melampirkan lembar surat ',
      },
      {
        src: new URL('../assets/images/project1/Project11.png', import.meta.url).href,
        caption:
          'Gambar diatas adalah tampilah dari halaman edit bukuagenda. Pengguna dapat memilih menu “Edit” pada kolom paling kanan tabel buku agenda, dengan itu akan dialihkan kehalaman edit buku agenda, pada halaman ini pengguna dapat mengubah semua parameter dari data ',
      },
      {
        src: new URL('../assets/images/project1/Project5.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan hasil output dari dari fitur ekspor data sebagai pdf, fitur ini ditujukan bilamana pengguna ingin mencetak data menjadi hard copy. Untuk menunjang fitur ini memanfaatkan plugin “JsPDF” dan “JsPdf-Autotable”.',
      },
      {
        src: new URL('../assets/images/project1/Project6.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan hasil output dari dari fitur ekspor data sebagai spreadsheet .xlsx. Untuk menunjang fitur ini memanfaatkan plugin “SheetJSStyle”.',
      },
      {
        src: new URL('../assets/images/project1/Project7.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman petunjuk penggunaan aplikasi, halaman ini berfungsi untuk membantu pengguna baru dalam menggunakan aplikasi',
      },
      {
        src: new URL('../assets/images/project1/Project12.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan Side Navigation Bar Aplikasi, Pada pojok kiri atas aplikasi atau tombol tiga garis pada bagian paling kiri dari navigation bar pengguna dapat membuka Side Navigation Bar. Tujuan dari fitur tersebut adalah untuk pengguna bisa mengaskses halaman-halaman aplikasi sehingga pengguna bisa menggunakan fitur yang dapat diakses dalam halaman tersebut. untuk halaman “Tambah Pengguna” dan “Data Pengguna” hanya tampil bila login sebagai admin',
      },
      {
        src: new URL('../assets/images/project1/Project13.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman log penulis buku agenda. Halaman ini berfungsi agar pengguna dan admin bisa mengetahui siapa penulis dari baris data ',
      },
      {
        src: new URL('../assets/images/project1/Project14.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan halaman log revisi buku agenda. Halaman ini berfungsi untuk admin dan pengguna bisa mengetahui data mana yang direvisi, siapa yang merevisi, kapan direvisi dan bagian mana dari data yang direvisi.',
      },
      {
        src: new URL('../assets/images/project1/Project15.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman Log Hapus Buku Agenda, halaman ini ditujukan untuk admin dan pengguna dapat mengetahui data mana, oleh siapa dan kapan sebuah baris data itu dihapus.',
      },
    ],

    liveUrl: '',

    githubUrl: 'https://github.com/AlvynoPutraBimantara',
  },

  {
    id: 2,
    title: 'Katalog Belanja GBWT',
    shortDesc:
      'Aplikasi katalog digital berbasis web dan mobile yang berfokus sebagai platform pemasaran bagi pelaku UMKM dan warga RW.7, Kelurahan Sambikerep, Surabaya.',
    tech: ['Vue.js', 'Node.js', 'MySQL', 'Bootstrap', 'CSS', 'Express'],
    thumbnail: new URL('../assets/images/project2/1.png', import.meta.url).href,
    mainImage: {
      src: new URL('../assets/images/project2/1.png', import.meta.url).href,
      caption: '',
    },
    description: {
      intro:
        'Proyek Akhir, aplikasi katalog digital berbasis web dan mobile yang berfokus sebagai platform pemasaran bagi pelaku UMKM dan warga RW.7, Kelurahan Sambikerep, Surabaya.',
      points: [
        'Membantu pelaku UMKM untuk memasarkan produk mereka',
        'Memudahkan warga sebagai calon pembeli mencari dan memesan produk',
      ],
    },
    gallery: [
      {
        src: new URL('../assets/images/project2/1.png', import.meta.url).href,
        caption:
          'Gambar diatas adalah tampilan halaman landing aplikasi, pada halaman landing terdapat opsi pengguna apakah ingin menggunakan aplikasi sebagai pengunjung atau menggunakan akun.',
      },
      {
        src: new URL('../assets/images/project2/3.png', import.meta.url).href,
        caption:
          'Selain terdapat menu untuk memasukkan kredensial untuk masuk menggunakan akun, pada halaman ini bisa ditemukan opsi untuk mendaftarkan akun baru dan mengubah kata sandi dengan fitur “Lupa Password”',
      },
      {
        src: new URL('../assets/images/project2/2.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan halaman daftar, pengguna yang ingin membuat akun pada aplikasi dapat memasukkan informasi akun sendiri, yang terdiri atas Nama (username), nomor telefon, alamat dan kata sandi.',
      },
      {
        src: new URL('../assets/images/project2/39.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan halaman Lupa Password, pada halaman ini pengguna diberi opsi untuk mengubah kata sandi tanpa harus login, Tujuannya apabila pemilik akun lupa dengan kata sandi akunya mereka, maka dapat mengubah kata sandi dengan kredensial yang dibutuhkan adalah nama pengguna dan nomor telefon. Selain itu pada halaman ini terdapat opsi untuk menghubungi admin apabila kesusahan.',
      },
      {
        src: new URL('../assets/images/project2/40.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman dashboard, didalamnya terdapat empat buah bagian; tiga diantaranya yang langsung menampilkan barang dagangan beserta informasi terkait barang tersebut dan bila ditekan akan langsung mengalihkan pengguna ke halaman “Detil Produk” dari barang tersebut. Sesuai dengan header setiap bagian, setiap bagian menunjukan barang dagangan yang masuk dalam kriteria tersebut; pada bagian “Produk baru” ditampilkan produk yang diunggah kurang dari tiga hari pada sistem, pada bagian “Produk populer” ditampilkan produk yang sudah dibeli lebih dari lima kali, pada bagian “Produk yang anda beli sebelumnya” menampilkan produk yang pengguna tersebut telah beli sebelumnya, bagian “Produk yang anda beli sebelumnya” tidak tersedia untuk pengguna tidak terdaftar (pengunjung). ',
      },
      {
        src: new URL('../assets/images/project2/5.png', import.meta.url).href,
        caption:
          'Gambar diatas menampilkan menu navigasi sidebar, pada opsi teratas sidebar terdapat menu Profil. Pada halaman profil pengguna dapat mempersonalisasi profil. untuk pengguna dapat mengelola dagangan, untuk pengguna dapat mengelola barang dagangan pengguna dapat mengakses menu “Dagangan Saya”, Untuk peengguna dapat mengelola transaksi, seperti konfirmasi pemesanan, pembatalan pesanan dan mencatat pesanan sebagai kasbon(belum lunas), pengguna dapat memilih menu "Penjualan saya". Untuk pengguna dapat melihat riwayat transaksi akun pengguna dapat mengakses menu "Riwayat Transaksi", untuk pengguna membutuhkan petunjuk cara menggunakan aplikasi pengguna dapat mengakses menu yang berlabel "i" sebagai informasi ',
      },
      {
        src: new URL('../assets/images/project2/51.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman profil, pada halaman ini pengguna dapat mempersonalisasi data dari akun, data yang sebelumnya dimasukkan saat mendaftarkan akun bisa diubah dan pengguna dapat menambahkan foto profil dan “Nama Warung”. Perlu diketahui bahawa “Nama Warung”  hanya dianjurkan bilamana pengguna ingin menggunakan akun untuk mempromosikan barang  dagangan, pengguna yang hanya menggunakan akun untuk berbelanja saja dianjurkan untuk mengosongi parameter tersebut.  ',
      },
      {
        src: new URL('../assets/images/project2/52.png', import.meta.url).href,
        caption:
          'Gambar diatas menunjukan tampilan dari halaman profil yang sedang dipersonmalisasi oleh pengguna, terlihat bahwa semua parameter terisi semua dan kredensial “Nama” dan “Password” telah diubah.',
      },
      {
        src: new URL('../assets/images/project2/7.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman warung, halaman ini menampilkan semua pedagang yang terdaftar dalam aplikasi. Bila di-klik maka sistem akan mengalihkan pengguna ke halaman “Detil Warung”',
      },
      {
        src: new URL('../assets/images/project2/41.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Kategori”. Pada Halaman ini sistem menampilkan kategori dari barang yang dijual dalam aplikasi. Bilamana salah satu opsi dipilih, semisal “Pakaian” maka sistem akan mengarahkan pengguna ke halaman “Detil Kategori”, dimana pada halaman tersebut hanya menampilkan barang yang masuk dalam kategori yang dipilih. ',
      },
      {
        src: new URL('../assets/images/project2/8.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Detil Warung” pada halaman ini ditampilkan nama, foto profil, alamat dan kontak dari pedagang. Bila tombol menu “Kontak via WhatsApp” di-klik maka sistem akan mengalihkan pengguna ke aplikasi whatsapp, lebih tepatnya ke nomor kontak whatsapp dari pedagang, fitur tersebut digunakan agar calon pembeli dapat berkomunikasi dengan pedagang, sistem menggunakan API whatsapp untuk menyederhanakan aplikasi. Pada halaman ini terdapat dua buah opsi, pada kiri halaman terdapat opsi untuk pencarian barang menurut kata kunci, kemudian pada kanan halaman terdapat opsi untuk mengurutkan data barang yang ditampilkan menurut parameter yang sudah ditentukan. Untuk barang pada halaman ini ditampilkan dengan gaya yang sama dengan yang ada pada halaman Dashboard, dimana bila ditekan akan langsung mengalihkan pengguna ke halaman “Detil Produk” dari barang tersebut.',
      },
      {
        src: new URL('../assets/images/project2/42.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan halaman "Detil Produk", Pada halaman ini pengguna bisa memesan sebuah produk. Halaman ini menampilkan informasi relevan mengenai produk, seperti nama, keterangan, pedagang dan jumlah stok. Pada Halaman ini terdapat opsi menu untuk mengatur jumlah dari barang yang akan dipesan. Pada gambar diatas sistem mencegah pengguna untuk memesan barang tersebut dikarenakan barang tersebut merupakan barang dagangan dari pengguna itu sendiri. Tepat disebelah kiri tombol “Tambah ke Keranjang” terdapat opsi untuk pengguna dapat menghubungi pedagang mengenai produk yang dipilih melalui WhatsApp. Pada bagian paling bawah halaman terdapat Tombol untuk melaporkan produk, Pengguna dapat melaporkan kepada admin aplikasi apabila barang dagangan yang di-iklankan bermasalah atau tidak layak untuk dipasarkan. ',
      },
      {
        src: new URL('../assets/images/project2/11.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Produk”. Pada halaman ini semua produk yang dijual dalam aplikasi ditampilkan, dan seperti sebelumnya barang pada halaman ini ditampilkan dengan gaya yang sama dengan yang ada pada halaman Dashboard, dimana bila ditekan akan langsung mengalihkan pengguna ke halaman “Detil Produk” dari barang tersebut. Untuk mempermudah pengguna mencari barang, terdapat opsi cari dengan kata atau opsi sorting.',
      },
      {
        src: new URL('../assets/images/project2/10.png', import.meta.url).href,
        caption:
          'Untuk mempermudah pengguna mencari sebuah barang yang diinginkan, terdapat menu cari berdasarkan kata kunci, menu ini akan mencocokkan nama barang dengan kueri yang dimasukkan dan hanya akan menampilkan data barang yang cocok saja, pada kasus pada gambar diatas ketika memasukkan kata kunci “Sepatu” maka sistem akan hanya menampilkan barang yang memiliki kata “Sepatu” pada namanya .',
      },
      {
        src: new URL('../assets/images/project2/12.png', import.meta.url).href,
        caption:
          'Untuk mempermudah pengguna mencari sebuah barang yang diinginkan, terdapat menu opsi sorting, opsi tersebut akan mengurutkan atau mengelompokan data barang yang ditampilkan menurut parameter yang sudah ditentukan.',
      },
      {
        src: new URL('../assets/images/project2/13.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Detil Kategori”. Halaman ini adalah terusan dari halaman “Kategori”, yang bilamana pengguna memilih salah satu opsi, semisal “Pakaian” maka pada halaman ini akan hanya menampilkan barang yang masuk dalam kategori yang “Pakaian” dan seperti sebelumnya barang pada halaman ini ditampilkan dengan gaya yang sama dengan yang ada pada halaman Dashboard, dimana bila ditekan akan langsung mengalihkan pengguna ke halaman “Detil Produk” dari barang tersebut.',
      },
      {
        src: new URL('../assets/images/project2/43.png', import.meta.url).href,
        caption:
          'Seperti yang disebutkan sebelumnya, sistem memiliki fungsi untuk mencegah pengguna untuk membeli barang dagangannya sendiri, maka jika barang yang akan dipesan bukan barang dagangan sendiri pengguna dapat memesan barang tersebut dengan tombol “Tambah Keranjang” yang terdapat pada pojok bawah kanan halaman. Bila berhasil maka informasi pesanan dapat dilihat pada keranjang belanja.',
      },
      {
        src: new URL('../assets/images/project2/45.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Keranjang belanja” pada halaman ini pengguna bisa mengatur kembali detil pesanan, seperti jumlah barang yang dipesan, menghapus atau menambahkan lagi. Pada Halaman ini terdapat fitur untuk memberi catatan. Perlu diketahui skenario pada gambar diatas merupakan pengguna memesan barang dari dua pedagang yang berbeda, sehingga pengguna diberi opsi untuk mengatur pesanan ke masing-masing pedagang atau pengguna bisa langsung checkout semua pesanan sekaligus.',
      },
      {
        src: new URL('../assets/images/project2/44.png', import.meta.url).href,
        caption:
          'Halaman ini memiliki versi yang berbeda untuk pengguna tidak terdaftar (pengunjung). Diingatkan kembali bahwa pengguna tidak perlu memiliki akun  untuk menggunakan aplikasi ini, maka diakarenakan tidak terdapat akun yang memiliki data pribadi maka sebelum memesan pengguna pengujung diharuskan memberi keterangan nama pemesan dan alamat pemesan.',
      },
      {
        src: new URL('../assets/images/project2/15.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “struk”, halaman ini adalah langkah terakhir dari proses pemesanan oleh pengguna. Tujuan dari halaman ini sebagai konfirmasi terakhir pengguna apakah ingin memesan apa yang dipesan. Halaman ini membuat sebuah struk dari pesanan, seperti yang disebutkan sebelumnya bahwa bilamana pengguna memesan dua atau lebih produk yang masing-masing berasal dari pedagang yang berbeda maka akan dibuatkan struk untuk masing-masing asal pedagang, jadi dalam skenario tersebut pada halaman ini akan terlihat lebih dari satu struk pemesanan. Pengguna diberi tiga opsi pada halaman ini mengenai pesanannya; “Pesan” yaitu konfirmasi untuk memesan barang, “Hapus” untuk membatalkan pesanan, dan “Download Struk” untuk menyimpan atau mengunduh struk ke perangkat. ',
      },
      {
        src: new URL('../assets/images/project2/46.png', import.meta.url).href,
        caption:
          'Salah satu opsi yang bisa ditemukan pada halaman ini adalah “Download Struk”, fungsi ini akan menyimpan atau mengunduh struk ke perangkat.',
      },
      {
        src: new URL('../assets/images/project2/47.png', import.meta.url).href,
        caption:
          'Tujuan utama dari halaman ini sebagai konfirmasi terakhir pengguna apakah ingin memesan apa yang dipesan, bila dirasa sudah yakin degan yang akan dipesan maka pengguna bisa menekan tombol “Pesan” dan sistem akan meneruskan pesanan ke pedagang.',
      },
      {
        src: new URL('../assets/images/project2/16.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan halaman “Penjualan”, halaman ini berfungsi untuk pedagang bisa mengelola pesanan dari barang dagangannya. Halaman ini menampilkan informasi-informasi relevan mengenai pesanan dari pembeli, seperti total harga, pemesan, alamat pemesan, barang yang dipesan, waktu pesan, catatan dan struk pesan. Pada bagian paling kanan, terdapat kolom aksi, pada kolom tersebuit terdapat tiga buah opsi; “Terima pesanan” sebagai konfirmasi bahwa pesanan sidah diterima penjual atau transaksi sudah selesai, “Kasbon” untuk menadai pesanan sudah diterima, namun belum dibayar, sehingga transaksi belum sepenuhnya selesai dan “Kembalikan” yang berfungsi untuk membatalkan pesanan, jika pengguna memilih opsi “Kembalikan” maka sistem akan mengembalikan jumlah stok yang selumnya dikurangi dari proses checkout pada langkah pemesanan sebelumnya. ',
      },
      {
        src: new URL('../assets/images/project2/17.png', import.meta.url).href,
        caption:
          'Pada kolom paling kiri sebelum kolom “id” terdapat kolom “struk” pada kolom ini terdapat menu unuk menampilkan struk dari data pemesanan.',
      },
      {
        src: new URL('../assets/images/project2/48.png', import.meta.url).href,
        caption:
          'Menu “Kasbon” berfungsi untuk menadai  atau pengungat bahwa pesanan sudah diterima, namun belum dibayar, sehingga transaksi belum sepenuhnya selesai. Bila pengguna memilih menu ini makan pesanan akan diberi status “Kasbon” dan dipindah ke halaman “Kasbon”.',
      },
      {
        src: new URL('../assets/images/project2/18.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Kasbon”. Seperti yang sudah disebutkan sebelumnya bahwa terdapat fitur “Kasbon” berfungsi untuk menadai  atau pengungat bahwa pesanan sudah diterima, namun belum dibayar.',
      },
      {
        src: new URL('../assets/images/project2/49.png', import.meta.url).href,
        caption:
          'Seperti yang disebutkan sebelumnya bahwa fitur “Kasbon” berfungsi untuk menadai  atau pengungat bahwa pesanan sudah diterima, namun belum dibayar. Bila pesanan sudah dibayar maka pengguna bisa menekan menu “Lunas”, maka sistem akan mengubah status pesanan menjadi “Lunas”.',
      },
      {
        src: new URL('../assets/images/project2/50.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Riwayat Transaksi”. Halaman ini berfungsi untuk menampilkan riwayat transaksi dari akun pedagang. Perlu diketahui bahwa aplikasi memiliki beberapa fungsi yang menggunakan data riwayat transaksi untuk bekerja, seperti, “Produk yang dibeli sebelumnya”, “produk populer” dan menu sorting “pembelian terbanyak”.',
      },
      {
        src: new URL('../assets/images/project2/21.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Data User”. Halaman tersebut hanya dapat diakses oleh admin dengan menggunakan akun admin. Pada halaman ini admin dapat megelola data dari semua akun pengguna. Admin memiliki hak akses yang sama dengan pengguna untuk mengelola data akun, sehingga bila admin dibutuhkan untuk mengubah data pengguna admin dapat mengubahnya dengan mengakses menu “Edit” pada kolom “Aksi”  di bagian kanan halaman. Menu tersebut akan mengalihkan admin kepada halaman “Profil Admin”.',
      },
      {
        src: new URL('../assets/images/project2/53.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Data Produk ” Pada halaman ini admin dapat megelola data dari semua barang dagangan yang diunggah ke sistem. Admin memiliki hak akses yang sama dengan pengguna untuk mengelola data produk, sehingga bila admin dibutuhkan untuk mengubah data produk, admin dapat mengubahnya dengan mengakses menu “Edit” pada kolom “Aksi”  di bagian kanan halaman. Menu tersebut akan mengalihkan admin kepada halaman “Update Produk”.',
      },
      {
        src: new URL('../assets/images/project2/23.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Data Kategori”. Pada halaman ini admin dapat megelola data dari kategori barang dagangan yang dijual dalam apliaksi, admin dapat menambahkan kategori baru dengan mengakes halaman “Tambah Kategori” yang dapat ditemukan pada bagian bawah halaman, serta admin dapat mengubah data kategori dengan mengakses menu “Edit” pada kolom “Aksi” di bagian kanan halaman. Menu tersebut akan mengalihkan admin kepada halaman “Update Kategori”.',
      },
      {
        src: new URL('../assets/images/project2/26.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas adalah tampilan halaman landing versi mobile aplikasi, pada halaman landing terdapat opsi pengguna apakah ingin menggunakan aplikasi sebagai pengunjung atau menggunakan akun',
      },
      {
        src: new URL('../assets/images/project2/54.jpeg', import.meta.url).href,
        caption:
          'Selain terdapat menu untuk memasukkan kredensial untuk masuk menggunakan akun, pada halaman ini bisa ditemukan opsi untuk mendaftarkan akun baru dan mengubah kata sandi tanpa harus Login dengan menggunakan fitur “Lupa Password',
      },
      {
        src: new URL('../assets/images/project2/27.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan halaman daftar versi mobile, pengguna yang ingin membuat akun pada aplikasi dapat memasukkan informasi akun sendiri, yang terdiri atas Nama (useraname), nomor telefon, alamat dan kata sandi.',
      },
      {
        src: new URL('../assets/images/project2/29.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan halaman dashboard versi mobile, bilamana pengguna berhasil melakukan login maka sistem akan meneruskan pengguna pada halaman tersebut. ',
      },
      {
        src: new URL('../assets/images/project2/28.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman warung versi mobile, halaman ini menampilkan semua pedagang yang terdaftar dalam aplikasi. Bila di-klik maka sistem akan mengalihkan pengguna ke halaman “Detil Warung”',
      },
      {
        src: new URL('../assets/images/project2/55.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Detil Warung” versi mobile pada halaman ini ditampilkan nama, foto profil, alamat dan kontak dari pedagang. Bila tombol menu “Kontak via WhatsApp” di-klik maka sistem akan mengalihkan pengguna ke aplikasi whatsapp, lebih tepatnya ke nomor kontak whatsapp dari pedagang, fitur tersebut digunakan agar calon pembeli dapat berkomunikasi dengan pedagang, sistem menggunakan API whatsapp untuk menyederhanakan aplikasi. Pada halaman ini terdapat dua buah opsi, pada kiri halaman terdapat opsi untuk pencarian barang menurut kata kunci, kemudian pada kanan halaman terdapat opsi untuk mengurutkan data barang yang ditampilkan menurut parameter yang sudah ditentukan. Untuk barang pada halaman ini ditampilkan dengan gaya yang sama dengan yang ada pada halaman Dashboard, dimana bila ditekan akan langsung mengalihkan pengguna ke halaman “Detil Produk” dari barang tersebut.',
      },
      {
        src: new URL('../assets/images/project2/56.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman Produk versi mobile. Pada halaman ini semua produk yang dijual dalam aplikasi ditampilkan, dan seperti sebelumnya barang pada halaman ini ditampilkan dengan gaya yang sama dengan yang ada pada halaman Dashboard, dimana bila ditekan akan langsung mengalihkan pengguna ke halaman “Detil Produk” dari barang tersebut. Untuk mempermudah pengguna mencari barang, terdapat opsi cari dengan kata atau opsi sorting.',
      },
      {
        src: new URL('../assets/images/project2/31.jpeg', import.meta.url).href,
        caption:
          'Pada halaman ini pengguna bisa memesan sebuah produk. Halaman ini menampilkan informasi relevan mengenai produk, seperti nama, keterangan, pedagang dan jumlah stok. Pada Halaman ini terdapat opsi menu untuk mengatur jumlah dari barang yang akan dipesan. Pada gambar diatas sistem mencegah pengguna untuk memesan barang tersebut dikarenakan barang tersebut merupakan barang dagangan dari pengguna itu sendiri.',
      },
      {
        src: new URL('../assets/images/project2/30.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Kategori” versi mobile. Pada Halaman ini sistem menampilkan kategori dari barang yang dijual dalam aplikasi. Bilamana salah satu opsi dipilih, semisal “Pakaian” maka sistem akan mengarahkan pengguna ke halaman “Detil Kategori”, dimana pada halaman tersebut hanya menampilkan barang yang masuk dalam kategori yang dipilih. ',
      },
      {
        src: new URL('../assets/images/project2/58.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Detil Kategori” versi mobile. Halaman ini adalah terusan dari halaman “Kategori”, yang bilamana pengguna memilih salah satu opsi, semisal “Pakaian” maka pada halaman ini akan hanya menampilkan barang yang masuk dalam kategori yang “Pakaian” dan seperti sebelumnya barang pada halaman ini ditampilkan dengan gaya yang sama dengan yang ada pada halaman Dashboard, dimana bila ditekan akan langsung mengalihkan pengguna ke halaman “Detil Produk” dari barang tersebut.',
      },
      {
        src: new URL('../assets/images/project2/59.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari halaman “Keranjang belanja” versi mobile, pada halaman ini pengguna bisa mengatur kembali detil pesanan, seperti jumlah barang yang dipesan, menghapus atau menambahkan lagi. Pada Halaman ini terdapat fitur untuk memberi catatan. Perlu diketahui skenario pada gambar diatas merupakan pengguna memesan barang dari dua pedagang yang berbeda, sehingga pengguna diberi opsi untuk mengatur pesanan ke masing-masing pedagang atau pengguna bisa langsung checkout semua pesanan sekaligus.',
      },
      {
        src: new URL('../assets/images/project2/32.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan versi mobile dari halaman “struk”, halaman ini adalah langkah terakhir dari proses pemesanan oleh pengguna. Tujuan dari halaman ini sebagai konfirmasi terakhir pengguna apakah ingin memesan apa yang dipesan. Halaman ini membuat sebuah struk dari pesanan, seperti yang disebutkan sebelumnya bahwa bilamana pengguna memesan dua atau lebih produk yang masing-masing berasal dari pedagang yang berbeda maka akan dibuatkan struk untuk masing-masing asal pedagang, jadi dalam skenario tersebut pada halaman ini akan terlihat lebih dari satu struk pemesanan. Pengguna diberi tiga opsi pada halaman ini mengenai pesanannya; “Pesan” yaitu konfirmasi untuk memesan barang, “Hapus” untuk membatalkan pesanan, dan “Download Struk” untuk menyimpan atau mengunduh struk ke perangkat. ',
      },
      {
        src: new URL('../assets/images/project2/38.jpeg', import.meta.url).href,
        caption: 'Halaman Sidebar versi mobile',
      },
      {
        src: new URL('../assets/images/project2/33.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan versi mobile dari halaman profil, pada halaman ini pengguna dapat mempersonalisasi data dari akun, data yang sebelumnya dimasukkan saat mendaftarkan akun bisa diubah dan pengguna dapat menambahkan foto profil dan “Nama Warung”. Perlu diketahui bahawa “Nama Warung”  hanya dianjurkan bilamana pengguna ingin menggunakan akun untuk mempromosikan barang  dagangan, pengguna yang hanya menggunakan akun untuk berbelanja saja dianjurkan untuk mengosongi parameter tersebut.  ',
      },
      {
        src: new URL('../assets/images/project2/35.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari versi mobile halaman “Dagangan”. Pada halaman in pengguna dapat melihat dan mengelola barang dagangan mereka. Untuk pengguna dapat menggungah barang dagangan ke aplikasi pengguna bisa mengakses menu “Tambah Produk” .untuk mengelola data dari barang dagangan pengguna dapat melakukannya dengan halaman “Update Produk”, untuk mengakses halaman “Update Produk” pengguna dapat menekan tampilan barang dagangan dalam halaman “Dagangan”, maka sistem akan mengalihkan pengguna kehalaman “Update Produk” yang berisi data dari barang dagangan yang dipilih. ',
      },
      {
        src: new URL('../assets/images/project2/60.png', import.meta.url).href,
        caption:
          'Gambar diatas merupakan halaman tambah produk versi mobile, untuk pengguna dapat menambahkan barang dagangan, pengguna dapat menambahkan gambar, nama produk, harga, kategori, keterangan dan stok barang.',
      },
      {
        src: new URL('../assets/images/project2/34.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan versi mobile dari halaman “Penjualan”, halaman ini berfungsi untuk pedagang bisa mengelola pesanan dari barang dagangannya. Halaman ini menampilkan informasi-informasi relevan mengenai pesanan dari pembeli, seperti total harga, pemesan, alamat pemesan, barang yang dipesan, waktu pesan, catatan dan struk pesan. Pada bagian paling kanan, terdapat kolom aksi, pada kolom tersebuit terdapat tiga buah opsi; “Terima pesanan” sebagai konfirmasi bahwa pesanan sidah diterima penjual atau transaksi sudah selesai, “Kasbon” untuk menadai pesanan sudah diterima, namun belum dibayar, sehingga transaksi belum sepenuhnya selesai dan “Kembalikan” yang berfungsi untuk membatalkan pesanan, jika pengguna memilih opsi “Kembalikan” maka sistem akan mengembalikan jumlah stok yang sebelumnya dikurangi dari proses checkout pada langkah pemesanan sebelumnya. ',
      },
      {
        src: new URL('../assets/images/project2/36.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan dari struk pemesanan pada tampilan mobile, Pada kolom paling kiri sebelum kolom “id” terdapat kolom “struk” pada kolom ini terdapat menu unuk menampilkan struk dari data pemesanan.',
      },
      {
        src: new URL('../assets/images/project2/37.jpeg', import.meta.url).href,
        caption:
          'Gambar diatas merupakan tampilan versi mobile dari halaman “Riwayat Transaksi”. Halaman ini berfungsi untuk menampilkan riwayat transaksi dari akun pedagang. Perlu diketahui bahwa aplikasi memiliki beberapa fungsi yang menggunakan data riwayat transaksi untuk bekerja, seperti, “Produk yang dibeli sebelumnya”, “produk populer” dan menu sorting “pembelian terbanyak”.',
      },
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/AlvynoPutraBimantara',
  },
]

export const bio = {
  name: 'Alvyno Putra Bimantara',
  role: 'Fresh Graduate — D3 Teknik Informatika',
  location: 'Surabaya, Indonesia, 60217',
  email: 'alvyno.putra.b@gmail.com',
  whatsapp: '+6287857909820',
  github: 'https://github.com/AlvynoPutraBimantara',
  linkedin: 'https://linkedin.com/in/alvynoputrabimantara',
  about:
    'Perkenalkan, saya Alvyno Putra Bimantara A.Md. Kom., saya merupakan Fresh Graduate D3 Teknik Informatika dari Politeknik Elektronika Negeri Surabaya. Saya memiliki kompetensi dan pengalaman dalam pengembangan aplikasi web, IT support dan melakukan pekerjaan data entry pada salah satu kantor instansi pemerintah. Saya tertarik pada pembelajaran teknologi baru, termasuk penerapan Artificial Intelligence (AI) dalam alur pekerjaan sehari-hari untuk meningkatkan efisiensi.',
  profilepict: new URL('../assets/images/Pas foto 2025.jpg', import.meta.url).href,
}

export const cvSections = [
  {
    id: 'about',
    label: 'About Me',
    faIcon: ['fas', 'circle-user'],
    items: [
      {
        title: 'Tentang Saya',
        points: [
          'Perkenalkan, saya Alvyno Putra Bimantara A.Md. Kom., saya merupakan Fresh Graduate D3 Teknik Informatika dari Politeknik Elektronika Negeri Surabaya. Saya memiliki kompetensi dan pengalaman dalam pengembangan aplikasi web, IT support dan melakukan pekerjaan data entry pada salah satu kantor instansi pemerintah. Saya tertarik pada pembelajaran teknologi baru, termasuk penerapan Artificial Intelligence (AI) dalam alur pekerjaan sehari-hari untuk meningkatkan efisiensi.',
        ],
        images: [],
      },
    ],
  },

  {
    id: 'education',
    label: 'Education',
    faIcon: ['fas', 'graduation-cap'],
    items: [
      {
        title: 'Politeknik Elektronika Negeri Surabaya',
        subtitle: 'D3 Teknik Informatika',
        period: '2022 – 2025',
        badge: 'IPK: 3.58',
        points: [
          'Program Studi D3 Teknik Informatika.',
          'IPK: 3.58',
          'Proyek Akhir: Katalog Belanja GBWT (Gerakan Belanja di Warung Tetangga) — Aplikasi Pendukung Program Pemberdayaan UMKM RW 7 Kel. Sambikerep Surabaya.',
        ],
        images: [
          {
            src: new URL('../assets/images/Scan Ijazah.jpg', import.meta.url).href,
            caption: { intro: 'Ijazah D3 Teknik Informatika, PENS.', points: [] },
          },
        ],
      },
    ],
  },

  {
    id: 'experience',
    label: 'Experience',
    faIcon: ['fas', 'briefcase'],
    items: [
      {
        title: 'HelloCation',
        subtitle: 'Relawan — Staff Devisi IT',
        period: 'Juni 2026 - ...',
        badge: 'Volunteer',
        points: [
          'Mengeksekusi pembuatan desain antarmuka (untuk Staff UI/UX) atau melakukan integrasi/slicing desain ke sistem WordPress.',
          'Melakukan pemeliharaan dan Melaporkan kendala teknis sistem informasi (website) secara rutin.',
          'Membantu divisi event dengan bertugas sebagai asisten operator Live Streaming, moderator / IT Support (misalnya memantau chat/live dashboard, menyiapkan slide presentasi) pada hari H event.',
        ],
        tags: ['Wordpress', 'Elementor', 'Figma', 'OBS'],
        images: [
          {
            src: new URL('../assets/images/Screenshot (1633).png', import.meta.url).href,
            caption: {
              intro: 'Online meet briefing pekerjaan proyek web development ',
              points: [],
            },
          },
        ],
      },
      {
        title: 'Dinas Lingkungan Hidup Prov. Jawa Timur',
        subtitle: 'Magang — Asisten Teknisi IT dan Petugas Data Entry',
        period: 'Juli 2024 – November 2024',
        badge: 'Internship',
        points: [
          'Bertugas sebagai asisten teknisi IT (IT support).',
          'Mengembangkan aplikasi guna kebutuhan data entry dan pengarsiapan surat berbasis web server lokal.',
          'Membantu staff sub-bagian tata usaha melakukan data entry pada TNDE.',
          'Membantu staff sub-bagian tata usaha melakukan kegiatan administrasi surat menyurat',
        ],
        tags: ['Microsoft Office', 'Vue.js', 'Node.js', 'MySQL', 'Apache', 'Ubuntu'],
        images: [
          {
            src: new URL('../assets/images/magang1.jpg', import.meta.url).href,
            caption: { intro: 'Surat konfirmasi pelaksanaan magang.', points: [] },
          },
          {
            src: new URL('../assets/images/magang2.jpg', import.meta.url).href,
            caption: { intro: 'Presentasi proyek magang ke staff kantor.', points: [] },
          },
        ],
      },
    ],
  },

  {
    id: 'training',
    label: 'Training',
    faIcon: ['fas', 'person-chalkboard'],
    items: [
      {
        title: 'UPT BLK Kota Surabaya',
        subtitle: 'Pemasangan Jaringan Komputer',
        period: 'Oktober 2025 – Desember 2025',
        badge: 'Completed',
        points: [
          'Pelatihan resmi menyangkut jaringan komputer di UPT BLK Kota Surabaya.',
          'Materi mencakup instalasi hardware jaringan, setup LAN, WLAN, dan konfigurasi routing protocol.',
        ],
        images: [
          {
            src: new URL(
              '../assets/images/certificates/Scan sertifikat pelatihan.jpg',
              import.meta.url,
            ).href,
            caption: {
              intro: 'Sertifikat Pemasangan Jaringan Komputer, UPT BLK Kota Surabaya.',
              points: [
                'Pelatihan resmi menyangkut jaringan komputer di UPT BLK Kota Surabaya.',
                'Materi mencakup instalasi hardware jaringan, setup LAN, WLAN, dan konfigurasi routing protocol.',
              ],
            },
          },
        ],
      },
    ],
  },

  {
    id: 'certifications',
    label: 'Certifications',
    faIcon: ['fas', 'award'],
    items: [
      {
        title: 'Pemasangan Jaringan Komputer',
        subtitle: 'UPT BLK Kota Surabaya',
        period: 'Diterbitkan November 2025 s.d. November 2035',
        badge: '',
        points: [
          'Sertifikat resmi pelatihan pemasangan jaringan komputer dari UPT BLK Kota Surabaya.',
          'Sertifikat kompetensi menyangkut: Instalasi hardware jaringan komputer, Setup LAN (Local Area Network) dan WLAN (Wireless LAN), Konfigurasi Routing Protocol: BGP, OSPF, EIGRP, TCP/IP. ',
        ],
        images: [
          {
            src: new URL(
              '../assets/images/certificates/Scan sertifikat pelatihan.jpg',
              import.meta.url,
            ).href,
            caption: {
              intro: 'Sertifikat Pemasangan Jaringan Komputer dari UPT BLK Kota Surabaya.',
              points: [
                'Sertifikat resmi pelatihan Pemasangan Jaringan Komputer dari UPT BLK Kota Surabaya.',
                'Sertifikat kompetensi menyangkut: Instalasi hardware jaringan komputer, Setup LAN (Local Area Network) dan WLAN (Wireless LAN), Konfigurasi Routing Protocol: BGP, OSPF, EIGRP, TCP/IP. ',
              ],
            },
          },
        ],
      },
      {
        title: 'Sertifikat Kompetensi Bhs. Inggris',
        subtitle: 'PENS Language and Culture Center (PLCC)',
        period: 'Diterbitkan Juli 2025 s.d. Juli 2027',
        badge: '',
        points: [
          'TOEFL ITP (like) dengan skor 553.',
          'Diterbitkan oleh PENS Language and Culture Center (PLCC).',
          'Berlaku hingga Juli 2027.',
        ],
        images: [
          {
            src: new URL(
              '../assets/images/certificates/Sertifikat Bahasa Inggris.jpg',
              import.meta.url,
            ).href,
            caption: {
              intro: 'TOEFL ITP (like) Certificate dari PENS Language and Culture Center (PLCC).',
              points: ['Skor: 553', 'Berlaku hingga Juli 2027.'],
            },
          },
        ],
      },
      {
        title: 'Sertifikasi pembelajaran singkat daring',
        subtitle: '',
        period: '',
        badge: '',
        points: [],
        images: [
          {
            src: new URL('../assets/images/certificates/BuildanAIAgent.jpg', import.meta.url).href,
            caption: {
              intro: 'IBM SkillsBuild — Build an AI Agent.',
              points: [
                'Fundamental AI untuk programming dan AI Agents.',
                'AI Ethics, Generative AI, Critical Thinking, Problem Solving.',
                'Agent Deployment Lifecycle, Agentic AI, AI Agent Workflow.',
                'Evaluation Metrics, IBM watsonx.ai.',
                'PWID-B1021600.',
              ],
            },
          },
          {
            src: new URL(
              '../assets/images/certificates/ExcelPivotTableMySkill.jpg',
              import.meta.url,
            ).href,
            caption: {
              intro: 'MySkill - Pivot Table in Microdoft Excel',
              points: ['Fundamental menggunakan tool pivot table pada Microsoft Excel'],
            },
          },
          {
            src: new URL(
              '../assets/images/certificates/Cisco Academy Intro to Cybersecurity.jpg',
              import.meta.url,
            ).href,
            caption: {
              intro: 'Cisco Academy — Introduction to Cybersecurity.',
              points: [
                'Threat Detection dan Cyber Best Practices.',
                'Network Vulnerabilities.',
                'Privacy and Data Confidentiality.',
              ],
            },
          },
          {
            src: new URL('../assets/images/certificates/Cloud_Architecting.jpg', import.meta.url)
              .href,
            caption: {
              intro: 'AWS Academy — Cloud Architecting.',
              points: [
                'Architecting Solutions on AWS.',
                'AWS Cloud Best Practices.',
                'Building Infrastructure on AWS.',
              ],
            },
          },
          {
            src: new URL('../assets/images/certificates/Cloud_Foundations.jpg', import.meta.url)
              .href,
            caption: {
              intro: 'AWS Academy — Cloud Foundations.',
              points: [
                'AWS Architecture dan AWS Cloud.',
                'AWS Core Services dan AWS Pricing.',
                'AWS Support.',
              ],
            },
          },
          {
            src: new URL('../assets/images/certificates/NetworkTechnician.jpg', import.meta.url)
              .href,
            caption: {
              intro: 'Cisco Academy — Network Technician.',
              points: [
                'Cisco IOS, Cisco Routers, Cisco Switches, Cisco Devices.',
                'Ethernet, Network Media, Network Types, Network Layer Protocols.',
                'IPv4 dan IPv6 Addressing.',
                'Transport Layer Protocols, Application Layer Services.',
                'Cloud Services, Wireless Access.',
                'Binary Systems, Protocols Standards, Documentation.',
                'Hierarchical Network Design, Network Troubleshooting.',
                'Endpoint Devices, Help Desk, User Support.',
              ],
            },
          },
          {
            src: new URL('../assets/images/certificates/Vibe Coding-intro.jpg', import.meta.url)
              .href,
            caption: {
              intro: 'Pengenalan fundamental Vibe-coding untuk Software Development.',
              points: [],
            },
          },
          {
            src: new URL('../assets/images/certificates/Data Analyst-intro.jpg', import.meta.url)
              .href,
            caption: {
              intro: 'Pengenalan fundamental mengenai analisis data.',
              points: [],
            },
          },
          {
            src: new URL(
              '../assets/images/certificates/Dibimbing_Data Analytics.jpg',
              import.meta.url,
            ).href,
            caption: {
              intro: 'Pengenalan fundamental mengenai analisis data.',
              points: [],
            },
          },
          {
            src: new URL('../assets/images/certificates/dibimbing certificate.jpg', import.meta.url)
              .href,
            caption: {
              intro: 'Dibimbing - Fullstack Web Development.',
              points: ['Pengenalan fundamental Vibe-coding untuk Web Development.'],
            },
          },
        ],
        tags: ['Cisco', 'AWS Academy', 'IBM Skillsbud', 'RevoU', 'Dibimbing'],
      },
    ],
  },

  {
    id: 'skills',
    label: 'Skills',
    faIcon: ['fas', 'bolt'],
    items: [
      {
        title: 'Programming & Web Development',
        points: [
          'Vue.js — Membangun halaman frontend',
          'HTML & CSS — Membangun Layout responsif dan styling website',
          'PHP — Digunakan untuk fitur backend dasar dan aplikasi web',
          'Bootstrap — Membantu mempercepat pembuatan tampilan UI yang responsif',
          'Node.js — Digunakan untuk logika backend dan menjalankan JavaScript di sisi server',
          'Express — Digunakan untuk membuat REST API dan mengatur routing backend',
          'MySQL — Database relasional, tabel, dan query',
          'Apache Web Server — Melakukan konfigurasi dan menjalankan environment web lokal/server',
          'Ubuntu — Familiar dengan environment Linux dan setup server sederhana',
        ],
        tags: [
          'Vue.js',
          'HTML',
          'CSS',
          'Bootstrap',
          'Node.js',
          'Express',
          'MySQL',
          'PHP',
          'Apache',
          'Ubuntu',
        ],
        images: [],
      },
      {
        title: 'Computer Networking',
        points: [
          'Instalasi hardware jaringan komputer.',
          'Setup LAN (Local Area Network) dan WLAN (Wireless LAN).',
          'Konfigurasi Routing Protocol: BGP, OSPF, EIGRP, TCP/IP.',
        ],
        tags: ['LAN', 'WLAN', 'BGP', 'OSPF', 'EIGRP', 'TCP/IP'],
        images: [],
      },
      {
        title: 'Office & Productivity',
        points: ['Microsoft Office (Word, Excel, PowerPoint).'],
        tags: ['Microsoft Office'],
        images: [],
      },
    ],
  },
]
