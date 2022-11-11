import React from 'react'
import "./Rules.css";
import Header from '../component/Home/Header';
import BottomTab from './BottomTab';
import MetaData from './Metadata';
import Footer from '../Footer';

const Rules = () => {
    return (
        <>
        <MetaData title="Rules" />
        <Header />
        <div className='rules' style={{
            padding:"50px 30px",
            display:"flex",
            width:"95%",
            overflow:"hidden"
        }}>
            <ul className='rules'>
                <span style={{
                    color:"#000",
                    fontSize:"1.3rem",
                    fontWeight:"800",
                    fontFamily:"Roboto",
                }}>Hướng dẫn mua hàng tại 0164:</span>
                <li>1. Khách hàng đăng kí thông tin tài khoản và đăng nhập vào website của 0164WP.</li>
                <li>2. Khách hàng chọn sản phẩm bất kì trên website để xem thông tin sản phẩm.</li>
                <li>3. Khách hàng có thể chọn số lượng tùy ý và bình luận về sản phẩm ngay dưới phần mô tả sản phẩm.</li>
                <li>4. Khách hàng có thể chọn Add to wishlist để mang sản phẩm và trong danh sách yêu thích và chọn nút mua hàng "Add to cart" để mua sản phẩm.</li>
                <li>5. Cổng thanh toán 0164WP hiện tại đang gặp một chút vấn đề nên trong thời gian tới khách hàng quan tâm sản phẩm nào hãy liên hệ trực tiếp tới 0164WP qua Instagram để được đội ngũ của 0164WP tư vấn và hỗ trợ ạ.</li>
                <li>6. Một lần nữa, cảm ơn quý khách hàng đã tin tưởng và lựa chọn 0164WP. Chúc quý khách ngày mới vui vẻ và tràn đầy niềm vui ạ.</li>
            </ul>
        </div>
        <Footer />
        <BottomTab />
        </>
    )
}

export default Rules