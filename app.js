
const app = Vue.createApp({
    data() {
        return {
            coffeeShops: [
                { id: 1, name: 'ร้านThaKham Café ',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17Qtle-01UUe_gsI-0VKVi4KaXqXM_FotcQ&usqp=CAU'},
                { id: 2, name: 'ร้าน 5 Yen',image: 'https://th.readme.me/f/45557/6485fb68bde37328bbcd8de5.jpg'},
                { id: 3, name: 'ร้านHazel’s Ice Cream Parlor and Fine Drinks ไอศกรีมรสเข้ม',image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-Z-s72uZLcl7b3Xba1u1-gdMiooKQubZRMZhNK3HrPXK7oVbH'},
                { id: 4, name: 'ร้านFlock Dessert Bar & Bistro หวานจนขึ้นสนิม',image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWF3PP9LCPfcR3LEDV8h4We-Y66zv1B-69Mx7uMYzbMQS-C2RK'},
                { id: 5, name: 'ร้านTAAN Organic Café ให้เท่าที่ให้ได้',image: 'https://readthecloud.co/wp-content/uploads/2017/06/living-cafe-taan-4.jpg'},
                { id: 6, name: 'ร้านSeven ทะเลในเมือง',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxsnJ_2bepqgEFfMTNGF6TDypoXNg4b-W65anSpun8SkyIDvF'},
                // ... ร้านอื่นๆ
            ],
            currentShop: {},
            booking: {
                name: '',
                phone: '',
                date: '',
                time: '',
                tables: 1
            },
            bookings: []
        };
    },
    methods: {
        deleteBooking(bookingId) {
            this.bookings = this.bookings.filter(book => book.id !== bookingId)
        },
        bookTable() {
            this.bookings.push({
                id: Date.now(),  // ใช้ timestamp เป็น id ของการจอง (ไม่น่าจะมีซ้ำกัน)
                shopName: this.currentShop.name,
                name: this.booking.name,
                phone: this.booking.phone,
                date: this.booking.date,
                time: this.booking.time,
                tables: this.booking.tables
            });
            this.clearBookingForm();
            // ปิด modal หลังจากส่งข้อมูลการจอง
            var bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
            bookingModal.hide();
        },
        clearBookingForm() {
            this.booking.name = '';
            this.booking.phone = '';
            this.booking.date = '';
            this.booking.time = '';
            this.booking.tables = 1;
        }
    },
});

app.mount("#app");
