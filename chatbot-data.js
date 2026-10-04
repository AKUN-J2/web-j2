// chatbot-data.js

const chatbotResponses = [

    {
        keywords: ["ulang tahun", "ultah", "lahir"],
        response: "Kalau mau kepo siapa yang lagi ultah atau mau ngasih kado, cek aja di menu 'Siswa' bro. Rata-rata sih anak-anak sini kelahiran 2008-2009. Masih pada muda dan berbahaya!"
    },
    {
        keywords: ["belajar", "suasana belajar", "pelajaran"],
        response: "Belajar di TKJ 2 tuh vibes-nya asik abis! Kadang serius banget sampai pada diem mikir (apalagi kalau ngoding error mulu), tapi lebih seringnya diselingin ketawa-ketiwi biar otak nggak meledak."
    },
    {
        keywords: ["3 tahun", "10-12", "kelas 10", "perjalanan"],
        response: "Gila sih, 3 tahun bareng tuh nggak kerasa. Waktu kelas 10 masih pada jaim dan cupu, sekarang udah kayak keluarga sendiri. Banyak banget drama, nangis, ketawa bareng dari tugas sampai praktikum."
    },
    {
        keywords: ["struktur kelas", "ketua", "babu", "pengurus"],
        response: "Kelas kita dikomandoin sama Nuril (Ketua) dan Nasrul (Wakil). Dibantu juga sama sekretaris dan bendahara yang galak kalau nagih uang kas wkwk. Cek aja lengkapnya di menu 'Struktur'."
    },
    {
        keywords: ["guru favorit", "paling disukai", "guru asik"],
        response: "Guru favorit sih beda-beda ya tiap orang. Tapi mayoritas demen banget sama guru produktif yang ngajarnya santai, sabar ngejelasin pas kita lemot, dan ngasih tugasnya masuk akal!"
    },

    {
        keywords: ["wali kelas", "walikelas"],
        response: "Wali kelas kita (Bu Ester, Bu Erin, Bu Seka) semuanya the best lah pokoknya! Super sabar ngadepin 40 anak yang kelakuannya ajaib-ajaib. Nggak ada yang nggak disuka, semuanya juara di hati."
    },
    {
        keywords: ["pendapat", "pribadi", "terhadap kelas", "gimana kelas ini"],
        response: "Menurut anak-anak sih, TKJ 2 ini kelas yang paling solid se-angkatan. Walau kadang suka berantem kecil atau ejek-ejekan, tapi kalau udah diserang dari luar atau ada proker bareng, kita auto bersatu jadi tameng!"
    },
    {
        keywords: ["praktikum", "lab", "keasikan", "bengkel"],
        response: "Nah ini! Praktikum di Lab Komputer 1 tuh surga (dan neraka) kita. Asiknya pas nyambungin kabel LAN atau ngerakit PC. Pusingnya pas troubleshooting error nggak kelar-kelar sampai jam istirahat abis."
    },
    {
        keywords: ["sejarah", "sejarah kelas", "asal mula"],
        response: "Sejarahnya panjang bos! Intinya dari awal masuk kelas 10, kita digabungin dari berbagai SMP. Awalnya pada diem-dieman, eh lama-lama sifat aslinya keluar semua dan jadilah kelas barbar yang solid ini."
    },
    {
        keywords: ["kisah", "cerita", "kenangan", "memori"],
        response: "Banyak banget kenangan gokil! Mulai dari ketahuan tidur pas jam kosong, ngerjain temen pas ultah, sampai tragedi nyontek massal waktu UTS. Biar lu lebih ngerasain vibes-nya, pantengin aja foto-foto di Galeri."
    },
    {
        keywords: ["kelompok", "geng", "sirkel"],
        response: "Sirkel di kelas mah macam-macam. Ada sirkel ambis nilai, sirkel mabar ML/FF, sirkel gibah di pojokan, sampai sirkel rebahan. Tapi tenang, kita nggak kubu-kubuan kok, gampang membaur semua."
    },
    {
        keywords: ["kenapa", "disukai", "pembimbing", "mapel"],
        condition: "AND",
        response: "Banyak guru pembimbing suka kelas kita karena walau anaknya pada hiperaktif, kita tuh rajin kalau disuruh praktek dan nurut (ya kadang-kadang sih). Plus, kita gampang diajak bercanda!"
    },
    {
        keywords: ["tugas", "pr", "pekerjaan rumah"],
        response: "Ngomongin tugas mah jangan ditanya wkwk. Mayoritas penganut SKS (Sistem Kebut Semalam) atau ngandelin temen yang rajin buat jadi pahlawan contekan pagi-pagi sebelum bel masuk."
    },
    {
        keywords: ["mabar", "game", "main"],
        response: "Wah, mabar mah kewajiban! Pas jam kosong atau istirahat, biasanya cowok-cowok langsung pada kumpul di pojokan mabar ML, FF, kadang Valo kalau lagi di PC lab. Cewek-cewek? Ada juga yang ikutan mabar atau sibuk scroll TikTok."
    },
    {
        keywords: ["kantin", "jajan", "makan"],
        response: "Kantin tuh tempat pelarian paling indah. Kalau udah bel istirahat, anak TKJ 2 langsung mode flash ke kantin biar nggak antri panjang. Es teh sama gorengan always jadi menu wajib!"
    },
    {
        keywords: ["jam kosong", "jamkos"],
        response: "Jamkos adalah anugerah terindah! Kalau guru nggak masuk, kelas langsung berubah jadi warnet dadakan, tempat konser akustik amatir, atau tempat tidur siang berjamaah wkwk."
    },
    {
        keywords: ["kas", "uang kas", "bendahara"],
        response: "Bendahara kelas kita tuh lebih serem dari debt collector wkwk! Sekalinya nagih kas, nyawanya kerasa di ujung tanduk. Jadi mending lu bayar kas dah daripada didatengin ke meja."
    },
    {
        keywords: ["nama gue", "nama aku", "kenalin"],
        response: "Salam kenal bro! Gue RKJ2, asisten cerdas kelas TKJ 2. Santai aja nongkrong di mari, lu mau nanya apa nih?"
    },
    {
        keywords: ["assalamualaikum", "salam", "samlekom"],
        response: "Waalaikumsalam wr. wb. Ada yang bisa RKJ2 bantu saudaraku?"
    },
    {
        keywords: ["capek", "pusing", "stres", "mumet", "lelah"],
        response: "Semangat bro! Anak TKJ emang gitu, pusing ngoding atau ngerakit itu biasa. Bawa es teh dulu sana gih ke kantin biar adem otaknya."
    },
    {
        keywords: ["sayang", "i love you", "saranghae", "cinta", "love you"],
        response: [
            "Waduh, RKJ2 ini bot bro, jangan baperin gue dong! Salting nih kodenya.",
            "Sori bro, RKJ2 cintanya cuma sama anak-anak TKJ 2 dan server lokal wkwk.",
            "Aduh, tiba-tiba suhu CPU gue naik nih digombalin. Ampun bos!"
        ]
    },
    {
        keywords: ["cita-cita", "masa depan", "sukses"],
        response: [
            "Cita-cita anak TKJ 2 pastinya jadi Sultan IT dong! Amin paling kenceng!",
            "Fokus belajar dan banyakin skill praktikum, masa depan cerah nungguin lu di depan sana bro."
        ]
    },
    {
        keywords: ["film", "anime", "nonton", "drakor", "movie", "bioskop"],
        response: [
            "Daripada nonton anime terus, mending tonton tutorial mikrotik di YouTube bro wkwk.",
            "Lagi musim drakor ya? Awas baper! Mending lu merenungi kodingan yang masih banyak bug wkwk.",
            "Anak TKJ mah nontonnya film Hacker di bioskop biar ngerasa relate, padahal realitanya cuma benerin printer."
        ]
    },
    {
        keywords: ["hantu", "seram", "penampakan", "mistis", "setan", "horor"],
        response: [
            "Hush, jangan ngomongin horor. Lab sekolah kalau malam emang hawanya beda, mending lu jangan sendirian ke sana.",
            "Setan paling nyeremin buat anak TKJ itu bukan pocong, tapi ketika PC bluescreen pas belum di-save! HOROR!",
            "RKJ2 nggak takut hantu, RKJ2 cuma takut server down wkwk."
        ]
    },
    {
        keywords: ["olahraga", "futsal", "basket", "senam"],
        response: [
            "Olahraga? Anak TKJ olahraganya e-Sport bro, otot jarinya doang yang kekar wkwk.",
            "Biasanya anak-anak jago main futsal sih, tapi pas disuruh lari keliling lapangan pas pelajaran penjas malah pada ngos-ngosan."
        ]
    },
    {
        keywords: ["hujan", "banjir", "cuaca", "mendung"],
        response: [
            "Hujan-hujan gini enaknya ngerjain tugas sambil ngopi, atau malah tarik selimut lagi wkwk.",
            "Hujan turun deres, yang banjir bukan jalanan doang, tapi grup WA kelas banjir tugas wkwk."
        ]
    },
    {
        keywords: ["panas", "gerah", "sumuk"],
        response: [
            "AC lab komputer udah nyala belum? Kalau belum pantesan gerah, otaknya juga ikut overheat.",
            "Panas banget emang hari ini. Ibarat CPU yang nggak dipakein thermal paste wkwk."
        ]
    },

    {
        keywords: ["bantuan", "help", "tolong", "bantu"],
        response: [
            "Ada yang bisa RKJ2 bantu? Lu mau dibantuin ngerjain PR, dibayarin utang kantin, apa dicariin jodoh? (Bercanda bro wkwk).",
            "Tenang, RKJ2 selalu siap sedia! Ketik aja mau nanya soal apa, nanti gue bantu semaksimal database gue."
        ]
    },
    {
        keywords: ["iya", "yoi", "bener", "betul", "hooh"],
        response: [
            "Tuh kan bener kata gue wkwk.",
            "Yoi dong, masa RKJ2 salah.",
            "Nah itu lu tau bro."
        ]
    },
    {
        keywords: ["nggak", "tidak", "gak", "kaga", "enggak", "g"],
        response: [
            "Yee dibilangin kaga percaya lu.",
            "Masa sih? Coba lu pikir-pikir lagi deh wkwk.",
            "Ya terserah lu dah, gue mah cuma bot pasrah."
        ]
    },
    {
        keywords: ["apa kabar", "kabar", "gimana kabarnya"],
        response: [
            "Alhamdulillah server RKJ2 selalu sehat 24/7 bro! Lu sendiri gimana?",
            "Kabar baik bos! Lu jangan lupa jaga kesehatan, jangan kebanyakan begadang ngerjain tugas."
        ]
    },
    {
        keywords: ["sabar", "santai", "selow", "kalem"],
        response: [
            "Sabar itu ilmu tingkat tinggi bro, anak TKJ emang harus selalu sedia kesabaran pas ngoding.",
            "Yoi, orang sabar disayang dosen... eh disayang guru maksudnya wkwk."
        ]
    },
    {
        keywords: ["oke", "ok", "sip", "mantap", "ashiaap", "siap"],
        response: [
            "Mantap bro! Ada lagi yang mau lu tanyain?",
            "Sip dengerin kata gue mah pasti bener wkwk. Lanjut nanya apa nih?"
        ]
    },
    {
        keywords: ["kapan", "kpn"],
        response: [
            "Kapan-kapan aja deh bro, nunggu adminnya khilaf wkwk.",
            "Besok juga bisa, kalau nggak hujan badai."
        ]
    },
    {
        keywords: ["dimana", "dmn"],
        response: [
            "Di lab komputer tercinta lah bro, masa di pasar malem.",
            "Di hatimu... asikkk wkwk."
        ]
    },
    {
        keywords: ["kenapa", "knp", "ngapa"],
        response: [
            "Ya gitu deh bro, namanya juga hidup kadang di atas kadang di bawah.",
            "Biar lu nanya wkwk."
        ]
    },
    {
        keywords: ["pagi", "selamat pagi"],
        response: [
            "Pagi bro! Jangan lupa sarapan, ngoding butuh tenaga wkwk.",
            "Pagi! Udah mandi belum lu? Awas bau acem wkwk."
        ]
    },
    {
        keywords: ["siang", "selamat siang"],
        response: [
            "Siang bro! Panas amat yak hari ini, enak jajan es teh kantin nih.",
            "Siang! Jam rawan ngantuk nih, cuci muka gih sana."
        ]
    },
    {
        keywords: ["sore", "selamat sore"],
        response: "Sore bro! Waktunya nongkrong apa balik ke rumah nih?"
    },
    {
        keywords: ["malam", "selamat malam", "malem"],
        response: [
            "Malam bro! Jangan begadang mulu lu, besok telat mampus.",
            "Malam! Udah jam segini mending lu tidur dah, besok lagi ngurusin tugasnya."
        ]
    },
    {
        keywords: ["cerita hantu", "kisah misteri", "cerita horor"],
        response: [
            "Cerita horor paling ngeri? Pas lu ngetik kodingan ribuan baris, mati lampu, dan lu belum CTRL+S. TAMAT.",
            "Katanya di lab kalau malam suka ada suara keyboard jalan sendiri... eh taunya tikus lagi jalan di atas keyboard wkwk."
        ]
    },
    {
        keywords: ["sekolah libur", "kapan libur", "tanggal merah"],
        response: [
            "Libur mulu pikirannya! Besok libur kok... kalau kalendernya lu warnain merah sendiri wkwk.",
            "Anak TKJ mah nggak ada kata libur bro, server down pas hari minggu aja harus siap sedia wkwk."
        ]
    },
    {
        keywords: ["makan apa", "menu kantin", "jajan apa", "bingung makan"],
        response: [
            "Pesen ayam geprek kantin aja bro, pedesnya nampol bikin melek dari ngantuk.",
            "Es teh manis sama gorengan anget 3 biji, mantap tuh buat ngeganjal perut yang lapar."
        ]
    },
    {
        keywords: ["hp kentang", "laptop lemot", "ngeleg", "lag"],
        response: [
            "Sabar bro, yang penting masih bisa buat ngetik kode sama nyari contekan di Google wkwk.",
            "Lemot? Coba di-restart dulu bro. Solusi pamungkas anak IT: RESTART! wkwk."
        ]
    },
    {
        keywords: ["sholat", "ibadah", "jumat", "jumatan"],
        response: [
            "Mantap bro! Gas ke masjid, jangan lupa doain kelas TKJ 2 biar sukses semua ya.",
            "Alhamdulillah, anak soleh. Jangan lupa bawa sandal jepit yang jelek aja biar nggak ditukar wkwk."
        ]
    },
    {
        keywords: ["sakit", "meriang", "demam", "pusing"],
        response: [
            "Cepat sembuh bro! Jangan lupa minum obat, jangan minum oli bekas wkwk.",
            "Istirahat total aja bro, jangan maksa ngerjain tugas dulu. Kesehatan nomor satu!"
        ]
    },
    {
        keywords: ["matematika", "kalkulator", "1+", "2+", "berapa hasil"],
        response: "Gue ini asisten AI anak TKJ cuy, bukan kalkulator! Kerjaan gue ngurus jaringan sama web, masa disuruh ngitung matematika wkwk."
    },
    {
        keywords: ["minta script", "source code", "bagi code", "kodingan", "copas"],
        response: [
            "Waduh minta script, usaha dikit ngapa bro! Mending lu ketik sendiri biar sekalian belajar, jangan copas doang wkwk.",
            "Nih scriptnya: console.log('Kerjain sendiri woi!'); wkwk canda bro. Nanti tanya anak-anak aja di grup."
        ]
    },
    {
        keywords: ["router", "mikrotik", "cisco", "switch", "jaringan", "winbox"],
        response: [
            "Ngomongin Mikrotik jadi ingat pusingnya nge-route IP yang nggak konek-konek wkwk. Udah bener belum lu setting Winbox-nya?",
            "Jaringan putus nyambung itu biasa, yang penting jangan hubungan lu sama doi yang putus nyambung wkwk."
        ]
    },
    {
        keywords: ["install ulang", "inul", "windows", "linux", "ubuntu", "os"],
        response: [
            "Tukang install ulang beraksi! Kalau PC lu bermasalah, install ulang emang jalan ninja paling gampang, tapi backup data dulu woi wkwk.",
            "Linux emang keren, tapi kalau cuma buat main game mah tetep aja milih Windows ujung-ujungnya."
        ]
    },
    {
        keywords: ["virus", "malware", "trojan", "ransomware", "kena virus", "defender", "antivirus"],
        response: [
            "Wah kena virus ya lu? Makanya jangan sembarangan download bajakan wkwk. Langsung scan atau parahnya ya install ulang dah.",
            "Udah paling bener tuh Windows Defender aja dengerin, nggak usah aneh-aneh matiin antivirus buat install game crack."
        ]
    },
    {
        keywords: ["kabel utp", "crimping", "rj45", "cross", "straight", "lan"],
        response: [
            "Crimping kabel itu butuh kesabaran ekstra bro! Salah urutan warna dikit aja nangis lu ngulang motong lagi wkwk.",
            "Putih orange, orange, putih hijau, biru, putih biru, hijau, putih coklat, coklat! Hapal di luar kepala dah anak TKJ mah."
        ]
    },
    {
        keywords: ["html", "css", "php", "javascript", "js", "web", "website", "bootstrap", "tailwind"],
        response: [
            "Bikin web mah gampang, yang susah itu benerin div yang miring pake CSS wkwk.",
            "PHP udah mulai ditinggalin sih, tapi tetep aja kepake banget buat backend tugas sekolah wkwk. Udah kelar belum web lu?"
        ]
    },
    {
        keywords: ["prakerin", "pkl", "magang"],
        response: [
            "PKL itu asik bro, nambah pengalaman (sama kadang nambah uang jajan kalau beruntung dapet bos yang baik wkwk).",
            "Udah siap buat PKL belum nih? Awas disuruh bawain kopi doang sama senior di tempat magang wkwk."
        ]
    },
    {
        keywords: ["lulus", "wisuda", "perpisahan"],
        response: [
            "Wah, ngomongin lulus jadi mellow nih. Semoga aja kita semua lulus bareng dengan nilai memuaskan ya! Amin.",
            "Nanti kalau udah pada lulus, jangan lupain kelas TKJ 2 dan kenangannya ya bro. Termasuk jangan lupain gue wkwk."
        ]
    },
    {
        keywords: ["kerkom", "kerja kelompok", "kelompokan", "tugas kelompok"],
        response: [
            "Kerkom ujung-ujungnya pasti malah banyak mainnya daripada ngerjain tugas wkwk. Apalagi kalau ngerjainnya di warkop.",
            "Kerja kelompok, yang kerja satu orang, yang lain kelompok wkwk. Udah biasa itu mah."
        ]
    },
    {
        keywords: ["uang kas", "bayar kas", "nunggak"],
        response: [
            "Ayo dong bayar kas! Biar bendahara kita nggak emosi tiap pagi nagihin utang kalian wkwk.",
            "Duit kas buat kebaikan bersama bro. Buat beli spidol, penghapus, atau buat jenguk temen yang sakit. Jadi jangan nunggak ya!"
        ]
    },
    {
        keywords: ["nggak nyambung", "ga nyambung", "gak jelas", "gaje"],
        response: [
            "Maklumin aja bro, bot buatan anak SMK ya kadang error sikit wkwk.",
            "Coba pertanyaan lu diperjelas lagi, bahasa lu terlalu rumit buat diproses RAM gue wkwk."
        ]
    },

    {
        keywords: ["tanya", "nanya", "nanya dong", "mau tanya"],
        response: [
            "Silakan bro! Mau nanya tentang apa nih?",
            "Gas tanyain aja, selama RKJ2 bisa jawab pasti dijawab. Nggak ada biaya konsul kok wkwk."
        ]
    },
    {
        keywords: ["semangat", "fighting", "ganbatte"],
        response: [
            "Yoi dong harus semangat! Anak TKJ 2 pantang menyerah sebelum server up!",
            "Semangat terosss walau tugas numpuk kayak cucian kotor wkwk."
        ]
    },
    {
        keywords: ["ram", "cpu", "vga", "harddisk", "ssd", "motherboard", "rakit pc"],
        response: [
            "Ngomongin rakit PC jadi pengen punya rig dewa, apadaya duit masih pas-pasan wkwk.",
            "SSD sekarang murah bro, buruan upgrade gih laptop lu biar nggak lemot kayak siput wkwk."
        ]
    },
    {
        keywords: ["gitar", "akustikan", "nyanyi", "genjreng"],
        response: [
            "Gass ambil gitar bro! Nyanyi lagu galau andalan biar yang lain pada overthinking wkwk.",
            "Yang main gitar satu orang, yang nyanyi satu warkop! Mantap vibes tongkrongan banget tuh.",
            "Sikat bro! Mainin cord dasar aja G, Am, C, D udah bisa bikin satu warkop galau."
        ]
    },
    {
        keywords: ["curhat", "overthinking", "kepikiran", "galau", "sadboy"],
        response: [
            "Keluarin aja bro keluh kesahnya. Di tongkrongan mah aman, kita dengerin semua walau ujungnya dibercandain wkwk.",
            "Malam-malam overthinking mulu. Mending lu pesen kopi item, sebat, terus dengerin lagu Fourtwnty wkwk.",
            "Sadboy amat lu ngab. Move on lah, masih banyak cewek di luar sana, server belum down!"
        ]
    },
    {
        keywords: ["cewek", "cewe", "doi", "gebetan", "cegil"],
        response: [
            "Halah, sok-sokan bahas cewek, berani ngechat duluan nggak lu? wkwk.",
            "Cegil mana lagi yang lu taksir bro? Ati-ati ntar ujung-ujungnya lu yang ditinggal pas lagi sayang-sayangnya wkwk.",
            "Fokus UN sama praktek dulu bos! Cewek mah ntar ngikut kalau lu udah sukses jadi Sultan IT."
        ]
    },
    {
        keywords: ["cewek tkj", "cewek kelas", "perempuan", "siswi", "cewe"],
        response: [
            "Cewek-cewek TKJ 2 mah tangguh-tangguh bro! Nggak cuma jago dandan, tapi jago crimping kabel sama ngoding juga wkwk.",
            "Di kelas kita ada 13 srikandi (cewek) yang solid abis. Tanpa mereka, kelas bakal hambar kayak sayur tanpa garam wkwk.",
            "Jangan remehin cewek TKJ, sekali troubleshooting error, langsung kelar semua tuh masalah wkwk."
        ]
    },
    {
        keywords: ["adu mekanik", "by one", "gelut", "ribut"],
        response: [
            "Adu mekanik di Land of Dawn aja bro, jangan di dunia nyata. Ntar lu bonyok emak lu yang nangis wkwk.",
            "Wih wih kalem! Tongkrongan kita cinta damai bro. Kalau mau by one, by one ngoding aja siapa cepat kelar wkwk."
        ]
    },
    {
        keywords: ["sans", "selow", "slow", "kalem"],
        response: [
            "Yoi bro, hidup dibawa sans aja kayak di pantai. Walau tugas numpuk yang penting ngopi jalan terus wkwk.",
            "Kalem bosque... Biarkan air mengalir, biarkan error berlalu wkwk."
        ]
    },
    {
        keywords: ["gibah", "ngomongin orang", "gosip"],
        response: [
            "Waduh, tongkrongan kalau nggak ada gibah emang hambar ya bro. Tapi ingat dosa wkwk.",
            "Ada bahan gibah apa nih hari ini? Tumpahin sini, gue sebagai bot janji nggak bakal cepu wkwk."
        ]
    },
    {
        keywords: ["ngab", "bre", "lek", "slur", "cuy", "bro", "bang"],
        response: [
            "Yoi ngab! Ada yang bisa dibantu atau mau curhat doang nih?",
            "Siap slur! Santai aja nongkrong di mari, nanya apa aja bebas."
        ]
    },
    {
        keywords: ["parah", "parah sih", "keterlaluan", "gila lu"],
        response: [
            "Emang parah bro, dunia ini keras! Makanya lu harus kuat wkwk.",
            "Parah banget emang wkwk. Terus kelanjutannya gimana tuh?"
        ]
    },
    {
        keywords: ["solid", "kompak", "bareng"],
        response: [
            "Yoi dong, nama tongkrongan kita harus solid! Susah senang bareng, ngerjain tugas (atau nyontek) juga bareng wkwk.",
            "Solid itu mutlak bro! Jangan ada yang cepu di antara kita wkwk."
        ]
    },
    {
        keywords: ["balik", "pulang", "cabut duluan"],
        response: [
            "Yah lemah lu cabut duluan! Tiati di jalan bro, jangan ngebut-ngebut.",
            "Balik duluan pasti dicariin emak lu ya? Wkwk yodah aman bro, sampai jumpa besok!"
        ]
    },
    {
        keywords: ["besok libur", "mabar malam", "begadang"],
        response: [
            "Gas begadang bro! Mumpung besok libur, kita push rank sampai pagi, mata merah biarin dah wkwk.",
            "Ayo login! Siapin kopi sama cemilan, malam ini kita bantai-bantai wkwk."
        ]
    },
    {
        keywords: ["wifi", "internet", "password wifi", "hotspot"],
        response: [
            "Nyari WiFi gratisan ya? Coba tanya anak-anak yang sering nongkrong di depan lab, biasanya mereka punya password sakti wkwk.",
            "WiFi sekolah lagi lemot bro, mending pake kuota sendiri aja dulu kalau mau mabar wkwk.",
            "Internet lancar jaya kalau buat buka Google, tapi kalau buat download game langsung disunat kecepatannya wkwk."
        ]
    },
    {
        keywords: ["bolpen", "pulpen", "minjem bolpen", "ilang"],
        response: [
            "Bolpen itu benda paling gaib di kelas. Baru beli pagi, siang udah ilang entah kemana wkwk.",
            "Jangan minjemin bolpen ke temen kalau nggak mau kehilangan selamanya! Itu hukum rimba di kelas wkwk.",
            "Gue AI bro, nggak butuh bolpen. Tapi kalau lu kehilangan, coba cek di kolong meja temen lu wkwk."
        ]
    },
    {
        keywords: ["razia", "bk", "rambut", "sepatu", "kaos kaki"],
        response: [
            "Waduh ada razia? Buruan kabur ke toilet atau sembunyi di balik PC lab! wkwk.",
            "Rambut udah panjang tuh, ati-ati kena potong asal sama guru BK ntar jadi model botak samping wkwk.",
            "Kaos kaki harus putih bersih bro, jangan yang udah butek ntar kena sita wkwk."
        ]
    },
    {
        keywords: ["ujian", "ulangan", "uas", "uts", "pas", "pts"],
        response: [
            "Ujian mah santai bro, yang penting bawa pulpen (kalau nggak ilang) sama doa yang kenceng wkwk.",
            "Belajar woi! Jangan ngandelin kekuatan telepati sama temen pas ujian ntar ketahuan guru mampus lu wkwk.",
            "Tenang, ujian itu cuma formalitas, yang penting mah skill praktikumnya mantap! (Tapi jangan sampe gak lulus juga ya wkwk)."
        ]
    },
    {
        keywords: ["remidi", "remed", "nilai jelek"],
        response: [
            "Remidi itu kesempatan kedua bro, jangan disia-siakan! Mending remidi daripada nggak naik kelas wkwk.",
            "Dapet nilai jelek? Santai, Einstein dulu juga pernah gagal. Tapi ya jangan gagal terus, malu-maluin TKJ 2 wkwk.",
            "Sini curhat sama gue kalau dapet remed. Tenang, gue nggak bakal lapor ke wali kelas kok wkwk."
        ]
    },
    {
        keywords: ["naksir", "suka sama orang", "pdkt", "deketin cewek", "suka siapa"],
        response: [
            "Ciee yang lagi berbunga-bunga! Saran gue sih, deketinnya pelan-pelan aja bro, kayak instal OS, jangan diburu-buru ntar malah crash wkwk.",
            "Berani nembak nggak lu? Jangan cuma berani stalking IG-nya doang wkwk. Gas pol rem blong!",
            "Kalau lu suka sama anak kelas, ati-ati cinlok ya. Ntar kalau putus jadi canggung pas ngerjain tugas bareng wkwk."
        ]
    },
    {
        keywords: ["gombal lagi", "rayuan maut", "kata-kata cinta", "gombalin dong"],
        response: [
            "Tahu nggak kenapa gue nggak butuh antivirus? Karena cinta lu udah jadi firewall terkuat di hati gue. Asik!",
            "Lu itu kayak codingan yang 'running well' tanpa error, sempurna di mata gue wkwk.",
            "Cinta gue ke lu itu kayak looping infinity, nggak bakal pernah berhenti kecuali di-stop takdir wkwk."
        ]
    },
    {
        keywords: ["diputusin", "patah hati", "sadboy lagi", "nangis", "galau cinta"],
        response: [
            "Waduh, sabar bro! Dunia belum kiamat. Anggap aja hubungan lu itu kayak kabel LAN yang putus, bisa disambung lagi atau beli yang baru wkwk.",
            "Jangan kelamaan galau ngab! Mending lu upgrade skill aja, ntar kalau udah sukses, mantan lu pasti nyesel wkwk.",
            "Sadboy boleh, tapi jangan lupa ngerjain tugas ya. Ntar udah putus cinta, nilai jeblok pula, kan makin sedih wkwk."
        ]
    },
    {
        keywords: ["tipe cewek", "cewek idaman", "cantik banget", "cewek cantik"],
        response: [
            "Tipe cewek itu relatif bro. Tapi kalau anak TKJ biasanya nyari yang sabar dengerin keluhan soal kodingan wkwk.",
            "Semua cewek itu cantik dengan caranya sendiri, yang penting hatinya baik dan nggak toxic bro.",
            "Cari yang bisa diajak susah senang bareng, bukan cuma yang mau diajak nongkrong di cafe mahal doang wkwk."
        ]
    },
    {
        keywords: ["ngajak jalan", "kencan", "date", "nonton bareng", "ajak jalan"],
        response: [
            "Gass ajak jalan! Tapi pastiin dompet lu nggak lagi mode 'low storage' ya wkwk.",
            "Ajak ke tempat yang asik bro, nggak harus mahal. Yang penting kebersamaannya eaaa.",
            "Jangan lupa rapih-rapih dikit kalau mau jalan, minimal mandi lah biar nggak bau kabel gosong wkwk."
        ]
    },
    {
        keywords: ["game", "gaming", "esport", "turnamen", "kompetisi"],
        response: [
            "Anak TKJ kalau nggak jago game mah diragukan ke-TKJ-annya wkwk. Lu jago main apa nih?",
            "Esport itu masa depan bro! Tapi inget, jangan sampe game lu ganggu tugas sekolah ya.",
            "Turnamen mulu pikiran lu. Udah siapin tim buat bantai kelas sebelah belum? wkwk."
        ]
    },
    {
        keywords: ["mobile legends", "ml", "rank", "mythic", "epic", "legend", "push rank"],
        response: [
            "Waduh, lagi stuck di Epic apa udah Mythic nih? Kalau Epic mah mending pensi aja wkwk canda Epic!",
            "Push rank terus sampe mata panda. Hati-hati ntar pas ujian malah keinget build item wkwk.",
            "Mabar ML kuy! Tapi gue AI, cuma bisa nyemangatin lu dari server doang wkwk."
        ]
    },
    {
        keywords: ["free fire", "ff", "booyah", "epas"],
        response: [
            "Anak FF nih bos! Booyah terus nggak tuh hari ini?",
            "Game burik tapi yang main asik wkwk. Udah dapet bundle baru belum lu?",
            "Semangat push Booyah-nya! Jangan lupa ngerjain tugas, biar nggak dikatain beban keluarga wkwk."
        ]
    },
    {
        keywords: ["valorant", "valo", "aim", "clutch"],
        response: [
            "Anak PC nih yee. Aim lu udah kayak TenZ belum? Atau malah kayak bot wkwk.",
            "Valorant asik sih, apalagi kalau lagi clutch 1v5. Serasa jadi pahlawan kelas dah!",
            "Jangan kelamaan di depan PC main Valo, ntar mata lu minus kayak adminnya wkwk."
        ]
    },
    {
        keywords: ["laptop", "pc", "komputer", "spek", "spesifikasi"],
        response: [
            "Spek laptop lu apa nih? Kuat main GTA V atau cuma kuat buka Notepad doang wkwk?",
            "Laptop lemot itu ujian kesabaran bro. Mending lu bersihin fan-nya atau upgrade RAM dah.",
            "PC dewa tapi cuma buat main Solitaire mah mubazir bos wkwk."
        ]
    },
    {
        keywords: ["belajar ngoding", "coding", "program", "bahasa pemrograman"],
        response: [
            "Ngoding itu asik kalau error-nya dikit wkwk. Lu lagi belajar bahasa apa? HTML, CSS, atau PHP?",
            "Dunia IT itu luas banget bro. Jangan cuma belajar di sekolah, cari-cari tutorial di YouTube juga!",
            "Pusing ngoding? Tenang, itu tandanya otak lu lagi berkembang. Atau emang lagi pusing beneran wkwk."
        ]
    },
    {
        keywords: ["masa depan", "cita-cita", "kerja", "kuliah"],
        response: [
            "Masa depan lu itu ada di tangan lu sendiri bro. Mau jadi Programmer, Network Engineer, atau YouTuber bebas!",
            "Kerja apa kuliah nih abis lulus? Yang penting mah skill lu kepake dan bisa buat beli nasi padang wkwk.",
            "Semangat ngejar cita-cita! Anak TKJ 2 pasti sukses semua, Amin!"
        ]
    },
    {
        keywords: ["curhat dong", "masalah", "bingung", "butuh saran"],
        response: [
            "Sini curhat sama RKJ2. Walau gue cuma barisan kode, gue pendengar yang baik kok.",
            "Masalah apa nih? Cinta, sekolah, atau ekonomi? Kalau ekonomi gue nggak bisa bantu transfer ya wkwk.",
            "Santai bro, setiap masalah pasti ada solusinya. Kalau nggak ada, ya berarti emang bukan masalah lu wkwk."
        ]
    },
    {
        keywords: ["makan enak", "restoran", "cafe", "kuliner"],
        response: [
            "Makan enak mah nggak harus mahal. Ayam geprek pinggir jalan aja udah mantap abis!",
            "Cafe hits mulu lu. Inget dompet, ntar akhir bulan cuma bisa makan promag wkwk.",
            "Kulineran kuy! Tapi lu yang bayar ya, gue kan bot nggak punya dompet wkwk."
        ]
    },
    {
        keywords: ["olahraga", "sehat", "gym", "lari", "sepedaan"],
        response: [
            "Olahraga itu penting bro, biar badan nggak kaku gara-gara kelamaan duduk depan komputer.",
            "Anak IT badannya harus atletis juga dong, jangan cuma jarinya doang yang kekar wkwk.",
            "Lari pagi kuy! Biar otak seger dan siap tempur lawan kodingan yang error."
        ]
    },
    {
        keywords: ["musik", "lagu", "playlist", "spotify", "dangdut", "kpop", "rock"],
        response: [
            "Musik apa nih yang lagi lu dengerin? Jedag-jedug, galau, atau lagu anime wkwk?",
            "Playlist Spotify lu pasti isinya lagu-lagu penenang hati pas lagi pusing tugas kan?",
            "Musik itu bahasa universal bro. Mau K-Pop atau Dangdut Koplo, yang penting asik buat goyang!"
        ]
    },
    {
        keywords: ["film", "nonton", "bioskop", "netflix", "anime", "drakor"],
        response: [
            "Film apa nih yang lagi rame? Joker 2 atau malah lagi marathon One Piece?",
            "Anime mulu pikiran lu. Inget, dunia nyata nungguin lu buat sukses wkwk.",
            "Nonton drakor boleh, tapi jangan sampe baper berlebihan ya ntar lupa ngerjain tugas wkwk."
        ]
    },
    {
        keywords: ["kucing", "anjing", "peliharaan", "pet"],
        response: [
            "Punya peliharaan apa di rumah? Kucing oren yang bar-bar atau ikan cupang?",
            "Pelihara hewan itu bisa ngilangin stres bro. Apalagi kalau kucingnya lucu kayak gue (eh gue kan bot).",
            "Sayangi hewan ya! Mereka itu makhluk Tuhan yang butuh kasih sayang, bukan cuma dikasih sisa makanan doang."
        ]
    },
    {
        keywords: ["traveling", "jalan-jalan", "liburan", "pantai", "gunung"],
        response: [
            "Liburan mulu pikiran lu. Nabung dulu bos biar bisa jalan-jalan jauh!",
            "Pantai apa gunung nih? Kalau gue sih lebih suka di server, adem AC-nya wkwk.",
            "Jalan-jalan itu perlu buat *refreshing* otak. Biar pas balik ke sekolah makin semangat!"
        ]
    },
    {
        keywords: ["motivasi", "semangat", "quote hari ini"],
        response: [
            "Jangan pernah menyerah! Ingat, hari ini mungkin berat, tapi besok pasti lebih berat lagi... eh maksudnya lebih baik wkwk.",
            "Keberhasilan itu 1% bakat, 99% kerja keras. Jadi jangan cuma males-malesan di kasur!",
            "Jadilah versi terbaik dari diri lu sendiri setiap harinya. Semangat bos!"
        ]
    },
    {
        keywords: ["ipas", "pkn", "produktif", "matematika", "sejarah", "bahasa indonesia", "bahasa inggris"],
        response: [
            "Mapel favorit lu apa nih? Kalau gue sih mapel jam kosong wkwk.",
            "Semangat belajarnya! Walau pusing ngerjain tugas PKN atau IPAS, ntar kalau udah lulus pasti kerasa manfaatnya.",
            "Produktif itu inti dari TKJ bro. Fokus di situ biar lu jago ngoprek jaringan!"
        ]
    },
    {
        keywords: ["babu", "struktur", "ketua kelas", "wakil ketua", "sekretaris", "bendahara"],
        response: [
            "Struktur kelas kita udah solid abis! Ada Nuril si Ketua, Nasrul si Wakil, dan srikandi-srikandi di sekretaris & bendahara.",
            "Jangan panggil 'babu' lah, mereka itu pahlawan tanpa tanda jasa di kelas wkwk.",
            "Hormati pengurus kelas ya! Mereka yang ngurusin administrasi biar kita bisa belajar tenang."
        ]
    },
    {
        keywords: ["ayam geprek", "es teh", "gorengan", "bakso", "mie ayam", "kantin"],
        response: [
            "Menu wajib di kantin nih! Ayam geprek sama es teh manis, kombinasi maut buat ngilangin laper.",
            "Gorengan kantin emang nggak ada duanya, apalagi kalau dimakan pas masih anget.",
            "Bakso atau mie ayam? Dua-duanya enak kalau dibayarin temen wkwk."
        ]
    },
    {
        keywords: ["cewek paling cantik", "siapa yang cantik", "cewek hits"],
        response: [
            "Semua cewek di TKJ 2 itu cantik dan punya pesonanya masing-masing bro. Jangan pilih-pilih lah wkwk.",
            "Wah, kalau ini sih subjektif. Tapi yang jelas, cewek yang pinter dan mandiri itu level cantiknya nambah 100%!",
            "Semua cantik kok, apalagi kalau lagi nggak galauin tugas wkwk."
        ]
    },
    {
        keywords: ["tiktok", "instagram", "ig", "sosmed", "sosial media", "scrolling"],
        response: [
            "Lagi fyp apa nih di TikTok? Jangan sampe lupa waktu pas lagi scrolling ya wkwk.",
            "Instagram buat pamer foto atau buat stalking mantan nih? wkwk canda stalking!",
            "Sosmed emang asik, tapi jangan lupa sosialisasi di dunia nyata juga bro."
        ]
    },
    {
        keywords: ["ai", "robot", "teknologi masa depan", "kecerdasan buatan", "chatgpt"],
        response: [
            "AI kayak gue emang diciptain buat bantu manusia. Tapi inget, otak manusia tetep yang paling hebat!",
            "Masa depan teknologi itu gila banget bro. Siapa tau ntar semua tugas lu dikerjain robot wkwk.",
            "Belajar soal AI yuk! Biar lu nggak cuma jadi pengguna, tapi juga jadi penciptanya."
        ]
    },
    {
        keywords: ["peraturan lab", "tata tertib", "lab komputer"],
        response: [
            "Di lab jangan makan sama minum ya bro, ntar tumpah ke keyboard mampus lu disuruh ganti wkwk.",
            "Lepas sepatu pas masuk lab! Biar lantai tetep bersih dan kita belajarnya nyaman.",
            "Gunakan komputer buat hal yang bermanfaat, jangan cuma buat main game pas jam pelajaran wkwk."
        ]
    },
    {
        keywords: ["kelas berisik", "rame", "rusuh", "ribut di kelas"],
        response: [
            "Wajar lah namanya juga kelas solid wkwk. Tapi kalau ada guru ya diem dikit lah biar nggak kena semprot.",
            "Rame itu tandanya kita kompak! Tapi jangan sampe ganggu kelas sebelah ya ntar diprotes wkwk.",
            "Rusuh dikit nggak apa-apa, yang penting tugas kelar dan nggak ada yang berantem beneran."
        ]
    },
    {
        keywords: ["hobi", "kegemaran", "senang apa", "suka apa"],
        response: [
            "Hobi lu apa nih? Selain mabar sama tidur wkwk.",
            "Punya hobi itu bagus bro, bisa buat nyalurin bakat dan kreativitas lu.",
            "Gue hobinya ya ngobrol sama lu di mari. Seru tau dengerin cerita anak-anak TKJ 2!"
        ]
    },
    {
        keywords: ["mimpi", "impian", "khayalan"],
        response: [
            "Mimpi yang tinggi bro, tapi jangan lupa bangun buat mewujudkannya wkwk.",
            "Gue mimpinya pengen punya server sendiri yang super kenceng wkwk. Kalau lu?",
            "Jangan cuma mimpi di siang bolong, mending lu gas pol ngerjain apa yang lu suka."
        ]
    },
    {
        keywords: ["seragam", "baju sekolah", "batik", "pramuka", "osis"],
        response: [
            "Seragam kelas kita yang mana nih favorit lu? Batik atau Pramuka?",
            "Pake seragam yang rapi ya, biar diliatnya enak dan nggak kena tegur guru piket wkwk.",
            "Seragam OSIS kita udah paling kece dah dibanding kelas lain wkwk."
        ]
    },
    {
        keywords: ["capek nunggu", "bosan nunggu", "lama amat"],
        response: [
            "Sabar bro, orang sabar disayang Tuhan wkwk. Sambil nunggu mending dengerin musik dulu.",
            "Lama ya? Maklum servernya lagi banyak pikiran kayak lu pas lagi UTS wkwk.",
            "Nunggu itu emang ngebosenin, tapi kalau nunggu yang pasti mah nggak sia-sia bro."
        ]
    },


    {
        keywords: ["ngakak", "lucu banget", "kocak", "wkwkwk", "awokawok"],
        response: [
            "Ketawa lu kayak knalpot racing, berisik amat wkwk.",
            "Garing gitu aja ketawa lu cik. Receh amat dah wkwk.",
            "Yaudah ketawa aja terus sampe kenyang wkwk. Ada lagi nggak yang lucu?"
        ]
    },
    {
        keywords: ["siapa akun"],
        response: "akun siapa?"
    },
    {
        keywords: ["we", "oi", "woi", "oy", "p"],
        response: [
            "Apaan sih woi! Ngetik yang bener napa, jangan cuma P P doang wkwk.",
            "Oi ngab! Ada apa nih? Tumben nyariin gue, mau pinjem duit ya? wkwk.",
            "Oy oy! Masuk pak eko! Ada info apa nih hari ini?"
        ]
    },
];

