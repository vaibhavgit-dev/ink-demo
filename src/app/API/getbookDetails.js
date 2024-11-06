import { AuthorsList } from "./allAuthorList";
import { BooksList } from "./allBookList";

export const BooksDetails = [
  
  {
    id: 1,
    title: "Sri Aurobindo and the Literary Renaissance of India",  
    slug: "sri-aurobindo-and-the-literary-renaissance-of-india",
    dimension: "22 x 14.5 x 3.3 cm",
    book_format: "Hardback",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Society & Social Sciences",
    isbn13: "9788194954781",
    price: 995,
    publish_year: 2021,
    pages: "411",
    about_book:
      "This book delves deep into the works of Sri Aurobindo to present a compelling and fascinating collage of his multifaceted and multidimensional genius, who is not only one of the greatest political leaders of modern times but a supreme visionary, thinker par excellence, great scholar and writer, spiritual guide and statesman, and a leader of all humanity. The author presents perspectives on his vast oeuvre as a darshanik and shares his exalted dream and aspiration for India and humanity, his horizonless ranges that are their own skylines, his lights, and his snowcapped peaks. It gives a glimpse into Sri Aurobindo’s pragmatic integral philosophy that is unique in being Vedantic in essence yet modern in expression and outlook.",
    author: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authslug),
    amazonlink:
      "https://www.amazon.in/SRI-AUROBINDO-LITERARY-RENAISSANCE-INDIA/dp/8194954789",
    flipkartlink:
      "https://www.flipkart.com/sri-aurobindo-literary-renaissance-india/p/itm77ed51296cc47?pid=",
    binding: "HB",
    language: "English",
    meta_description: "A deep dive into Sri Aurobindo's visionary spiritual and political genius, exploring his profound impact on India and beyond.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "sri-aurobindo-and-the-literary-renaissance-of-india")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-the-literary-renaissance-of-india/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-the-literary-renaissance-of-india/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-the-literary-renaissance-of-india/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-the-literary-renaissance-of-india/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-the-literary-renaissance-of-india/thumbnail6.jpg",
    ],
    weight: "525g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s, unknown printer took a galley of type it to make a type specimen book.",
    ],
  },
  {
    id: 2,
    title: "Design: A Business Case (Paperback)",  
    slug: "design-a-bussiness-case-paperback",
    publish_year: 2021,
    author: AuthorsList.filter((author) => [23,63].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [23,63].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [23,63].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [23,63].includes(author.id)).map((author) => author.authslug),
    price: 795,
    isbn13: "9788194954743",
    amazonlink:
      "https://www.amazon.in/DESIGN-BUSINESS-Brigitte-Borja-Mozota/dp/8194954746/ref=sr_1_3?crid",
    flipkartlink: "",
    language: "English",
    dimension: "23 x 15.5 x 1 cm",
    pages: "173",
    about_book:
      "How to stimulate innovation in your organization as a constantly ongoing process? How to bridge the complementary skills that exist in your organization? What leads to an integration of mind, matter, image and identity? Design: A Business Case can lead you to the answers of all of this and more. It combines the intellectual frameworks of Design Thinking, the operational and implementing mechanisms of Design Management as well as the skills of Design that embody these two. Design Thinking inspires, Design Management enables, Design embodies. This book aims to reconcile the three and encourage organizational and professional environments in which their combined forces can thrive and succeed.",
    category: "Non-Fiction",
    genre: "'Economics, Finance, Business & Management'",
    meta_description:
      "Unlock innovation through the integration of Design Thinking, Management, and essential skills.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "design-a-bussiness-case-paperback")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/design-a-bussiness-case-pb/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/design-a-bussiness-case-pb/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/design-a-bussiness-case-pb/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/design-a-bussiness-case-pb/thumbnail4.jpg",
    ],
    book_format: "Paperback",
    weight: "200g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 3,
    title: "Design: A Business Case (Hardback)",  
    slug: "design-a-bussiness-case-hardback",
    publish_year: 2021,
    author: AuthorsList.filter((author) => [23,63].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [23,63].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [23,63].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [23,63].includes(author.id)).map((author) => author.authslug),
    price: 995,
    isbn13: "9788194954842",
    amazonlink: "",
    flipkartlink: "",
    book_format: "Hardback",
    language: "English",
    dimension: "23.6 x 15.9 x 1.4 cm",
    pages: "173",
    about_book:
      "How to stimulate innovation in your organization as a constantly ongoing process? How to bridge the complementary skills that exist in your organization? What leads to an integration of mind, matter, image and identity? Design: A Business Case can lead you to the answers of all of this and more. It combines the intellectual frameworks of Design Thinking, the operational and implementing mechanisms of Design Management as well as the skills of Design that embody these two. Design Thinking inspires, Design Management enables, Design embodies. This book aims to reconcile the three and encourage organizational and professional environments in which their combined forces can thrive and succeed.",
    category: "Non-Fiction",
    genre: "'Economics, Finance, Business & Management'",
    meta_description:
      "Unlock innovation through the integration of Design Thinking, Management, and essential skills.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "design-a-bussiness-case-hardback")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/design-a-bussiness-case-hb/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/design-a-bussiness-case-hb/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/design-a-bussiness-case-hb/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/design-a-bussiness-case-hb/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/design-a-bussiness-case-hb/thumbnail5.jpg",
    ],
    weight: "200g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 4,
    title: "Once Upon a Time in RIMC",  
    slug: "once-upon-a-time-in-rimc",
    publish_year: 2021,
    author: AuthorsList.filter((author) => [22].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [22].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [22].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [22].includes(author.id)).map((author) => author.authslug),
    price: 250,
    
    isbn13: "9788194954729",
    amazonlink:
      "https://www.amazon.in/Once-Upon-Time-RIMC-Thrilling/dp/819495472X/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/once-upon-time-rimc/p/itm0e70d459975dd?pid=",
    
    language: "English",
    dimension: "21.6 x 13.5 x 0.7 cm",
    pages: "103",
    about_book:
      "Boys of RIMC never really grow up, and happily, the spirit of adventure and mischief lives on, even after many winters have passed. For nearly a century, Rimcollians have done the three Services proud, and the civvy street too. Known for their camaraderie and spirit of never accepting defeat or yielding to any adversary, whether in the battlefield or the playground. Brig Jasbir’s humorous book brings alive how mischievous teenagers are forged into soldiers. He presents a thrilling account of happy days spent by him at the RIMC, Dehradun, from 1962 to 1966.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Military",
    meta_description:
      "Brig Jasbir's humorous memoir captures RIMC life, turning mischievous boys into disciplined soldiers.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "once-upon-a-time-in-rimc")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/once-upon-a-time-in-rimc/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/once-upon-a-time-in-rimc/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/once-upon-a-time-in-rimc/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/once-upon-a-time-in-rimc/thumbnail4.jpg",
    ],
    
    book_format: "Paperback",
    weight: "120g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 5,
    title: "Integral Education Beyond Schooling",  
    slug: "integral-education-beyond-schooling",
    publish_year: 2021,
    author: AuthorsList.filter((author) => [47].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [47].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [47].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [47].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9788194954705",
    amazonlink:
      "https://www.amazon.in/INTEGRAL-EDUCATION-BEYOND-SCHOOLING-PARTHO/dp/B0C8CWQLCN/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 x 14 x 2.3 cm",
    pages: "331",
    about_book:
      "Integral Education Beyond Schooling explores a new paradigm of education, taking learning and teaching beyond conventional schooling, towards what may be called evolutionary education and the growth of consciousness. The book is premised on the idea that we humans are still evolving in consciousness and have reached an evolutionary tipping point where we need a radically new way of learning and growing, a radically new way of perceiving, understanding and organising our world and living our day to day lives in it, more in harmony, oneness and peace. This is a book that must be read by all who are interested and involved in the human future, immediate and long term.",
    category: "Non-Fiction",
    genre: "Self-Help & Development , Society & Social Sciences",
    meta_description:
      "Discover Integral Education: a transformative approach to foster evolving consciousness.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "integral-education-beyond-schooling")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/integral-education-beyond-schooling/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/integral-education-beyond-schooling/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/integral-education-beyond-schooling/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/integral-education-beyond-schooling/thumbnail4.jpg",
    ],
    
    book_format: "Paperback",
    weight: "300g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 6,
    title: "The Fighting Fourth - A Personal Narrative Of The History Of 4 Kumaon",  
    slug: "the-fighting-fourth-a-personal-narrative-of-the-history-of-4-kumaon",
    publish_year: 2021,
    author: AuthorsList.filter((author) => [22].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [22].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [22].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [22].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9788194954750",
    amazonlink:
      "https://www.amazon.in/FIGHTING-FOURTH-Brig-Jasbir-Singh/dp/8194954754/ref=sr_1_1?crid=",
    flipkartlink: "",
    binding: "HB",
    language: "English",
    dimension: "23.5 x 15.8 x 2.1 cm",
    pages: "204",
    about_book:
      "You know, Jasbir, I think we are the only fatherson duo in the unit’s history to have been both decorated for gallantry! Also, there is so much of the unit’s history that needs to be properly probed and recorded. It is your time now, and you must do it.” ‘Fighting Fourth’ or 4th Battalion, The Kumaon Regiment (4 Kumaon), raised in 1788, has fought with distinction and etched its name in the annals of Indian military history with honour and pride. From ﬁghting the Pindaris to quelling the Boxer Rebellion in Hong Kong, the battalion saw extensive action in both the World Wars and the IndoPak war of 1947–48, where the gallant actions of the unit saved Kashmir Valley for the Indian Union and changed the course of history in the region. Major Somnath Sharma was posthumously awarded India’s ﬁrst Param Vir Chakra, the highest award for gallantry, while Brigadier Pritam Singh emerged as the Saviour of Poonch. The unit was awarded Battle Honour ‘Srinagar’ and 57 awards for bravery, including one Param Vir Chakra, three Maha Vir Chakras, 13 Vir Chakras, one Bar to Vir Chakra and other awards. In the Indo–Pak War 1965, the battalion was awarded Battle Honour ‘Sanjoi–Mirpur’, while in the 1971 operations, it was awarded Battle Honour ‘Shamshernagar’, along with three Vir Ckakras, one SM and other awards. In this book, Brigadier Jasbir presents an intimate, personal account of the glorious history of this ﬁne battalion that has contributed no less than two Chiefs of Staff of the Indian Army and is among the most highlydecorated ones. Brigadier Jasbir Singh, SM, is a Rimcollian who studied at RIMC from 1962 to 1966. Thereafter, he underwent training at NDA Khadakwasla, followed by IMA Dehradun, where he was commissioned in the 4th Battalion, The Kumaon Regiment, or 4 Kumaon (Fighting Fourth). He was wounded during operations behind enemy lines in East Pakistan in the 1971 war and decorated twice for gallantry during operations.",
    category: "Non-Fiction",
    genre: "Military & Defence, 'Biography, Autobiography, & True Accounts'",
    meta_description:
      "A tribute to the illustrious history of the 4 Kumaon Regiment and the gallant heroes who have served with honor and valor.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "the-fighting-fourth-a-personal-narrative-of-the-history-of-4-kumaon")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/the-fighting-fourth/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-fighting-fourth/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-fighting-fourth/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-fighting-fourth/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-fighting-fourth/thumbnail5.jpg",
    ],
    
    book_format: "Hardback",
    weight: "1kg",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 7,
    title: "War Despatches 1971",
    slug: "war-despatches1971",
    publish_year: 2021,
    author: AuthorsList.filter((author) => [21].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [21].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [21].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [21].includes(author.id)).map((author) => author.authslug),
    price: 899,
    
    isbn13: "9789392209123",
    amazonlink: "",
    flipkartlink:
      "https://www.flipkart.com/war-despatches-1971/p/itm762ed141f0f7d?pid=9789392209123&lid=",
    binding: "HB",
    language: "English",
    dimension: "23.5 x 15.6 x 3.4 cm",
    pages: "368",
    about_book:
      "An anthology of important judgments across jurisdictions, this book is a unique work. An international release, it contains short essays & commentaries by jurists, judges & academics from around the world on milestone decisions that changed the course of military law in different jurisdictions. The contents are articulated in simple nontechnical language easy to assimilate for a layperson. The book should appeal to the general reader and those interested in the military, law, politics, public policy & human rights.",
    category: "Non-Fiction",
    genre: "Military & Defence, 'Biography, Autobiography, & True Accounts'",
    meta_description:
      "Insightful exploration of landmark military law judgments from experts worldwide, shedding light on global legal precedents.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "war-despatches1971")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/war-despatches1971/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/war-despatches1971/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/war-despatches1971/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/war-despatches1971/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/war-despatches1971/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/war-despatches1971/thumbnail6.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/war-despatches1971/thumbnail7.jpg",
    ],
    
    book_format: "Hardback",
    weight: "565g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 8,
    title: "Seeing With Hands: How Chlildren Use Drawing To Make Sense Of The World",
    slug: "seeing-with-hands-how-children-use-drawing-to-make-sense-of-the-world",
    publish_year: 2021,
    author: AuthorsList.filter((author) => [31].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [31].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [31].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [31].includes(author.id)).map((author) => author.authslug),
    price: 1195,
    
    isbn13: "9789392209420",
    amazonlink:
      "https://www.amazon.in/Seeing-Hands-Jinan-K-B/dp/9392209428/ref=sr_1_1?crid",
    flipkartlink: "",
    
    language: "English",
    dimension: "23.5 x 16 x 3 cm",
    pages: "280",
    about_book:
      "Seeing with Hands is a result of a unique experiment and extensive research by the author, Jinan K.B., and his foundation. It is a record of how children express their experiences through drawing (not art) and how drawing becomes a tool that helps them observe the world around them. Showcasing brilliant drawings made by children to express themselves, the book attempts to prove that they are naturally equipped to adapt and learn autonomously. This book is bound to prompt a new way of thinking on educating children, helping them develop their cognitive tools and provide insights to all those who are concerned with children, be it parents, teachers or caretakers.",
    category: "Non-Fiction",
    genre: "Self-Help & Development",
    meta_description:
      "A study of children's innate learning abilities through the mediums of drawing and selfexpression, highlighting their creativity",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "seeing-with-hands-how-children-use-drawing-to-make-sense-of-the-world")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/seeing-with-hands/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/seeing-with-hands/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/seeing-with-hands/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/seeing-with-hands/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/seeing-with-hands/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/seeing-with-hands/thumbnail6.jpg",
    ],
    
    book_format: "Paperback",
    weight: "420g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 9,
    title: "March To Justice: Global Military Law Landmarks",
    slug: "march-to-justice-global-military-law-landmarks",
    publish_year: 2021,
    author: AuthorsList.filter((author) => [40].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [40].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [40].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [40].includes(author.id)).map((author) => author.authslug),
    price: 995,
    
    isbn13: "9788194954712",
    amazonlink:
      "https://www.amazon.in/March-Justice-Navdeep-Singh/dp/B0C8CY1355/ref=sr_1_1?crid=",
    flipkartlink: "",
    binding: "HB",
    language: "English",
    dimension: "23.5 x 16 x 3 cm",
    pages: "337",
    about_book:
      "March to Justice: Global Military Law Landmarks is an anthology of twentyfive short essays and commentaries by eminent jurists, judges and academics from around the world on governance, military law and human rights. It talks of diverse and pathbreaking judicial decisions that changed the course of military law in several jurisdictions and in different nations. It also brings to the fore some noteworthy lessons from these experiences, in addition to facilitating a comparative analysis. Articulated in simple, nonscholarly language for a layperson, this book is a musthave for the intrigued reader of texts on military, law, politics, public policy, governance and human rights.",
    category: "Non-Fiction",
    genre: "Military & Defence, Law & Public Policy",
    meta_description:
      "A deep dive into pivotal cases in global military law, providing insights on governance, justice, and legal frameworks.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "march-to-justice-global-military-law-landmarks")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/march-to-justice/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/march-to-justice/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/march-to-justice/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/march-to-justice/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/march-to-justice/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/march-to-justice/thumbnail6.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/march-to-justice/thumbnail7.jpg",
    ],
    
    book_format: "Hardback",
    weight: "550g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 10,
    slug: "somewhere-among-the-stars-recollections-of-a-mystic-pb",
    title: "Somewhere Among The Stars: Recollections of a Mystic (Paperback)",  
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "somewhere-among-the-stars-recollections-of-a-mystic-pb")?.book_image,
    meta_description:
      "A woman's spiritual quest for love and truth across lifetimes and dimensions, navigating the complexities of her existence.",
    
    about_book:
      "Somewhere Among the Stars chronicles a woman?s inner quest for Love and Truth across lifetimes and dimensions of being?an adventure of consciousness through rare terrains of Vedanta and Yoga. Adi Varuni writes on Indian spirituality and mysticism and lives incognito",
    book_thumbnail: [
        "https://bluone-ink.s3.amazonaws.com/images/books/somewhere-among-the-stars-pb/thumbnail1.jpg",
        "https://bluone-ink.s3.amazonaws.com/images/books/somewhere-among-the-stars-pb/thumbnail2.jpg",
        "https://bluone-ink.s3.amazonaws.com/images/books/somewhere-among-the-stars-pb/thumbnail3.jpg",
        "https://bluone-ink.s3.amazonaws.com/images/books/somewhere-among-the-stars-pb/thumbnail4.jpg",
        "https://bluone-ink.s3.amazonaws.com/images/books/somewhere-among-the-stars-pb/thumbnail5.jpg",
    ],

    amazonlink:
      "https://www.amazon.in/Somewhere-Among-Stars-Recollections-Mystic/dp/9392209207/ref=sr_1_fkmr0_2?crid=",
    flipkartlink:
      "https://www.flipkart.com/somewhere-among-stars/p/itmdb3ec4e4851e1?pid=9789392209215&lid=",
    

      author: AuthorsList.filter((author) => [5].includes(author.id)).map((author) => author.author_name),
      AuthorInfo: AuthorsList.filter((author) => [5].includes(author.id)).map((author) => author.authorDescription),
      Authorimage: AuthorsList.filter((author) => [5].includes(author.id)).map((author) => author.image),
      author_slug: AuthorsList.filter((author) => [5].includes(author.id)).map((author) => author.authslug),

    category: "Fiction",
    genre: "Religion & Spirituality, Society & Social Sciences",
    publish_year: 2022,
    price: 395,
    
    isbn13: "9789392209215",
    
    language: "English",
    dimension: "21.5 x 14 x 2 cm",
    pages: "271",
    book_format: "Paperback",
    weight: "280g",

    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 11,
    title: "Somewhere Among The Stars: Recollections of a Mystic (Hardback)",  
    slug: "somewhere-among-the-stars-recollections-of-a-mystic-hb",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [5].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [5].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [5].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [5].includes(author.id)).map((author) => author.authslug),
    price: 750,
    
    isbn13: "9789392209208",
    amazonlink: "",
    flipkartlink: "",
    binding: "HB",
    language: "English",
    dimension: "22.2 x 14.8 x 2 cm",
    pages: "271",
    about_book:
      "Somewhere Among the Stars chronicles a woman?s inner quest for Love and Truth across lifetimes and dimensions of being?an adventure of consciousness through rare terrains of Vedanta and Yoga. Adi Varuni writes on Indian spirituality and mysticism and lives incognito",
    category: "Fiction",
    genre: "Religion & Spirituality, Society & Social Sciences",
    meta_description:
      "A woman's spiritual quest for love and truth across lifetimes and dimensions, navigating the complexities of her existence.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "somewhere-among-the-stars-recollections-of-a-mystic-hb")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/somewhere-among-the-stars-hb/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/somewhere-among-the-stars-hb/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/somewhere-among-the-stars-hb/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/somewhere-among-the-stars-hb/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/somewhere-among-the-stars-hb/thumbnail5.jpg",
    ],
    
    book_format: "Hardback",
    weight: "470g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 12,
    title: "Identity's Last Secret",
    slug: "identitys-last-secret",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [41].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [41].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [41].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [41].includes(author.id)).map((author) => author.authslug),
    price: 1495,
    
    isbn13: "9788194954798",
    amazonlink:
      "https://www.amazon.in/Identitys-Secret-Makarand-Paranjape-Pariksith/dp/8194954797/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/identity-s-last-secret/p/itmd014fe1dcfded?pid=9788194954798&lid=",
    binding: "HB",
    language: "English",
    dimension: "23.5 x 23.5 x 1.3 cm",
    pages: "140",
    about_book:
      "This book cannot be read simply as a compilation of immaculate theories which leads one to perfect conclusions. It goes beyond literary theory, known myths and metaphysics. It bridges the human and the divine and the author finds his true self by accepting all aspects of existence and exploring all that he has lived and experienced. It tells us about the uncertainty of living a life while keeping the central theme as love. It shows us that, unlike powerplay, love is the only emotion where submission does not involve humiliation.",
    category: "Non-Fiction",
    genre: "Poetry",
    meta_description:
      "A transformative journey of selfdiscovery that explores themes of love, existence, and the divine connection we share.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "identitys-last-secret")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/identitys-last-secret/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/identitys-last-secret/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/identitys-last-secret/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/identitys-last-secret/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/identitys-last-secret/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/identitys-last-secret/thumbnail6.jpg",
    ],
    
    book_format: "Hardback",
    weight: "400g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 13,
    title: "The Eternal Feminine",
    slug: "the-eternal-feminine",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [8].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [8].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [8].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [8].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9788194954774",
    amazonlink:
      "https://www.amazon.in/Eternal-Feminine-Alok-Pandey/dp/8194954770/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 x 14.2 x 2.8 cm",
    pages: "342",
    about_book:
      "A woman is not just a form and a figure; though her form itself is significant of deepguarded secrets and the capacity to create marvels out of a seed state. She is the Force, Shakti, Wisdom, Strength, Beauty, Love, Delight that is everywhere and in all beings. This book is not just an attempt to discover and evoke her through myths and legends of India, but to unravel the mysteries of the ‘Eternal Feminine’ with a view to discover the truth behind what a woman truly represents as seen through the awakened eyes of the mystics and the spiritual culture of India.",
    category: "Non-Fiction",
    genre: "Religion & Spirituality, Society & Social Sciences",
    meta_description:
      "Unraveling the mysteries of the Eternal Feminine through the lens of Indian mysticism and spiritual traditions.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "the-eternal-feminine")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/the-eternal-feminine/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-eternal-feminine/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-eternal-feminine/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-eternal-feminine/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-eternal-feminine/thumbnail5.jpg",
    ],
    
    book_format: "Paperback",
    weight: "600g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 14,
    title: "Hop's Spectacular Adventure",  
    slug: "hops-spectacular-adventure",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [75].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [75].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [75].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [75].includes(author.id)).map((author) => author.authslug),
    price: 350,
    
    isbn13: "9788194954736",
    amazonlink:
      "https://www.amazon.in/HOPS-Spectacular-Adventure-Zain-Hashmy/dp/8194954738/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21 x 29.5 x 0.2cm",
    pages: "23",
    about_book:
      "When Hop, the Frog refuses to eat his locusts, he lands himself in a dizzy adventure, drifting towards the earth after the mysterious Two legs come calling. Hop’s Spectacular Adventure is the story of how he becomes the only frog to fly since Felix, the hero of Lower Greens. The endearing tale recounts how a young frog skyrocketed to glory when he least expected it. As he ends up being one with the very legend that he had grown up admiring, he becomes a source of inspiration to young tadpoles everywhere even as he showers them with a bounty of delicious gifts.",
    category: "Children",
    genre: "Action & Adventure, Self-Help & Development",
    meta_description:
      "Follow a young frog's thrilling adventure as he aspires to achieve fame, soaring high like his hero, Felix the frog.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "hops-spectacular-adventure")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/hops-spectacular-adventure/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hops-spectacular-adventure/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hops-spectacular-adventure/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hops-spectacular-adventure/thumbnail4.jpg",
    ],
    
    book_format: "Paperback",
    weight: "50g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 15,
    title: "How the Rainbow Got Its Colour",
    slug: "how-the-rainbow-got-its-colour",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [76].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [76].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [76].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [76].includes(author.id)).map((author) => author.authslug),
    price: 299,
    
    isbn13: "9789392209031",
    amazonlink: "",
    flipkartlink:
      "https://www.flipkart.com/rainbow-got-its-colors/p/itm8c499d3bc2d02?pid=9789392209031&lid=",
    
    language: "English",
    dimension: "21 x 29.8 x 0.2 cm",
    pages: "23",
    about_book: "",
    category: "Children",
    genre: "Action & Adventure, Self-Help & Development",
    meta_description: "",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "how-the-rainbow-got-its-colour")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/how-the-rainbow-got-is-colour/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-the-rainbow-got-is-colour/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-the-rainbow-got-is-colour/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-the-rainbow-got-is-colour/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-the-rainbow-got-is-colour/thumbnail5.jpg",
    ],
    
    book_format: "Paperback",
    weight: "50g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 16,
    title: "Confidence Cures : The Art Of Self-Wellness",
    slug: "confidence-cures-the-art-of-self-wellness",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [37,43].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [37,43].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [37,43].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [37,43].includes(author.id)).map((author) => author.authslug),
    price: 495,
    
    isbn13: "9789392209260",
    amazonlink:
      "https://www.amazon.in/Confidence-Cures-Lt-Gen-S-B-Sehajpal/dp/B0C8CSMY8D/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 x 14 x 1.7 cm",
    pages: "199",
    about_book:
      "Confidence Cures: The Art of SelfWellness offers an integrated and experiencebased approach to aid you in attaining wellness by focusing on the physical, mental, existential and spiritual aspects of your being. Based on the personal experience of Lieutenant General S.B. Sehajpal, a former dental surgeon in the Indian Army, who practised the wellness way of life and recovered from acute depression, hypertension and diabetes, and Mrs Kiran Sehajpal, an educationist, this book serves as a comprehensive guide in reinvigorating yourself and putting your health at topmost priority. No fancy diets, no fads, no herdhounding, just intent and a karmic commitment with yourself.",
    category: "Non-Fiction",
    genre: "Self-Help & Development , Health & Wellness",
    meta_description:
      "An integrated guide to selfwellness through personal experience and intent.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "confidence-cures-the-art-of-self-wellness")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/confidence-cures/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/confidence-cures/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/confidence-cures/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/confidence-cures/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/confidence-cures/thumbnail (5).jpg",

    ],
    
    book_format: "Paperback",
    weight: "280g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 17,
    title: "Sri Aurobindo and Philosophy (Hardback)",  
    slug: "sri-aurobindo-and-philosophy-hardback",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authslug),
    price: 995,
    
    isbn13: "9789392209017",
    amazonlink: "",
    flipkartlink: "",
    binding: "HB",
    language: "English",
    dimension: "22 x 14.5 x 3.5 cm",
    pages: "410",
    about_book:
      "This book is a significant addition to the growing body of literature on Sri Aurobindo. Dr. Singh delves deep into the works of Sri Aurobindo to present a compelling and fascinating collage of the philosopher’s multifaceted and multidimensional genius: Sri Aurobindo as seer and mystic, as visionary and poet, as writer, translator, linguist and critic, and as India’s first spiritual nationalist. Sri Aurobindo, as this book declares, a true fountainhead of India’s literary renaissance, needs to be discovered and better appreciated not just in India, but globally, and Dr Singh has given an incredible tribute to the saint with this exceptional book.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Society & Social Sciences",
    meta_description:
      "Exploring Sri Aurobindo's multifaceted genius as a seer, poet, and visionary.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "sri-aurobindo-and-philosophy-hardback")?.book_image,
    book_thumbnail: [
     "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-hb/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-hb/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-hb/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-hb/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-hb/thumbnail5.jpg",
    ],
    
    book_format: "Hardback",
    weight: "545g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 18,
    title: "Sri Aurobindo and Philosophy (Paperback)",  
    slug: "sri-aurobindo-and-philosophy-paperback",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authslug),
    price: 595,
    
    isbn13: "9789392209321",
    amazonlink:
      "https://www.amazon.in/SRI-AUROBINDO-PHILOSOPHY-Pariksith-Singh/dp/9392209320/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 x 14 x 2.5 cm",
    pages: "413",
    about_book:
      "This book is a significant addition to the growing body of literature on Sri Aurobindo. Dr. Singh delves deep into the works of Sri Aurobindo to present a compelling and fascinating collage of the philosopher’s multifaceted and multidimensional genius: Sri Aurobindo as seer and mystic, as visionary and poet, as writer, translator, linguist and critic, and as India’s first spiritual nationalist. Sri Aurobindo, as this book declares, a true fountainhead of India’s literary renaissance, needs to be discovered and better appreciated not just in India, but globally, and Dr Singh has given an incredible tribute to the saint with this exceptional book.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Society & Social Sciences",
    meta_description:
      "An integrated guide to achieving selfwellness, drawing from personal experiences and intent for holistic wellbeing.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "sri-aurobindo-and-philosophy-paperback")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-pb/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-pb/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-pb/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-pb/thumbnail4.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-pb/thumbnail5.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/sri-aurobindo-and-philosophy-pb/thumbnail6.jpg",
    ],
    
    book_format: "Paperback",
    weight: "500g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 19,
    title: "Snakes in The Ganga: Breaking India 2.0",
    slug: "snakes-in-the-ganga-breaking-india-2.0",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [51,72].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [51,72,].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [51,72,].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [51,72,].includes(author.id)).map((author) => author.authslug),
    price: 895,
    isbn13: "9789392209093",
    amazonlink:
      "https://www.amazon.in/Snakes-Ganga-Breaking-India-2-0/dp/B0CSK7HRDT/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/snakes-ganga-breaking-india-2-0/p/itmd9a426687f4b2?pid=",
    binding: "HB",
    language: "English",
    dimension: "23.5 x 16 x 6.5 cm",
    pages: "812",
    about_book:
      "Snakes in the Ganga unveils uncomfortable truths concerning India’s vulnerabilities: Intense warfare against India’s integrity is the work of a wellorchestrated global machinery driven by a new ideology. Marxism has been reincarnated as critical race theory in US academia and serves as the framework to address America’s racism. This has been recklessly mapped on to India: Caste is equated with Race. Marginalized communities of India are considered as Blacks and Brahmins as the Whites of India. Groups claiming grievances (like Muslims and LGBTQ+) are artificially clubbed together. Popularly called the woke movement, the mission is to dismantle Indian civilization and heritage by waging an uncompromising war against India’s government, educational institutions, culture, industry, and society. Harvard University is ground zero of these social theories developed in collaboration with Indian scholars, activists, journalists, and artists. This represents a clear and present danger to India’s sovereignty and national security. Several Indian elites are hoisting Harvard as the vishwa guru with their money and family names. Some private universities within India are importing wokeism that has serious repercussions for India’s stability. Indian corporates are bringing the latest Western rubric of environmental, social, and governance ratings into their workplaces. This is aligned with the global social justice movement. China has exploited this latest infrastructure as a passage to India. Wokeism has penetrated some of the Indian government’s policies. For instance, the National Education Policy 2020 is propagating Harvard’s liberal arts. An entire ecosystem of ideologies, institutions, and young leaders is emerging for the recolonization of India. Is India for sale? In this paperback edition, the back matter has been trimmed to shed some weight in the interest of portability. Readers can, however, still access it by scanning the QR code printed after the last chapter.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Law & Public Policy, Politics & Governance",
    meta_description:
      "Exploring the multifaceted genius of Sri Aurobindo as a seer, poet, and visionary, highlighting his profound insights.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "snakes-in-the-ganga-breaking-india-2.0")?.book_image,
    book_image: "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/Snakes-in-the-Ganga-Breaking-India-2.0-front-cover.jpg",
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail(1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail(2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail(3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail(4).jpg",
    ],
    book_format: "Hardback",
    weight: "780g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ], 
  },
  {
    id: 20,
    title: "The Eternal Gene And Other Tales Of Malaise",
    slug: "the-eternal-gene-and-other-tales-of-malaisa",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [14].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [14].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [14].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [14].includes(author.id)).map((author) => author.authslug),
    price: 495,
    
    isbn13: "9789392209147",
    amazonlink:
      "https://www.amazon.in/Eternal-Gene-Ankush-Sam-Thorpe/dp/B0C8NSK7F7/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "19.8 x 12.8 x 1.7 cm",
    pages: "228",
    about_book:
      "How do we know that we are living in actual reality? Can we trust our memories? Have you ever wondered about the possibilities of extraterrestrial species visiting Earth in the prehistoric era? What would happen if a rare mutation halts aging in a man? All these questions, and many more, are answered through six superbly crafted stories penned by breakout author, Ankush Sam Thorpe. In the stunning title story, a man’s journey to investigate his father’s mysterious death leads him to the nation’s best kept secret. ‘A Stitch in Time’, follows a soldier’s quest to finish a mission in a world long forgotten, with a gutwrenching revelation. In ‘Down Memory Lane’, the protagonist learns that the reality is not what it seems amidst an imminent political coup. In ‘The Representative’, a man suddenly wakes up billions of light years away, in an intergalactic conference, representing Earth. And in ‘Hera’, a group of Neanderthals are visited by a guest from a hyperadvanced civilization, forever changing the course of evolution on Earth.",
    category: "Fiction",
    genre: "Action & Adventure, Fantasy & Science Fiction",
    meta_description:
      "Delving into Sri Aurobindo's remarkable genius as a seer, poet, and visionary, uncovering his contributions to spirituality.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "the-eternal-gene-and-other-tales-of-malaisa")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/the-eternal-gene/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-eternal-gene/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-eternal-gene/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-eternal-gene/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-eternal-gene/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "205g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 21,
    title: "This Is Sanatan Dharma: The Quest For Truth",
    slug: "this-is-sanatan-dharma-the-quest-for-truth",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [47].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [47].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [47].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [47].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9789392209505",
    amazonlink:
      "https://www.amazon.in/This-Sanatan-Dharma-Quest-Truth/dp/9392209509/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/this-is-sanatan-dharma/p/itm61f0c62a7c052?pid=",
    
    language: "English",
    dimension: "23 x 15.5 x 3 cm",
    pages: "370",
    about_book:
      "We speak often of the Hindu religion, of the Sanatan Dharma, but few of us really know what that religion is...This is the Dharma that for the salvation of humanity was cherished in the seclusion of this peninsula from of old. It is to give this religion that India is rising. She does not rise as other countries do, for self or when she is strong, to trample on the weak. She is rising to shed the eternal light entrusted to her over the world. India has always existed for humanity and not for herself and it is for humanity and not for herself that she must be great”. These are the words of Maharshi Sri Aurobindo. But what is this, Sanatan Dharma? Is it just the religion and rituals that Hindus follow or is it really the secret of Life and Consciousness that is embedded in the very fabric of our cosmic existence? This book reveals the inner layers of Sanatan Dharma and is meant for everyone interested in the truths of our human existence in this vast and endless universe. It is a book that will surely put to rest the myths and misunderstandings about Sanatan Dharma as a religion and a philosophy",
    category: "Non-Fiction",
    genre: "Religion & Spirituality, Society & Social Sciences",
    meta_description:
      "Uncovering the global threats to India's integrity and examining the rise of wokeism in contemporary society.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "this-is-sanatan-dharma-the-quest-for-truth")?.book_image,
   book_thumbnail: [
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail (1).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail (2).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail (3).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail (4).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail (5).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail (6).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail (7).jpg",
    ],
    
    book_format: "Paperback",
    weight: "500g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 22,
    title: "Chutti Ke Din",  
    slug: "chutti-ke-din",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9789392209024",
    amazonlink:
      "https://www.amazon.in/CHUTTI-KE-DIN-HINDI-POETRY/dp/9392209029/ref=sr_1_1?crid",
    flipkartlink: "",
    binding: "HB",
    language: "Hindi",
    dimension: "22.2 x 14.8 x 1.4 cm",
    pages: "103",
    about_book:
      "अब एक नयी पुस्तक “छुट्टी के दिन” आपके हाथों में हैं| मातृभाषा की सेवा में डॉक्टर परीक्षित सिंह जी और कल्याण सिंह जी शेखावत के साथ| एक नयी जुगलबंदी हिन्दी और राजस्थानी की|जिसमें ढूंढ़े बिना ही सम्पूर्ण राजस्थान की महक मिलेगी|",
    category: "Fiction",
    genre: "Poetry, Indian Languages",
    meta_description:
      "नई पुस्तक 'छुट्टी के दिन': हिन्दी और राजस्थानी में राजस्थान की महक और संस्कृति की झलक प्रस्तुत करती है",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "chutti-ke-din")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/chutti-ke-din-hindi-poetry/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/chutti-ke-din-hindi-poetry/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/chutti-ke-din-hindi-poetry/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/chutti-ke-din-hindi-poetry/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/chutti-ke-din-hindi-poetry/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/chutti-ke-din-hindi-poetry/thumbnail (6).jpg",
    ],
    
    book_format: "Hardback",
    weight: "330g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 23,
    title: "Jana Awjanar Majhe (Paperback)",
    slug: "jana-awjanar-majhe-paperback",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.authslug),
    price: 195,
    
    isbn13: "9789392209130",
    amazonlink:
      "https://www.amazon.in/Awjanar-Majhe-Bengali-Bimal-Chakravartty/dp/9392209134/ref=sr_1_fkmr0_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/jana-awjanar-majhe/p/itm2992d9598b282?pid=9789392209130&lid=",
    
    language: "Bengali",
    dimension: "22.2 x 14.8 x 1.4 cm",
    pages: "176",
    about_book:
      "Jana Awjanar Majhe is a reflection of the author's journey of life. It depicts his retrospective feeling about his past, and he tries to bring back those golden days in the mirror of the present. Having spent most of his childhood and adolescence in Kashi, the details of old Kashi are vibrant in the book. The author, Bimal Chakravartty, carries a range of experiences that he has gathered throughout his long and interesting career. His reflections and ponderings are an added gift for the readers. In the end, it can be said that it's not always easy to describe the simple incidents of your life. But the author has done it with perfection and grace.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Indian Languages",
    meta_description:
      "Jana Awjanar Majhe reflects Bimal Chakravartty's life journey, capturing nostalgic memories of Kashi with grace and depth.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "jana-awjanar-majhe-paperback")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/jana-awjanar-majhe-pb/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/jana-awjanar-majhe-pb/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/jana-awjanar-majhe-pb/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/jana-awjanar-majhe-pb/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/jana-awjanar-majhe-pb/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "195g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 24,
    title: "Jana Awjanar Majhe (Hardback)",
    slug: "jana-awjanar-majhe-hardback",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.authslug),
    price: 695,
    
    isbn13: "9788194954804",
    amazonlink: "",
    flipkartlink: "",
    binding: "HB",
    language: "Bengali",
    dimension: "22.4 x 15 x 1.8 cm",
    pages: "176",
    about_book:
      "Jana Awjanar Majhe is a reflection of the author's journey of life. It depicts his retrospective feeling about his past, and he tries to bring back those golden days in the mirror of the present. Having spent most of his childhood and adolescence in Kashi, the details of old Kashi are vibrant in the book. The author, Bimal Chakravarty, carries a range of experiences that he has gathered throughout his long and interesting career. His reflections and ponderings are an added gift for the readers. In the end, it can be said that it's not always easy to describe the simple incidents of your life. But the author has done it with perfection and grace.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Indian Languages",
    meta_description:
      "Jana Awjanar Majhe reflects Bimal Chakravarty's life journey, capturing nostalgic memories of Kashi with grace and depth.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "jana-awjanar-majhe-hardback")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/jana-awjanar-majhe-hb/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/jana-awjanar-majhe-hb/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/jana-awjanar-majhe-hb/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/jana-awjanar-majhe-hb/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/jana-awjanar-majhe-hb/thumbnail (5).jpg",
    ],
    
    book_format: "Hardback",
    weight: "395g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 25,
    title: "Swayam Se Parichay",
    slug: "swayam-se-parichay",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authslug),
    price: 195,
    
    isbn13: "9789392209185",
    amazonlink:
      "https://www.amazon.in/Swayam-Se-Parichay-%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%AF%E0%A4%82-%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%9A%E0%A4%AF/dp/9392209185/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "Hindi",
    dimension: "21.5 x 14 x 0.7 cm",
    pages: "95",
    about_book:
      "हिंदी साहित्य भारत के विशाल जनमानस का एक बहुत बड़ा भाग है। किन्तु आधुनिक हिंदी साहित्य (विशेषकर खड़ी बोली) सौ वर्ष से अधिक पुराना नहीं है। भारतेन्दु हरिश्चन्द्र के समय से इसके व्याकरण और बोलचाल के तरीके में बहुत बदलाव आया है। अब भी हिंदी साहित्य अवधी, बृजभाषा, मैथिली, आदि की पुरातन बोलियों से उपज कर निरंतर नए प्रयोग कर रहा है। क्या हिंदी साहित्य का अपना विशेष स्थान है, या उर्दू अथवा हिंदुस्तानी भाषाओं के होने से इसमें कोई विशेषता नहीं रही है? यह एक महत्वपूर्ण प्रश्न है।",
    category: "Fiction",
    genre: "Poetry, Indian Languages",
    meta_description: "परीक्षित सिंह का 'स्वयं से परिचय' कविता संग्रह आधुनिक साहित्य में अन्वेषण, हास्य और आध्यात्मिकता का संगम है।",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "swayam-se-parichay")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/swayam-se-parichay/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/swayam-se-parichay/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/swayam-se-parichay/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/swayam-se-parichay/thumbnail (4).jpg",
    ],
    
    book_format: "Paperback",
    weight: "120g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 26,
    title: "Swayam Ka Ghuspaithiya",
    slug: "swayam-ka-ghuspaithiya",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9789392209192",
    amazonlink:
      "https://www.amazon.in/Swayam-Ka-Ghuspaithiya-%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%AF%E0%A4%82-%E0%A4%98%E0%A5%81%E0%A4%B8%E0%A4%AA%E0%A5%88%E0%A4%A0%E0%A4%BF%E0%A4%AF%E0%A4%BE/dp/8193853113/ref=sr_1_1?crid=",
    flipkartlink: "",
    binding: "HB",
    language: "Hindi",
    dimension: "22.3 x 14.7 x 1.3 cm",
    pages: "111",
    about_book: "परीक्षित सिंह, सर्व प्रथम, एक कवि और दार्षनिक है, हालांकि किसी षैक्षिक या बांधे हुए ढांचे के नहीं। जीवन षास्त्र और कार्य षास्त्र में जो उनका विकास हुआ था और हो रहा है, वह उनके जीवन का अनूठा दर्षन है जिसे उन्होंने अत्यंत विषिश्ट रूप से अपने काव्य में व्यक्त किया है। चाहे वो किसी मरीज को उपचार कर रहे हों, व्यवसाय चला रहे हों या हाइकू लिख रहे हों, परीक्षित सिंह हमेषा आत्मिक का भौतिक में पूर्ण अभिव्यक्ति का अन्वेशण करते हैं - और यही परीक्षित का उनके सभी कार्यों में अनोखा और अविचल हस्ताक्षर है। परीक्षित की साहित्य रचना में यह “आंतरिक अन्वेशण” ही उनकी अभिव्यक्ति है, और इसी लिए रूप का भाव से नित संघर्श उनके षब्द प्रवाह में स्पश्ट है। इस प्रकार, आप परीक्षित के लेखन - उनकी कविताएँ, कहानियाँ, साहित्यिक आलोचनाएँ, और उनके प्रचलित अनुवाद में (हिंदी, संस्कृत, उर्दू से) रूप और भाव की, तकनीक और कथा, षैली और सार की, आष्चर्यजनक रचनामकता पाएँगे और इसी तरह से, सरासर विरोधाभासी, जटिल और कभी-कभी हास्य और गांभीर्य की एकरंगता पाएंगे। लेकिन फिर, यह आपके लिए परीक्षित सिंह और उनकी षैली की अभिव्यंजना है! विशय वस्तु के संदर्भ में, परीक्षित की पहुँच आष्चर्यजनक है - गूढ़ प्राचीन भारतीय योग और चीनी ताओ से समकालीन ज़ेन, क्वांटम भौतिकी से चिकित्सा विज्ञान तक, वह आसानी से अर्थों और गैर-अर्थों का चित्रण करते हैं। परीक्षित के रूप उनके विसरित प्रयोगों में पारंपरिक संरचनाओं से मुक्त कविता तक, रचनात्मक हाइकू से कोआन की तरह दो पंक्तियों में, संरचित लघुकथा से लेकर नव-आधुनिक अर्ध-काव्य गद्य तक सहर्श प्रभावित करते हैं। परीक्षित भविश्य के कवि है। उनका समय भी निकट भविश्य में आने वाला ही है।",
    category: "Fiction",
    genre: "Poetry, Indian Languages",
    meta_description:
      "परीक्षित सिंह: एक कवि, दार्शनिक, और विचारक, जिनकी रचनाएँ आत्मिक और भौतिक जीवन के गहन अन्वेषण की अभिव्यक्ति हैं।",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "swayam-ka-ghuspaithiya")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/swayam-ka-ghuspaithiya/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/swayam-ka-ghuspaithiya/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/swayam-ka-ghuspaithiya/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/swayam-ka-ghuspaithiya/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/swayam-ka-ghuspaithiya/thumbnail (5).jpg",
    ],
    
    book_format: "Hardback",
    weight: "375g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  // {
  //   id: 27,
  //   title: "There Was a Girl I Loved Once",  
  //   slug: "there-was-a-girl-i-loved-once",
  //   publish_year: 2022,
  //   author: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.author_name),
  //   AuthorInfo: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authorDescription),
  //   Authorimage: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.image),
  //   author_slug: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authslug),
  //   price: 350,
  //   
  //   isbn13: "9788193853108",
  //   amazonlink:
  //     "https://www.amazon.in/There-Was-Girl-Loved-Once/dp/8193853105/ref=sr_1_1_mod_primary_new?crid=",
  //   flipkartlink: "",
  //   
  //   language: "English",
  //   dimension: "17.8 x 12.7 x 0.6 cm",
  //   pages: "54",
  //   about_book: "",
  //   category: "Fiction",
  //   genre: "Poetry",
  //   meta_description: "",
  //   meta_title: "",
  //   book_image: BooksList.find((book) => book.slug === "there-was-a-girl-i-loved-once")?.book_image,
  //  book_thumbnail: [
  //     "https://bluone-ink.s3.amazonaws.com/images/books/there-was-a-girl-i-loved-once/thumbnail (1).jpg",
  //     "https://bluone-ink.s3.amazonaws.com/images/books/there-was-a-girl-i-loved-once/thumbnail (2).jpg",
  //     "https://bluone-ink.s3.amazonaws.com/images/books/there-was-a-girl-i-loved-once/thumbnail (3).jpg",
  //     "https://bluone-ink.s3.amazonaws.com/images/books/there-was-a-girl-i-loved-once/thumbnail (4).jpg",
  //   ],
    
  //   book_format: "Hardback",
    // weight: "166g",
  //   endorsement: [
  //     "Lorem Ipsum is simply dummy",
  //     "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
  //     "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
  //   ],
    
  // },
  {
    id: 28,
    title: "Hindutva : Origin Evolution and Future",
    slug: "hindutva-origin-evolution-and-future",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [15].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [15].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [15].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [15].includes(author.id)).map((author) => author.authslug),
    price: 995,
    
    isbn13: "9789392209062",
    amazonlink:
      "https://www.amazon.in/Hindutva-Origin-Evolution-Aravindan-Neelakandan/dp/9392209061/ref=sr_1_1?crid=",
    flipkartlink: "",
    language: "English",
    dimension: "22.9 x 15.4 x 5.5 cm",
    pages: "798",
    about_book:
      "A Magisterial work by Neelakandan to understand what Hindutva actually is and stands for.' Dr. Vikram Sampath 'I have long admired Aravindan Neelakandan as one of the very few Indian thinkers who appreciate and acknowledge Westernderived science and modernity, while simultaneously remaining authentically grounded in Hindu tradition. There have been many books on the history of Hinduism and Hindutva, but this one is different, and significant, because it (correctly) takes a step back and identifies that our current situation is part of a global biopsychosociological churn, something playing out over millennia, far beyond the lifespans of any one individual or organization or state. Aravindan, at his core, is a naturelover and a scientist, and it is this perspective that suffuses this book and makes it special. While there is plenty of groundbreaking content within this expansive, encyclopedic book, I believe the sections on the neurobiological connections of Hindu meditative and ritual practice, which tie the history of Hinduism to the broader evolutionary inheritance of the human species, are going to be very impactful in the years to come.' Dr Anand Venkatraman Neuroscientist'",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Religion & Spirituality",
    meta_description:
      "Neelakandan's magisterial work offers a profound understanding of Hindutva, blending science, tradition, and evolutionary insights.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "hindutva-origin-evolution-and-future")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/hindutva-origin-evolution-and-future/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindutva-origin-evolution-and-future/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindutva-origin-evolution-and-future/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindutva-origin-evolution-and-future/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindutva-origin-evolution-and-future/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindutva-origin-evolution-and-future/thumbnail (6).jpg",
    ],
    
    book_format: "Paperback",
    weight: "980g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 29,
    title: "Life Of An Industani: Six Degress Of Separation",  
    slug: "life-of-an-industani-six-degress-of-separation",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [61].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [61].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [61].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [61].includes(author.id)).map((author) => author.authslug),
    price: 995,
    
    isbn13: "9789392209154",
    amazonlink:
      "https://www.amazon.in/Life-INDUSTANI-Six-Degrees-Separation/dp/9392209150/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/life-of-an-industani/p/itm57b80df01ae36?pid=9789392209154&lid=",
    binding: "HB",
    language: "English",
    dimension: "23.5 x 16 x 4.7 cm",
    pages: "575",
    about_book:
      "The book is a Force 12 hurricane, dropping only to a 10 gale now and then, for it sweeps one along breathlessly from incident to incident, place to place, name to name. From the arresting prologue itself, the book is brutally honest, exhilarating and even selfdeprecating. It is a story that most of Young India must read, for it provides an incredible ringside view to critical events in the 1980s and 90s that shaped the destiny of the nation. The author’s subsequent credentials as a military history writer, his earlier works and his vast exposure to virtually every part of the subcontinent, place him in a unique position to paint scenario after scenario where the reader is completely mesmerised by the cinematic unfolding of events. Which genre does this book fit into? This autobiography, however, doesn’t depend on his earlier works for its literary place: it is sui generis, defiant of classification. The nearest one can come to is to call it a thriller in the garb of a life story in the first person for it is Shiv Kunal’s life story. And it reads like a thriller because it is incredible; the more so, because it is wholly true. His being the son of a distinguished general from a famous regiment may have helped, but not all army brats, however exalted, have this devil’s own luck. It is the kind of life most only dream of, and very few (if any) have the good fortune to live and write about.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Military & Defence",
    meta_description:
      "Shiv Kunal's gripping autobiography offers a thrilling, candid view of pivotal events in India's 1980s and 90s.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "life-of-an-industani-six-degress-of-separation")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/life-of-an-industani/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/life-of-an-industani/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/life-of-an-industani/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/life-of-an-industani/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/life-of-an-industani/thumbnail (5).jpg",
    ],
    
    book_format: "Hardback",
    weight: "1.5kg",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 30,
    title: "All Stray Dogs Go to Heaven",  
    slug: "all-stray-dogs-go-to-heaven",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [33].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [33].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [33].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [33].includes(author.id)).map((author) => author.authslug),
    price: 695,
    
    isbn13: "9789392209086",
    amazonlink:
      "https://www.amazon.in/All-Stray-Dogs-Go-Heaven-ebook/dp/B0C3W3THLB/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    pages: "540",
    about_book: "Nitya is haunted by the pronouncement that he has “forgotten to live.” He leaves Suvastu, his childhood home, and the obsessive, matriarchal world of the Ammalkans to embark on journeys that will bring him in contact with the mercurial Umi whose life is vitalized by a strange discovery; Purusha, the revolutionary, who believes selfawareness must always be translated into action; the eccentric Govi who dreams of the red clouds of Jupiter; Aniyathi, whose attempt to build a life of her own is overtaken by violence and grief; and, most crucially of all, Chinma, the charismatic “guru” who seeks siddhis or psychic powers. A world of mango and biryani lovers, ghosts and philosophers, music and theyyams and calamitous natural disasters. A world full of stories about the secret worlds we inhabit. Stories that happened a long time ago and will most certainly happen again. Told from multiple perspectives and weaving past and present, dreams and reality, All Stray Dogs Go to Heaven is an astounding debut novel by Krishna Candeth. This unforgettable story explores the power of love, friendship, family, and the elusive idea of home, and compels us to revisit our own ideas of truth, the self and reality.",
    category: "Fiction",
    genre: "Action & Adventure",
    meta_description: "In 'All Stray Dogs Go to Heaven,' Nitya's journey unfolds through vibrant characters and rich tales, exploring love, truth, and the essence of home.",
    meta_title: "",
    dimension: "23 x 15.5 x 3 cm",
    book_image: BooksList.find((book) => book.slug === "all-stray-dogs-go-to-heaven")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/all-stray-dogs-go-to-heaven-pb/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/all-stray-dogs-go-to-heaven-pb/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/all-stray-dogs-go-to-heaven-pb/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/all-stray-dogs-go-to-heaven-pb/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/all-stray-dogs-go-to-heaven-pb/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/all-stray-dogs-go-to-heaven-pb/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/all-stray-dogs-go-to-heaven-pb/thumbnail (7).jpg",
    ],
    
    book_format: "Paperback",
    weight: "550g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 31,
    title: "Grit to Glory",  
    slug: "grit-to-glory",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [21].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [21].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [21].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [21].includes(author.id)).map((author) => author.authslug),
    price: 895,
    
    isbn13: "9789392209291",
    amazonlink:
      "https://www.amazon.in/GRIT-GLORY-Brig-B-Mehta/dp/9392209290/ref=sr_1_1?crid=G58XOF3OT7HC&dib=",
    flipkartlink: "",
    binding: "HB",
    language: "English",
    dimension: "23.6 x 16 x 2 cm",
    pages: "214",
    about_book:
      "Raising a regiment is like riding bareback. The struggle is harder; the sweat, toil and tears unending. The reward is confidence in our own abilities, an understanding and respect for the esprit de corps of the cavalry, and regimental pride.’ From the annals of Indian military history comes the glorious tale of the raising of 13 Armoured Regiment — India’s only armoured regiment raised with a unique class composition of Sikh, Rajput and South Indian Classes. Brigadier Balram Singh Mehta, a veteran of the 1971 war, was reverted from RAW by General A.S. Vaidya, then Chief of Army Staff, to raise 13 AR. The regiment was raised in December 1984, in the aftermath of Operation Blue Star, a time of national turmoil and security concerns in India. Through an engaging narrative, this book weaves together the many personal and professional challenges undertaken by the unit’s officers and its first commandant, Brigadier B.S. Mehta, for the unit to be declared fit for war and assigned to an infantry division. In January 1987 while two of its squadrons participated in the Republic Day Parade at New Delhi and Allahabad, 13 AR was mobilized at short notice and inducted into a Strike RAPID Formation deployed in the desert for Exercise Brasstacks under General Hanut Singh. Pakistan’s nervous response led to President Zia-ul-Haq deploying his Army Reserves opposite Punjab, creating a warlike situation that led to a moment of truth for the leadership in politics, diplomacy and the armed forces of both nations.",
    category: "Non-Fiction",
    genre: "Military & Defence, 'Biography, Autobiography, & True Accounts'",
    meta_description:
      "Raising 13 Armoured Regiment tells the inspiring story of India's unique cavalry unit, blending bravery, challenges, and pride.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "grit-to-glory")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/grit-to-glory/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/grit-to-glory/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/grit-to-glory/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/grit-to-glory/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/grit-to-glory/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/grit-to-glory/thumbnail (6).jpg",
    ],
    
    book_format: "Hardback",
    weight: "990g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 32,
    title: "Bharat Ke Janjaatiya Krantiveer: Swatantrata Sangram Ki 75 Unsuni Kahaniyaan (Paperback)",
    slug: "bharat-ke-janjaatiya-krantiveer-swatantrata-sangram-ki-75-unsuni-kahaniyaan-pb",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [26].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [26].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [26].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [26].includes(author.id)).map((author) => author.authslug),
    price: 395,
    
    isbn13: "9789392209222",
    amazonlink:
      "https://www.amazon.in/Bharat-Janjatiya-Krantiveer-PB-Dhaval-Patel/dp/9392209223/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/bharat-ke-janjaatiya-krantiveer-swatantrata-sangram-ki-75-unsuni-kahaniyaan/p/itmf5221887c7e46?pid=9789392209222&lid=",
    
    language: "English",
    dimension: "22.9 x 15.4 x 2.1 cm",
    pages: "289",
    about_book:
      "भारतवर्ष को दासता के चंगुल से मुक्त कराने व स्वराज की स्थापना करने के लिए देश के असंख्य वीर सेनानियों व क्रांतिकारियों ने अपना जीवन भारत माता के चरणों में समर्पित किया है। किन्तु दुर्भाग्यवश, उनमें से बहुतसे योद्धा ऐसे हैं, जिन्हे मानक इतिहास पुस्तकों में किसी कारणवश उनका यथोचित स्थान नहीं मिल सका। यह बात देश के विभिन्न जनजातीय समुदायों से आने वाले क्रांतिवीरों के योगदान के विषय में और भी सटीकता से लागू होती है। यह पुस्तक ऐसे ही जनजातीय क्रान्ततवीरों की अल्पज्ञात अमरगाथाओं का यशोगान कर उन्हें जनसामान्य के समक्ष रखने एक छोटासा प्रयास है। अदम्य साहस, अतुलनीय शौर्य व अटूट स्वाभिमान से भरी ये कथाएँ न केवल ज्ञानवर्धक हैं, अपितु सभी देशवासियों के लिए महान प्रेरणास्रोत भी हैं। यह पुस्तक मातृभूमि के प्रति निष्ठा व अपने पराक्रम से क्रांति की ज्वाला को अनवरत प्रज्वलित रखने वाले तथा स्वाधीनता की यज्ञवेदी पर अपने प्राणों को होम कर देने वाले महान् जनजातीय क्रान्ततवीरों के प्रति एक विनम्र श्रद्धासुमन है।",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Society & Social Sciences, Indian Languages",
    meta_description:
      "यह पुस्तक अनसुने जनजातीय क्रांतिकारियों की वीरगाथाएँ प्रस्तुत करती है, जो स्वराज की स्थापना के लिए समर्पित रहे।",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "bharat-ke-janjaatiya-krantiveer-swatantrata-sangram-ki-75-unsuni-kahaniyaan-pb")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-pb/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-pb/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-pb/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-pb/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-pb/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "700g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 33,
    title: "Bharat Ke Janjaatiya Krantiveer: Swatantrata Sangram Ki 75 Unsuni Kahaniyaan (Hardback)",
    slug: "bharat-ke-janjaatiya-krantiveer-swatantrata-sangram-ki-75-unsuni-kahaniyaan-hb",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [26].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [26].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [26].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [26].includes(author.id)).map((author) => author.authslug),
    price: 695,
    
    isbn13: "9789392209161",
    amazonlink:
      "https://www.amazon.in/Bharat-Janjatiya-Krantiveer-PB-Dhaval-Patel/dp/9392209223/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/bharat-ke-janjaatiya-krantiveer-swatantrata-sangram-ki-75-unsuni-kahaniyaan/p/itmf5221887c7e46?pid=9789392209222&lid=",
    binding: "HB",
    language: "English",
    dimension: "23.6 x 16.1 x 2.9 cm",
    pages: "289",
    about_book:
      "भारतवर्ष को दासता के चंगुल से मुक्त कराने व स्वराज की स्थापना करने के लिए देश के असंख्य वीर सेनानियों व क्रांतिकारियों ने अपना जीवन भारत माता के चरणों में समर्पित किया है। किन्तु दुर्भाग्यवश, उनमें से बहुत-से योद्धा ऐसे हैं, जिन्हे मानक इतिहास पुस्तकों में किसी कारणवश उनका यथोचित स्थान नहीं मिल सका। यह बात देश के विभिन्न जनजातीय समुदायों से आने वाले क्रांतिवीरों के योगदान के विषय में और भी सटीकता से लागू होती है। यह पुस्तक ऐसे ही जनजातीय क्रान्ततवीरों की अल्पज्ञात अमरगाथाओं का यशोगान कर उन्हें जनसामान्य के समक्ष रखने एक छोटा-सा प्रयास है। अदम्य साहस, अतुलनीय शौर्य व अटूट स्वाभिमान से भरी ये कथाएँ न केवल ज्ञानवर्धक हैं, अपितु सभी देशवासियों के लिए महान प्रेरणास्रोत भी हैं। यह पुस्तक मातृभूमि के प्रति निष्ठा व अपने पराक्रम से क्रांति की ज्वाला को अनवरत प्रज्वलित रखने वाले तथा स्वाधीनता की यज्ञवेदी पर अपने प्राणों को होम कर देने वाले महान् जनजातीय क्रान्ततवीरों के प्रति एक विनम्र श्रद्धासुमन है।",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Society & Social Sciences, Indian Languages",
    meta_description:
      "यह पुस्तक अनसुने जनजातीय क्रांतिकारियों की वीरगाथाएँ प्रस्तुत करती है, जो स्वराज की स्थापना के लिए समर्पित रहे।",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "bharat-ke-janjaatiya-krantiveer-swatantrata-sangram-ki-75-unsuni-kahaniyaan-hb")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-hb/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-hb/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-hb/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-hb/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-hb/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-ke-janjatiya-krantiveer-hb/thumbnail (6).jpg",
    ],
    
    book_format: "Hardback",
    weight: "700g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 34,
    title: "Battle For Iits : A Defense Of Meritocracy",  
    slug: "battle-for-iits-a-defence-of-meritocracy",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [51,72].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [51,72].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [51,72].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [51,72].includes(author.id)).map((author) => author.authslug),
    price: 250,
    
    isbn13: "9789392209314",
    amazonlink:
      "https://www.amazon.in/Battle-IITs-Rajiv-Malhotra/dp/9392209312/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/the-battle-for-iits/p/itm30969330599b7?pid=9789392209314&lid=",
    
    language: "English",
    dimension: "21.6 x 14.1 x 1 cm",
    pages: "149",
    about_book:
      "This book is part of a series that started with the flagship Snakes in the Ganga: Breaking India 2.0 in September 2022. The present volume focuses on the American project led by Harvard University to dismantle the Indian Institutes of Technology (IITs) and other institutions of excellence in India, by claiming that they propagate structural casteism. While it is beyond the scope of this book to discuss in detail Marxism, Postmodernism and other European intellectual movements of the last 150 years, the fact is that these movements have influenced what has culminated in this current battle against the IITs. Simply put, we will show that: The IITs are under attack. There are legal implications of this attack. It has severe consequences for the IITs, its students and faculty, India, and engineering education. The consequences of this attack will follow the IIT engineer and other tech professionals to their workplace anywhere in the world. Harvard’s Woke machinery is behind this attack and we need to understand the sophistication that backs it. Our evidencebased rebuttal gives IITians and other engineers the toolkit to tackle false accusations of being casteist bigots. We end with a call to action by IITians and other stakeholders.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Law & Public Policy, Politics & Governance",
    meta_description:
      "This book examines the American-led campaign to dismantle India's IITs, revealing its roots in global intellectual movements and its far-reaching consequences.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "battle-for-iits-a-defence-of-meritocracy")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-iits/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-iits/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-iits/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-iits/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-iits/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "300g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 35,
    title: "Varna Jati Caste: A Primer On Indian Social Structure",
    slug: "varna-jati-caste-a-primer-on-indian-social-structure",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [51,72].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [51,72].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [51,72].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [51,72].includes(author.id)).map((author) => author.authslug),
    price: 250,
    
    isbn13: "9789392209345",
    amazonlink:
      "https://www.amazon.in/Varna-Jati-Caste-Rajiv-Malhotra/dp/9392209347/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/varna-jati-caste/p/itm3aaa862df72f7?pid=9789392209345&lid=",
    
    language: "English",
    dimension: "21.6 x 14.1 x 1.1 cm",
    pages: "168",
    about_book:
      "Caste is being used as a major weapon to shame Hindus. This crisp and easy primer presents a powerful counter to Western Universalism's harsh attacks on caste. It is a long overdue toolkit to help all openminded people gain an understanding of the subtleties of Hinduism's complex social order. This social structure has, after all, produced a civilization with unparalleled diversity. The Vedic world view along with the historical journey of Varna and Jati demolishes the prevailing myths about caste. Myths that are demolished in this book",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Law & Public Policy, Politics & Governance",
    meta_description:
      "This primer counters Western attacks on caste, offering insights into Hinduism's social order and debunking prevalent myths.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "varna-jati-caste-a-primer-on-indian-social-structure")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/varna-jati-caste/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/varna-jati-caste/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/varna-jati-caste/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/varna-jati-caste/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/varna-jati-caste/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "150g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 36,
    title: "The Power Of Future Machines: Essays On Artificial Intelligence",
    slug: "the-power-of-future-machines-essays-on-artificial-intelligence",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [51,66,42].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [51,66,42].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [51,66,42].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [51,66,42].includes(author.id)).map((author) => author.authslug),
    price: 750,
    
    isbn13: "9789392209338",
    amazonlink:
      "https://www.amazon.in/Power-Future-Machines-Rajiv-Malhotra/dp/9392209339/ref=sr_1_1_mod_primary_new?crid=",
    flipkartlink:
      "https://www.flipkart.com/power-future-machines/p/itm371cb22eefaec?pid=",
    binding: "HB",
    language: "English",
    dimension: "23.9 x 15.9 x 2.4 cm",
    pages: "278",
    
    about_book:
      "The Power of Future Machines is a collection of essays by experts exploring the future impact of Artificial Intelligence in various fields of human endeavor. Building upon the dialectical and analytical framework provided in the book Artificial Intelligence and the Future of Power: 5 Battlegrounds, experts from various fields (military, geopolitics, strategic affairs, physics, policy, and others) engage and describe for a wider audience the potential impact of AI. Given their specific vantage points and deriving from their areas of expertise, this anthology makes for a fascinating read. The essays discuss how AI will affect policy making, both in narrow areas of expertise as well as its effect on humanity at large. Aimed at policy makers, experts and a broader audience, these varied perspectives on AI add something vital to the current skewed AI discourse. Anthology by experts exploring the future impact of Artificial Intelligence in various fields of human endeavor.",
    category: "Non-Fiction",
    genre: "Science & Technology, Society & Social Sciences",
    meta_description:
      " 'The Power of Future Machines' features essays by experts on AI's potential impact across fields, enriching the dialogue on technology's role in society",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "the-power-of-future-machines-essays-on-artificial-intelligence")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/the-power-of-future-machines/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-power-of-future-machines/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-power-of-future-machines/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-power-of-future-machines/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-power-of-future-machines/thumbnail (5).jpg"
    ],
    
    book_format: "Hardback",
    weight: "800g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s, unknown printer took a galley of type it to make a type specimen book."
    ],
    
},
  {
    id: 37,
    title: "Of Newtons And Apples: Insights Into 50 Great Minds In Human History",  
    slug: "of-newtons-and-apples-insights-into-50-great-minds-in-human-history",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [3].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [3].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [3].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [3].includes(author.id)).map((author) => author.authslug),
    price: 350,
    
    isbn13: "9789392209246",
    amazonlink:
      "https://www.amazon.in/NEWTONS-APPLES-Abhishek-Kumar/dp/939220924X/ref=sr_1_1_mod_primary_new?crid=",
    flipkartlink:
      "https://www.flipkart.com/of-newtons-and-apples/p/itm5b48d63f19e2e?pid=9789392209246&lid=",
    
    language: "English",
    dimension: "21.5 x 14 x 1.1 cm",
    pages: "163",
    about_book:
      "Evocatively titled, Of Newtons and Apples: Insights into 50 Great Minds in Human History does exactly what it promises. It gives us a glimpse into the professional and personal lives of 50 great personalities whose names, in some cases, are a part of everyday conversation, while in others, they are familiar names about whom we know little. Just the way the falling of an apple led to major discoveries by Newton, this work tries to identify sources of the genius of the personalities across human history. These men and women were either creators or those who redefined the course of history in their field of work. Interestingly, each article focuses on a major achievement and one aspect of their personal lives. Such sharpness makes the articles short, engaging and, in many cases, poetic. The classification of personalities into Building, Doing and Thinking gives us new eyes to look at them once again and debate within ourselves, the fuzzy boundaries that exist between these three primary human activities.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Science & Technology",
    meta_description:
      "'Of Newtons and Apples' offers engaging insights into 50 influential figures, blending their achievements with personal stories to inspire new perspectives.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "of-newtons-and-apples-insights-into-50-great-minds-in-human-history")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/of-newtons-and-apples/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/of-newtons-and-apples/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/of-newtons-and-apples/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/of-newtons-and-apples/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/of-newtons-and-apples/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "1kg",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 38,
    title: "Probasir Golpo (Bengali)",  
    slug: "probasir-golpo-bengali",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [18].includes(author.id)).map((author) => author.authslug),
    price: 250,
    
    isbn13: "9789392209307",
    amazonlink: "",
    flipkartlink: "",
    binding: "HB",
    language: "Bengali",
    dimension: "22.6 x 15.7 x 1.7 cm",
    pages: "298",
    about_book:
      "When suave writing is interwoven with simplicity, then we get a book like Probashir Golpo Shongroho. A collection of 21 stories from the author of the muchappreciated autobiography, Jana Awjanar Majhe, they peek into the author’s life, his thoughts, and his soul. The stories are layered beauties – how else would you explain a horror story speaking of ‘sorry is still so tough to say’ or the tale of how the author had gotten saved from many neardeath experiences talking subtly about ‘when the Lord protects us, we can defy death’. Each story is not more than three to four pages long, but the music that he plays with the words, moving from one note to another, surprising the reader with the unexpected, shows the deftness of the author’s writing skills. He might be a fan of the stalwarts of Bengali literature, but he, himself, is definitely one too.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Indian Languages",
    meta_description:
      "'Probashir Golpo Shongroho' is a captivating collection of 21 stories blending simplicity and depth, revealing the author's life and insights.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "probasir-golpo-bengali")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/probasir-golpo-bengali/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/probasir-golpo-bengali/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/probasir-golpo-bengali/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/probasir-golpo-bengali/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/probasir-golpo-bengali/thumbnail (5).jpg",
    ],
    
    book_format: "Hardback",
    weight: "310g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 39,
    title: "Symbols and Parables",  
    slug: "symbols-and-parables",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [8].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [8].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [8].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [8].includes(author.id)).map((author) => author.authslug),
    price: 295,
    
    isbn13: "9789392209376",
    amazonlink:
      "https://www.amazon.in/SYMBOLS-PARABLES-Dr-Alok-Pandey/dp/9392209371/ref=sr_1_1?dib=",
    flipkartlink:
      "https://www.flipkart.com/symbols-and-parables/p/itm08e5166755d46?pid=9789392209376&lid=",
    
    language: "English",
    dimension: "21.5 x 13.9 x 0.7 cm",
    pages: "122",
    about_book:
      "India is a land of stories which, apart from their ageold charm, are a simple way of communicating profound truths. This book is an attempt to bring alive some of the deepest mysteries of existence through the narrative of stories.",
    category: "Non-Fiction",
    genre: "Religion & Spirituality, Society & Social Sciences",
    meta_description:
      "Explore India's timeless stories that reveal profound truths and uncover the mysteries of existence through captivating narratives.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "symbols-and-parables")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/symbols-and-parables/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/symbols-and-parables/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/symbols-and-parables/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/symbols-and-parables/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/symbols-and-parables/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "120g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 40,
    title: "Adyatmikta: Explorations Into Hindu Spiritual Practices",
    slug: "adhyatmikta-explorations-into-hindu-spiritual-practices",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [49].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [49].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [49].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [49].includes(author.id)).map((author) => author.authslug),
    price: 495,
    
    isbn13: "9789392209406",
    amazonlink:
      "https://www.amazon.in/Adhyatmikta-Rajarshi-Ranjan-Nandy/dp/9392209401/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 x 14 x 1.2 cm",
    pages: "186",
    about_book:
      "Explorations into Hindu Spiritual Practices looks at the fundamental questions and issues faced by a dharmic spiritual practitioner in today's age. It guides one to navigate the spiritual path with a judicious mix of practical experience and guidance from the traditions and texts. The book also contains detailed articles on devatas in Hinduism. ABOUT THE AUTHOR Rajarshi Ranjan Nandy is an upasaka, speaker, and columnist, who also guides people interested in the practice of sadhana.",
    category: "Non-Fiction",
    genre: "Religion & Spirituality, Society & Social Sciences, Self-Help & Development",
    meta_description:
      "Explore Hindu spiritual practices with guidance on modern challenges, traditions, and devatas from expert Rajarshi Ranjan Nandy.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "adhyatmikta-explorations-into-hindu-spiritual-practices")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/adyatmikta/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/adyatmikta/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/adyatmikta/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/adyatmikta/thumbnail (4).jpg",
    ],
    
    book_format: "Paperback",
    weight: "180g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 41,
    title: "Building Beyond Infra: The Evolution Of The Construction Industry",
    slug: "building-beyond-infra-the-evolution-of-the-construction-industry",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [7].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [7].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [7].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [7].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9789392209468",
    amazonlink:
      "https://www.amazon.in/Building-Beyond-Evolution-Construction-Industry/dp/9392209460/ref=sr_1_1_mod_primary_new?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "22.5 x 14.20 x 2.20 cm",
    pages: "213",
    about_book:
      "Artificial Intelligence (AI) is no longer confined to science fiction. Al has infiltrated the mainstream and is the new electricity for businesses. In this book, the bestselling author, strategic business advisor, and renowned futurist, Akhilesh Srivastava, shows you how to harness and integrate technologies with the construction industry. This book gives an insight on how to grow infrastructure business using technology. The book presents realworld Artificial Intelligence trends and their potential to organizational success. You can correlate how to integrate the existing advancements, and also plan for those on the way, to prepare your company for the unimaginable power of Artificial intelligence applications that are driving success, now and into the future.",
    category: "Non-Fiction",
    genre: "Science & Technology, 'Economics, Finance, Business & Management'",
    meta_description:
      "Discover how to leverage AI in the construction industry with insights from futurist Akhilesh Srivastava for business success.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "building-beyond-infra-the-evolution-of-the-construction-industry")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/building-beyond-infra/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/building-beyond-infra/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/building-beyond-infra/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/building-beyond-infra/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/building-beyond-infra/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "325g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 42,
    title: "Purvyam: Before The Beginning",  
    slug: "purvyam-before-the-beginning",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [4].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [4].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [4].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [4].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9789392209413",
    amazonlink:
      "https://www.amazon.in/Purvyam-Abhishek-Talwar/dp/939220941X/ref=sr_1_1?crid=",
    flipkartlink: "",
    language: "English",
    dimension: "22 x 14.20 x 1.40 cm",
    pages: "345",
    about_book:
      "Purvyam is a fantasy fiction novel based in the pre – Ramayan era. It is the story of Vadhrika, who is on a quest to wipe out humanity from the face of the earth. He is driven by the belief (layered over multiple lifetimes) that the end of the earth (Pralay) is hastened due to human greed and lust. Ultimately, all of nature’s creations pay the price for this, as is evident in the world today. Hence, his simple solution for this is that humans must be wiped off the face of earth. The rulers of earth come together to try and thwart Vadhrika’s ambitions. Along the way, they have their own fears, hopes, greed and ambitions to deal with.",
    category: "Fiction",
    genre: "Historical & Mythological Fiction, Action & Adventure",
    meta_description:
      "Join Vadhrika on a quest to end humanity in 'Purvyam,' a fantasy novel set in the preRamayan era, exploring greed and nature's wrath.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "purvyam-before-the-beginning")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/purvyam/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/purvyam/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/purvyam/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/purvyam/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/purvyam/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/purvyam/thumbnail (6).jpg",
    ],
    
    book_format: "Paperback",
    weight: "325g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 43,
    title: "Completing Vyasa’s Mahabharta",
    slug: "completing-vyasas-mahabharta",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [2].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [2].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [2].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [2].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9789392209451",
    amazonlink: "",
    flipkartlink:
      "https://www.flipkart.com/completing-vyasas-mahabharta-67-upakathas-modern-readers/p/itm3895f9505dc7f?pid=9789392209451&lid=",
    
    language: "English",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "464",
    about_book:
      "Embedded within the primary narrative of the Mahabharata lie numerous subtales known as upakhyaanas or upakathas. These lesser known stories play a vital role in completing the grand tapestry of the Mahabharata, thus giving this book its apt title. Unlike verse translations found in unabridged versions, the 67 upakathas presented here serve a different purpose. While they may appear as diversions, these narratives serve as vital threads, connecting the text and offering answers to lingering questions that readers may have. For instance, why did Ambaa, the princess of Kaashi, become the catalyst for Bheeshma’s demise in a later life? The Ambaa upakhyaana holds the answers. Similarly, the stories of Sage Parashuraama reveal why a brahmana like him possessed warriorlike qualities. Two upakhyaanas shed light on this enigma. Additionally, the Yayaati upakhyaana elucidates the reasons behind the Kurus descending from Puru, Yayaati’s youngest son, rather than the eldest. Moreover, the intriguing dialogue between Duryodhana and Shalya, where Duryodhana persuades Shalya to become Karna’s charioteer, is also explored in these Upakathas.",
    category: "Fiction",
    genre: "Historical & Mythological Fiction",
    meta_description:
      "Explore the hidden narratives of the Mahabharata in this book, revealing vital connections and insights through 67 upakathas",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "completing-vyasas-mahabharta")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/completing-vyasas-mahabharta/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/completing-vyasas-mahabharta/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/completing-vyasas-mahabharta/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/completing-vyasas-mahabharta/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/completing-vyasas-mahabharta/thumbnail (5).jpg",
    
    ],
    
    book_format: "Paperback",
    weight: "620g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  
  {
    id: 45,
    title: "Invaders And Infidels: The Khalji Devastation Of Infidel Devagiri (Book 2)",  
    slug: "invaders-and-infidels-the-khalji-devastation-of-infidel-devagiri-book-2",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9789392209499",
    amazonlink:
      "https://www.amazon.in/Invaders-Infidels-Book-Sandeep-Balakrishna/dp/9392209495/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/invaders-infidels-book-2/p/itm23c0b6cf82db1?pid=9789392209499&lid=",
    binding: "HB",
    language: "English",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "275",
    about_book:
      "When QUTUBUDDIN AIBAK died in a polo game 1210, he had left behind a rickety, fledgling Muslim kingdom in Delhi. For the next eightyodd years, its fortunes swayed wildly, witnessing a record twelve kings. It was a period of incessant palace coups and serial political murders. The death of Balban extinguishes the socalled Muslim Slave dynasty and with it ends the shortlived Turkic Muslim imperialism. It also heralds the ascent of the Afghanistanbased Khaljis, classed as “lowborn.” A straight line connects the origin of the Khaljis with the military airport built by the US in Zabul in 2006. By this time, Hindu political power in northern India is in total disarray with no unifying leader who has the vision to combat and expel the alien oppressor lodged in Delhi. No Hindu ruler exploits the repeated openings and vulnerabilities provided by internecine Sultanate warfare. Book 2 of Invaders and Infidels traces the unlikely rise of Jalaluddin Khalji as an illsuited monarch and ends with the maiden Islamic raid of Devagiri, the gateway to southern India. The incident will have farreaching consequences for the history of India for the next six hundred years. It is a heady tale of a period rife with bloody intrigues, aggressive campaigns of Islamic expansionism, heroic wars of Hindu resistance and squandered chances for civilizational reclamation. The narrative in this book is marked by a flair of vivid historical storytelling, juxtaposing the oscillating fortunes of both Islamic conquests and the ensuing Hindu responses. It unearths a slew of eyeopening and forgotten details about the sociopolitical and economic life of the era whose impact is visible even today. Written in a fastpaced and engaging style, Book 2 of Invaders and Infidels is a riveting read of a critical juncture in the history of early Muslim rule of India.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance",
    meta_description:
      "Uncover the turbulent rise of the Khaljis and the struggle for Hindu resistance in this gripping historical narrative.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "invaders-and-infidels-the-khalji-devastation-of-infidel-devagiri-book-2")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-2/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-2/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-2/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-2/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-2/thumbnail (5).jpg",
    ],
    
    book_format: "Hardback",
    weight: "500g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 46,
    title: "Sobha Singh Artist: Life And Legacy",  
    slug: "sobha-singh-artist-life-and-legacy",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [27].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [27].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [27].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [27].includes(author.id)).map((author) => author.authslug),
    price: 799,
    
    isbn13: "9789392209369",
    amazonlink:
      "https://www.amazon.in/Sobha-Singh-Artist-Life-Legacy/dp/9392209363/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "22.8 x 15.8 x 1.9 cm",
    pages: "312",
    about_book:
      "The magic of eminent artist Sardar Sobha Singh continues to live even after his death in the year 1986.. Despite an uneasy childhood, Sobha Singh rose to a widely loved and respected artist with innumerable admirers in India and several other countries. A man of vision, Sobha Singh was a versatile genius.. Though a renowned artist, several other facets of his persona have mostly remained unknown. This biography records the life of the artist besides providing some glimpses of his art. This book is an extension of the author’s mission to preserve and propagate art and the philosophy of his grandfather Sobha Singh Artist so that with the passage of time facts are not replaced with unsubstantiated matter.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts'",
    meta_description:
      "Discover the inspiring life and art of Sardar Sobha Singh, a revered artist whose legacy continues to enchant the world.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "sobha-singh-artist-life-and-legacy")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/sobha-singh-artist/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sobha-singh-artist/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sobha-singh-artist/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sobha-singh-artist/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sobha-singh-artist/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sobha-singh-artist/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sobha-singh-artist/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sobha-singh-artist/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/sobha-singh-artist/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "600g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 47,
    title: "The Never-Dying Fire: The Life And Thought Of Sri Aurobindo",  
    slug: "the-never-dying-fire-the-life-and-thought-of-sri-aurobindo",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [38].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [38].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [38].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [38].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9789392209659",
    amazonlink:
      "https://www.amazon.in/Never-dying-Fire-Life-Thought-Aurobindo/dp/9392209657/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/never-dying-fire/p/itm7e58e409792ac?pid=9789392209659&lid=",
    
    language: "English",
    dimension: "14 x 21.6 x 1 cm",
    pages: "292",
    about_book:
      "Little known in his own country, Sri Aurobindo was nevertheless one of the more significant personalities of 20thcentury India. After studying Humanities in England, he embarked on a political struggle to challenge Britain's colonial domination over India. In 1906, he founded the newspaper Bande Mataram, laying the groundwork of India's future independence, notably through passive resistance, which was later adopted by Gandhi. But far from Gandhi's pacifism, Sri Aurobindo was convinced that freedom could only be achieved via action, and even via armed struggle. Absorbed by India's centuryold wisdom, his commitment to his country was doubled by an unremitting inner spiritual quest. In 1910, Sri Aurobindo began another life in Pondicherry. In his written works, notably The Life Divine, published in 1920, he propounded an Integral Yoga describing the conditions of the The Great Passage, meant to lead to the next evolution of mankind. His work influenced and attracted disciples from around the world to his Ashram, founded in 1926, with his companion Mirra Alfassa, and later to the Auroville community, a few kilometres from Pondicherry. Through this biography, Luc Venet reveals the unfolding of Sri Aurobindo's exceptional force and opens up the path to a new evolution of humanity",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Society & Social Sciences",
    meta_description:
      "Explore the life of Sri Aurobindo, a key figure in India's independence and spiritual evolution, blending activism and philosophy.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "the-never-dying-fire-the-life-and-thought-of-sri-aurobindo")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/the-never-dying-fire/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-never-dying-fire/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-never-dying-fire/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-never-dying-fire/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-never-dying-fire/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-never-dying-fire/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-never-dying-fire/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-never-dying-fire/thumbnail (8).jpg",
    ],
    
    book_format: "Paperback",
    weight: "350g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 48,
    title: "The Veda Made Simple",
    slug: "the-veda-made-simple",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [45].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9789392209512",
    amazonlink:
      "https://www.amazon.in/Veda-Made-Simple-Pariksith-Singh/dp/9392209517/ref=sr_1_1_mod_primary_new?crid=",
    flipkartlink:
      "https://www.flipkart.com/veda-made-simple/p/itm2768f69ce323c?pid=9789392209512&lid=",
    
    language: "English",
    dimension: "2.2 x 13.8 x 21.4 cm",
    pages: "200",
    about_book:
      "Veda Made Simple is an important book. In a strikingly clear, lucid and straightforward manner, the author reveals the rich and complex philosophy and symbolism of the Veda for anyone who is open in mind and heart to receive the wisdom of humanity’s oldest spiritual scripture. That the author does this in the light of Sri Aurobindo—inarguably among the very few who realised and lived the deepest and highest Vedic truths in their beings—makes it even more significant. This book comes at the right time too, as Indians globally begin to reawaken to their timeless Vedic and Sanatan heritage.",
    category: "Non-Fiction",
    genre: "Religion & Spirituality, Society & Social Sciences",
    meta_description:
      "Discover Veda Made Simple: a clear guide to Vedic wisdom, revealing deep philosophy through the insights of Sri Aurobindo.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "the-veda-made-simple")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/the-veda-made-simple/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-veda-made-simple/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-veda-made-simple/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-veda-made-simple/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-veda-made-simple/thumbnail (5).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/the-veda-made-simple/thumbnail (6).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/the-veda-made-simple/thumbnail (7).jpg",
    ],
    
    book_format: "Paperback",
    weight: "190g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 49,
    title: "Modi Ka Banaras",  
    slug: "modi-ka-banaras",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [16].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [16].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [16].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [16].includes(author.id)).map((author) => author.authslug),
    price: 449,
    
    isbn13: "9789392209956",
    amazonlink:
      "https://www.amazon.in/Modi-Ka-Banaras-Arvind-Chaturvedi/dp/9392209959/ref=sr_1_1_mod_primary_new?crid=",
    flipkartlink: "",
    
    language: "Hindi",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "280",
    about_book:
      "यह सिर्फ़ पुस्तक नहीं यात्रा है । गंगा यहाँ की जीवनरेखा है । गंगा ,बाबा विश्वनाथ के बिना इस नगरी की कल्पना अधूरी है । नरेन्द्र मोदी का बनारस से चुनाव लड़ना राजनीति की असाधारण घटना है । बनारस का सामर्थ्य ,कर्तव्य को पूरी दुनिया ने देखा है ।अगर सोच लिया जाए, ठान लिया जाए, तो कुछ भी असंभव नहीं है । नरेन्द्र मोदी ने बनारस में अपने तप से चुनाव तो जीता ही, साथ ही बनारस में अपने ख़िलाफ़ की जाने वाले दूसरी पार्टी नेताओं की साज़िशो को भी विफल कर दिया । देखते ही देखते मोदी ने अपने जीत का परचम बिहार, झारखंड, बंगाल तक फहरा दिया । मोदी की जीत एवं बनारस को लेकर लिए गए फ़ैसलों की कहानी है यह पुस्तक, जिसे हमेशा याद रखा जाएगा । यह पुस्तक आपको यह भी बताएगी कि बनारस से जीत की पटकथा कैसे लिखी गई, उसकी रूपरेखा किसने तैयार की थी। अमित शाह ने वर्ष 2010 में बनारस में क्या संकल्प लिया था । जिसे पूरा करने के लिए उन्होंने ना दिन देखा ना रात । यूपी और बनारस का चुनाव जीतने के लिए अमित शाह ने राजनाथ सिंह से ऐसा क्या वचन लिया था, जिसे लेकर सबके बीच में उन्होंने कह दिया कि मैं होता तो यह वचन कभी नहीं देता। नरेंद्र मोदी ने कोविड काल के समय को ही बाबा विश्वनाथ मंदिर के कायाकल्प के लिए क्यों चुना । क्या आप को पता है कि बाबा विश्वनाथ मंदिर के लिए जमीन एकत्र करने के क्रम में जमीनों की सभी रजिस्ट्री एक विशेष समय में की गई थी। आखिर क्यों? क्या आप यह जानते हैं कि बनारस के विश्वनाथ मंदिर में कितना सोना लगा है ? एक आश्रम का तिलिस्म जिसकी जमीन को खाली करवाने में एक साल लग गया। आखिर कैसे खाली हुई वह जमीन। कैसे पीएम मोदी ने आर्किटेक्ट के पहले बने नक्शे को खारिज कर दिया था। क्योटो में ऐसा क्या है जो उसे बनारस से जोड़ देता है। मोदी ने जापान के शहर क्योटो को ही क्यों चुना? बनारस का ऐसा घाट जहां पर आप हेलीकॉप्टर से पहुंच सकते हैं। फ़्रांस के राष्ट्रपति ने बनारस में ऐसा क्या पूछ लिया, जिसकी पूरी दुनिया में चर्चा होने लगी। इन सब सवालों और जिज्ञासाओं का उत्तर आप को इस पुस्तक मोदी के बनारस में ही मिलेगा।",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Politics & Governance",
    meta_description:
      "मोदी के बनारस: गंगा, विश्वनाथ और चुनावी जीत की अद्भुत यात्रा। जानें बनारस की राजनीति और ऐतिहासिक फैसले।",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "modi-ka-banaras")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/modi-ka-banaras/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modi-ka-banaras/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modi-ka-banaras/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modi-ka-banaras/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modi-ka-banaras/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modi-ka-banaras/thumbnail (6).jpg",
    ],
    
    book_format: "Paperback",
    weight: "300g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 50,
    title: "India And The Changing World Order: Merging Paradigm Shift In The Changing Global, Political And Economic Order",
    slug: "india-and-the-changing-world-order-merging-paradigm-shift-in-the-changing-global-political-and-economic-order",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [56].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [56].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [56].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [56].includes(author.id)).map((author) => author.authslug),
    price: 799,
    
    isbn13: "9789392209482",
    amazonlink:
      "https://www.amazon.in/Changing-Emerging-paradigm-changing-political/dp/9392209487/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/india-changing-world-order/p/itm2005054429234?pid=9789392209482&lid=",
    binding: "HB",
    language: "English",
    // dimension: "5.5 x 8.5 inches",
    dimension: "14 x 21.6 x 1 cm",
    pages: "328",
    about_book:
      "India and the Changing World breaks free from conventional boundaries, delving fearlessly into the realms of emerging civilizational, religious, and historical matters. Its purpose lies in sparking essential conversations about broader matters, such as civilizational, cultural, and social diversity issues that have been overlooked in the shaping of the postWorld War II and postCold War global order. As the existing global order confronts unprecedented challenges, this book serves as a catalyst, fueling a discourse that captures the essence of a rapidly evolving world. Through a comparative study, the book offers fresh insights into the contrasting approaches of shorttermist liberal democracies and longtermist autocratic China, shedding light on the distinctive qualities of a liberal and civilizational democracy as exemplified by India. Within its illuminating pages, you will uncover the critical challenges that Indian democracy faces, navigating the complexities of its relationship with both autocratic China and the liberal West. Additionally, the book examines the fundamental differences between market economics and market societies. It artfully unravels contemporary geopolitical, geoeconomic, and geostrategic issues, offering intricate analysis of India's strategic connections with select nations and its evergrowing ties with the USA. Moreover, it dares to propose innovative solutions like astronomybased education as a means to foster conflict resolution. With an invitation that resonates deeply, India and the Changing World Order calls upon you to partake in a discourse that reevaluates the past, contextualises the present, and ultimately shapes the trajectory of our shared future.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy",
    meta_description:
      "Explore 'India and the Changing World': a bold analysis of civilizational shifts, democracy, and India's role in a new global order",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "india-and-the-changing-world-order-merging-paradigm-shift-in-the-changing-global-political-and-economic-order")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/india-and-the-changing-world-order/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-and-the-changing-world-order/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-and-the-changing-world-order/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-and-the-changing-world-order/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-and-the-changing-world-order/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-and-the-changing-world-order/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-and-the-changing-world-order/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-and-the-changing-world-order/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-and-the-changing-world-order/thumbnail (9).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-and-the-changing-world-order/thumbnail (10).jpg",
    ],
    
    book_format: "Hardback",
    weight: "350g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 51,
    title: "Gods Dancing Among Men: The Mystical World Of Theyyams Of North Malabar",
    slug: "gods-dancing-among-men-the-mystical-world-of-theyyams-of-north-malabar",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [48].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [48].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [48].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [48].includes(author.id)).map((author) => author.authslug),
    price: 1999,
    
    isbn13: "9789392209727",
    amazonlink:
      "https://www.amazon.in/Gods-Dancing-Among-Pushpa-Kurup/dp/939220972X/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "176",
    about_book:
      "Theyyam, an ancient tradition of North Malabar, is a captivating blend of folk art, religious ritual, and profound spirituality. Gods Dancing among Men: The Mystical World of Theyyams of North Malabar delves deep into the rich history of theyyam, exploring its roots and relevance in contemporary belief and worship. This book sheds light on both the luminous and shadowy facets of this tradition as well as the enigmatic grey areas that define it. Every aspect of the theyyam cult, from the vibrant and intricate costumes to the wild and transcendent dances, is fascinating. The practitioners of theyyam display astonishing abilities, including clairvoyance, prophecy, and the power to fulfil wishes. The pantheon of theyyam includes Shaivite and Vaishnavite manifestations alongside a diverse array of Bhagvathy theyyams. Popular deities such as Muthappan, Muchilot Bhagavathi, Thee Chamundi, Gulikan, Kuttichathan, and Pottan Deiyvam hold a special place in the hearts of the people. Additionally, the theyyam tradition incorporates animals into its repertoire with performances featuring monkeys, tigers, buffaloes, crocodiles, bees, and snakes. One of the most astonishing aspects of theyyam is the fearless interaction with fire. Performers nonchalantly walk on embers and even hurl themselves onto immense mounds of fire, known as meleri, repeatedly. Despite the influence of Aryanization, the sanitizing impact of British colonial rule, the teachings of social reformers, the remarkable literacy rates, and the prevalent communist ideology in the region, the sanctity of the theyyam tradition remains unblemished. Theyyams are living gods, cherished and revered by the people of North Malabar, and their blessings hold immense significance.",
    category: "Non-Fiction",
    genre: "Religion & Spirituality, Health & Wellness, Science & Technology, Educational Books & References, Society & Social Sciences",
    meta_description:
      "Discover 'Gods Dancing among Men': a deep dive into the vibrant theyyam tradition of North Malabar, blending art, spirituality, and history.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "gods-dancing-among-men-the-mystical-world-of-theyyams-of-north-malabar")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/gods-dancing-among-men/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/gods-dancing-among-men/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/gods-dancing-among-men/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/gods-dancing-among-men/thumbnail (4).jpg",
    ],
    
    book_format: "Paperback",
    weight: "300g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 52,
    title: "Arc Of Governance: The Flavour Of New India",
    slug: "arc-of-governance-the-flavour-of-new-india",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [39].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [39].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [39].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [39].includes(author.id)).map((author) => author.authslug),
    price: 799,
    
    isbn13: "9789392209871",
    amazonlink:
      "https://www.amazon.in/Arc-Governance-M-G-Devasahayam/dp/9392209878/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    // dimension: "5.31 x 8.50 inches",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "298",
    about_book:
      "Governance is a 360degree process; this book is an arc. New India dawned on 26 May 2014 when the Union government headed by Prime Minister Narendra Damodardas Modi was sworn in by the president of the Republic of India. Its governance agenda was unveiled by the president in Parliament on 9 June 2014 with this stentorian statement: My government is dedicated to the poor…. With a firm belief that the first claim on development belongs to the poor, my government pledges itself to the principle of sabke saath, sabka vikas…. My government will function on the mantra of minimum government, maximum governance, and we will work together to reestablish the credibility of the institutions of democracy. The government got a second mandate in 2019. This book, which is a compilation of the authors articles and papers, will take the reader through different dimensions of governance, government, institutions, democracy and development critically, analysing the flavour of New India in them.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance",
    meta_description:
      "Explore 'Governance Arc': a critical analysis of New India's journey under Modi, highlighting democracy, development, and institutions.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "arc-of-governance-the-flavour-of-new-india")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/arc-of-governance/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/arc-of-governance/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/arc-of-governance/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/arc-of-governance/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/arc-of-governance/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/arc-of-governance/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/arc-of-governance/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/arc-of-governance/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/arc-of-governance/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "300g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 44,
    title: "Hindus In Hindu Rashtra: Eighth-Class Citizens And Victims Of State-Sanctioned Apartheid",  
    slug: "hindus-in-hindu-rashtra-eighth-class-citizens-and-victims-of-state-sanctioned-apartheid",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.authslug),
    price: 399,
    
    isbn13: "9789392209475",
    amazonlink:
      "https://www.amazon.in/Rashtra-Eighth-Class-Citizens-Sanctioned-Apartheid/dp/9392209479/ref=sr_1_fkmr0_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/hindus-hindu-rashtra/p/itm09ea92fab07e1?pid=RBKGUZHVGBKTEQPD&lid=",
    binding: "HB",
    language: "English",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "152",
    about_book:
      "To those who claim we are now living in a totalitarian, fascist, Hindu Rashtra, one must ask: What kind of a Hindu Rashtra is this where a billionstrong Hindus have been, through our parliament, through our courts, our education system, and our constitution, reduced to not just secondclass but, rather, eighthclass citizens? What kind of Hindu Rashtra is this where Ram Navami, Hanuman Jayanti, Durga pooja processions, and even Garba celebrations, are attacked and stoned with impunity? What kind of Hindu Rashtra is this where a sitting Prime minister says minorities have the first right to resources? What kind of Hindu Rashtra is this where Hindus are forced to be refugees in their own land, where one can settle 40,000 Rohingya Muslims but not 700,000 Kashmiri Hindus, the land’s original inhabitants; where the judiciary says it is too late to prosecute those who raped, murdered, and ethnically cleansed lacs of Hindus? What kind of Hindu Rashtra is this where Hindu temples are exclusively controlled by the State, where Hindus must beg for Waqf land to celebrate their festival while the government usurps hundreds of thousands of acres of temple land and is responsible for more than 100,000 temples losing lakhs of crores in rental income? What kind of Hindu Rashtra is this where the Right to Education Act discriminates only against Hindus and their schools, forcing tens of thousands of them to shut down? What kind of Hindu Rashtra is this where monsters like Aurangzeb and Tipu who perpetrated largescale Hindu genocides are eulogised through State sponsored publications, naming of roads and cities, and organising of festivals? What kind of Hindu Rashtra is this where a law was about to be enacted through with only the Hindus would have been held guilty in a communal riot even if they were in a minority for example in Kashmir? What kind of Hindu Rashtra is this where court judgments like the Sabarimala and legislative enactments like the Hindu Code Bill purport to reform only Hindu religious practices but dare not touch practices of other religions, and if they do, the decisions are promptly reversed like in the Shah Bano case? What kind of Hindu Rashtra is this where The Places of Worship Act continues to deny the Hindus their legitimate right to correct historical injustices and reclaim thousands of demolished temples? What kind of Hindu Rashtra is this where the Waqf Act gives overarching powers to Muslims to declare a 1500yearold Hindu temple to be on Islamic land when Islam is only 1300 years old? If this is how a Hindu is rewarded in a Hindu Rashtra, he’d much rather be in a Muslim Rashtra because then at least there’d be no pretence of equality a Kafir will get what he deserves. In this searing commentary penned with clinical precision, the author shreds to smithereens once and for all the guilttripping, selfloathing fake narrative that Hindus have been duped with since Independence. There is no pretence, no political correctness, only unvarnished truth – that the Hindus are living under Statesanctioned Apartheid.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy, Religion & Spirituality",
    meta_description:
      "Explore the paradox of a 'Hindu Rashtra' where Hindus face systemic discrimination, revealing a truth beyond pretense.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "hindus-in-hindu-rashtra-eighth-class-citizens-and-victims-of-state-sanctioned-apartheid")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (9).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (10).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-eng/thumbnail (11).jpg",
    ],
    
    book_format: "Hardback",
    weight: "450g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 53,
    title: "Hindus in Hindu Rashtra (Hindi)",  
    slug: "hindus-in-hindu-rashtra-hindi",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.authslug),
    price: 350,
    
    isbn13: "9789392209949",
    amazonlink:
      "https://www.amazon.in/HindusHinduRashtraHindiRanganathan/dp/9392209940/ref=sr_1_1?crid=",
    flipkartlink: "",
    binding: "HB",
    language: "Hindi",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "184",
    about_book:
      "जो यह दावा करते हैं कि हम एक अधिनायकवादी हिंदू राष्ट्र में रह रहे हैं उनसे यह पूछा जाना चाहिए कि यह किस प्रकार का हिंदू राष्ट्र है जहां एक अरब शक्तिशाली हिंदू यहाँ की संसद, अदालतों, शिक्षा व्यवस्था और हमारे संविधान द्वारा न सिर्फ दोयम दर्जे के नागरिक करार दिए गए हैं बल्कि उससे भी नीचे धकेल दिए गए? यह कैसा हिंदू राष्ट्र है जिसमें दुर्गा पूजा और गरबा के आयोजनों पर बेरोकटोक पत्थरबाजी की जाती है और प्रधानमंत्री की कुर्सी पर बैठा एक शख्स कहता है कि इस देश के संसाधनों पर पहला हक अल्पसंख्यकों का है? यह कैसा हिंदू राष्ट्र है जहाँ हिंदुओं को अपनी ही धरती पर शरणार्थियों की तरह रहना पड़ता है और जहाँ कोई 40 हजार रोहिंग्या मुसलमानों को तो बसा सकता है लेकिन इसी देश के धरतीपुत्र 7 लाख कश्मीरी पंडितों को नहीं और जहाँ अदालतों का कहना हैं कि हिंदुओं की हत्या, बलात्कार और जातीय संहार करने वालों पर मुकदमा चलाने के लिए अब बहुत देर हो चुकी है? यह किस तरह का हिंदू राष्ट्र है जहाँ हिंदुओं के मंदिर सरकारों के कब्जे में हैं और अपने त्यौहार मनाने के लिए हिंदुओं को वक्फ बोर्ड के सामने जमीन के लिए हाथ फैलाने पड़ते हैं? यह किस तरह का हिंदू राष्ट्र है जहाँ शिक्षा का अधिकार अधिनियम में केवल हिंदुओं के स्कूलों के साथ भेदभाव किया जाता है और उन्हें ताला लगाने को मजबूर कर दिया जाता है? यह किस तरह का हिंदू राष्ट्र है जहां औरंगज़ेब और टीपू जैसे बर्बर शासकों को लेकर सरकारी खर्चे पर प्रकाशन किए जाते हैं, सड़कों के नाम रखे जाते हैं और त्योहारों का आयोजन होता है? यह किस तरह का हिंदू राष्ट्र है जहाँ एक ऐसा कानून बिल्कुल बन ही जाने ही वाला था जिसमें केवल हिंदुओं को, जबकि वे अल्पसंख्यक थे, सांप्रदायिक दंगों के लिए दोषी ठहराया जाता जैसा कि कश्मीर में देखा गया? यह किस तरह का हिंदू राष्ट्र है जहाँ सबरीमाला प्रकरण में अदालतों के फैसले और विधायी कानून केवल हिंदुओं के धर्माचारों में सुधार के लिए किए जाएँ लेकिन दूसरे धर्म को छुआ तक न जाए और अगर ऐसा कोई करे भी, तो वहाँ शाहबानो के मामले की तरह फैसले को पलट दिया जाए? यह किस तरह का हिंदू राष्ट्र है जहाँ हिंदू पूजा स्थल अधिनियम आज भी हिंदुओं को उनके प्रति हुए ऐतिहासिक अन्यायों को दुरुस्त करने के उनके विधिसम्मत अधिकार पर रोक लगता है जबकि वक्फ एक्ट मुसलमानों को एक 1500 वर्ष पुराने हिंदू मंदिर को इस्लामी संपदा घोषित करने की अनियंत्रित शक्ति दे देता है, गो कि इस्लाम अपने आप में महज 1300 वर्ष पुराना है? अगर एक हिंदू राष्ट्र में हिंदू को इस तरह नवाजा जा रहा हो तो इससे अच्छा है कि वह एक मुस्लिम राष्ट्र में रहे क्योंकि वहाँ कम से कम बराबरी का ढोंग तो नहीं होगा, एक काफिर को वही मिलेगा जो उसे मिलना चाहिए। अपनी इस कड़वे बयान में आनंद रंगनाथन आजादी के बाद से हिंदुओं के साथ धोखेबाज़ी करने वाली ग्लानि भरी झूठी कहानी और आत्मदोषानुभूति पर एक निर्णायक प्रहार करते हुए उसे चकनाचूर कर देते हैं। यहाँ कोई स्वांग या राजनीतिक शुचिता नहीं है, अगर है तो केवल राज्य प्रायोजित नस्ल भेद की वह ठोस सच्चाई जिसके साथ हिंदू जी रहे हैं।",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy, Religion & Spirituality, Indian Languages",
    meta_description:
      "आनंद रंगनाथन की किताब में जानें: क्या है असली हिंदू राष्ट्र की परिभाषा, जहां हिंदू समुदाय का हक और समानता पर सवाल है?",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "hindus-in-hindu-rashtra-hindi")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-hindi/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-hindi/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-hindi/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-hindi/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-hindi/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-hindi/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-hindi/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-hindi/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-hindi/thumbnail (9).jpg",
    ],
    
    book_format: "Hardback",
    weight: "230g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 54,
    title: "Hindus in Hindu Rashtra (Marathi)",  
    slug: "hindus-in-hindu-rashtra-marathi",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [10].includes(author.id)).map((author) => author.authslug),
    price: 350,
    
    isbn13: "9789392209819",
    amazonlink: "",
    flipkartlink:
      "https://www.flipkart.com/hindus-hindu-rashtra-marathi-edition/p/itm95361ea20e90b?pid=9789392209819&lid=",
    binding: "HB",
    language: "Marathi",
    dimension: "0.7 x 13.2 x 20.5 cm",
    pages: "184",
    about_book:
      "To those who claim we are now living in a totalitarian, fascist, Hindu Rashtra, one must ask: What kind of a Hindu Rashtra is this where a billionstrong Hindus have been, through our parliament, through our courts, our education system, and our constitution, reduced to not just secondclass but, rather, eighthclass citizens? What kind of Hindu Rashtra is this where Ram Navami, Hanuman Jayanti, Durga pooja processions, and even Garba celebrations, are attacked and stoned with impunity? What kind of Hindu Rashtra is this where a sitting Prime minister says minorities have the first right to resources? What kind of Hindu Rashtra is this where Hindus are forced to be refugees in their own land, where one can settle 40,000 Rohingya Muslims but not 700,000 Kashmiri Hindus, the land’s original inhabitants; where the judiciary says it is too late to prosecute those who raped, murdered, and ethnically cleansed lacs of Hindus? What kind of Hindu Rashtra is this where Hindu temples are exclusively controlled by the State, where Hindus must beg for Waqf land to celebrate their festival while the government usurps hundreds of thousands of acres of temple land and is responsible for more than 100,000 temples losing lakhs of crores in rental income? … If this is how a Hindu is rewarded in a Hindu Rashtra, he’d much rather be in a Muslim Rashtra because then at least there’d be no pretence of equality a Kafir will get what he deserves. In this searing commentary penned with clinical precision, the author shreds to smithereens once and for all the guilttripping, selfloathing fake narrative that Hindus have been duped with since Independence. There is no pretence, no political correctness, only unvarnished truth – that the Hindus are living under Statesanctioned Apartheid. About The Author Anand Ranganathan is a scientist and an author. His forthcoming book is on Indias forgotten scientists. Hindus in Hindu Rashtra is his first nonfiction book.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy, Religion & Spirituality, Indian Languages",
    meta_description:
      "Anand Ranganathan's 'Hindus in Hindu Rashtra' critiques the reality of Hindu identity and rights in a claimed totalitarian state.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "hindus-in-hindu-rashtra-marathi")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-marathi/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-marathi/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-marathi/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-marathi/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-marathi/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-marathi/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-marathi/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-marathi/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/hindus-in-hindu-rashtra-marathi/thumbnail (9).jpg",
    ],
    
    book_format: "Hardback",
    weight: "230g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 55,
    title: "The Vaccine War",
    slug: "the-vaccine-war",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [74].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [74].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [74].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [74].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9789392209741",
    amazonlink:
      "https://www.amazon.in/Vaccine-War-Vivek-Ranjan-Agnihotri/dp/9392209746/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/the-vaccine-war/p/itm74524bd74dfe8?pid=9789392209741&lid=",
    
    language: "English",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "328",
    about_book:
      "As the COVID19 pandemic rages on, Dr Bhargava, the director general of Indian Council of Medical Research, assembles a crack team of India’s most brilliant minds, including Dr Nivedita Gupta, Dr Priya Abraham and Dr Pragya Yadav. Together they mount a mission to save humanity from the unseen enemy. The challenges they face are daunting. They must navigate the treacherous waters of international diplomacy and deal with excessive bureaucratic control. Often enough, they find themselves battling against time and misinformation fuelled by fake news. Along the way, they are forced into moral dilemmas to make lifeordeath decisions that affect the nation and its people. As they work tirelessly to develop and distribute a vaccine against the deadly coronavirus that threatened to ravage India, they face opposition from foreign interests and intense scrutiny from the media. The Vaccine War is an inspiring tale of scientific ingenuity, perseverance and the triumph of the human spirit. It celebrates the heroes who fought relentlessly behind the scenes to protect their nation and offers a poignant reminder that unity and science can overcome even the most formidable challenges.",
    category: "Fiction",
    genre: "'Arts, Film & Photography'",
    meta_description:
      "In 'The Vaccine War,' a team of brilliant Indian scientists battles COVID19, facing bureaucratic hurdles and misinformation to save lives.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "the-vaccine-war")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/the-vaccine-war/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-vaccine-war/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-vaccine-war/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-vaccine-war/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-vaccine-war/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "400g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 58,
    title: "Compulsive Nosepicking And Other True Tales",  
    slug: "compulsive-nosepicking-and-other-true-tales",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [11].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [11].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [11].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [11].includes(author.id)).map((author) => author.authslug),
    price: 399,
    
    isbn13: "9789392209987",
    amazonlink:
      "https://www.amazon.in/Compulsive-Nose-Picking-Other-True-Tales/dp/9392209983/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/compulsive-nose-picking-other-true-tales/p/itm907a6ec90818c?pid=9789392209987&lid=",
    
    language: "English",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "214",
    about_book:
      "Compulsive NosePicking and Other True Tales is a collection of short stories that touches upon subjects ranging from love to loss to survival and unbelievable coincidences, including some wild ones. The anecdotes, written in an accessible style and laced with dollops of humor, are sure to inform, entertain and inspire readers.",
    category: "Fiction",
    genre: "Short Stories & Anthologies",
    meta_description:
      "'Compulsive NosePicking' is a humorous collection of short stories about love, loss, survival, and wild coincidences.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "compulsive-nosepicking-and-other-true-tales")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/compulsive-nose-picking-and-other-true-tales/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/compulsive-nose-picking-and-other-true-tales/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/compulsive-nose-picking-and-other-true-tales/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/compulsive-nose-picking-and-other-true-tales/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/compulsive-nose-picking-and-other-true-tales/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/compulsive-nose-picking-and-other-true-tales/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/compulsive-nose-picking-and-other-true-tales/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/compulsive-nose-picking-and-other-true-tales/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/compulsive-nose-picking-and-other-true-tales/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "400g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },

  {
    id: 60,
    title: "Snakes In The Ganga: Breaking India 2.0 (Paperback)",  
    slug: "snakes-in-the-ganga-breaking-india-2.0-pb",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [51].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [51].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [51].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [51].includes(author.id)).map((author) => author.authslug),
    price: 799,
    
    isbn13: "9788196737504",
    amazonlink: "",
    flipkartlink: "",
    
    language: "English",
    dimension: "23.5 x 16 x 6.5 cm",
    pages: "692",
    about_book:
      "Snakes in the Ganga unveils uncomfortable truths concerning India’s vulnerabilities: Intense warfare against India’s integrity is the work of a wellorchestrated global machinery driven by a new ideology. Marxism has been reincarnated as critical race theory in US academia and serves as the framework to address America’s racism. This has been recklessly mapped on to India: Caste is equated with Race. Marginalized communities of India are considered as Blacks and Brahmins as the Whites of India. Groups claiming grievances (like Muslims and LGBTQ+) are artificially clubbed together. Popularly called the woke movement, the mission is to dismantle Indian civilization and heritage by waging an uncompromising war against India’s government, educational institutions, culture, industry, and society. Harvard University is ground zero of these social theories developed in collaboration with Indian scholars, activists, journalists, and artists. This represents a clear and present danger to India’s sovereignty and national security. Several Indian elites are hoisting Harvard as the vishwa guru with their money and family names. Some private universities within India are importing wokeism that has serious repercussions for India’s stability. Indian corporates are bringing the latest Western rubric of environmental, social, and governance ratings into their workplaces. This is aligned with the global social justice movement. China has exploited this latest infrastructure as a passage to India. Wokeism has penetrated some of the Indian government’s policies. For instance, the National Education Policy 2020 is propagating Harvard’s liberal arts. An entire ecosystem of ideologies, institutions, and young leaders is emerging for the recolonization of India. Is India for sale?",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Law & Public Policy, Politics & Governance",
    meta_description:
      "'Snakes in the Ganga' exposes vulnerabilities in India, revealing how global ideologies threaten its sovereignty and heritage.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "snakes-in-the-ganga-breaking-india-2.0-pb")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail (4).jpg",

      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/snakes-in-the-ganga/thumbnail (7).jpg",
    ],
    
    book_format: "Paperback",
    weight: "880g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 61,
    title: "Modian Consensus: The Rediscovery Of Bharat",
    slug: "modian-consensus-the-rediscovery-of-bharat",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [65].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [65].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [65].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [65].includes(author.id)).map((author) => author.authslug),
    price: 799,
    
    isbn13: "9789392209789",
    amazonlink:
      "https://www.amazon.in/Modian-Consensus-Rediscovery-Swadesh-Singh/dp/9392209789/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "304",
    about_book:
      "Modian Consensus: The Rediscovery of Bharat maps the Indian political trajectory of the last 150 years. It locates various periods of consensus that developed in Bharat from time to time and drove the policy, planning and politics of the day. Four of these consensus phases of the past have been identified as Civilisational Consensus, Gandhian Consensus, Nehruvian Consensus and Secular Consensus. The fifth and ongoing phase, the book argues, is Modian Consensus. The book examines how the politics of the day finds itself willynilly amidst a consensus around the politics of Narendra Modi. In the current phase, parties and politicians diametrically opposed to Modis ideas are compelled to follow the line of policies and programmes set by him. The impact of this consensus can be observed far beyond the domain of politics as it stands on the three postulates of cultural rootedness, assertive nationalism and welfare for all. The book explores various manifestations of Modian Consensus, including the challenges it faces and what it augurs for the future of Indian politics.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Politics & Governance",
    meta_description:
      "'Modian Consensus' analyzes 150 years of Indian political history, highlighting the emergence and impact of Modi's policies and ideas.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "modian-consensus-the-rediscovery-of-bharat")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/modian-consensus/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modian-consensus/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modian-consensus/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modian-consensus/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modian-consensus/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modian-consensus/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modian-consensus/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modian-consensus/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modian-consensus/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "360g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 62,
    title: "Bharat Rising: Dharma, Democracy, Diplomacy",  
    slug: "bharat-rising-dharma-democracy-diplomacy",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [70].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [70].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [70].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [70].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9789392209765",
    amazonlink:
      "https://www.amazon.in/Bharat-Rising-Dharma-Democracy-Diplomacy/dp/9392209762/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/bharat-rising-dharma-democracy-diplomacy/p/itm26f04c58f1686?pid=9789392209765&lid=",
    
    language: "English",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "266",
    about_book:
      "Argumentative and deeply researched, Bharat Rising combines the narrative style of journalism and the rigour and discipline of academia. It is as much about the resetting of Lutyens’ world as it is about a new India shedding its traditional distrust, if not distaste, for the country’s civilizational and cultural past.",
    category: "Non-Fiction",
    genre: "Politics & Governance, Society & Social Sciences, Law & Public Policy",
    meta_description:
      "'Bharat Rising' blends journalism and academia to explore India's cultural resurgence and the reshaping of its political landscape.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "bharat-rising-dharma-democracy-diplomacy")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-rising/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-rising/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-rising/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-rising/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-rising/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-rising/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-rising/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bharat-rising/thumbnail (8).jpg",
    ],
    
    book_format: "Paperback",
    weight: "450g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 56,
    title: "Ram Janmabhoomi: The Inspiration For Hindu Resurgence",
    slug: "ram-janmabhoomi-the-inspiration-for-hindu-resurgence",
    publish_year: 2023,
    author: AuthorsList.filter((author) => [52].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [52].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [52].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [52].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9789392209833",
    amazonlink:
      "https://www.amazon.in/Ram-Janmabhoomi-Inspiration-Hindu-Resurgence/dp/9392209835/ref=sr_1_2?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "240",
    about_book:
      "A civilization that forgets its struggles is condemned to repeat its mistakes and spiral into a selfdestructive cycle. The battles for freedom and the resistance against occupation and atrocities all too often recede from collective memory, overshadowed by the weight of oppression and systematically orchestrated efforts to erase the Hindu identity through manipulated narratives. The sacred geography of Bharat, the cradle of Hindu dharma and the ancestral home of the Hindu people, has borne witness to relentless invasions, leaving scars on the collective psyche. The Ram Janmabhoomi movement stands as a poignant testament to the devastation inflicted upon the roots of Hindu civilization and the arduous battle to reclaim it. In an era dominated by weaponized narratives, where the perpetrators of atrocities are romanticised as victims and the victims are crowned as oppressors, this book reminds of the facts and the inconvenient truths—of the blood, sweat and tears that many Hindus shed in fighting the good fight. It is a call to ensure that every Hindu born in an age, removed from those trials and tribulations, never forgets the sacrifices made by those who went before them. For if we forget, we are complicit in normalising the obliteration of our great civilization.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy, Religion & Spirituality",
    meta_description:
      "This book urges Hindus to remember their struggles against oppression, reclaim their identity, and honor sacrifices of the past.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "ram-janmabhoomi-the-inspiration-for-hindu-resurgenc")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "450g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 63,
    title: "Ram Janmabhoomi: The Inspiration For Hindu Resurgence (Hindi)",
    slug: "ram-janmabhoomi-the-inspiration-for-hindu-resurgence-hindi",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [52].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [52].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [52].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [52].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9789392209703",
    amazonlink: "",
    flipkartlink: "",
    
    language: "Hindi",
    dimension: "21.6 x 13.5 x 1 cm",
    pages: "240",
    about_book:
      "जो सभ्यता अपने संघर्षों को भूल जाती है, वह अपनी गलतियों की पुनरावृत्ति और आत्मविनाश के दुश्चक्र में फंसने को अभिशप्त होती है। स्वतंत्रता की लड़ाई, आधिपत्य तथा अत्याचारों के खिलाफ प्रतिरोध अक्सर सामूहिक स्मृतियों से गायब हो जाते हैं और उत्पीड़न की बोझ तले, मनगढ़ंत कथाओं द्वारा हिंदू पहचान को मिटाने के व्यवस्थित प्रयासों के माध्यम से उन स्मृतियों की चमक धुंधली कर दी जाती हैं। भारत की पवित्र भौगोलिक संरचना, हिंदू धर्म के उद्गम स्थल और हिंदू लोगों की पैतृक भूमि, लगातार हुए आक्रमणों के साक्षी हैं, जिसने सामूहिक मानस पर अमिट घाव छोड़े हैं। राम जन्मभूमि आंदोलन हिंदू सभ्यता की जड़ों पर हुए प्रहार और इसे पुनः प्राप्त करने के दुर्धर्ष संघर्ष का एक जीवंत एवं मार्मिक दस्तावेज है। शस्त्र आधारित आख्यानों के प्रभुत्व वाले युग में, जहां अत्याचार करने वालों को पीड़ित का और पीड़ितों को उत्पीड़क का ताज पहनाया जाता है, यह पुस्तक आंदोलन के उदात्त संघर्ष में अनगिनत हिंदुओं के अश्रु, स्वेद और रक्त से लिखी बेबाक सच्चाइयों का स्मरण कराती है। यह पुस्तक इस बात की अनुस्मारिका भी है कि इस युग में जन्मा प्रत्येक हिंदू, उन विपदाओं, कष्टों और उन लोगों द्वारा किए गए बलिदानों को कभी न भूले जो उनसे पहले हुए हैं। यदि हम जानेअनजाने भूल जाते हैं, तो अपनी महान सभ्यता के विनाश के भागीदार होंगे।",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy, Religion & Spirituality, Indian Languages",
    meta_description:
      "जो सभ्यता अपने संघर्षों को भूल जाती है, वह आत्मविनाश के चक्र में फंस जाती है। राम जन्मभूमि आंदोलन का दस्तावेज़।",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "ram-janmabhoomi-the-inspiration-for-hindu-resurgence-hindi")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi-hindi/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi-hindi/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi-hindi/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi-hindi/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi-hindi/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi-hindi/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi-hindi/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi-hindi/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/ram-janmabhoomi-hindi/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "450g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 64,
    title: "Whispers Of The Unseen: The Quest For Sixty-Four Yoginis",
    slug: "whispers-of-the-unseen-the-quest-for-sixty-four-yoginis",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [55].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [55].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [55].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [55].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9780392209666",
    amazonlink:
      "https://www.amazon.in/Whispers-Unseen-Quest-Sixty-Four-Yoginis/dp/9392209665/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/whispers-unseen-quest-sixty-four-yoginis/p/itm5938e0f4f46c1?pid=9789392209666&lid=",
    
    language: "English",
    dimension: "21.6 x 13.5 x 1 cm",
    pages: "326",
    about_book:
      "Whispers of the Unseen: The Quest for SixtyFour Yoginis redefines spirituality beyond conventional religious norms, rituals and practices. It attempts to forge a connection with the essence of life forms and take the reader through a spiritual exploration of the dynamic interplay and union of masculine and feminine energies. Through her paintings, the artist author revisits the cultural significance, richness and symbolism of the sixtyfour yoginis. The narrative delves deep into the realm of feminine power, drawing out the most pivotal manifestation of its expressive roles in our lives and integrating the practices of spirituality into our everyday existence. It prods the reader to relish life’s simple moments and to cherish the intersectionality of quotidian life. This will, according to her, allow them access to ancient spiritual practices in contemporary time, leading to increased awareness and mindfulness in daily life. It encourages readers to embrace connecting with the divine, tapping into a higher power and uncovering the creative force within.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Religion & Spirituality, Self-Help & Development",
    meta_description:
      "'Whispers of the Unseen' explores spirituality through art, blending masculine and feminine energies while celebrating yogini symbolism.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "whispers-of-the-unseen-the-quest-for-sixty-four-yoginis")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-of-the-unseen/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-of-the-unseen/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-of-the-unseen/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-of-the-unseen/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-of-the-unseen/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-of-the-unseen/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-of-the-unseen/thumbnail (7).jpg",
    ],
    
    book_format: "Paperback",
    weight: "380g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 65,
    title: "Adideva: 25 Legends Behind His 25 Names: A Yatra Through Puranas, Sthala Puranas And Itihasas",  
    slug: "adideva-25-legends-behind-his-25-names-a-yatra-through-puranas-sthala-puranas-and-itihasas",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [25].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [25].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [25].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [25].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9789392209918",
    amazonlink:
      "https://www.amazon.in/ADIDEVA-Legends-Through-Puranas-Itihasas/dp/9392209916/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "19.9 cm x 12.9 cm x 1.1 cm",
    pages: "176",
    about_book:
      "Shiva kathas are strewn like bright gems across the antiquated treasure chests of the Vedas, Itihasas, Maha Puranas, Sthala Puranas, and folklore. Adideva: 25 Legends behind His 25 Names is a collection of twenty five enchanting legends about Shiva retold in opulent detail keeping true to the original texts and temple lore. Each tale is supplemented by captivating verses of many saintpoets and photos of intricate sculptures and art, illuminating the adoration of our ancestors for each of the divine manifestations of Adideva. From the wellknown stories of Neelakantha, Uma Maheshwara, and Rameshwara, the riveting narratives of Tripurantaka, Sharabeshwara, and Kirata, the poignant accounts of Grishneshwara, Mrtyunjaya, and Matrubhuteshwara to the profound contemplations of Dakshinamurti and Arunachala, the chosen stories are filled with navarasas, and evoke wonder and adoration for Mahadeva. Embedded within these narratives are subtle teachings of dharma and adhyatma—inspiring a journey towards self discovery. Most importantly, they are the easiest and sweetest ways to cultivate Shiva bhakti, which is the immediate cure for samsara. ",
    category: "Fiction",
    genre: "Historical & Mythological Fiction, Religion & Spirituality, Short Stories & Anthologies",
    meta_description:
      "'Adideva' retells 25 enchanting legends of Shiva, rich in detail and complemented by poetry and art, inspiring devotion and selfdiscovery.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "adideva-25-legends-behind-his-25-names-a-yatra-through-puranas-sthala-puranas-and-itihasas")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/adideva/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/adideva/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/adideva/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/adideva/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/adideva/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/adideva/thumbnail (6).jpg",
    ],
    
    book_format: "Paperback",
    weight: "450g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 57,
    title: "Modi'S Governance Triumph: Reshaping India's Path To Prosperity",
    slug: "modis-governance-triumph-reshaping-indias-path-to-prosperity",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [67].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [67].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [67].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [67].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9789392209970",
    amazonlink:
      "https://www.amazon.in/Modis-Governance-Triumph-Tarun-Chugh/dp/9392209975/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/modi-s-governance-triumph/p/itm24f5496b569b4?pid=9789392209970&lid=",
    
    language: "English",
    dimension: "21.6 x 13.5 x 2.5 cm",
    pages: "292",
    about_book:
      "Meticulously researched and analysed, Modi’s Governance Triumph: Reshaping India’s Path to Prosperity delves into the Modi government’s key initiatives, reforms and innovations that have left an indelible imprint on India’s socio economic and political fabric. From the ambitious ‘Make in India’ campaign to sweeping changes in the taxation system with the introduction of the goods and services tax (GST), each chapter unpacks the narrative of a leader who has redefined governance in the world’s largest democracy. The book not only examines the achievements but also critically evaluates the challenges and controversies that have marked Modi’s tenure, providing a wellrounded perspective on his leadership. It is an essential read for anyone interested in understanding changes taking place in India and the role Prime Minister Narendra Modi plays in reshaping the nation’s future.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Politics & Governance",
    meta_description:
      "'Modi’s Governance Triumph' explores key reforms and challenges of Modi’s tenure, redefining India's path to prosperity.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "modis-governance-triumph-reshaping-indias-path-to-prosperity")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triump/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triump/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triump/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triump/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triump/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "200g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 66,
    title: "Modi'S Governance Triumph: Reshaping India's Path To Prosperity (Hindi)",
    slug: "modis-governance-triumph-reshaping-indias-path-to-prosperity-hindi",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [67].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [67].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [67].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [67].includes(author.id)).map((author) => author.authslug),
    price: 399,
    
    isbn13: "9789392209970",
    amazonlink:
      "https://www.amazon.in/Modis-Governance-Triumph-Reshaping-Prosperity/dp/B0D63VQYPQ/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "Hindi",
    dimension: "21.5 cm x 14 cm x 1 cm",
    pages: "214",
    about_book:
      "गहन शोध और विश्लेषण पर आधारित 'जीत मोदी शासन की: समृद्धि के अभिनव पथ पर भारत' पुस्तक मोदी सरकार की प्रमुख पहलों, सुधारों और नवाचारों का व्यापक विश्लेषण करती है, जिन्होंने भारत के सामाजिक, आर्थिक और राजनीतिक परिदृश्य को बदलकर रख दिया है। महत्वाकांक्षी 'मेक इन इंडिया' अभियान से लेकर वस्तु एवं सेवा कर (जीएसटी) के माध्यम से कर प्रणाली में बड़े बदलाव तक, हर अध्याय एक ऐसे नेता की कहानी को प्रस्तुत करता है जिसने दुनिया के सबसे बड़े लोकतंत्र में शासन के मायने ही बदल दिए हैं। यह पुस्तक न केवल मोदी सरकार की उपलब्धियों पर प्रकाश डालती है, बल्कि उनके कार्यकाल के दौरान सामने आई चुनौतियों और विवादों का भी समग्र मूल्यांकन करती है। यह उन सभी के लिए एक आवश्यक पुस्तक है जो भारत में हो रहे परिवर्तनों और प्रधानमंत्री नरेंद्र मोदी की भूमिका को समझने में रुचि रखते हैं, जो देश के भविष्य को नया आकार देने में महत्वपूर्णभूमिका निभा रहे हैं।",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Politics & Governance, Indian Languages",
    meta_description:
      "'जीत मोदी शासन की' मोदी सरकार की प्रमुख पहलों और सुधारों का विश्लेषण करती है, जो भारत के विकास को आकार दे रही हैं।",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "modis-governance-triumph-reshaping-indias-path-to-prosperity-hindi")?.book_image,
   book_thumbnail: [
      // "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triumph-hindi/thumbnail (1).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triumph-hindi/thumbnail (2).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triumph-hindi/thumbnail (3).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triumph-hindi/thumbnail (4).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triumph-hindi/thumbnail (5).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triumph-hindi/thumbnail (6).jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/modis-governance-triumph-hindi/thumbnail (7).jpg",
    ],
    
    book_format: "Paperback",
    weight: "200g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 67,
    title: "Invaders And Infidels: The Khalji Devastation Of Infidel Devagiri (Book 1)",  
    slug: "invaders-and-infidels-the-khalji-devastation-of-infidel-devagiri-book-1",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9788196847128",
    amazonlink:
      "https://www.amazon.in/Invaders-Infidels-500-Year-Journey-Invasions/dp/B0CZLL363V/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/invaders-infidels-sindh-delhi-500-year-journey-islamic-invasions-book-1/p/itm8046b1f38c315?pid=9788196847128&lid=",
    
    language: "English",
    dimension: "21.5 cm x 14 cm x 1 cm",
    pages: "194",
    about_book:
      "Invaders and Infidels: From Sindh to Delhi: The 500Year Journey of Islamic Invasions is a work of gripping history, which tells the story of the origins and trajectory of Islamic invasions into India. It begins with the first Muslim conquest and ends with Babur’s invasion of Hindustan, spanning the period of the Delhi Sultanate which was in power for almost 320 years. This epochal story encompasses a vast sweep of events, which changed the history of India forever, and introduced it to an alien faith and a religious despotism such as the country had never experienced before. It comprises major and minor sagas of great heroism, untold savagery, stout resistance, brutal intrigues and epic tragedies. Embedded in this narrative are two major themes, largely overlooked in the inherited Indian historical and cultural memory. For more than three hundred years, alien Muslim invasions into India were largely fleeting, transitory and unstable. However, the lasting legacy of these Muslim invasions is the permanent destruction and disappearance of Classical India. Invaders and Infidels will fascinate anyone interested in the story of preMedieval India, a gateway era in the history of this ancient culture and civilisation.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance",
    meta_description:
      "'Invaders and Infidels' chronicles 500 years of Islamic invasions in India, exploring their impact on history and culture.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "invaders-and-infidels-the-khalji-devastation-of-infidel-devagiri-book-1")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-1/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-1/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-1/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-1/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-1/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-1/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-1/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-1/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/invaders-and-infidels-book-1/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "250g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 68,
    title: "Nastik: Why I Am Not An Atheist",  
    slug: "nastik-why-i-am-not-an-atheist",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [36].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [36].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [36].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [36].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9789392209673",
    amazonlink:
      "https://www.amazon.in/Nastik-Why-Am-Not-Atheist/dp/B0CZS12JF1/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 cm x 14 cm x 1.9 cm",
    pages: "318",
    about_book:
      "Nastik chronicles the transformative journey of a modern Indian sceptic who initially embraced Western neoatheism. It begins with the protagonist’s disillusionment with religious dogma and his subsequent adoption of Western neoatheism, characterized by a staunch denial of theism and a critique of religion’s influence on society. As the narrative unfolds, he encounters the rich tapestry of Indian philosophy. He discovers the nuanced perspectives of nastik schools of thought in Indian tradition, such as Charvaka, Jainism and certain interpretations of Buddhism, which reject the authority of the Vedas and the existence of a creator god yet engage deeply with ethical and philosophical questions. His transformation into a nastik and Nirishvarwaadi is marked by an appreciation for the complexity of Eastern scepticism, which often intertwines with spiritual and moral considerations unlike the more direct and often materialistic scepticism prevalent in the West. The book delves into the differences between Western and Eastern scepticism, highlighting how Eastern traditions offer a nuanced view that accommodates doubt within a spiritual framework. As his worldview evolves, he critiques the emergence of neoatheism’s successor, ‘wokeism’, which he argues marks a shift from scepticism to a new form of dogmatism. He argues that neoatheism inadvertently paved the way for wokeism by undermining traditional structures without offering a sustainable alternative, leading to a vacuum that wokeism has filled with its own set of moral certainties. At the penultimate stage, the protagonist explores the concept of Hindu scepticism, which is considered part of the broader Hindu tradition. The inclusiveness of this tradition highlights the unique ability of dharma to absorb various strands of thought. As the narration closes, he learns that at the heart of dharmic traditions lies a commitment to mutual respect, reciprocity and ahimsa (nonviolence), which have allowed for a diverse array of beliefs and practices to coexist and flourish within the Indian philosophical landscape.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Religion & Spirituality",
    meta_description:
      "'Nastik' follows a modern Indian skeptic's journey from Western neoatheism to embracing Eastern philosophies, exploring nuanced views on doubt and spirituality.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "nastik-why-i-am-not-an-atheist")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/nastik/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/nastik/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/nastik/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/nastik/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/nastik/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/nastik/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/nastik/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/nastik/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/nastik/thumbnail (9).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/nastik/thumbnail (10).jpg",
    ],
    
    book_format: "Paperback",
    weight: "290g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  
  {
    id: 70,
    title: "Apostles : A Candid Take On Managing Organisations & Talent",  
    slug: "apostles-a-candid-take-on-managing-organisations-and-talent",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [20].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [20].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [20].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [20].includes(author.id)).map((author) => author.authslug),
    price: 399,
    
    isbn13: "9789392209901",
    amazonlink:
      "https://www.amazon.in/Apostles-candid-Managing-Organisations-Talent/dp/B0D1CLKQYQ/ref=sr_1_3?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "19.8 cm x 13 cm x 0.8 cm",
    pages: "122",
    about_book:
      "In his debut book, Biswaroop offers an insight into career lessons he has learned in his long years of managing organisations and talent. Through a collection of reflections and musings, he invites readers to join him on a journey of discovery, reflection, and growth. He brings with him the perspective of an experienced practitioner who is passionate about making a difference in organisations and the lives of the employees.",
    category: "Non-Fiction",
    genre: "'Economics, Finance, Business & Management'",
    meta_description:
      "In his debut, Biswaroop shares career lessons on leadership and talent management, offering insights for HR and business leaders alike.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "apostles-a-candid-take-on-managing-organisations-and-talent")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/apostles/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/apostles/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/apostles/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/apostles/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/apostles/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/apostles/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/apostles/thumbnail (7).jpg",
    ],
    
    book_format: "Paperback",
    weight: "135g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 71,
    title: "Devdoot",
    slug: "devdoot",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [13].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [13].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [13].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [13].includes(author.id)).map((author) => author.authslug),
    price: 199,
    
    isbn13: "9789392209772",
    amazonlink:
      "https://www.amazon.in/Devdoot-Hindi-Aniruddh-Rawat/dp/9392209770/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "Hindi",
    dimension: "21.5 cm x 13.5 cm x 0.8 cm",
    pages: "130",
    about_book:
      "कहानी संग्रह के रूप में प्रस्तुत ‘देवदूत’ ऐसी सच्ची घटनाओं का संग्रह है जिनमें जीवन से निराश व हताश लोगों के जीवन में एक अप्रत्याशित मोड़ आता है और किसी व्यक्ति के सहयोग से उनका नारकीय व दुखद जीवन सुख की लालिमा को देखने लगता है। देवदूत की कहानियों में वे ही घटनाएं चित्रित की गई हैं जो उन पात्रों से साक्षात्कार करते समय मुझे बतलाई गईं। इन कहानियों को खोजते हुए मैंने मानव विषाद व वंचनाओं को अति निकट से देखा एवं मेरी लेखनी ने उन सभी मार्मिक अनुभवों को एक क्रम में सजाने की कोशिश की है। देवदूत में एक ऐसे ही व्यक्ति के जनकल्याणकारी कार्यों का वर्णन है, जिनसे पीड़ितों व उपेक्षित लोगों को उनके बुरे समय में इलाज, वित्तीय सहायता, सम्मान, सुरक्षा, भोजन, वस्त्र, योजनाओं का लाभ आदि प्राप्त हुई और उनके जीवन का विषाद अचानक से कम हो गया। जैसे-जैसे आप इस पुस्तक के पन्नों में चित्रित उन सच्ची घटनाओं को पढ़ेंगे, वैसे-वैसे आपको उन पीड़ितों की पीड़ा और उनकी पीड़ा को हरने के लिए उनके जीवन में आये देवदूत के जनपरोपकारी कार्यों के बारे में पता चलेगा।",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, True Accounts', Short Stories & Anthologies",
    meta_description:
      "‘देवदूत’ में सच्ची घटनाएं हैं, जहां सहयोग से निराश लोगों का जीवन बदलता है, उनके दुखों को राहत मिलती है।",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "devdoot")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/devdoot-hindi/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/devdoot-hindi/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/devdoot-hindi/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/devdoot-hindi/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/devdoot-hindi/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/devdoot-hindi/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/devdoot-hindi/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/devdoot-hindi/thumbnail (8).jpg",
    ],
    
    book_format: "Paperback",
    weight: "250g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 72,
    title: "Stalled Wheels of Justice",
    slug: "stalled-wheels-of-justice",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [60].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [60].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [60].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [60].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9788196737535",
    amazonlink:
      "https://www.amazon.in/Stalled-Wheels-Justice-Shishir-Tripathi/dp/B0CZLQV5FX/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 cm x 13.5 cm x 1.1 cm",
    pages: "180",
    about_book:
      "‘Justice delayed is justice denied’ is a legal maxim that is often used to buttress the need for speedy justice. But what do we make of justice if it is served to a humble postman accused of stealing 57 rupees and 60 paise or a poor bus conductor charged with siphoning off 5 paise after legal battles that lasted for 29 years and 41 years, respectively? What do we make of justice if it costs so much that a retired senior bureaucrat and a senior Supreme Court judge say that they cannot afford the cost of litigation? What comes closest to this idea of manifest injustice is ‘justice delayed’ and ‘unequal access to justice’. There are various impediments and roadblocks to the dispensation of justice that can be termed as fair. Many of them are beyond the control of the judiciary itself. But a Bharat envisioning to become developed by 2047 needs to have a judiciary enabled by technology, guided by integrity, and motivated to provide quick relief. Piledup case files, vacant judicial positions, and crumbling spaces cannot be the hallmark of a ‘nation on the move’. To clear these impediments, a concerted effort is required from all the stakeholders starting from government to litigants to the bar and the bench. The judiciary needs to be sophisticated and driven by the zeitgeist of high productivity, and judges need to have modern courtrooms so they can deliver justice swiftly. Stalled Wheels of Justice is not a commentary on law. That is something best left to jurists, lawyers, and constitutional experts. This is the story of law not being able to transform into justice. This is the story of denied insaaf and delayed nyaya. This is the story of a process that the author witnessed as a court reporter—a process that former chief justice of India N.V. Ramana equated with punishment. When the process itself becomes the punishment, poor justiceseekers become the first victims. Even when relief and judgments come forth, they are often empty of substance for they are pyrrhic victories. Much has been said and written from the points of view of persons in black robes, university professors, and intellectuals. But what about from men and women of the country who bore the heavy burden of injustice? This is the story of a faulty process, solvable unsolved problems, and, above all, of people at the end of the spectrum.",
    category: "Non-Fiction",
    genre: "Law & Public Policy, Society & Social Sciences, Politics & Governance",
    meta_description:
      "‘Stalled Wheels of Justice’ explores the harsh realities of delayed justice, revealing how systemic failures harm the vulnerable.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "stalled-wheels-of-justice")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/stalled-wheels-of-justice/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/stalled-wheels-of-justice/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/stalled-wheels-of-justice/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/stalled-wheels-of-justice/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/stalled-wheels-of-justice/thumbnail (5).jpg",
    ],
    
    book_format: "Paperback",
    weight: "250g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 73,
    title: "Bangaliyana: Doodles, Cartoons And Musings From A Probashi Bengali",
    slug: "bangaliyana-doodles-cartoons-and-musings-from-a-probashi-bengali",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [50].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [50].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [50].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [50].includes(author.id)).map((author) => author.authslug),
    price: 399,
    
    isbn13: "9789392209710",
    amazonlink: "",
    flipkartlink:
      "https://www.flipkart.com/bangaliyana-doodles-cartoons-musings-probashi-bengali/p/itm4ce326e89e187?pid=9789392209710&lid=",
    
    language: "English",
    dimension: "19.8 x 12.9 x 1 cm",
    pages: "116",
    about_book:
      "The word ‘Bangaliyana’ roughly means ‘the Bengali way of life’. Bangaliyana, the book, is a delightful look at the author’s experience of life through his doodles and cartoons. Each page is infused with the vibrant spirit of Bengali culture, cuisine, and language from the author’spoint of view.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts'",
    meta_description:
      "'Bangaliyana' celebrates Bengali life through humor, doodles, and personal stories, blending nostalgia with cultural charm.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "bangaliyana-doodles-cartoons-and-musings-from-a-probashi-bengali")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/bangaliyana/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bangaliyana/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bangaliyana/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bangaliyana/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bangaliyana/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bangaliyana/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bangaliyana/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bangaliyana/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/bangaliyana/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "300g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },

  {
    id: 75,
    title: "Krishna-Niti: Timeless Strategic Wisdom",
    slug: "krishna-niti-timeless-strategic-wisdom",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [35,44].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [35,44].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [35,44].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [35,44].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9789392209888",
    amazonlink:
      "https://www.amazon.in/Krishna-Niti-Timeless-Strategic-Kushagra-Aniket/dp/B0D1CPDY3N/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/krishnaniti-timeless-strategic-wisdom/p/itmc17877b192448?pid=9789392209888&lid=",
    
    language: "English",
    dimension: "21.7 cm x 13.5 cm x 0.8 cm",
    pages: "234",
    about_book:
      "How often have you been advised to follow the teachings of Krishna but wondered what those teachings were? KrishnaNiti: Timeless Strategic Wisdom brings forth eleven of the most important lessons delivered by Krishna at critical junctures in the Mahabharata. These practical lessons are different from the spiritual wisdom imparted to Arjuna in the celebrated Bhagavad Gita. Whether negotiating for peace between the Kauravas and Pandavas, resolving internal conflicts in the Pandava camp, or inspiring Yudhishthira to rule as a Dharmaraja (righteous ruler) at the end of the Kuruskshetra war, Krishna emerges as the strategist par excellence, who is as worldly wise as he is spiritually enlightened. Krishna’s instructions cover a wide range of subjects, including ethics, strategy, governance, policy, and above all dharma. However, throughout its wide scope, KrishnaNiti is governed by an underlying worldview, which can be summarised as jnanakarmasamuchchaya, or the right combination of knowledge and action to achieve the fourfold goals of human life. Krishna argues that karma is essential to life and natural order. Steadfastness in one’s karma is the key to the attainment of one’s goals whether material or spiritual. Escapism or inaction is not an option, neither is indecisiveness stemming from unending intellectual debates. In no case should one abandon one’s duty by citing a lack of good options. Krishna’s role in the Mahabharata is not just as a knower of dharma (dharmajna) but as its upholder and institutor (dharmasamsthapaka). Therefore, unlike other great works on niti, Krishna’s instructions are not theoretical but have an immediate relation to the situation at hand. His guidance is always delivered to a particular character in the epic, especially in moments of crisis, internal dissension, or war. This implies that we get to see the principles of KrishnaNiti in action throughout the epic. The authors, Kushagra Aniket and Nityananda Misra, draw upon their extensive research into the Mahabharata to present a unique gem of Nitishastra that is distilled from the quintessential Itihasa of India. They analyse Krishna’s practical wisdom through his interventions on numerous occasions. Rooted in the vision of the epic, KrishnaNiti: Timeless Strategic Wisdom paints the authentic picture of Krishna as a statesman— an enduring image that is deeply relevant to our times.",
    category: "Non-Fiction",
    genre: "Religion & Spirituality, Society & Social Sciences, Self-Help & Development",
    meta_description:
      "KrishnaNiti reveals eleven strategic lessons from Krishna in the Mahabharata, blending ethics, governance, and dharma for modern relevance.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "krishna-niti-timeless-strategic-wisdom")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/krishna-niti/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/krishna-niti/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/krishna-niti/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/krishna-niti/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/krishna-niti/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/krishna-niti/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/krishna-niti/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/krishna-niti/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/krishna-niti/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "200g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 76,
    title: "Whispers From The Past: Art And Wisdom Of Kashmir",  
    slug: "whispers-from-the-past-art-and-wisdom-of-kashmir",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [64].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [64].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [64].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [64].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9788196737528",
    amazonlink:
      "https://www.amazon.in/Whispers-Past-Art-Wisdom-Kashmir/dp/B0D49DQSSP/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.6 cm x 13.5 cm x 1.4 cm",
    pages: "260",
    about_book:
      "Whispers from the Past is an overture to the history and culture of classical Kashmir, which for over a thousand years was one of the most creative places in the world. Through the book, the author hopes to acquaint the reader with Kashmir’s contributions to art and aesthetics, including drama, music, painting, sculpture, sciences, yoga, tantra, literature, and philosophy. The region’s culture was premised on the idea that universal consciousness binds humanity together, and knowing this at the individual’s level is fundamental to selfunderstanding and for creative growth. Classical Kashmiri artists appreciated great art not merely from its inherent cleverness points of view but for its capacity to inspire audiences to the source of creativity itself, and this entailed devotion to excellence and a robust tradition of criticism. The book explores the currents of intellectual life and the lives of prominent royals, writers, and sages, showing how Kashmiri scholars and travellers came to influence not only southern regions but also faraway lands beyond the Himalayas. It showcases Kashmir’s famed storytelling tradition through abridged tales from the Panchatantra, Kathāsaritsāgara, and Yoga Vāsiṣṭha, the last of which is arguably the greatest book of imagination and wisdom ever written on the conundrums of consciousness with unequalled clarity. Kashmiri aesthetics and the search for meaning in life resonate with modern sensibility",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, 'Biography, Autobiography, & True Accounts', Politics & Governance",
    meta_description:
      "Whispers from the Past explores Kashmir's rich history and culture, highlighting its art, philosophy, and contributions to humanity.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "whispers-from-the-past-art-and-wisdom-of-kashmir")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-from-the-past/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-from-the-past/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-from-the-past/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-from-the-past/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-from-the-past/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-from-the-past/thumbnail6.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-from-the-past/thumbnail7.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-from-the-past/thumbnail8.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-from-the-past/thumbnail9.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/whispers-from-the-past/thumbnail10.jpg",
    ],
    
    book_format: "Paperback",
    weight: "390g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 77,
    title: "Kashi: The Valiant History Of A Sacred Geography",  
    slug: "kashi-the-valiant-history-of-a-sacred-geography",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [6].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [6].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [6].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [6].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9789392209697",
    amazonlink:
      "https://www.amazon.in/Kashi-Valiant-History-Sacred-Geography/dp/B0D1CMW1P6/ref=sr_1_3?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 cm x 13.5 cm x 1.9 cm",
    pages: "340",
    about_book:
      "Kashi: The Valiant History of a Sacred Geography tells the story of the most sacred of all Hindu holy cities through the prism of sacred geography as is extensively documented in the Sthala Purana. The book features a summary of the Kashi Khanda from the Skanda Purana, an ancient text on the divine origin and leela surrounding the kshetra of Kashi. The history of this kshetra is enriched by the accounts of warrior sadhus, sages, kings, queens, devotees and ordinary citizens who dedicated their lives to preserving and reviving this sacred geography by doggedly building and rebuilding temples, taking up arms against invaders, meticulously documenting Kashi’s history and lore, and tenaciously sustaining pilgrimage routes and practices covering the holy sites of this pivotal city. In particular, the lesserknown story of the warrior sadhus who defended the Kashi Vishwanath temple from marauding invaders is explored through the lens of sacred geography. Studied in this light, Kashi is both a spatial and metaphysical contestation. The current controversy and litigation over the Gyanvapi site cannot therefore be satisfactorily resolved without taking recourse to the idea of sacred geography, which has since time immemorial informed Hindus and indigenous societies worldwide about their identity and the relevance of space and place, culture and metaphysics, civilization and the development of nationhood.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy, Religion & Spirituality",
    meta_description:
      "This book explores warrior sadhus who defended Kashi Vishwanath temple, highlighting sacred geography's role in identity and conflict.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "kashi-the-valiant-history-of-a-sacred-geography")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/kashi/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/kashi/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/kashi/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/kashi/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/kashi/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/kashi/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/kashi/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/kashi/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/kashi/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "290g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 78,
    title: "My Freedom Of Expression: Reflections On Contemporary Issues",
    slug: "my-freedom-of-expression-reflections-on-contemporary-issues",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [46].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [46].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [46].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [46].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9789392209734",
    amazonlink:
      "https://www.amazon.in/My-Freedom-Expression-Reflections-Contemporary/dp/9392209738/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "22.7 cm x 13.6 cm x 1.5 cm",
    pages: "268",
    about_book:
      "My Freedom of Expression is a collection of 22 articles published in recent years mostly by the Statesman newspaper. The anthology—varied in its themes ranging from Indic civilization to democracy, scientific temper to religious bigotry and identity to governance—is an exploration of what holds India back to become a global leader. The author picked some of contemporary’s most contentious topics, such as global warming, scientific marvels, the mysteries of life and the universe, cultural and religious superstitions, illusions and prejudices in the practise of science, and the importance of religion in society, and dissected them one by one with a rationalist knife. So what his writings essentially do is show a mirror to society. By being both accessible and arresting at once, the book deserves a place in everyone’s library",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Society & Social Sciences",
    meta_description:
      "My Freedom of Expression features 22 thoughtprovoking articles exploring India's challenges, from democracy to science and identity.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "my-freedom-of-expression-reflections-on-contemporary-issues")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/my-freedom-of-expression/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/my-freedom-of-expression/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/my-freedom-of-expression/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/my-freedom-of-expression/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/my-freedom-of-expression/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/my-freedom-of-expression/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/my-freedom-of-expression/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/my-freedom-of-expression/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/my-freedom-of-expression/thumbnail (9).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/my-freedom-of-expression/thumbnail (10).jpg",
    ],
    
    book_format: "Paperback",
    weight: "450g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 79,
    title: "Shared Roots: Tales From The Indosphere",
    slug: "shared-roots-tales-from-the-indosphere",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [53].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [53].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [53].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [53].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9789392209758",
    amazonlink:
      "https://www.amazon.in/Shared-Roots-Indosphere-Ratul-Chakraborty/dp/B0D63MCXCR/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 cm x 14 cm x 1.9 cm",
    pages: "336",
    about_book:
      "The Indosphere is a broad, expansive cultural and geographical category under the influence of ancient India. While India’s cultural reach beyond the subcontinent has a storied past, its relationship with Cambodia is all but forgotten. Shared Roots tries to plug that gap. Embark on a captivating odyssey through the vibrant currents that once flowed freely between India and Cambodia. Woven together by the threads of dharma, the Indosphere is a fascinating realm where kings exchanged not just spices but also ideas, where artists found inspiration in shared mythology and where spirituality transcended borders. In this collection, seven authors from diverse fields meticulously plot the textures of this bilateral history, revealing the profound connection that shaped both the nations. From the echoing verses of the Reamker to the breathtaking grandeur of Angkor Wat, each page unveils the enduring legacy of this ancient bond. But Shared Roots is more than just a historical journey. It is an invitation to rediscover the power and beauty of cultural exchange untainted by colonialism, a potent reminder that diversity is not just a feature but also an essential building block of a just society. Drawing upon meticulous research and captivating storytelling, this book ignites a conversation about civilizational revival, urging us to celebrate the past while embracing a future enriched by shared understanding. The book is a stunning exploration of cultural fusion, a testament to the enduring power of enlightened values, and a call to action for a more vibrant world.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences",
    meta_description:
      "'Shared Roots' uncovers the deep cultural ties between India and Cambodia, exploring history, spirituality, and artistic exchange.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "shared-roots-tales-from-the-indosphere")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/shared-roots/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/shared-roots/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/shared-roots/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/shared-roots/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/shared-roots/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/shared-roots/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/shared-roots/thumbnail (7).jpg",
    ],
    
    book_format: "Paperback",
    weight: "310g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 80,
    title: "Reclaiming Bharatavarsha",
    slug: "reclaiming-bharatavarsha",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [57].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9788196847159",
    amazonlink:
      "https://www.amazon.in/Reclaiming-Bharatavarsha-Sandeep-Balakrishna/dp/B0D5DJ79M1/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.7 cm x 14 cm x 1.9 cm",
    pages: "310",
    about_book:
      "Reclaiming Bharatavarsha is a collection of topical and exploratory essays organized around three broad themes. The first explores various facets of classical Bharatavarsha, which is defined as India before the advent of alien Islamic invaders and British colonisation. The second delves into the condition of an India under successive alien regimes. The impact of these regimes on our culture and society is contrasted with the conditions prevailing in the preceding classical era. The third studies the imprint of these bouts of foreign rule on contemporary national life. The three themes taken separately are complementary, and together they offer a scope for comparative analyses of the politics, culture, society, customs, and literature of different eras in the life of this ancient land. From selected episodes drawn from the Puranas and the Mahabharata to the sacred history of the banana, from the 17thcentury Bengali arrack to woke cinema, from the 1962 war with China to hair dyes, the book offers an eclectic mix of atypical essays, the narratives of which are filled with rare anecdotes and vivid details, all of which are backed by scholarly research. The book also has a contemporary context—the unprecedented transformation of India over the last decade. A major outcome of this transformation is the surge in interest for recovering India’s national and civilizational past. This collective resurgence is an expression of cultural selfconfidence, which had fallen by the wayside for centuries. Reclaiming Bharatavarsha is a humble addition to this national endeavour.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Religion & Spirituality, Politics & Governance",
    meta_description:
      "'Reclaiming Bharatavarsha' presents essays on India's classical heritage, foreign rule, and contemporary cultural resurgence.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "reclaiming-bharatavarsha")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/reclaiming-bharatvarsha/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/reclaiming-bharatvarsha/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/reclaiming-bharatvarsha/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/reclaiming-bharatvarsha/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/reclaiming-bharatvarsha/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/reclaiming-bharatvarsha/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/reclaiming-bharatvarsha/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/reclaiming-bharatvarsha/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/reclaiming-bharatvarsha/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "450g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 81,
    title: "Rearming Hinduism: Nature, Hinduphobia, And The Return Of Indian Intelligence",  
    slug: "rearming-hinduism-nature-hinduphobia-and-the-return-of-indian-intelligence",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [71].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [71].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [71].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [71].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9788197223198",
    amazonlink:
      "https://www.amazon.in/Rearming-Hinduism-Nature-Hinduphobia-Intelligence/dp/B0D63P5NKM/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.6 x 13.5 x 2.5 cm",
    pages: "233",
    about_book:
      "Rearming Hinduism is a handbook for intellectual resistance. Within its pages, Vamsee Juluri delivers a sharp and comprehensive examination of Hinduphobia pervasive in contemporary academia, media, and popular culture. Juluri not only exposes the Hinduphobic narrative’s denial of the profound truths and beauty within Hindu philosophy but also challenges its disregard for the inherent integrity and sacredness of the natural world. This book fearlessly dismantles prevalent misconceptions about nature, history, and ancient civilizations propagated by modern media while debunking Hinduphobic myths surrounding Aryans, invasions, and ritual practices. Through this critique, Rearming Hinduism draws connections between Hinduphobia and a culture marked by exploitation and selfdestruction, suggesting that a revitalized Hindu perspective may offer a potent counterforce. It urges readers to envision the present through the lens of timeless principles, thereby uplifting our understanding of our land, time, and the enduring values of sanatana dharma.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Religion & Spirituality, Politics & Governance",
    meta_description:
      "'Rearming Hinduism' critiques Hinduphobia in academia and media, advocating for a revitalized understanding of Hindu values.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "rearming-hinduism-nature-hinduphobia-and-the-return-of-indian-intelligence")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/rearming-hinduism/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/rearming-hinduism/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/rearming-hinduism/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/rearming-hinduism/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/rearming-hinduism/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/rearming-hinduism/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/rearming-hinduism/thumbnail (7).jpg",
    ],
    
    book_format: "Paperback",
    weight: "215g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 82,
    title: "Desires, Dreams And Powers: Reminiscences Of West Bengal And The Northeast",
    slug: "desire-dreams-and-powers-reminiscences-of-west-bengal-and-the-northeast",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [68].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [68].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [68].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [68].includes(author.id)).map((author) => author.authslug),
    price: 899,
    
    isbn13: "9789392209802",
    amazonlink:
      "https://www.amazon.in/Desires-Dreams-Powers-Reminiscences-Northeast/dp/B0D63MMHCX/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.6 cm x 14 cm x 3.4 cm",
    pages: "562",
    about_book:
      "Desires, Dreams and Powers is a fascinating saga of the life and times of Tathagata Roy. Not many people may have traipsed into so many fields of life as Roy has. He has been a civil engineer, an encyclopaedic, a university teacher, a researcher, a contract lawyer, a politician, an author in two languages, an intrepid traveller and, lately, a history buff. By writing about his times than his life, Roy covers truly eventful eight decades of a nation in transition, during which British rule transmogrified into the partitions of India and Bengal, the world around him transformed from writing with a quill pen to taming the personal computer and toying with AI, and politics from optimism to Naxalism to hope. His native West Bengal, the crucible of left ideology, finally exorcised the ghost of Marxism by overthrowing the Left Front united in 2011 after 34 years of unbroken communist rule. Through it all, he pranced into high school, segued into engineering college, got his first job with the Indian railways, taught at Jadavpur University, joined the Bharatiya Janata Party and capped it all up by becoming the governor of three north-eastern states of India. The book is as much about the trajectory of a nation on the move as it is about Roy’s life. The parallel is unmissable.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Essays & Anthologies",
    meta_description:
      "'Desires, Dreams and Powers' chronicles Tathagata Roy's diverse journey through eight decades of India's transformative history.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "desire-dreams-and-powers-reminiscences-of-west-bengal-and-the-northeast")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/desire-dreams-and-powers/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/desire-dreams-and-powers/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/desire-dreams-and-powers/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/desire-dreams-and-powers/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/desire-dreams-and-powers/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/desire-dreams-and-powers/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/desire-dreams-and-powers/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/desire-dreams-and-powers/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/desire-dreams-and-powers/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "880g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 83,
    title: "The Collector'S Mother: How An Underprivileged Woman Inspired Her Son To Become An Ias Officer",
    slug: "the-collectors-mother-how-an-underprivileged-woman-inspired-her-son-to-become-an-ias-officer",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [19].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [19].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [19].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [19].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9788196847180",
    amazonlink:
      "https://www.amazon.in/Collectors-Mother-Underprivileged-Inspired-Officer/dp/B0D6SDFXPD/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/collector-s-mother-underprivileged-woman-inspired-her-son-become-ias-officer/p/itmcadbc2303357c?pid=",
    
    language: "English",
    dimension: "21.5 cm x 14 cm x 1.9 cm",
    pages: "180",
    about_book:
      "The Collector’s Mother is a story of grit and perseverance. An ‘unwanted’ woman from an underprivileged background is attacked and, along with her husband, dragged on the village road and humiliated, and the family’s land grabbed by a local land mafia. In the godforsaken village deep into the hinterland, such excesses are not uncommon, but her steely resolve makes her stand out. How she weathers through such soulsapping encounters to beat all odds and inspires her son to become a collector is at the heart of this extraordinary story set against the backdrop of abject caste oppression, absence of rule of law, persistent traditional power structure, pitiable education system, food insecurity, drought, famine, lack of health care and communication, hatred and domination by fellow villagers.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts'",
    meta_description:
      "In a village plagued by oppression, a resilient woman battles humiliation and adversity to inspire her son to rise above.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "the-collectors-mother-how-an-underprivileged-woman-inspired-her-son-to-become-an-ias-officer")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/the-collectors-mother/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-collectors-mother/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-collectors-mother/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-collectors-mother/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-collectors-mother/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-collectors-mother/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-collectors-mother/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-collectors-mother/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-collectors-mother/thumbnail (9).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-collectors-mother/thumbnail (10).jpg",
    ],
    
    book_format: "Paperback",
    weight: "150g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 84,
    title: "How To Get Into IAS: A Perfect Guide To Crack Upsc Exam",  
    slug: "how-to-get-into-ias-a-perfect-guide-to-crack-upsc-exam",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [54,59].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [54,59].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [54,59].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [54,59].includes(author.id)).map((author) => author.authslug),
    price: 399,
    
    isbn13: "9788197223150",
    amazonlink:
      "https://www.amazon.in/How-Get-into-IAS-Perfect/dp/8197223157/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 cm x 14 cm x 1.9 cm",
    pages: "244",
    about_book:
      "Welcome to India’s biggest and arguably the toughest examination—the UPSC Civil Services Examination. Clearing the exam is a painful journey—a battle, some might say—that requires tenacity, discipline, dedication, unwavering selfconfidence, and hard work. While all losing battles have many things in common, a winning one has one: sound guidance. All unsurmountable goals are possible with a perfect companion and guide.",
    category: "Non-Fiction",
    genre: "Self-Help & Development, Educational Books & References",
    meta_description:
      "Embark on the toughest journey: the UPSC Civil Services Exam, where tenacity and the right guidance lead to victory.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "how-to-get-into-ias-a-perfect-guide-to-crack-upsc-exam")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/how-to-get-into-ias/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-to-get-into-ias/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-to-get-into-ias/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-to-get-into-ias/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-to-get-into-ias/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-to-get-into-ias/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-to-get-into-ias/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-to-get-into-ias/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/how-to-get-into-ias/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "230g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 85,
    title: "Decolonizing Hinduism: Exposing Shallow Attempts That Destroyed And Divided Dharma",
    slug: "decolonizing-hinduism-exposing-shallow-attempts-that-destroyed-and-divided-dharma",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [62].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [62].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [62].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [62].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9789392209925",
    amazonlink:
      "https://www.amazon.in/Decolonizing-Hinduism-Exposing-Attempts-Destroyed/dp/B0D6S2CV56/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/decolonizing-hinduism-exposing-shallow-attempts-destroyed-divided-dharma/p/itm2427885b44fc1?pid=",
    
    language: "English",
    dimension: "21.5 cm x 14 cm x 1.9 cm",
    pages: "464",
    about_book:
      "History writing, especially of the subcontinent during the colonial era, is filled with preconception and misconception. Colonial historiography stripped Hinduism of its Hinduness and India of Bharat. Colonial historicity, according to the author, is merely descriptive and random interpretations of myths rather than engaging with the idea of mythmaking. Decolonizing Hinduism is an attempt to address that. In the book, the author places ecology, astronomy and timescale (yuga cycle) at the heart of the Hindu belief system. These important dimensions of Hinduism are not taught in our history classes. Instead, perceptions about Hinduism are limited to polytheism, idol worship and caste system. The book tries to rescue Hinduism from these biases and give voice to a uniquely indigenous version of Hinduism. He does so by demystifying the deeper concepts of Hinduism and history with allegories drawn from modern technological innovation in the field of capitalist economy, artificial intelligence, quantum physics, block chain, etc., to make them interesting.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Religion & Spirituality, Politics & Governance",
    meta_description:
      "'Decolonizing Hinduism' challenges colonial misconceptions, highlighting ecology and mythology to reveal a rich, indigenous faith.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "decolonizing-hinduism-exposing-shallow-attempts-that-destroyed-and-divided-dharma")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/decolonizing-hinduism/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/decolonizing-hinduism/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/decolonizing-hinduism/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/decolonizing-hinduism/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/decolonizing-hinduism/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/decolonizing-hinduism/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/decolonizing-hinduism/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/decolonizing-hinduism/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/decolonizing-hinduism/thumbnail (9).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/decolonizing-hinduism/thumbnail (10).jpg",
    ],
    
    book_format: "Paperback",
    weight: "450g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 86,
    title: "The Battle for Consciousness Theory: A Response to Ken Wilber's Hijacking of Sri Aurobindo and Other Indian Thought",  
    slug: "the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [51,42,34].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [51,42,34].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [51,42,34].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [51,42,34].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9788197223167",
    amazonlink:
      "https://www.amazon.in/Battle-Consciousness-Theory-Appropriation-Aurobindos/dp/8197223165/ref=rvi_d_sccl_3/262-9142005-6871552?pd_rd_w=",
    flipkartlink:
      "https://www.flipkart.com/battle-consciousness-theory-response-ken-wilber-s-appropriation-sri-aurobindo-s-work-other-indian-thought/p/itm705f7a892ef0d?pid=",
    
    language: "English",
    dimension: "23.6 x 16 x 2 cm",
    pages: "532",
    about_book:
      "The Battle for Consciousness Theory: A Response to Ken Wilber's Appropriation of Sri Aurobindo's Work and Other Indian Thought is a compelling and meticulous account of the digestion and subversion of the work of one of India’s greatest sages—Sri Aurobindo. The book uncovers the systematic coopting of Sri Aurobindo’s seminal ideas by the American theorist Ken Wilber and their reformulation into his own ‘Integral Theory’. Based on extensive research spanning a quarter century, the book provides deep insights into the developments that shaped (and distorted) the Aurobindonian discourse in recent decades. It discusses the ramifications of the enhancement of Western Universalism at the expense of Vedic and other Indian traditions while analyzing certain limitations in Wilber’s work.",
    category: "Non-Fiction",
    genre: "Science & Technology, Religion & Spirituality",
    meta_description:
      "This book critiques Ken Wilber's appropriation of Sri Aurobindo's ideas, revealing distortions in the Aurobindonian discourse.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (9).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (10).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/the-battle-for-consciousness-theory-a-response-to-ken-wilbers-hijacking-of-sri-aurobindo-and-other-indian-thought/thumbnail (11).jpg",
    ],
    
    book_format: "Paperback",
    weight: "720g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 87,
    title: "India in 2050: Visions for a Superpower India",  
    slug: "india-in-2050-visions-for-a-superpower-india",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [32].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [32].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [32].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [32].includes(author.id)).map((author) => author.authslug),
    price: 799,
    
    isbn13: "9789392209932",
    amazonlink:
      "https://www.amazon.in/India-2050-Superpower-Karan-Mehrishi/dp/9392209932/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "23.6 x 16 x 2 cm",
    pages: "352",
    about_book:
      "India is expected to become a $30 trillion+ economy by2050. With a size like that it will be the world’s second orthirdlargest economic power, enjoying unprecedentedinfluence over global affairs. This will also make India thethird pillar of a tripolar world—the US and China being theother two. Will India seize the opportunity and assume leadershipwith responsibility? This book seeks to answer that.Besides becoming an economic and military superpower,it will also increasingly dominate in the culture sphere.India is already claiming its place in a new global orderin the making, and in less than a decade, it will begin toassert itself globally in all realms of life. The book seeksto highlight these trends—spanning across society,government, diplomacy, economy, military, and culture—through the visions of leading Indian thinkers and publicintellectuals who are considered experts in their chosenfields.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Essays & Anthologies",
    meta_description:
      "As India aims for a $30 trillion economy by 2050, this book explores its potential as a global leader in various spheres.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "india-in-2050-visions-for-a-superpower-india")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail6.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail7.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail8.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail9.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail10.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/india-in-2050-visions-for-a-superpower-india/thumbnail11.jpg",
    ],
    
    book_format: "Paperback",
    weight: "550g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 88,
    title: "Being Hindu: A Political History From Aditya Chola To Narendra Modi",
    slug: "being-hindu-a-political-history-from-aditya-chola-to-narendra-modi",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [58].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [58].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [58].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [58].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9788197349461",
    amazonlink:
      "https://www.amazon.in/Being-Hindu-Political-History-Narendra/dp/8197349460/ref=sr_1_4?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 cm x 14 cm x 1.9 cm",
    pages: "204",
    about_book:
      "Being Hindu adopts a longue durée view of history and attempts to contextualize the Bharatiya Janata Party (BJP) and its progenitor, the Bharatiya Jana Sangh (BJS), as political phenomena by examining certain medieval state structures and instances of advocacy and popular mobilization in the colonial period. Further, it studies the politics of Narendra Modi and the policy initiatives undertaken by him as the prime minister of India to highlight their apparent cultural and moral underpinnings. Its eventual objective is to make a case for the historical authenticity of the Hindu mode of politics that emerged in postIndependence India. The attempt, in other words, is to demonstrate that it is a thing in its own right and not a cynical invention of hostility towards religious minorities, an irrational or ‘fascist’ mindset, or sundry anxieties, but has precedents in frameworks and practices going rather far back in history. The BJS and the BJP are thus shown to be locatable in a long tradition of Hindus organizing their political practice or politics through cultural resources and a cultural imagination distinctive to them. Narendra Modi, similarly, brings an inclusive Hindu catholicity and sangathanist outlook to his politics and developmental agenda. Being Hindu, in this way, relates a brief history of the political expressions of being Hindu over slightly more than eleven centuries— from the ascension of Aditya I, the first of the imperial Cholas, in 870 CE until our own time and age.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance",
    meta_description:
      "'Being Hindu' explores the historical roots of BJP and BJS, linking them to medieval structures and Modi's culturally grounded politics.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "being-hindu-a-political-history-from-aditya-chola-to-narendra-modi")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/being-hindu/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/being-hindu/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/being-hindu/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/being-hindu/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/being-hindu/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/being-hindu/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/being-hindu/thumbnail5.jpg",
    ],
    
    book_format: "Paperback",
    weight: "450g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 59,
    title: "Waiting For Shiva: Unearthing The Truth Of Kashi’S Gyan Vapi",
    slug: "waiting-for-shiva-unearthing-the-truth-of-kashis-gyan-vapi",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9788196737597",
    amazonlink:
      "https://www.amazon.in/Waiting-Shiva-Unearthing-Truth-Kashis/dp/B0CPVSW5HG/ref=sr_1_1?crid=",
    flipkartlink: "",
    binding: "HB",
    language: "English",
    dimension: "20.3 x 25.4 x 4.7 cm",
    pages: "328",
    about_book:
      "Few places in the world carry the heavy burden of history as effortlessly as Kashi, or Varanasi, has. The holy city embodies the very soul of our civilization and personifies the resilience that we have displayed over centuries in the face of numerous adversities and fatal attacks. Waiting for Shiva: Unearthing the Truth of Kashi’s Gyan Vapi recreates the history, antiquity and sanctity of Kashi as the abode of Bhagwan Shiva in the form of Vishweshwara, or Vishwanath. Shiva himself assured his devotees of salvation if they leave their mortal coils in the city. The book delves into the history of this selfmanifested swayambhu jyotirlinga shrine of Vishweshwara, which for centuries has been both a refuge for the devout and a target of the bloodiest waves of iconoclasm. However, each time an attempt was made to obliterate the temple by demolishing it, it managed to rise and prosper. Every iconoclastic storm was followed by an episode of persistence, tenacity and stubborn resolve. Shrines fell and shrines rose, but the Hindus of Kashi never gave up—not even once. Waiting for Shiva documents these cataclysmic events in the temple’s history. The final death blow was dealt in 1669 by the Mughal despot Aurangzeb, who demolished the temple and erected few domes on the partially destroyed western wall to call it a mosque. The temple complex was desecrated and left strewn with ruins as a grim reminder of the humiliation and insult that Hindus had to face as a consequence of their holiest shrine being torn down to smithereens. The area that is now called the Gyan Vapi mosque and the surrounding land that lies adjacent to the new temple of Vishwanath, which came up towards the end of the 18th Century, has always been one of intense contestation. Bloody riots overran Varanasi over this issue multiple times in the past. During the colonial era, the doors of the British courts were knocked at to settle the occupancy issue, and they adjudicated the matter several times. PostIndependence, too, the desire to ‘liberate’ the complex has been seething in the Hindu imagination. A new suit filed in 2021 before the Varanasi civil court reopened a longfestering historical wound. Despite several appeals right up to the Supreme Court to dismiss the plaint, a survey by the Archaeological Survey of India (ASI) was ordered, which would lay bare the truth in its findings by the end of 2023. Vikram Sampath’s latest offering retraces the long history of this bitterly disputed site and the dramatic twists and turns in the checkered past of this hoary shrine. Piecing together numerous documents and accounts—Vedic and Puranic texts, Sanskrit literary sources, Agama shastras, Jataka tales, Persian accounts, travelogues of foreigners, archival records and copious legal documents detailing the contestation from the British era to modern Indian courts—the book recreates, for the first time with facts and cogent arguments, this stormy history right up to the present times. The longsuppressed secrets that lay hidden in Gyan Vapi finally finds a voice through this book.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy, Religion & Spirituality",
    meta_description:
      "'Waiting for Shiva' uncovers Kashi's rich history, resilience, and the ongoing contest over the Gyan Vapi site, blending ancient texts with modern struggles.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "waiting-for-shiva-unearthing-the-truth-of-kashis-gyan-vapi")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail6.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail7.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail8.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail9.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail10.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva/thumbnail11.jpg",
    ],
    
    book_format: "Hardback",
    weight: "850g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 69,
    title: "Waiting For Shiva: Unearthing The Truth Of Kashi’S Gyan Vapi In Hindi ( प्रतीक्षा शिव की: ज्ञान वापी काशी के सत्य का उद्घाटन )",  
    slug: "waiting-for-shiva-unearthing-the-truth-of-kashis-gyan-vapi-in-hindi",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9788196847111",
    amazonlink:
      "https://www.amazon.in/Waiting-Shiva-Unearthing-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-%E0%A4%89%E0%A4%A6%E0%A5%8D%E0%A4%98%E0%A4%BE%E0%A4%9F%E0%A4%A8/dp/B0CZLDH391/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/waiting-shiva-unearthing-truth-kashis-gyan-vapi-hindi/p/itmdbb11bb9f383a?pid=",
    
    language: "Hindi",
    dimension: "21.5 cm x 14 cm x 2 cm",
    pages: "410",
    about_book:
      "दुनिया में कुछ ही ऐसी जगहें हैं जो इतनी सहजता से इतिहास का भार वहन कर पाती हैं, जितना काशी या वाराणसी ने किया है। यह पवित्र शहर हमारी सभ्यता की आत्मा का प्रतीक है और उस लचीलेपन का प्रतीक है जो हमने सदियों से कई प्रतिकूलताओं और घातक हमलों का सामना करते हुए प्रदर्शित किया है। ‘प्रतीक्षा शिव की: ज्ञान वापी काशी के सत्य का उद्घाटन’ विश्वेश्वर या विश्वनाथ रूपी भगवान शिव की निवास स्थली के रूप में काशी के इतिहास, प्राचीनता और पवित्रता को पुनः प्रस्तु करती है। शिव ने स्वयं अपने भक्तों को आश्वासन दिया था कि यदि वे अपनी नश्वर कुण्डली का इस शहर में करेंगे तो उन्हें मोक्ष प्राप्त होगा। यह पुस्तक विश्वेश्वर के इस स्वयंप्रकट स्वयंभू ज्योतिर्लिंग मंदिर के इतिहास पर प्रकाश डालती है, जो सदियों से भक्तों के लिए शरणस्थली भी रही है और मूर्तिभंजन की रक्तरंजित लहरों का लक्ष्य भी रही है। हालाँकि, जब भी मंदिर को ध्वस्त कर उसे नष्ट करने का प्रयास किया गया, यह और भी तीव्र उत्थान तथा वैभव के साथ लोकजीवन के समक्ष प्रकट हुआ। यह पुस्तक मंदिर के इतिहास में घटित इन प्रलयकारी घटनाओं का दस्तावेजीकरण करती है। मंदिर को अंतिम आघात 1669 में मुगल शासक औरंगज़ेब द्वारा दिया गया, जिसने मंदिर को खंडित कर, इसे मस्जिद कहे जाने के लिए आंशिक रूप से नष्ट हुई पश्चिमी दीवार पर कुछ गुंबद खड़े कर दिए। वह क्षेत्र जिसे अब ज्ञान वापी मस्जिद कहा जाता है और आसपास की भूमि जो कि विश्वनाथ के नए मंदिर के निकट स्थित है, 18वीं शताब्दी के अंत में बनी थी तथा यह हमेशा से तीव्र विवाद का विषय रही है। इस मुद्दे को लेकर वाराणसी में पहले भी कई बार खूनी दंगे हो चुके हैं। औपनिवेशिक युग के दौरान, क़ब्ज़े के मुद्दे को निपटाने के लिए ब्रिटिश अदालतों के दरवाजे खटखटाए गए और उन्होंने कई बार इस मामले पर अपना निर्णय भी दिया। स्वतंत्रता के बाद भी, इस परिसर को 'मुक्त' कराने की इच्छा हिंदू मनमानस में पनपती रही है। ऐसे में वाराणसी सिविल कोर्ट के समक्ष 2021 में दायर एक नए मुकदमे ने लंबे समय से चले आ रहे ऐतिहासिक घाव को फिर से हरा कर दिया। याचिका को खारिज करने के लिए सुप्रीम कोर्ट में कई अपीलों के बावजूद, भारतीय पुरातत्व सर्वेक्षण (एएसआई) को इस परिसर के सर्वेक्षण का आदेश दिया गया, जिसने जनवरी 2024 में अपने निष्कर्षों के माध्यम से सच्चाई को उजागर किया। विक्रम संपत की यह नवीनतम पेशकश इस विवादित स्थल के लंबे इतिहास और इस प्राचीन मंदिर के विचित्र अतीत में आए नाटकीय मोड़ और बदलावों की याद दिलाती है। ज्ञानवापी में लंबे समय से दबे हुए रहस्यों को अंततः इस पुस्तक के माध्यम से आवाज मिलती है।",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy, Religion & Spirituality, Indian Languages",
    meta_description:
      "‘प्रतीक्षा शिव की’ काशी के ज्ञान वापी का गहन इतिहास उजागर करती है, जो मंदिर की विरासत और संघर्षों का दस्तावेज है।",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "waiting-for-shiva-unearthing-the-truth-of-kashis-gyan-vapi-in-hindi")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (9).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (10).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-hindi/thumbnail (11).jpg",
    ],
    
    book_format: "Paperback",
    weight: "166g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 74,
    title: "Waiting For Shiva: Unearthing The Truth Of Kashi'S Gyan Vapi (Marathi)",  
    slug: "waiting-for-shiva-unearthing-the-truth-of-kashis-gyan-vapi-marathi",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9788197223136",
    amazonlink:
      "https://www.amazon.in/Waiting-Shiva-Unearthing-Kashis-Marathi/dp/B0D1CPVWJX/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/waiting-shiva-unearthing-truth-kashi-s-gyan-vapi-marathi/p/itmf9a93bd529675?pid=9788197223136&lid=",
    
    language: "Marathi",
    dimension: "21.5 cm x 14 cm x 2 cm",
    pages: "410",
    about_book:
      "ज्या सहजतेने काशी किंवा वाराणसी आपल्या इतिहासाचे प्रचंड ओझे वाहते, तशी जगातील फार थोडी ठिकाणे असतील. ही नगरी आपल्या संस्कृतीच्या आत्म्याचे आणि शतकानुशतके आलेली विपरीत परिस्थिती, हल्ले सहन करूनही पुन्हापुन्हा उभी राहत आपल्या अपराजित वृत्तीचे दर्शन घडवते. ‘प्रतीक्षा शिवाची – काशी ज्ञानवापीच्या सत्याचा शोध’ या पुस्तकाच्या माध्यमातून विश्वेश्वर किंवा विश्वनाथाच्या रुपातील शिवाचा अधिवास असणाऱ्या काशीचा इतिहास, तिची प्राचीनता आणि पावित्र्याचे दर्शन घडते. जो या शहरात आपला देह ठेवतो त्याला मोक्ष मिळेल असे वचन प्रत्यक्ष शिव देतो. हे पुस्तक या स्वयंभू ज्योतिर्लिंग विश्वेश्वराच्या इतिहासाचा सखोल शोध घेते. आपल्या भक्तांचे आश्रयस्थान असलेले हेविश्वेश्वर मंदिर हे नेहमीच धर्मांध मूर्तीभंजकांच्या निशाण्यावर राहिलेले आहे. परंतु जेव्हा जेव्हा हे मंदिर उद्ध्वस्त करून त्याचे अस्तित्व पुसून टाकण्याचा प्रयत्न झाला तेव्हा तेव्हा हे मंदिर पुन्हा उभे राहिले आणि भरभराटीला आले. मंदिराच्या इतिहासातील या प्रलयंकारी घटनांचा लेखाजोखा ‘प्रतीक्षा शिवाची’ हे पुस्तक मांडते. जुलमी मुघल बादशाह औरंगजेबाने १६६९ मध्येया मंदिरावर घातलेला घाव वर्मी बसला आहे. त्याने मंदिर फोडले आणि मंदिराच्या पश्चिमेकडील अर्धवट तुटलेल्या भिंतीवर घुमट उभे करून त्याला मशिदीचे रूप दिले. आज ज्याला ज्ञानवापी मशीद म्हणतात ती मशीद आणि त्याच्या आजूबाजूची आणि अठराव्या शतकात बांधल्या गेलेल्या नव्या विश्वनाथ मंदिराजवळची जागा यावरून नेहमीच वादंग माजलेला आहे. भूतकाळात या मुद्द्यावरून अनेक वेळा रक्तरंजित दंगली झाल्या आहेत. इंग्रजी सत्तेच्या काळातही या जमिनीच्या मालकी आणि ताब्याच्या मुद्द्यावरून अनेक वेळा ब्रिटिश न्यायालयांचे दरवाजे ठोठावले गेले आहेत, त्यासंबंधीचे खटले चालवले गेले आहेत. स्वातंत्र्यानंतरही हा पूर्ण परिसर मुक्त करावा अशी मनीषा हिंदूंच्या मनात कायमच वास करत आली आहे. २०२१ ला नव्याने दाखल करण्यात आलेल्या एका खटल्याने या फार काळापासून ठसठसणाऱ्या जखमेवरची खपली निघाली. भारतीय पुरातत्व विभागाकडून सर्वेक्षण होऊ नये यासाठी अगदी सर्वोच्च न्यायालयापर्यंत वारंवार अपीले करूनही हे सर्वेक्षण झाले आणि जानेवारी २०२४ मध्येया सर्वेक्षणाने या पूर्ण प्रकरणातील सत्य उजेडात आणले. विक्रम संपतचे हे नवे पुस्तक या मंदिराचा बहुपेडी इतिहास, त्यात आलेली नाट्यमय वळणे, घडलेल्या गूढ घडामोडी, या जागेवरून झालेले कडाक्याचे वादविवाद या साऱ्या गोष्टी उलगडून दाखवते. कितीतरी काळ ज्ञानवापीमध्ये दडपून आणि लपवून ठेवलेल्या या गुपितांना या पुस्तकाच्या रूपाने वाचा फुटली आहे.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy, Religion & Spirituality, Indian Languages",
    meta_description:
      "'प्रतीक्षा शिवाची' काशीच्या इतिहासातील संघर्ष आणि पुर्नउत्थानाचे दर्शन घडवते, ज्ञानवापीच्या सत्याची शोध घेतो.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "waiting-for-shiva-unearthing-the-truth-of-kashis-gyan-vapi-marathi")?.book_image,
   book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-marathi/thumbnail (1).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-marathi/thumbnail (2).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-marathi/thumbnail (3).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-marathi/thumbnail (4).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-marathi/thumbnail (5).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-marathi/thumbnail (6).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-marathi/thumbnail (7).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-marathi/thumbnail (8).jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-marathi/thumbnail (9).jpg",
    ],
    
    book_format: "Paperback",
    weight: "550g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 89,
    title: "Waiting for Shiva (Telugu)",
    slug: "waiting-for-shiva-telugu",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [73].includes(author.id)).map((author) => author.authslug),
    price: 499,
    
    isbn13: "9788197223105",
    amazonlink:
      "https://www.amazon.in/Waiting-Shiva-Telugu-Vikram-Sampath/dp/8197223106/ref=sr_1_1_mod_primary_new?crid=",
    flipkartlink: "",
    
    language: "Telugu",
    dimension: "21.5 cm x 14 cm x 1.9 cm",
    pages: "410",
    about_book:
      "చరిత్ర ఒక బరువు, ఒక బాధ్యత. ఆ బరువుబాధ్యతలను హుందాగా అలవోకగా మోస్తూ వచ్చిన నగరం కాశీ లేదా వారణాసి. ప్రపంచానికి వెలుగు చూపిన ఈ దేశసంస్ కృతికి విలువైన ప్రతీక. శతాబ్దా లుగా ఎదుర్కొన్న కష్టా లను, దాడులను భరిస్తూ , ఎదిరిస్తూ తలెత్తు కు నిలిచిన నగరం కాశీ. “వెయిటింగ్ ఫర్ శివ: అనెర్తిం గ్ ది ట్రూ త్ ఆఫ్ కాశీస్ గ్యానవాపి” కు తెలుగు అనువాదం ఇది. శకలాలుగా వున్న చరిత్రను ఒక సూత్రం గా కూర్చిన రచన, విశ్వేశ్వరుడిగా విశ్వనాథుడిగా అనాదిగా ఈ జాతిని తరింపచేస్తు న్న పరమేశ్వరుడి నివాసమైన కాశీ కథ ఇది. ‘కాశీలో తుది శ్వాస విడిస్తే చాలు ముక్తినిస్తా ’ అని శివుడు స్వయంగా ప్రకటించాడు. శతాబ్దా లుగా కాశీ పొందిన గౌరవమర్యాదలు, ముష ్కరుల దాడుల్లో శిథిలమైన కాశీ వ్యథలు, పడిన ప్రతిసారీ కాశీని మళ్లీ లేపిన అచంచలమైన భక్తిప్రపత్తు లు అన్నీ పేజీలలో మనను పలకరిస్తా యి. దెబ్బలు తినడం కాశీకి అలవాటే, అయితే చావుదెబ్బ కొట్టిం ది మటుకు 1669 లో ఔరంగజేబ్. ఆలయం ధ్వంసం చేసి, పడమటి గోడ మీద రెండు గుంబజ్ లు కట్టి, దాన్ని మసీదు అన్నాడు. గ్యానవాపి మసీదు ఉన్న స్థలం, ఆవరణ, 18 వ శతాబ్దం లో కట్టిన మందిరానికి మసీదుకు మధ్యలోని స్థలం మొత్తం వివాదాలకు కారణమయ్యాయి. గంగ నెత్తు రు పులుముకుని రోదించింది. బ్రిటి ష్ హయాం లో ఎన్ని వ్యాజ్యాలలో తీర్పులు ప్రకటించినా పరిష్కారం లేకపోయింది. 1947 తరవాత కాశీ మందిరానికి స్వేచ్ఛ తేవాలన్న సంకల్పం మరింత బలమైంది. 2021 లోనమోదైన సివిల్ కేసు దేశాన్ని ఒక ఊపు ఊపగా, సుప్రీం కోర్టు ASIని సమగ్ర నివేదిక సమర్పించమని కోరింది. 2024 జనవరిలో బయటకు వచ్చిన ASI నివేదిక ఏం చెబుతోంది? గ్యానవాపి రహస్యాలను ఎంతో వివరంగా, ఆసక్తికరంగా, వివరించారు విక్రమ్ సంపత్. పాఠకుల మనసు గెలుచుకునే, ఆలోచింపచేసే రచన. ఇదిగో, తెలుగులో మీకోసం.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Law & Public Policy, Religion & Spirituality, Indian Languages",
    meta_description:
      "“Waiting for Shiva” explores Kashi's rich history and resilience, unraveling the Gyanvapi Mosque's mysteries and cultural significance.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "waiting-for-shiva-telugu")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-telugu/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-telugu/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-telugu/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-telugu/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-telugu/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-telugu/thumbnail6.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-telugu/thumbnail7.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-telugu/thumbnail8.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/waiting-for-shiva-telugu/thumbnail9.jpg",
    ],
    
    book_format: "Paperback",
    weight: "550g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 90,
    title: "Genome To Om: Evolving Journey Of Modern Science To Meta-Science",
    slug: "genome-to-om-evolving-journey-of-modern-science-to-meta-science",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [17,29].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [17,29].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [17,29].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [17,29].includes(author.id)).map((author) => author.authslug),
    price: 799,
    
    isbn13: "9789365478235",
    amazonlink:
      "https://www.amazon.in/Genome-Om-Evolving-Journey-Meta-science/dp/9365478235/ref=sr_1_1?crid=",
    flipkartlink:
      "https://www.flipkart.com/genome-om-evolving-journey-modern-science-meta-science/p/itm3e0250f9c3daf?pid=",
    binding: "HB",
    language: "English",
    dimension: "23.6 x 16 x 2 cm",
    pages: "495",
    about_book:
      "Spectacular advances in modern science and technology have made our lives more comfortable but not necessarily healthier or more peaceful. We are facing serious existential risks for nature and humanity where the developments are challenging our understanding. Genome to Om explores the desired transition from modern science to metascience, blending ethical, moral, and spiritual insights while recognizing the interconnectedness of all aspects of life. It emphasizes a holistic scientific approach, talking of the marvels of science and technology, and the consequent perils that have engulfed all living beings and the planet itself. The authors pose intriguing questions about the wonders of the cosmos, life’s origin, and most of all, the goal and purpose of life’s journey. Genome represents the dynamic modern science, while Om embodies universal consciousness as the ultimate reality. This book is an endeavour to bridge the gap between empirical knowledge and higherorder wisdom, advocating an innovative, inclusive, technologically advanced, yet spiritually enriched and ethically grounded future. The daring proposal seeks the possibility of progressing from the Anthropocene to an ideal Omcene epoch. Genome to Om offers hope for the meaningful progression to a metasociety, and the onward journey towards harmony between scientific progress and timeless human values to reach our full potential seeking unity in diversity for universal peace and wellbeing, and to continue the journey of life, the Om Way.",
    category: "Non-Fiction",
    genre: "Religion & Spirituality, Health & Wellness, Science & Technology, Educational Books & References, Society & Social Sciences",
    meta_description:
      "'Genome to Om' explores the shift from modern science to metascience, seeking harmony between progress, ethics, and universal consciousness.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "genome-to-om-evolving-journey-of-modern-science-to-meta-science")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail6.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail7.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail8.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail9.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail10.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/genome-to-om/thumbnail11.jpg",
    ],
    
    book_format: "Hardback",
    weight: "550g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 91,
    title: "The Number You Are Calling Is Switched Off",  
    slug: "the-number-you-are-calling-is-switched-off",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [69].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [69].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [69].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [69].includes(author.id)).map((author) => author.authslug),
    price: 399,
    
    isbn13: "9788197349478",
    amazonlink:
      "https://www.amazon.in/Number-You-Are-Calling-Switched/dp/8197349479/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "19.8 x 13 x 2.5 cm",
    pages: "197",
    about_book:
      "Netaji is on the brink of becoming India’s prime minister when his trusted confidante, VJS, receives a chilling call on his secret line. It’s a phantom call—a disposable phone activated only for brief, devastating moments, each one shattering Netaji’s lifelong ambition. The Delhi Police Special Cell is thrust into a desperate race against time. Can they track a ghost in a city of millions? A single phone. Eleven calls. A web of lies. Every second brings them closer to a truth that could topple the government. This electrifying thriller is a heart pounding chase where loyalty whispers and deception roars. Every moment counts, and every call could be the last clue. Buckle up for a relentless pursuit that will leave you questioning everything until the shocking climax.",
    category: "Fiction",
    genre: "'Crime, Thriller & Mystery'",
    meta_description:
      "In a gripping thriller, Netaji’s rise to power is threatened by phantom calls. Can the Delhi Police unravel the deadly truth?",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "the-number-you-are-calling-is-switched-off")?.book_image,
    book_thumbnail: [
      // "https://bluone-ink.s3.amazonaws.com/images/books/the-number-you-are-calling-is-switched-off/thumbnail1.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/the-number-you-are-calling-is-switched-off/thumbnail2.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/the-number-you-are-calling-is-switched-off/thumbnail3.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/the-number-you-are-calling-is-switched-off/thumbnail4.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books/the-number-you-are-calling-is-switched-off/thumbnail5.jpg",
    ],
    
    book_format: "Paperback",
    weight: "220g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 92,
    title: "Crossing Continents: European Explorers and India's Mysteries",  
    slug: "crossing-continents-european-explorers-and-indias-mysteries",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [9].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [9].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [9].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [9].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9789365478204",
    amazonlink:
      "https://www.amazon.in/Crossing-Continents-European-Explorers-Mysteries/dp/9365478200/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 cm x 14 cm x 1.9 cm",
    pages: "248",
    about_book:
      "Since the 13th century, numerous European have travelled to India. Driven by a thirst for adventure or trade opportunities, they embarked on extraordinary voyages across the sea to India. Their journeys were fraught with obstacles, including attacks by marauding gangs and animals, exposure to harsh climates, treacherous terrain, and unknown tropical diseases. Nonetheless, the desire to explore India’s exotic and distant lands propelled them forward. Almost all of them kept meticulous journals of their travels, chronicling the course of Indian history. Crossing Continents explores the stories of several such travellers: Niccolao Manucci, William Hawkins, JeanBaptiste Tavernier, Mark Twain, Athanasius Nikitin, Fanny Parkes, etc. All these travellers were relatively unknown at the time and were of little significance in their native homes. They were not bound by their rulers to report in a certain way, which was why their reports were largely unfiltered, unbiased, and unhindered. Each of them travelled to India with different objectives. One seeking precious gems while another a means to fend off debts. Others were driven purely by a desire to travel. They arrived in India during different periods and had unique stories to share. Their untiring pens stitched together a dispassionate history of India—a land of unfathomable contradictions—where sadhus meditated in highmountain caves and merchants haggled in bustling markets.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, 'Biography, Autobiography, & True Accounts'",
    meta_description:
      "'Crossing Continents' uncovers the untold stories of travelers who chronicled India’s rich history through unfiltered journals.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "crossing-continents-european-explorers-and-indias-mysteries")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/crossing-continents-european-explorers-and-indias-mysteries/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/crossing-continents-european-explorers-and-indias-mysteries/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/crossing-continents-european-explorers-and-indias-mysteries/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/crossing-continents-european-explorers-and-indias-mysteries/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/crossing-continents-european-explorers-and-indias-mysteries/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/crossing-continents-european-explorers-and-indias-mysteries/thumbnail6.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/crossing-continents-european-explorers-and-indias-mysteries/thumbnail7.jpg",
    ],
    
    book_format: "Paperback",
    weight: "250g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 93,
    title: "From Partition to Progress: Persecuted Hindus and the Struggle for Citizenship",  
    slug: "from-partition-to-progress-persecuted-hindus-and-the-struggle-for-citizenship",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [12].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [12].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [12].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [12].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9789365478280",
    amazonlink:
      "https://www.amazon.in/Partition-Progress-Persecuted-Struggle-Citizenship/dp/9365478286/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "19.8 x 12.8 x 1 cm",
    pages: "194",
    about_book:
      "Dr. Anirban Ganguly is the chairman of Dr Syama Prasad Mookerjee Research Foundation, New Delhi. He is a member of BJP’s National Executive Committee. Besides being a political activist, he has extensively worked in the areas of public policy and political research. He has a PhD from Jadavpur University, Kolkata, on the national education movement in India and Sri Aurobindo’s education philosophy. Dr Ganguly is also a scholar of civilisation, history, politics, and culture and has written and continues to write on these subjects. He was a member of the Central Advisory Board of Education (CABE); Indian National Commission for Cooperation with UNESCO (INCCU); Governing Board of Auroville Foundation; and VisvaBharati Samsad (Court), Santiniketan. He writes newspaper columns and has authored, coauthored, and edited several books including Subhas Chandra O Syama Prasad: Tulanamulok Chintan Aloke (2024), Modi: Energising a Green Future (2023), The Master: Sri Aurobindo and the Quest for National Education (2023), K.R. Malkani and the Motherland (2022), Modi 2.0: A Resolve to Secure India (2021), Dattopant Thengadi: The Activist Parliamentarian (2020), Amit Shah and the March of BJP (2019), Making of New India: Transformation under Modi Government (2018), Syama Prasad Mookerjee: His Vision of Education (2017), The Modi Doctrine: New Paradigms in India’s Foreign Policy (2016), Redefining Governance: Essays on One year of Narendra Modi Government (2015), Swami Vivekananda, Buddha and Buddhism (2014), Debating Culture (2013), and Education: Philosophy and Practice (2011).",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance",
    meta_description:
      "Dr. Anirban Ganguly, BJP executive and scholar, explores education, history, and culture, authoring influential works on Indian thought.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "from-partition-to-progress-persecuted-hindus-and-the-struggle-for-citizenship")?.book_image,
    book_thumbnail: [
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail1.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail2.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail3.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail4.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail5.jpg",
    ],
    
    book_format: "Paperback",
    weight: "180g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 94,
    title: "India's New Right: Powering the Current Wave of Nationalism and Civilisational Revival",  
    slug: "indias-new-right-powering-the-current-wave-of-nationalism-and-civilisational-revival",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [1].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [1].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [1].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [1].includes(author.id)).map((author) => author.authslug),
    price: 699,
    
    isbn13: "9788196847173",
    amazonlink:
      "https://www.amazon.in/Indias-New-Right-Nationalism-Civilisational/dp/B0DBW8VZFC/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 cm x 14 cm x 1.9 cm",
    pages: "420",
    about_book:
      "After nearly ten centuries of invasions and colonial rule, and seven decades after achieving a bloodied and partitioned freedom, the Indian nationcivilisation is experiencing a remarkable surge in nationalism. There is a strong urge to revive and assert itself politically, culturally, and economically. India, that is Bharat, is challenging its colonised mindset and manners, striving to write its own story and history, which were distorted by its colonisers and tormentors. India’s New Right captures this pivotal moment in Bharat’s life. The book seeks to understand this exceptional period in Bharat’s history through the eyes of the many protagonists driving this change. Some of these individuals are prominent public figures, while others are faceless individuals working behind the scenes to bring about change. The book features nearly fifty fulllength interviews woven into the larger narrative. It covers a wide range of subjects, from youth to economy, history to popular culture, law to gender identity, minorities to ghar wapsi, and the demographic war.",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Politics & Governance, Essays & Anthologies",
    meta_description:
      "'India’s New Right' explores the surge in nationalism, featuring interviews that capture Bharat's transformative journey across diverse themes.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "indias-new-right-powering-the-current-wave-of-nationalism-and-civilisational-revival")?.book_image,
    book_thumbnail: [
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail1.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail2.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail3.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail4.jpg",
      // "https://bluone-ink.s3.amazonaws.com/images/books//thumbnail5.jpg",
    ],
    
    book_format: "Paperback",
    weight: "380g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
  },
  {
    id: 95,
    title: "A Dharmic Social History of India",
    slug: "a-dharmic-social-history-of-india",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [15].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [15].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [15].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [15].includes(author.id)).map((author) => author.authslug),
    price: 799,
    
    isbn13: "9789392209796",
    amazonlink:
      "https://www.amazon.in/Dharmic-Social-History-India/dp/9392209797/ref=sr_1_1?crid=",
    flipkartlink: "",
    language: "English",
    dimension: "23.6 x 16 x 2 cm",
    pages: "728",
    about_book:
      "How India, a land of diverse ethnicities, religions, and languages, has managed to maintain its social cohesion and harmony for thousands of years? How has it managed the forces of social stratification, social exclusion, social stagnation, and social emancipation? Are the institutions of caste and untouchability, jathi and varna peculiar to India? Or is there some other deeper coda to Indian society that sustains it through millennia?",
    category: "Non-Fiction",
    genre: "Society & Social Sciences, Religion & Spirituality",
    meta_description:
      "This book traces India's social evolution, revealing the values that fostered harmony amid diversity and inspiring social transformation.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "a-dharmic-social-history-of-india")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/a-dharmic-social-history-of-india/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/a-dharmic-social-history-of-india/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/a-dharmic-social-history-of-india/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/a-dharmic-social-history-of-india/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/a-dharmic-social-history-of-india/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/a-dharmic-social-history-of-india/thumbnail6.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/a-dharmic-social-history-of-india/thumbnail7.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/a-dharmic-social-history-of-india/thumbnail8.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/a-dharmic-social-history-of-india/thumbnail9.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/a-dharmic-social-history-of-india/thumbnail10.jpg",
    ],
    
    book_format: "Paperback",
    weight: "880g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  {
    id: 96,
    title: "Padma Bharatis: Ordinary Indians, Extraordinary Triumphs",
    slug: "padma-bharatis-ordinary-indians-extraordinary-triumphs",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [30].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [30].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [30].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [30].includes(author.id)).map((author) => author.authslug),
    price: 599,
    
    isbn13: "9788197349461",
    amazonlink:
      "https://www.amazon.in/Padma-Bharatis-Ordinary-Extraordinary-Triumphs/dp/819734941X/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "English",
    dimension: "21.5 cm x 14 cm x 1.9 cm",
    pages: "176",
    about_book:
      "India, or Bharat, is a land of unparalleled diversity, a true chitraayana where the tapestry of life is woven with vibrant maanyata (respect) and maryaada (dignity). This nation, with its timeless unity in multiplexity, is a testament to a culture of cultures bonded by a rich tradition of creativity and ingenuity. Padma Bharatis captures this essence through a collection of essays that spotlight the remarkable achievements of ordinary Indians. Over recent years, public recognition of these unsung heroes has witnessed a paradigm shift with Padma awardees increasingly representing the true diversity of the nation. The stories within this book highlight the strength and resilience of people who bring sustainable change while honouring their cultural traditions and experiential knowledge passed down through generations. They are earthy, real, and often from rustic or small town backgrounds, embodying the core values of a civilization on its path to a sustainable and aspirational future. Padma Bharatis is a celebration of these incredible souls.",
    category: "Non-Fiction",
    genre: "'Biography, Autobiography, & True Accounts', Society & Social Sciences",
    meta_description:
      "Padma Bharatis celebrates India's unsung heroes, showcasing the achievements of ordinary citizens shaping a sustainable future.",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "padma-bharatis-ordinary-indians-extraordinary-triumphs")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/padma-bharatis/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/padma-bharatis/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/padma-bharatis/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/padma-bharatis/thumbnail4.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/padma-bharatis/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/padma-bharatis/thumbnail6.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/padma-bharatis/thumbnail7.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/padma-bharatis/thumbnail8.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/padma-bharatis/thumbnail9.jpg",
    ],
    
    book_format: "Paperback",
    weight: "200g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },

  {
    id: 97,
    title: "Anjali Geetan Ri",
    slug: "anjali-geetan-ri",
    publish_year: 2022,
    author: AuthorsList.filter((author) => [28].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [28].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [28].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [28].includes(author.id)).map((author) => author.authslug),
    price: "",
    
    isbn13: "9789392209277",
    amazonlink:
      "https://www.amazon.in/Anjali-Geetan-Ri-Ikram-Rajasthani/dp/9392209274/ref=sr_1_1?crid=",
    flipkartlink: "",
    
    language: "Hindi",
    dimension: "21.6 x 13.5 x 1 cm",
    pages: "216",
    about_book:
      "Anjali Geetan Ri is a Rajasthani translation of Rabindranath Tagore's famous book of poetry 'Geetanjali'",
    category: "Non-Fiction",
    genre: "Poetry, Indian Languages",
    meta_description:
      "Anjali Geetan Ri is a Rajasthani translation of Rabindranath Tagore's renowned poetry collection 'Geetanjali.'",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "anjali-geetan-ri")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/anjali-geetan-ri/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/anjali-geetan-ri/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/anjali-geetan-ri/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/anjali-geetan-ri/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/anjali-geetan-ri/thumbnail6.jpg",
    ],
    
    book_format: "Paperback",
    weight: "180g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },

  {
    id: 98,
    title: "Out of Madness",
    slug: "out-of-madness",
    publish_year: 2024,
    author: AuthorsList.filter((author) => [77].includes(author.id)).map((author) => author.author_name),
    AuthorInfo: AuthorsList.filter((author) => [77].includes(author.id)).map((author) => author.authorDescription),
    Authorimage: AuthorsList.filter((author) => [77].includes(author.id)).map((author) => author.image),
    author_slug: AuthorsList.filter((author) => [77].includes(author.id)).map((author) => author.authslug),
    price: "499",
    isbn13: "9789365477788",
    amazonlink:"https://www.amazon.in/Out-Madness-Rithwik-Aryan/dp/9365477786/ref=sr_1_1?crid=",
    flipkartlink: "",
    preorder:"",
    downloadaisheet: "/books/out-of-madness/sample.pdf",
    language: "English",
    dimension: "21.6 x 13.5 x 1 cm",
    pages: "373",
    about_book:
      "Mason Moron, a young psychology professor at Nalanda University, fakes his death and disappears after discovering that his wife has been cheating on him. His quest for reinvention leads him to a madman politician, Bahubali, who dreams of making the greatest porn movie ever. Together they plunge into a deep, dark world of carnal desire. But fate takes an insidious turn when they find themselves trapped in a mental asylum where the mesmerizing actress Ms Staci is battling her own demon. As their bond deepens, Mason must decide if his obsession with the starlet is worth sacrificing his freedom and life for. Stuck at the intersection of madness, lust, and love, Mason must exorcise his inner demons even as Bahubali plots his twisted legacy. Will they escape the clutches of insanity or find solace in madness? In a world where the line between sanity and insanity is wafer-thin and friendship and love are tested in the most surreal ways, Mason must confront his deepest desire, darkest fear, and the question whether he can ever truly be free. Out of Madness is a wild, heart-pounding tale of grief, lust, and redemption where madness might just be the key to salvation.",
    category: "Fiction",
    genre: "Crime Fiction, Thriller and Suspense, Mystery",
    meta_description: "",
    meta_title: "",
    book_image: BooksList.find((book) => book.slug === "out-of-madness")?.book_image,
    book_thumbnail: [
      "https://bluone-ink.s3.amazonaws.com/images/books/out-of-madness/thumbnail1.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/out-of-madness/thumbnail2.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/out-of-madness/thumbnail3.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/out-of-madness/thumbnail5.jpg",
      "https://bluone-ink.s3.amazonaws.com/images/books/out-of-madness/thumbnail6.jpg",
    ],
    
    book_format: "Paperback",
    weight: "350g",
    endorsement: [
      "Lorem Ipsum is simply dummy",
      "of the printing and typesetting industry. Lorem Ipsum has been the industry’s",
      "text ever since the 1500s,  unknown printer took a galley of type it to make a type specimen book. ",
    ],
    
  },
  
];
