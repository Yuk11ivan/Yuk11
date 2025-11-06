// 产品详情页功能
 document.addEventListener('DOMContentLoaded', function() {
    // 图片切换功能
    const mainProductImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // 为每个缩略图添加点击事件
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // 获取缩略图的图片路径
            const imgSrc = this.getAttribute('data-img');
            
            // 更新主图片
            mainProductImage.src = imgSrc;
            
            // 更新缩略图选中状态
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 默认激活第一个缩略图
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }
    
    // 颜色选择功能
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // 尺寸选择功能
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                sizeOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            }
        });
    });
    
    // 根据URL参数设置产品信息（如果需要）
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        // 这里可以根据产品ID加载对应的产品数据
        // 由于是静态页面，这里仅作示例
        console.log('加载产品ID:', productId);
    }
});