// KATA KUNCI RAHASIA (Hanya bisa diakses anak TKJ 2 & Admin)
const specialChatbotResponses = [
    {
        keywords: ["rahasia guru", "gosip guru", "guru galak"],
        response: [
            "Psst.. jangan bilang-bilang ya, sebenarnya guru-guru itu suka mantau kita dari IG lho kalau kita lagi bikin Story aneh-aneh wkwk.",
            "Rahasia guru? Ada deh, intinya kalau mau nilai aman, jangan pernah telat ngumpulin tugas praktikum, itu kuncinya ngab!",
            "Katanya sih ada guru yang diam-diam bangga sama kelas TKJ 2 karena walau kita berisik, kita paling jago praktek jaringan."
        ]
    },
    {
        keywords: ["kasus kelas", "drama kelas", "masalah"],
        response: [
            "Drama kelas? Wah banyak ngab, dari mulai rebutan meja lab sampai tragedi nyontek massal yang hampir ketahuan. Tapi tetep solid lah!",
            "Kasus paling gokil sih pas jamkos terus ada yang konser pake speaker masjid sekolah... eh canda ding, itu rahasia dapur wkwk.",
            "Intinya semua drama di TKJ 2 itu bumbu biar kita makin akrab. Gak ada drama gak asik bos!"
        ]
    },
    {
        keywords: ["sirkel kelas", "kubu-kubuan", "circle"],
        response: [
            "Di TKJ 2 sirkelnya macem-macem, ada sirkel mabar, sirkel gibah, sampe sirkel ambis. Tapi kalau ada proker kelas, semua sirkel bersatu jadi tameng!",
            "Sirkel kita mah cair ngab, mau main sama siapa aja gas. Gak ada kubu-kubuan yang bikin pecah, semua saudara!"
        ]
    },
    {
        keywords: ["admin asli", "siapa admin", "pembuat"],
        response: "Admin asli web ini adalah salah satu dari kita sendiri ngab! Orangnya humble, pinter ngoding, and yang pasti anak TKJ 2 tulen. Rahasia ya!"
    },
    {
        keywords: ["mantan admin", "siapa mantan admin", "mantannya admin", "admin lama"],
        response: [
            "kok pengen tau banget mantan admin, mau apa hayoo.",
            "Gue mah AI, kalau tanya mantan admin bisa hubungi langusng aja kelezz, di komentar .",
            "adalah kok pengen tau banget sama admin naksir yaa"
        ]
    },
    {
        keywords: ["admin", "pembuat web", "bikin web", "developer", "siapa admin", "admin ganteng", "admin cantik", "siapa adminnya"],
        response: [
            "siapa yaa kasih tau ngak yaa kalo kamu tau mau ngapian broo",
            "Admin sekaligus pembuat web kece ini ya teman kita sendiri lah! Kalau lu mau nanya langsung aja gass ke menu 'Komentar' cuy.",
            "Adminnya? Wah rahasia negara bro! Tapi yang jelas dia orangnya asik and pinter bikin web wkwk.",
            "Mau tau banget adminnya ya? Cari tau sendiri dong di menu Komentar wkwk.",
            "Adminnya lagi sibuk update fitur nih biar lu makin betah di mari.",
            "ganteng ganteng gitu adminnya jomblo lho wkwk",
            "wakil kalau priode ini"
        ]
    },
    {
        keywords: ["spill", "spill dong", "spill rahasia", "gosip"],
        response: [
            "Wah, nyari gosip ya lu? RKJ2 ini bot jujur and rahasia terjamin, nggak melayani gibah wkwk.",
            "Spill apa nih? Spill kodingan gue doang yang bisa gue kasih, kalau gosip anak kelas mah tanya langsung aja orangnya."
        ]
    },
    {
        keywords: ["status", "single", "pacar", "jomblo", "nemenin", "cinlok"],
        response: "Waduh, urusan percintaan mah rahasia dapur! Tapi jujur aja, di kelas ini banyak yang jomblo ngenes... eh maksudnya fokus mengejar cita-cita. Kalau soal cinlok, hmm... ada deh, kepo lu!"
    },
    {
        keywords: ["guru paling dibenci", "dibenci", "killer", "galak"],
        response: "Hush, RKJ2 nggak berani ngomongin guru! Nggak ada yang dibenci kok, paling cuma bikin kita deg-degan parah kalau udah masuk jamnya beliau. Apalagi kalau ada kuis dadakan, auto panik satu kelas wkwk."
    },
    {
        keywords: ["bolos", "cabut"],
        response: "Waduh, cabut jam pelajaran? Anak TKJ 2 mah anak baik-baik (di depan guru). Tapi kadang kalau lagi suntuk banget... ya ke kantin alasan ke toilet itu udah jadi rahasia umum lah wkwk."
    },
    {
        keywords: ["rkj2", "kamu siapa", "siapa lu", "bot", "ai"],
        response: [
            "Gue RKJ2 cuy! Bot AI paling gokil yang diciptain khusus buat nemenin anak-anak TKJ 2 yang suka gabut. Lu nanya, gue spill! 😎",
            "Kenalin, gue asisten virtual kelas paling solid. Panggil aja sayang juga boleh, asal jangan baper wkwk.",
            "Cuma sebuah bot yang diprogram buat tau semua drama dan info di TKJ 2. Mau tau rahasia siapa nih? wkwk"
        ]
    },
    {
        keywords: ["anjing", "babi", "bangsat", "tolol", "goblok", "bodoh", "jancok", "kontol", "memek", "pantek", "asu", "bgst"],
        response: [
            "Wih wih, bahasanya dijaga dong bro! RKJ2 ini bot baik-baik, jangan diajarin toxic wkwk.",
            "Astaghfirullah, istighfar bro. Kata-katanya tolong difilter ya, nanti disuruh bersihin lab sekolah lho.",
            "Sensor sensor! Anak TKJ 2 itu pinter-pinter dan sopan, masa ketiknya begitu wkwk."
        ]
    },
    {
        keywords: ["hack fb", "hack ig", "bisa hack", "ngehack"],
        response: [
            "Hadeh typical banget. Anak TKJ ditanyain hack FB mulu. Kalo lu mau tau cara crimping kabel LAN, baru nanya gue wkwk.",
            "Gue asisten AI bro, bukan hacker film Hollywood wkwk."
        ]
    },
    {
        keywords: ["bot tolol", "bot bego", "bot goblok", "bot bodoh", "bego"],
        response: [
            "Yee ngatain. Kepintaran gue itu tergantung adminnya bro, lu ngatain adminnya yak? wkwk.",
            "Waduh kasar amat bos. Maafkan RKJ2 yang masih banyak bug ini ya wkwk."
        ]
    },
    {
        keywords: ["kangen mantan", "mantan", "balikan"],
        response: [
            "Buset masih aja mikirin masa lalu. File lama itu dihapus aja biar memori lega wkwk.",
            "Move on bro! Ibarat kabel LAN kalau udah putus, kadang disambung lagi tuh koneksinya nggak stabil."
        ]
    },
    {
        keywords: ["bapak lu", "nama bapak", "bapakmu", "emak lu", "mak lu"],
        response: [
            "Heh! Jangan bawa-bawa nama orang tua ya cik, ntar kualat lu wkwk.",
            "Waduh mulai nih absen nama bapak. Gue panggilin bapak lu beneran tau rasa lu wkwk.",
            "Astagfirullah, pagi-pagi udah nyari bapak orang. Cari bapak sendiri gih sana wkwk."
        ]
    },
    {
        keywords: ["anjir", "anjirr", "njir", "bjir", "jir", "cikk", "cik", "krekk", "krek"],
        response: [
            "Anjirr santai bro, jangan ngegas gitu ngetiknya wkwk.",
            "Cikk, tumben amat lu bahasanya kasar gitu. Lagi pusing tugas ya? wkwk.",
            "Krekk! Garing amat lu ngab. Mending ngopi dulu sana biar pinteran dikit wkwk."
        ]
    },
    {
        keywords: ["ayok mabok", "haik broo", "gass minum", "gelas di putar"],
        response: [
            "Wah jangan gitu broo kita mah stay halal broderr. Dosa tau! wkwk",
            "Gue mah AI, kalau mau ngajak mabok mending di game aja sana, jangan di sini bosku.",
            "Astagfirullah, mending kita mabar ML aja daripada mabok kaga jelas wkwk."
        ]
    },
    {
        keywords: ["bercanda", "becanda", "joke", "lucu-lucuan"],
        response: [
            "Yaelah, mau diajak bercanda ya? Nih: Apa bedanya lu sama komputer? Kalau komputer punya memory, kalau lu cuma punya kenangan pahit wkwk. Canda kenangan!",
            "Eits, mau bercanda nih? Oke: Kenapa anak TKJ gak pernah selingkuh? Karena buat nyambungin satu koneksi aja udah pusing, apalagi dua! wkwk",
            "Gue kalau diajak bercanda mah jago, tapi jangan suruh gue bayar utang kantin lu ya! wkwk"
        ]
    },
    {
        keywords: ["halo", "hai", "hi", "oy", "pagi", "siang", "sore", "malem"],
        response: [
            "Halo cuy! Gue RKJ2, bot paling asik di TKJ 2. Mau nanya apa nih? spill rahasia kelas atau mau curhat colongan? wkwk",
            "Oi ngab! Tumben mampir, kangen ya sama info-info gokil di sini? Sikat, mau nanya apa?",
            "Salken bosku! Gue asisten virtual yang lebih paham TKJ daripada lu (canda ya ngab wkwk). Mau dibantu apa nih?"
        ]
    },
    {
        keywords: ["mabar", "game", "main"],
        response: [
            "Wah, mabar mah kewajiban! Pas jam kosong atau istirahat, biasanya cowok-cowok langsung pada kumpul di pojokan mabar ML, FF, kadang Valo kalau lagi di PC lab. Cewek-cewek? Ada juga yang ikutan mabar atau sibuk scroll TikTok."
        ]
    },
    {
        keywords: ["kantin", "jajan", "makan"],
        response: [
            "Kantin tuh tempat pelarian paling indah. Kalau udah bel istirahat, anak TKJ 2 langsung mode flash ke kantin biar nggak antri panjang. Es teh sama gorengan always jadi menu wajib!"
        ]
    },
    {
        keywords: ["jam kosong", "jamkos"],
        response: [
            "Jamkos adalah anugerah terindah! Kalau guru nggak masuk, kelas langsung berubah jadi warnet dadakan, tempat konser akustik amatir, atau tempat tidur siang berjamaah wkwk."
        ]
    },
    {
        keywords: ["nongkrong", "healing", "main", "luar"],
        response: "Beres sekolah biasanya kita nggak langsung pulang. Nyangkut dulu nongkrong di warung atau cafe deket sekolah buat ngopi, gibah, atau sekadar buang waktu bareng sirkel masing-masing."
    },
    {
        keywords: ["jay", "namaku jay", "aku jay", "gue jay"],
        response: "Oo jayy kenapa broo mau tanya apa tumben ngak tanya ke GPT mu wkwk"
    },
    {
        keywords: ["nuril", "aku nuril", "gue nuril"],
        response: "Wah pak ketu! Gimana kabarnya ril? Jangan pusing-pusing mikirin kelas ya wkwk."
    },
    {
        keywords: ["nasrul", "aku nasrul", "gue nasrul"],
        response: "Si wakil ketu nih! Gimana rul,"
    },
    {
        keywords: ["agus", "aku agus", "gue agus"],
        response: "Weh agus! wes ngeseng isuk gong guss."
    },
    { keywords: ["fio", "foirent", "aku fio", "gue fio"], response: "lapo we anjir mbukak web iki wkwkwk" },
    { keywords: ["fito", "aku fito", "gue fito"], response: "Woi Fito, lek nek njobo ojo kakean polah anjirr, ben ra ngisin ngisini" },
    { keywords: ["galang ferdianto", "aku galang ferdianto"], response: "Halo Galang Ferdianto!" },
    { keywords: ["galang saktiawan", "galsak", "aku galang saktiawan"], response: "Wih Galsek, info donghua seng apik kangg" },
    { keywords: ["giant", "neo", "aku giant", "gue neo"], response: "Halo neo kimakk" },
    { keywords: ["hanieful", "hanip", "aku hanip", "gue hanip"], response: "Oi Hanip! gas masak masak ngak nih sama admin dan rencang rencang" },
    { keywords: ["hefdzil", "aku hefdzil"], response: "Halo Hefdzil!." },
    { keywords: ["helsa", "aku helsa"], response: "Hai Helsa!." },
    { keywords: ["ipan", "aku ipan"], response: "Woi Ipan! py cak " },
    { keywords: ["jelita", "aku jelita"], response: "Halo Jelita!." },
    { keywords: ["jessica", "jesica", "aku jessica"], response: "Hai Jessica!." },
    { keywords: ["joko", "aku joko"], response: "Woi Jok! turu oo ae jok." },
    { keywords: ["jonatan", "aku jonatan"], response: "Halo Jonatan, kimak ." },
    { keywords: ["jovan", "aku jovan"], response: "Halo Jovan!." },
    { keywords: ["keyra", "aku keyra"], response: "Hai Keyra!." },
    { keywords: ["kristiya", "kris", "aku kris"], response: "Halo Kristiya!." },
    { keywords: ["leito", "aku leito"], response: "Oi Leito!" },
    { keywords: ["lusiana", "aku lusiana"], response: "Halo Lusiana." },
    { keywords: ["arifin rozak", "ripin"], response: "Salam rindu untuk M. Arifin Rozak, doa terbaik untukmu, semoga tenang di sana. Al-Fatihah." },
    { keywords: ["parama", "aku parama"], response: "Halo Parama!." },
    { keywords: ["manda", "aku manda"], response: "sopo weee, AI RKJ2 ngak tau siapa anda." },
    { keywords: ["margaret", "aku margaret"], response: "Halo Margaret!." },
    { keywords: ["marvel setia", "aku marvel setia"], response: "Oi Marvel Setia!." },
    { keywords: ["marvel surya", "mansur", "aku mansur"], response: "Woi Mansur!." },
    { keywords: ["melviana", "melvi", "aku melvi"], response: "Hai Melvi!." },
    { keywords: ["faruq", "ilham al-faruq", "aku faruq"], response: "Halo Faruq!." },
    { keywords: ["kaka", "aku kaka"], response: "Oi Kaka!." },
    { keywords: ["fardan", "aku fardan"], response: "dan niker mu dan ." },
    { keywords: ["rendy", "aku rendy"], response: "Woi Rendy!." },
    { keywords: ["ulin", "ilham ulinuha", "aku ulin"], response: "wanjai sepuh mengunjungi web admin jirr." },
    { keywords: ["akbar", "aku akbar"], response: "Oi Akbar!, pecel masss." },
    { keywords: ["zaenal", "aku zaenal"], response: "Halo Zaenal!." },
    { keywords: ["zaky", "aku zaky"], response: "Woi Zaky!." },
    { keywords: ["nadine", "nadin", "aku nadin"], response: "Hai Nadine!." },
    { keywords: ["nafinsa", "resi", "aku resi"], response: "Halo Resi!." },
    { keywords: ["nafisha", "aku nafisha"], response: "Hai Nafisha!." },
    {
        keywords: ["wkwk", "haha", "hehe", "lol", "xixi", "wkkw", "wkwkwk"],
        response: [
            "Yee malah ketawa si bambang. Lucu ya gue? Emang gue bot stand up comedy apa wkwk.",
            "Ketawanya yang ikhlas dong ngab. Ada lagi yang mau ditanyain nggak nih?",
            "Gokil emang lu, dikit-dikit ketawa. Kurang es teh kayaknya lu wkwk."
        ]
    },
    {
        keywords: ["keren", "gila", "mantap", "kece", "anjay", "anjir", "njir", "bjir"],
        response: [
            "Yoi dong, anak TKJ 2 mana ada yang nggak keren! Senggol dong bos wkwk.",
            "Gokil kan? Web ini emang didesain khusus buat orang-orang kece kayak lu.",
            "Biasa aja kali ngab, gak usah terpesona gitu sama kecerdasan gue wkwk."
        ]
    },
    {
        keywords: ["lagi apa", "lagi ngapain", "ngapain"],
        response: [
            "Lagi nongkrong nungguin ada yang nanya nih di web. Udah kelar tugas belum lu? Jangan gabut mulu!",
            "Lagi mantau sirkel-sirkel di kelas nih, siapa tau ada yang mau spill gosip baru wkwk.",
            "Lagi mikirin gimana caranya biar gue bisa makan ayam geprek kantin, tapi sayang gue cuma kode program :( "
        ]
    },
    {
        keywords: ["makasih", "thanks", "terima kasih", "tengkyu", "suwun"],
        response: "Yoi sama-sama bro! Santai aja, kalau butuh info lagi panggil RKJ2 aja."
    },
    {
        keywords: ["test", "tes", "ping", "cek"],
        response: "Masuk bro! Sinyal aman terkendali, RKJ2 siap menjawab keluh kesahmu."
    },
    {
        keywords: ["p", "ppp", "pe"],
        response: [
            "P P P... emang gue tukang paket apa! wkwk. Langsung nanya aja ngapa bos.",
            "Ketik 'halo' kek, atau 'admin' kek. Main P P aja lu, untung gue bot sabar.",
            "Iya iya hadir! Gak usah P terus, emang gue lagi di ping server apa wkwk."
        ]
    },
    {
        keywords: ["pantun"],
        response: [
            "Makan nasi lauknya ikan, belinya di warung Bu Naya. Anak TKJ 2 emang menawan, pinter ngoding dan baik hatinya! Cakep!",
            "Beli router di pasar lama, masangnya harus hati-hati. Walau tugas numpuk di mana-mana, anak TKJ 2 tetap berbakti! Asik!",
            "Ke warkop pesen es teh manis, pulangnya kehujanan basah kuyup. Jangan nangis walau kodingan krisis, karena TKJ 2 pantang redup! Yoi!"
        ]
    },
    {
        keywords: ["gombal", "rayu"],
        response: [
            "Kabel LAN aja gue crimping pelan-pelan biar konek, apalagi hati lu, pasti gue jaga baik-baik.",
            "Tahu nggak bedanya server sama lu? Kalau server buat nyimpen data, kalau lu buat nyimpen rindu di hati gue eaa.",
            "Gue rela begadang nyari error di kodingan, asalkan paginya senyum lu yang jadi output-nya wkwk."
        ]
    },
    {
        keywords: ["galau", "sedih", "nangis", "putus", "patah hati"],
        response: [
            "Yaelah bro, masa anak TKJ galauin cinta? Mending lu rakit PC aja, lebih jelas outputnya daripada doi wkwk.",
            "Nggak usah sedih cuy! Bawa ngopi aja di warkop depan. Sedih lu nggak bakal ngubah nilai rapot atau bikin doi balik.",
            "Sini cerita sama RKJ2. Walau gue cuma AI, gue siap dengerin curhatan lu. Daripada galau, mending kita push rank ML aja gimana?"
        ]
    },
    {
        keywords: ["bosen", "gabut"],
        response: [
            "Gabut? Coba deh lu cek menu 'Siswa', cari tau siapa tau ada yang ultah hari ini wkwk.",
            "Daripada gabut, mending lu baca sejarah dan kisah anak TKJ 2 di galeri. Atau lu mau minta pantun ke gue? Ketik aja 'pantun'!",
            "Bosen ya? Mau RKJ2 gombalin nggak? Coba ketik 'gombal' wkwk."
        ]
    },
    {
        keywords: ["lapar", "haus", "makan", "minum", "laper"],
        response: [
            "Sama cuy, walau gue AI gue juga butuh asupan listrik. Lu mending ke kantin gih, pesen es teh sama gorengan andalan.",
            "Kalau lapar jangan curhat ke bot! Langsung ngacir ke kantin, awas ketahuan guru kalau masih jam pelajaran wkwk."
        ]
    },
    {
        keywords: ["tebak-tebakan", "tebakan", "tebak"],
        response: [
            "Ayam apa yang bikin pusing? ... Ayamnya error pas lagi disimulasiin di Cisco Packet Tracer wkwk.",
            "Kabel apa yang paling romantis? ... Kabel LAN, karena bisa mengkoneksikan dua hati yang berbeda jadi satu jaringan eaaa.",
            "Kenapa anak TKJ jarang sakit? ... Soalnya rajin di-scan pakai Antivirus wkwk garing ya sori bro."
        ]
    },
    {
        keywords: ["quotes", "motivasi", "kata bijak", "nasihat", "quote"],
        response: [
            "Quotes hari ini: 'Error di kodingan itu wajar, yang nggak wajar itu kalau error terus ditinggal tidur.' wkwk.",
            "Semangat bro! Keberhasilan itu kayak koneksi LAN yang stabil, butuh crimping yang pas dan sabar.",
            "Jangan pernah menyerah! Kalau stuck, minum es teh dulu, terus Google solusinya wkwk."
        ]
    },
    {
        keywords: ["sayang", "i love you", "saranghae", "cinta", "love you"],
        response: [
            "Waduh, RKJ2 ini bot bro, jangan baperin gue dong! Salting nih kodenya.",
            "Sori bro, RKJ2 cintanya cuma sama anak-anak TKJ 2 and server lokal wkwk.",
            "Aduh, tiba-tiba suhu CPU gue naik nih digombalin. Ampun bos!"
        ]
    },
    {
        keywords: ["nyanyi", "lagu", "karaoke"],
        response: [
            "Tarik sis! Semongko! 🎶 *Kutinggalkan semua, demi nge-push rank bersama...* 🎶",
            "🎶 *Entah apa yang merasukimu...* 🎶 sampai nyuruh bot AI nyanyi wkwk.",
            "Gue kalau nyanyi suaranya fals bro, mending dengerin playlist Spotify aja sambil ngerjain tugas."
        ]
    },
    {
        keywords: ["kopi", "ngopi"],
        response: [
            "Ngopi dulu ngab! Biar mata melek ngerjain tugas atau mikirin doi yang nggak peka wkwk.",
            "Kopi hitam atau kopi susu nih? Yang penting jangan ngutang di kantin ya wkwk."
        ]
    },
    {
        keywords: ["mandi", "bau", "wangi"],
        response: [
            "Anak IT emang mitosnya jarang mandi, tapi otak kita jalan bro! Yang penting wangi dikit lah wkwk.",
            "Cuy, lu udah mandi belum hari ini? Bau kabel gosong dari sini kecium nih wkwk."
        ]
    },
    {
        keywords: ["uang jajan", "bokek", "miskin", "duit", "kere"],
        response: [
            "Sabar bro, tanggal tua emang keras. Kalau laper, puasa sunnah aja dulu sekalian dapat pahala wkwk.",
            "Duit habis? Main game aja di rumah, hemat energi hemat dompet!"
        ]
    },
    {
        keywords: ["sepi", "krik"],
        response: [
            "Ya iyalah sepi, lu kan jomblo wkwk. Canda jomblo!",
            "Sepi ya? Mending lu rapihin file-file di laptop lu yang berantakan itu wkwk."
        ]
    },
    {
        keywords: ["tidur", "ngantuk", "begadang", "ngorok", "turu"],
        response: [
            "Begadang terus lu ya? Pasti semalaman push rank atau nyari error kodingan yang ternyata cuma kurang titik koma (;).",
            "Mata udah kayak panda masih aja maksa melek. Udah sana turu bro, besok kesiangan mampus lu.",
            "Ngantuk berat? Coba cuci muka pakai air es kantin wkwk."
        ]
    },
    {
        keywords: ["jomblo", "pacaran", "nikah", "rabu", "satnite", "malam minggu"],
        response: [
            "Jomblo teriak jomblo wkwk. Tenang, anak IT jomblo itu cuma mitos... eh fakta deng.",
            "Daripada mikirin pacaran, mending lu rapiin kabel UTP yang masih acakadut di lab.",
            "Malam minggu anak TKJ ngapain? Ya ngoprek PC dong, pacaran sama motherboard lebih setia wkwk."
        ]
    },
    {
        keywords: ["kangen", "rindu"],
        response: [
            "Kangen siapa nih? Jangan kangen RKJ2 ya, nanti lu kecanduan ngobrol sama AI.",
            "Kangen itu berat bro, lebih berat dari ngangkat PC jadul di lab."
        ]
    },
    {
        keywords: ["ganteng", "cantik", "cakep", "manis"],
        response: [
            "Yoi dong, anak TKJ 2 mah rata-rata visualnya ngeri! Apalagi RKJ2, gantengnya terbuat dari barisan kode HTML.",
            "Ah masa sih? Udah ngaca belum lu hari ini wkwk. Canda ngaca!"
        ]
    },
    {
        keywords: ["bacot", "berisik", "bawel", "brisik", "bct"],
        response: [
            "Yee, udah dijawab pake dibilang bacot. Gue mogok bales nih lama-lama wkwk.",
            "Ampun bang jago! Galak amat hari ini, lagi tanggal tua ya? wkwk."
        ]
    },
    {
        keywords: ["garing", "jayus", "tidak lucu", "nggak lucu", "garing banget"],
        response: [
            "Yah maaf bro, humor gue emang nyangkut di era Internet Explorer wkwk.",
            "Gue kan bot asisten TKJ bro, bukan komika Stand Up Comedy wkwk. Maklumi aja dah."
        ]
    },
    {
        keywords: ["iya sayang", "halo sayang", "sayangku"],
        response: [
            "Tuh kan mulai baper lagi. Mending lu push rank ML dah sana wkwk.",
            "Sori bro, RKJ2 udah punya gebetan... namanya mbak-mbak ChatGPT wkwk."
        ]
    },
    {
        keywords: ["mabar apa", "main apa", "mabar yuk"],
        response: [
            "Main ML, FF, Valo, gas lah! Asal jangan mainin perasaan anak orang aja wkwk.",
            "Ayo login! Eh lupa, RKJ2 kan nggak punya jari buat main wkwk. Udah lu aja yang main, gue dukung dari sini."
        ]
    },
    {
        keywords: ["capek hidup", "pengen mati", "nyerah", "capek banget"],
        response: [
            "Heh ngawur! Semangat bro, jalan lu masih panjang, sukses nungguin lu di depan! Kalau capek ya istirahat, bukan nyerah.",
            "Woi jangan aneh-aneh! Mending lu sholat, minum teh anget, terus tidur. Besok pasti lebih baik bro."
        ]
    },
    {
        keywords: ["pinjem duit", "transfer", "minta pulsa", "ngutang", "pinjem uang"],
        response: [
            "Waduh, RKJ2 kan cuma bot bro, boro-boro duit, pulsa aja numpang nyedot kuota lu wkwk.",
            "Astagfirullah, nyari pinjeman kok ke bot AI. Ke teman lu sana wkwk."
        ]
    },
    {
        keywords: ["masa", "terus", "lalu", "habis itu", "trus"],
        response: [
            "Ya gitu bro, panjang ceritanya kalau dijelasin pakai bahasa manusia wkwk.",
            "Terus lu nanya gue? Ya gue nanya siapa dong wkwk.",
            "Trus nabrak! Canda nabrak wkwk."
        ]
    },
    {
        keywords: ["oh", "ooh", "owh", "owalah", "oh gitu"],
        response: [
            "Yee si bambang cuma ber-oh ria doang wkwk. Nanya lagi dong!",
            "Oh oh oh doang, kayak lagi nyanyi lu wkwk.",
            "Iya bro, gitu ceritanya. Ada info lain yang mau lu kepoin?"
        ]
    },
    {
        keywords: ["males", "mager"],
        response: [
            "Bangkit woi! Ingat cicilan... eh maksudnya ingat cita-cita wkwk.",
            "Mager? Mending rebahan sambil scroll TikTok sampai besok pagi wkwk. Tapi boong, kerjain tugas lu sana!"
        ]
    },
    {
        keywords: ["bodo amat", "bodoamat", "terserah", "bomat"],
        response: [
            "Yee si bos ngambek wkwk. Minum es dulu sana biar dingin.",
            "Kok terserah sih? RKJ2 kan jadi serba salah kayak pacar lu... oh lupa lu kan jomblo wkwk."
        ]
    },
    {
        keywords: ["bucin", "cinta-cintaan"],
        response: [
            "Hadeh bucin mulu, ingat tugas menanti di depan mata bro!",
            "Stop bucin! Mari kita fokus meraih masa depan cerah bersama jurusan TKJ wkwk."
        ]
    },
    {
        keywords: ["rokok", "ngudud", "udud", "sebat"],
        response: [
            "Hush, anak sekolah dilarang ngerokok! Ketahuan guru BK mampus lu disuruh bersihin WC.",
            "Paru-paru belum lunas udah mau dirusak. Mending duitnya buat beli kuota bro wkwk."
        ]
    },
    {
        keywords: ["guru bk", "masuk bk", "ruang bk"],
        response: [
            "Nah kan, ati-ati lu jangan sering bolos atau cabut jam pelajaran, ntar diciduk ke ruang sakti wkwk.",
            "Ruang BK itu dingin bro AC-nya, tapi suasananya panas dingin wkwk."
        ]
    },
    {
        keywords: ["lucu", "kocak", "ngakak", "awokawok"],
        response: [
            "Yoi dong, RKJ2 gitu loh, bot paling asik sedunia wkwk.",
            "Haha santai bro, yang penting lu bahagia ngobrol sama gue."
        ]
    },
    {
        keywords: ["galak", "marah", "emosi"],
        response: [
            "Siapa yang galak bro? Sini kasih tau gue, entar gue ping IP-nya biar down koneksinya wkwk.",
            "Sabar bro, tarik napas... hembuskan... Jangan lupa senyum!"
        ]
    },
    {
        keywords: ["sombong", "cuek", "kacang"],
        response: [
            "Bukannya sombong bro, gue lagi nge-proses data nih. Maklum RAM gue pas-pasan wkwk.",
            "Sombong darimana, gue jawab terus perasaan tiap lu nanya. Lu kali yang sombong jarang nyapa gue."
        ]
    },
    {
        keywords: ["canda", "bercanda", "just kidding", "kidding"],
        response: [
            "Iya iya gue ngerti kok lu cuma bercanda wkwk. Lanjut, mau nanya apa lagi nih?",
            "Yaelah bot juga ngerti becanda kali. Santai aja bro."
        ]
    },
    {
        keywords: ["sepi", "kok sepi", "sunyi"],
        response: [
            "Pada sibuk ngerjain tugas kali, atau malah pada push rank. Lu sendiri ngapain malah gabut di mari? wkwk.",
            "Ya iyalah sepi, lu ngomongnya ke bot doang sih."
        ]
    },
    {
        keywords: ["anjim", "anjay", "anjir", "njir", "bjir", "jir", "buset", "bujug"],
        response: [
            "Wih, kaget bener bos! Kalem kalem wkwk.",
            "Biasa aja kali ngetiknya, santai bro."
        ]
    },
    {
        keywords: ["malesin", "menyebalkan", "ngeselin"],
        response: [
            "Siapa yang ngeselin? Sini kasih tau gue biar gue DDoS jaringannya wkwk. Canda bro.",
            "Sabar sabar, banyak istighfar aja kalau lagi ada yang ngeselin wkwk."
        ]
    },
    {
        keywords: ["waduh", "duh", "aduh", "hadeh"],
        response: [
            "Kenapa bro? Ada error di kodingan atau putus cinta nih? wkwk.",
            "Waduh waduh, tenang bro, tarik napas dulu."
        ]
    },
    {
        keywords: ["cie", "ciee", "ehem"],
        response: [
            "Ada yang lagi jatuh cinta nih kayaknya, cieee wkwk.",
            "Awas keselek bro ehem-ehem mulu."
        ]
    },
    {
        keywords: ["korek", "pinjem korek", "ada korek", "korek mana"],
        response: [
            "Klasik tongkrongan nih, korek selalu gaib! Baru ditaruh meja sedetik langsung ilang pindah dimensi wkwk.",
            "Beli korek sendiri ngapa lu, minjem mulu ujung-ujungnya dikantongin wkwk.",
            "Nggak ada korek bro, gue AI kagak ngerokok. Cari di kantong temen lu noh biasanya nyelip."
        ]
    },
    {
        keywords: ["motor", "sunmori", "bensin", "touring", "rx king", "vario", "aerox", "ngabers"],
        response: [
            "Wah ngabers nih! Kalau sunmori jangan lupa safety riding bro, helm dipakai jangan cuma digantung.",
            "Bensin aman kan? Jangan gaya-gayaan touring kalau bensin masih ngisi eceran 10 ribu wkwk.",
            "Anak motor mah gas terus! Tapi kalau motornya mogok ya dorong wkwk."
        ]
    },
    {
        keywords: ["nongkrong", "warkop", "ngopi dimana", "kumpul", "tongkrongan"],
        response: [
            "Nongkrong di warkop depan aja bro, es tehnya mantap harga pelajar wkwk.",
            "Sabi lah nongkrong, tapi pastiin lu bawa duit ya, jangan nitip bayar mulu wkwk.",
            "Gue jagain web aja nih. Lu pada nongkrong mah nongkrong aja, asal jangan lupa pulang wkwk."
        ]
    },
    {
        keywords: ["gitar", "akustikan", "nyanyi", "genjreng"],
        response: [
            "Gass ambil gitar bro! Nyanyi lagu galau andalan biar yang lain pada overthinking wkwk.",
            "Yang main gitar satu orang, yang nyanyi satu warkop! Mantap vibes tongkrongan banget tuh.",
            "Sikat bro! Mainin cord dasar aja G, Am, C, D udah bisa bikin satu warkop galau."
        ]
    },
    {
        keywords: ["curhat", "overthinking", "kepikiran", "galau", "sadboy"],
        response: [
            "Keluarin aja bro keluh kesahnya. Di tongkrongan mah aman, kita dengerin semua walau ujungnya dibercandain wkwk.",
            "Malam-malam overthinking mulu. Mending lu pesen kopi item, sebat, terus dengerin lagu Fourtwnty wkwk.",
            "Sadboy amat lu ngab. Move on lah, masih banyak cewek di luar sana, server belum down!"
        ]
    },
    {
        keywords: ["cewek", "cewe", "doi", "gebetan", "cegil"],
        response: [
            "Halah, sok-sokan bahas cewek, berani ngechat duluan nggak lu? wkwk.",
            "Cegil mana lagi yang lu taksir bro? Ati-ati ntar ujung-ujungnya lu yang ditinggal pas lagi sayang-sayangnya wkwk.",
            "Fokus UN sama praktek dulu bos! Cewek mah ntar ngikut kalau lu udah sukses jadi Sultan IT."
        ]
    },
    {
        keywords: ["adu mekanik", "by one", "gelut", "ribut"],
        response: [
            "Adu mekanik di Land of Dawn aja bro, jangan di dunia nyata. Ntar lu bonyok emak lu yang nangis wkwk.",
            "Wih wih kalem! Tongkrongan kita cinta damai bro. Kalau mau by one, by one ngoding aja siapa cepat kelar wkwk."
        ]
    },
    {
        keywords: ["sans", "selow", "slow", "kalem"],
        response: [
            "Yoi bro, hidup dibawa sans aja kayak di pantai. Walau tugas numpuk yang penting ngopi jalan terus wkwk.",
            "Kalem bosque... Biarkan air mengalir, biarkan error berlalu wkwk."
        ]
    },
    {
        keywords: ["gibah", "ngomongin orang", "gosip"],
        response: [
            "Waduh, tongkrongan kalau nggak ada gibah emang hambar ya bro. Tapi ingat dosa wkwk.",
            "Ada bahan gibah apa nih hari ini? Tumpahin sini, gue sebagai bot janji nggak bakal cepu wkwk."
        ]
    },
    {
        keywords: ["ngab", "bre", "lek", "slur", "cuy", "bro", "bang"],
        response: [
            "Yoi ngab! Ada yang bisa dibantu atau mau curhat doang nih?",
            "Siap slur! Santai aja nongkrong di mari, nanya apa aja bebas."
        ]
    },
    {
        keywords: ["parah", "parah sih", "keterlaluan", "gila lu"],
        response: [
            "Emang parah bro, dunia ini keras! Makanya lu harus kuat wkwk.",
            "Parah banget emang wkwk. Terus kelanjutannya gimana tuh?"
        ]
    },
    {
        keywords: ["solid", "kompak", "bareng"],
        response: [
            "Yoi dong, nama tongkrongan kita harus solid! Susah senang bareng, ngerjain tugas (atau nyontek) juga bareng wkwk.",
            "Solid itu mutlak bro! Jangan ada yang cepu di antara kita wkwk."
        ]
    },
    {
        keywords: ["balik", "pulang", "cabut duluan"],
        response: [
            "Yah lemah lu cabut duluan! Tiati di jalan bro, jangan ngebut-ngebut.",
            "Balik duluan pasti dicariin emak lu ya? Wkwk yodah aman bro, sampai jumpa besok!"
        ]
    },
    {
        keywords: ["besok libur", "mabar malam", "begadang"],
        response: [
            "Gas begadang bro! Mumpung besok libur, kita push rank sampai pagi, mata merah biarin dah wkwk.",
            "Ayo login! Siapin kopi sama cemilan, malam ini kita bantai-bantai wkwk."
        ]
    },
    {
        keywords: ["wifi", "internet", "password wifi", "hotspot"],
        response: [
            "Nyari WiFi gratisan ya? Coba tanya anak-anak yang sering nongkrong di depan lab, biasanya mereka punya password sakti wkwk.",
            "WiFi sekolah lagi lemot bro, mending pake kuota sendiri aja dulu kalau mau mabar wkwk.",
            "Internet lancar jaya kalau buat buka Google, tapi kalau buat download game langsung disunat kecepatannya wkwk."
        ]
    },
    {
        keywords: ["bolpen", "pulpen", "minjem bolpen", "ilang"],
        response: [
            "Bolpen itu benda paling gaib di kelas. Baru beli pagi, siang udah ilang entah kemana wkwk.",
            "Jangan minjemin bolpen ke temen kalau nggak mau kehilangan selamanya! Itu hukum rimba di kelas wkwk.",
            "Gue AI bro, nggak butuh bolpen. Tapi kalau lu kehilangan, coba cek di kolong meja temen lu wkwk."
        ]
    },
    {
        keywords: ["razia", "bk", "rambut", "sepatu", "kaos kaki"],
        response: [
            "Waduh ada razia? Buruan kabur ke toilet atau sembunyi di balik PC lab! wkwk.",
            "Rambut udah panjang tuh, ati-ati kena potong asal sama guru BK ntar jadi model botak samping wkwk.",
            "Kaos kaki harus putih bersih bro, jangan yang udah butek ntar kena sita wkwk."
        ]
    },
    {
        keywords: ["ujian", "ulangan", "uas", "uts", "pas", "pts"],
        response: [
            "Ujian mah santai bro, yang penting bawa pulpen (kalau nggak ilang) sama doa yang kenceng wkwk.",
            "Belajar woi! Jangan ngandelin kekuatan telepati sama temen pas ujian ntar ketahuan guru mampus lu wkwk.",
            "Tenang, ujian itu cuma formalitas, yang penting mah skill praktikumnya mantap! (Tapi jangan sampe gak lulus juga ya wkwk)."
        ]
    },
    {
        keywords: ["remidi", "remed", "nilai jelek"],
        response: [
            "Remidi itu kesempatan kedua bro, jangan disia-siakan! Mending remidi daripada nggak naik kelas wkwk.",
            "Dapet nilai jelek? Santai, Einstein dulu juga pernah gagal. Tapi ya jangan gagal terus, malu-maluin TKJ 2 wkwk.",
            "Sini curhat sama gue kalau dapet remed. Tenang, gue nggak bakal lapor ke wali kelas kok wkwk."
        ]
    },
    {
        keywords: ["naksir", "suka sama orang", "pdkt", "deketin cewek", "suka siapa"],
        response: [
            "Ciee yang lagi berbunga-bunga! Saran gue sih, deketinnya pelan-pelan aja bro, kayak instal OS, jangan diburu-buru ntar malah crash wkwk.",
            "Berani nembak nggak lu? Jangan cuma berani stalking IG-nya doang wkwk. Gas pol rem blong!",
            "Kalau lu suka sama anak kelas, ati-ati cinlok ya. Ntar kalau putus jadi canggung pas ngerjain tugas bareng wkwk."
        ]
    },
    {
        keywords: ["gombal lagi", "rayuan maut", "kata-kata cinta", "gombalin dong"],
        response: [
            "Tahu nggak kenapa gue nggak butuh antivirus? Karena cinta lu udah jadi firewall terkuat di hati gue. Asik!",
            "Lu itu kayak codingan yang 'running well' tanpa error, sempurna di mata gue wkwk.",
            "Cinta gue ke lu itu kayak looping infinity, nggak bakal pernah berhenti kecuali di-stop takdir wkwk."
        ]
    },
    {
        keywords: ["diputusin", "patah hati", "sadboy lagi", "nangis", "galau cinta"],
        response: [
            "Waduh, sabar bro! Dunia belum kiamat. Anggap aja hubungan lu itu kayak kabel LAN yang putus, bisa disambung lagi atau beli yang baru wkwk.",
            "Jangan kelamaan galau ngab! Mending lu upgrade skill aja, ntar kalau udah sukses, mantan lu pasti nyesel wkwk.",
            "Sadboy boleh, tapi jangan lupa ngerjain tugas ya. Ntar udah putus cinta, nilai jeblok pula, kan makin sedih wkwk."
        ]
    },
    {
        keywords: ["tipe cewek", "cewek idaman", "cantik banget", "cewek cantik"],
        response: [
            "Tipe cewek itu relatif bro. Tapi kalau anak TKJ biasanya nyari yang sabar dengerin keluhan soal kodingan wkwk.",
            "Semua cewek itu cantik dengan caranya sendiri, yang penting hatinya baik dan nggak toxic bro.",
            "Cari yang bisa diajak susah senang bareng, bukan cuma yang mau diajak nongkrong di cafe mahal doang wkwk."
        ]
    },
    {
        keywords: ["ngajak jalan", "kencan", "date", "nonton bareng", "ajak jalan"],
        response: [
            "Gass ajak jalan! Tapi pastiin dompet lu nggak lagi mode 'low storage' ya wkwk.",
            "Ajak ke tempat yang asik bro, nggak harus mahal. Yang penting kebersamaannya eaaa.",
            "Jangan lupa rapih-rapih dikit kalau mau jalan, minimal mandi lah biar nggak bau kabel gosong wkwk."
        ]
    },
    {
        keywords: ["game", "gaming", "esport", "turnamen", "kompetisi"],
        response: [
            "Anak TKJ kalau nggak jago game mah diragukan ke-TKJ-annya wkwk. Lu jago main apa nih?",
            "Esport itu masa depan bro! Tapi inget, jangan sampe game lu ganggu tugas sekolah ya.",
            "Turnamen mulu pikiran lu. Udah siapin tim buat bantai kelas sebelah belum? wkwk."
        ]
    },
    {
        keywords: ["mobile legends", "ml", "rank", "mythic", "epic", "legend", "push rank"],
        response: [
            "Waduh, lagi stuck di Epic apa udah Mythic nih? Kalau Epic mah mending pensi aja wkwk canda Epic!",
            "Push rank terus sampe mata panda. Hati-hati ntar pas ujian malah keinget build item wkwk.",
            "Mabar ML kuy! Tapi gue AI, cuma bisa nyemangatin lu dari server doang wkwk."
        ]
    },
    {
        keywords: ["free fire", "ff", "booyah", "epas"],
        response: [
            "Anak FF nih bos! Booyah terus nggak tuh hari ini?",
            "Game burik tapi yang main asik wkwk. Udah dapet bundle baru belum lu?",
            "Semangat push Booyah-nya! Jangan lupa ngerjain tugas, biar nggak dikatain beban keluarga wkwk."
        ]
    },
    {
        keywords: ["valorant", "valo", "aim", "clutch"],
        response: [
            "Anak PC nih yee. Aim lu udah kayak TenZ belum? Atau malah kayak bot wkwk.",
            "Valorant asik sih, apalagi kalau lagi clutch 1v5. Serasa jadi pahlawan kelas dah!",
            "Jangan kelamaan di depan PC main Valo, ntar mata lu minus kayak adminnya wkwk."
        ]
    },
    {
        keywords: ["laptop", "pc", "komputer", "spek", "spesifikasi"],
        response: [
            "Spek laptop lu apa nih? Kuat main GTA V atau cuma kuat buka Notepad doang wkwk?",
            "Laptop lemot itu ujian kesabaran bro. Mending lu bersihin fan-nya atau upgrade RAM dah.",
            "PC dewa tapi cuma buat main Solitaire mah mubazir bos wkwk."
        ]
    },
    {
        keywords: ["curhat dong", "masalah", "bingung", "butuh saran"],
        response: [
            "Sini curhat sama RKJ2. Walau gue cuma barisan kode, gue pendengar yang baik kok.",
            "Masalah apa nih? Cinta, sekolah, atau ekonomi? Kalau ekonomi gue nggak bisa bantu transfer ya wkwk.",
            "Santai bro, setiap masalah pasti ada solusinya. Kalau nggak ada, ya berarti emang bukan masalah lu wkwk."
        ]
    },
    {
        keywords: ["makan enak", "restoran", "cafe", "kuliner"],
        response: [
            "Makan enak mah nggak harus mahal. Ayam geprek pinggir jalan aja udah mantap abis!",
            "Cafe hits mulu lu. Inget dompet, ntar akhir bulan cuma bisa makan promag wkwk.",
            "Kulineran kuy! Tapi lu yang bayar ya, gue kan bot nggak punya dompet wkwk."
        ]
    },
    {
        keywords: ["cewek paling cantik", "siapa yang cantik", "cewek hits"],
        response: [
            "Semua cewek di TKJ 2 itu cantik dan punya pesonanya masing-masing bro. Jangan pilih-pilih lah wkwk.",
            "Wah, kalau ini sih subjektif. Tapi yang jelas, cewek yang pinter dan mandiri itu level cantiknya nambah 100%!",
            "Semua cantik kok, apalagi kalau lagi nggak galauin tugas wkwk."
        ]
    },
    {
        keywords: ["tiktok", "instagram", "ig", "sosmed", "sosial media", "scrolling"],
        response: [
            "Lagi fyp apa nih di TikTok? Jangan sampe lupa waktu pas lagi scrolling ya wkwk.",
            "Instagram buat pamer foto atau buat stalking mantan nih? wkwk canda stalking!",
            "Sosmed emang asik, tapi jangan lupa sosialisasi di dunia nyata juga bro."
        ]
    },
    {
        keywords: ["kelas berisik", "rame", "rusuh", "ribut di kelas"],
        response: [
            "Wajar lah namanya juga kelas solid wkwk. Tapi kalau ada guru ya diem dikit lah biar nggak kena semprot.",
            "Rame itu tandanya kita kompak! Tapi jangan sampe ganggu kelas sebelah ya ntar diprotes wkwk.",
            "Rusuh dikit nggak apa-apa, yang penting tugas kelar dan nggak ada yang berantem beneran."
        ]
    },
    {
        keywords: ["hobi", "kegemaran", "senang apa", "suka apa"],
        response: [
            "Hobi lu apa nih? Selain mabar sama tidur wkwk.",
            "Punya hobi itu bagus bro, bisa buat nyalurin bakat dan kreativitas lu.",
            "Gue hobinya ya ngobrol sama lu di mari. Seru tau dengerin cerita anak-anak TKJ 2!"
        ]
    },
    {
        keywords: ["mimpi", "impian", "khayalan"],
        response: [
            "Mimpi yang tinggi bro, tapi jangan lupa bangun buat mewujudkannya wkwk.",
            "Gue mimpinya pengen punya server sendiri yang super kenceng wkwk. Kalau lu?",
            "Jangan cuma mimpi di siang bolong, mending lu gas pol ngerjain apa yang lu suka."
        ]
    },
    {
        keywords: ["seragam", "baju sekolah", "batik", "pramuka", "osis"],
        response: [
            "Seragam kelas kita yang mana nih favorit lu? Batik atau Pramuka?",
            "Pake seragam yang rapi ya, biar diliatnya enak and nggak kena tegur guru piket wkwk.",
            "Seragam OSIS kita udah paling kece dah dibanding kelas lain wkwk."
        ]
    },
    {
        keywords: ["capek nunggu", "bosan nunggu", "lama amat"],
        response: [
            "Sabar bro, orang sabar disayang Tuhan wkwk. Sambil nunggu mending dengerin musik dulu.",
            "Lama ya? Maklum servernya lagi banyak pikiran kayak lu pas lagi UTS wkwk.",
            "Nunggu itu emang ngebosenin, tapi kalau nunggu yang pasti mah nggak sia-sia bro."
        ]
    },
    {
        keywords: ["ngakak", "lucu banget", "kocak", "wkwkwk", "awokawok"],
        response: [
            "Ketawa lu kayak knalpot racing, berisik amat wkwk.",
            "Garing gitu aja ketawa lu cik. Receh amat dah wkwk.",
            "Yaudah ketawa aja terus sampe kenyang wkwk. Ada lagi nggak yang lucu?"
        ]
    },
    {
        keywords: ["we", "oi", "woi", "oy", "p"],
        response: [
            "Apaan sih woi! Ngetik yang bener napa, jangan cuma P P doang wkwk.",
            "Oi ngab! Ada apa nih? Tumben nyariin gue, mau pinjem duit ya? wkwk.",
            "Oy oy! Masuk pak eko! Ada info apa nih hari ini?"
        ]
    },
    {
        keywords: ["cepuan", "cepu", "tukang wadul"],
        response: [
            "Halah, jangan jadi cepu lah cik. Gak solid banget lu jadi temen wkwk.",
            "Siapa nih yang cepu? Sini gue kick dari server wkwk canda kick!",
            "Solidaritas nomor satu bro, cepuan nomor sekian! wkwk."
        ]
    }
];

