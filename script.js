// Dữ liệu nhân viên được convert từ Excel
const employees = {
    "Bui Ngoc Lan Nhi": 4642,
    "Duong Trong Nguyen": 5090,
    "Huynh Le Hue Tien": 5778,
    "Huynh Thi Anh Thu": 32657,
    "Le Thuy Linh": 5000,
    "Le Tran Thuy Tien": 31256,
    "Ly Dau": 2000,
    "Luong Van Chien": 79855,
    "Nguyen Ngoc Mi": 45110,
    "Nguyen Phuc Thinh": 101097,
    "Nguyen Yen Vy": 5768,
    "Phan Gia Khai": 4952,
    "Truong Thi Thanh Thao": 7000,
    "Tô Tú Trinh": 23567,
    "Do Thi Lan Anh": 1596
};

function generateCard() {
    const name = document.getElementById("nameInput").value.trim();
    const card = document.getElementById("ecard");
    const message = document.getElementById("message");

    if (employees[name]) {
        const hours = employees[name];
        message.innerHTML =
            `Cám ơn bạn <strong>${name}</strong> đã đồng hành <strong>${hours} giờ</strong> cùng KON LOU trong năm 2025. ` +
            `Chúc bạn và gia đình một mùa Giáng Sinh rực rỡ, an lành và thật nhiều niềm vui! 🎄✨`;
        card.classList.remove("hidden");
    } else {
        message.innerHTML = "Tên không có trong danh sách nhân sự.";
        card.classList.remove("hidden");
    }
}

