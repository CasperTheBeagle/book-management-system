const choice = prompt(
    "เลือกรายการที่ต้องการ (1: เพิ่มหนังสือ, 2: แสดงรายการหนังสือ, 3: แก้ไขหนังสือ, 4: ลบหนังสือ, 0: ออกจากระบบ):"
);
const books = [];
/* Data Format
books[
    {
        title:"title1234",
        author:"author",
        publicationYear:"1234",
        price:"1234.12"
    }
]
*/
function createBook(title, author, publicationYear, price) {
    return {
        title: title,
        author: author,
        publicationYear: publicationYear,
        price: price
    };
}

function addBook() {
    const title = prompt("กรอก\"ชื่อ\"หนังสือ \(Fill \"Title\" of book\) : ");
    if (!/^[a-zA-Z0-9ก-๙\s]+$/u.test(title)) {
        alert("ชื่อหนังสือควรเป็นตัวอักษรและตัวเลขเท่านั้น");
        return; // ออกจากฟังก์ชันเพื่อไม่ให้ทำขั้นตอนถัดไป
    }
    const author = prompt("กรอก\"ผู้เขียน\"หนังสือ\(Fill \"Author\" of book\)");
    if (/^[\p{L}\s]+$/u.test(author)) {
        alert("ชื่อผู้เขียนควรเป็นตัวอักษรไทยและอังกฤษเท่านั้น");
        return; // for stop before fill publication year
    }
    const publicationYear = prompt("กรอก\"ปีที่พิมพ์\"หนังสือ \(Fill \"Publication Year\" of book\) : ");
    if (/^\d{4}$/.test(publicationYear)) {
        alert("ปีที่พิมพ์ควรเป็นตัวเลขเพียงอย่างเดียว");
        return; // for stop before fill price
    }
    const price = prompt("กรอก\"ราคา\"หนังสือ \(Fill \"Title\" of book\) : ");
    if (!/^\d+(\.\d{1,2})?$/.test(price)) {
        alert("ราคาควรเป็นตัวเลขอย่างเดียว หรือตัวเลขทศนิยม (ถ้ามี) สูงสุด 2 ตำแหน่ง");
        return; //for stop before Create Book
    }

    const newBook = createBook(title, author, publicationYear, price);
    books.push(newBook);

    alert("เพิ่มหนังสือเสร็จสมบูรณ์");
}

function editBook() {
    const index = prompt("กรุณาใส่เลขที่ของหนังสือที่ต้องการแก้ไข:") - 1;

    if (index >= 0 && index < books.length) {
        const updatedTitle = prompt("ชื่อหนังสือ (เดิม: " + books[index].title + "):");
        if (!/^[\p{L}\d\s]+$/u.test(title)) {
            alert("ชื่อหนังสือควรเป็นตัวอักษรไทย,อักษรอังกฤษ และ ตัวเลขเท่านั้น");
            return; // for stop before fill author
        }
        const updatedAuthor = prompt("ผู้เขียน (เดิม: " + books[index].author + "):");
        if (/^[\p{L}\s]+$/u.test(author)) {
            alert("ชื่อผู้เขียนควรเป็นตัวอักษรไทยและอังกฤษเท่านั้น");
            return; // for stop before fill publication year
        }

        const updatedPublicationYear = prompt("ปีที่พิมพ์ (เดิม: " + books[index].publicationYear + "):");
        if (/^\d{4}$/.test(publicationYear)) {
            alert("ปีที่พิมพ์ควรเป็นตัวเลขเพียงอย่างเดียว");
            return; // for stop before fill price
        }

        const updatedPrice = prompt("ราคา (เดิม: " + books[index].price + "):");
        if (!/^\d+(\.\d{1,2})?$/.test(price)) {
            alert("ราคาควรเป็นตัวเลขอย่างเดียว หรือตัวเลขทศนิยม (ถ้ามี) สูงสุด 2 ตำแหน่ง");
            return; //for stop before Create Book
        }

        books[index] = createBook(
            updatedTitle || books[index].title,
            updatedAuthor || books[index].author,
            updatedPublicationYear || books[index].publicationYear,
            updatedPrice || books[index].price
        );
        alert("แก้ไขหนังสือเรียบร้อยแล้ว!");
    } else {
        alert("หนังสือที่คุณเลือกไม่ถูกต้อง");
    }
}
function deleteBook() {
    const index = prompt("กรุณาใส่เลขที่ของหนังสือที่ต้องการลบ:") - 1;

    if (index >= 0 && index < books.length) {
        const deletedBook = books.splice(index, 1);
        alert(`ลบหนังสือ "${deletedBook[0].title}" เรียบร้อยแล้ว!`);
    } else {
        alert("หนังสือที่คุณเลือกไม่ถูกต้อง");
    }
}

function viewBooks() {
    if (books.length === 0) {
        alert("ยังไม่มีหนังสือในรายการ");
    } else {
        let bookList = "รายการหนังสือ:\n";
        books.forEach((book, index) => {
            bookList += `${index + 1}. ${book.title} โดย ${book.author}, ปีที่พิมพ์: ${book.publicationYear}, ราคา: ${book.price} บาท\n`;
        });
        alert(bookList);
    }
}




while (true) {
    myAppCLI()
}
function myAppCLI() {
    const choice = prompt(
        "เลือกรายการที่ต้องการ (1: เพิ่มหนังสือ, 2: แสดงรายการหนังสือ, 3: แก้ไขหนังสือ, 4: ลบหนังสือ, 0: ออกจากระบบ):"
    );

    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            viewBooks();
            break;
        case "3":
            editBook();
            break;
        case "4":
            deleteBook();
            break;
        case "0":
            alert("ออกจากระบบ");
            return;
        default:
            alert("กรุณาเลือกรายการที่ถูกต้อง");
    }
}