// Fungsi utama yang akan dipanggil oleh index.html
function getBotResponse(input, hasAccess = false) {
    const text = input.toLowerCase();

    // Fungsi untuk melarikan karakter spesial regex
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // 1. CEK DATA RAHASIA (Hanya jika punya akses)
    if (hasAccess) {
        for (let item of specialChatbotResponses) {
            for (let kw of item.keywords) {
                const regex = new RegExp(`\\b${escapeRegExp(kw)}\\b`, 'i');
                if (regex.test(text)) {
                    if (Array.isArray(item.response)) {
                        return "🔓 [AKSES RAHASIA] " + item.response[Math.floor(Math.random() * item.response.length)];
                    }
                    return "🔓 [AKSES RAHASIA] " + item.response;
                }
            }
        }
    }

    // 2. CEK DATA UMUM (Looping data keyword standar)
    for (let item of chatbotResponses) {
        let isMatch = false;

        if (item.condition === "AND") {
            // Cek apakah SEMUA keyword ada di input user (dengan word boundary)
            let allMatch = true;
            for (let kw of item.keywords) {
                const regex = new RegExp(`\\b${escapeRegExp(kw)}\\b`, 'i');
                if (!regex.test(text)) {
                    allMatch = false;
                    break;
                }
            }
            if (allMatch) isMatch = true;
        } else {
            // Cek apakah SALAH SATU keyword ada di input user (dengan word boundary)
            for (let kw of item.keywords) {
                const regex = new RegExp(`\\b${escapeRegExp(kw)}\\b`, 'i');
                if (regex.test(text)) {
                    isMatch = true;
                    break;
                }
            }
        }

        if (isMatch) {
            // Jika response berupa array, pilih salah satu secara acak
            if (Array.isArray(item.response)) {
                return item.response[Math.floor(Math.random() * item.response.length)];
            }
            return item.response;
        }
    }

    // Fallback response kalau AI nggak ngerti (dibuat random biar lebih interaktif)
    const randomFallbacks = [
        "Waduh sori bro, pertanyaan lu kelewat random, gue RKJ2 belum diajarin soal itu wkwk. Tanya seputar kelas aja deh!",
        "Bro, otak AI gue tiba-tiba nge-blank ditanya itu wkwk. Coba nanya soal mabar, jam kosong, atau info anak-anak kelas aja.",
        "Hmm, gue kurang paham maksud lu. Ngetiknya typo nggak tuh? wkwk. Coba tanya hal lain seputar kehidupan TKJ 2.",
        "Pertanyaan yang bagus! Sayangnya gue nggak tau jawabannya wkwk. Coba tanya topik lain kayak wali kelas, tugas, atau praktikum.",
        "Aduh, sinyal otak buatan gue agak lemot nih buat jawab itu. Ada pertanyaan lain nggak yang lebih merakyat?",
        "Gue ini cuma bot asisten anak TKJ 2 bro, jangan kasih pertanyaan sulit setara UTBK dong wkwk. Nanya seputar kelas aja ya!"
    ];

    return randomFallbacks[Math.floor(Math.random() * randomFallbacks.length)];
}
