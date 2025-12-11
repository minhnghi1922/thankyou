// Dữ liệu nhân viên được convert từ Excel
const employees = {
    "Bui Ngoc Lan Nhi": 4642,
    "Châu Hào Nguyên": 486,
    "Dương Trọng Nguyễn": 5090,
    "Huỳnh Lê Huệ Tiên": 5778,
    "Lê Thanh": 32657,
    "Lê Thuỳ Linh": 5000,
    "Lê Trần Thuỷ Tiên": 31256,
    "Lý Dậu": 2000,
    "Lương Văn Chiến": 79855,
    "Nguyễn Ngọc Mi": 45110,
    "Nguyễn Phúc Thịnh": 101097,
    "Nguyễn Yến Vy": 5768,
    "Phan Gia Khải": 4952,
    "Trương Thị Thanh Thảo": 7000,
    "Tô Tú Trinh": 23567,
    "Đỗ Thị Lan Anh": 1596
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
