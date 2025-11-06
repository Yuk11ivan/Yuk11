// 等待DOM加载完成
 document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResultsModal = document.getElementById('searchResultsModal');
    const searchResults = document.getElementById('searchResults');
    const closeModal = document.getElementById('closeModal');

    // 模拟产品数据
    const products = [
        { id: 1, name: '秋冬丝绒连衣裙', category: 'women', type: 'dresses', price: '¥16,800', image: 'images/new-dress-1.jpg' },
        { id: 2, name: '高级定制西装', category: 'men', type: 'suits', price: '¥28,900', image: 'images/new-suit-1.jpg' },
        { id: 3, name: '经典老花手袋', category: 'women', type: 'bags', price: '¥32,500', image: 'images/new-bag-1.jpg' },
        { id: 4, name: '正装皮鞋', category: 'men', type: 'shoes', price: '¥9,800', image: 'images/new-shoes-1.jpg' },
        { id: 5, name: '细高跟晚宴鞋', category: 'women', type: 'shoes', price: '¥8,600', image: 'images/bestseller-shoes-1.jpg' },
        { id: 6, name: '真丝商务衬衫', category: 'men', type: 'shirts', price: '¥5,200', image: 'images/bestseller-shirt-1.jpg' },
        { id: 7, name: '印花真丝连衣裙', category: 'women', type: 'dresses', price: '¥14,500', image: 'images/bestseller-dress-2.jpg' },
        { id: 8, name: '商务休闲西装', category: 'men', type: 'suits', price: '¥23,500', image: 'images/bestseller-suit-2.jpg' },
        { id: 9, name: '限量版走秀款连衣裙', category: 'women', type: 'dresses', price: '¥45,800', image: 'images/runway-dress-1.jpg' },
        { id: 10, name: '设计师合作款西装', category: 'men', type: 'suits', price: '¥52,000', image: 'images/runway-suit-1.jpg' },
        { id: 11, name: '秀场限定手袋', category: 'women', type: 'bags', price: '¥68,500', image: 'images/runway-bag-1.jpg' },
        { id: 12, name: '创意总监系列高跟鞋', category: 'women', type: 'shoes', price: '¥15,800', image: 'images/runway-shoes-1.jpg' }
    ];

    // 搜索功能实现
    function performSearch(query) {
        query = query.toLowerCase().trim();
        if (!query) {
            searchResults.innerHTML = '<p class="no-results">请输入搜索关键词</p>';
            return;
        }

        // 搜索逻辑：匹配产品名称、品类或分类
        const results = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.type.toLowerCase().includes(query) ||
            getCategoryName(product.category).includes(query) ||
            getTypeName(product.type).includes(query)
        );

        // 显示搜索结果
        if (results.length > 0) {
            let html = '<div class="search-results-grid">';
            results.forEach(product => {
                html += `
                    <div class="search-result-item">
                        <div class="search-result-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="search-result-info">
                            <h4>${product.name}</h4>
                            <p>${getCategoryName(product.category)} | ${getTypeName(product.type)}</p>
                            <div class="search-result-price">${product.price}</div>
                            <a href="product-detail.html?id=${product.id}" class="view-details">查看详情</a>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            searchResults.innerHTML = html;
        } else {
            searchResults.innerHTML = '<p class="no-results">没有找到相关产品</p>';
        }
    }

    // 获取分类名称中文
    function getCategoryName(category) {
        const categoryMap = {
            'women': '女士',
            'men': '男士'
        };
        return categoryMap[category] || category;
    }

    // 获取品类名称中文
    function getTypeName(type) {
        const typeMap = {
            'dresses': '连衣裙',
            'suits': '西装',
            'bags': '手袋',
            'shoes': '鞋履',
            'shirts': '衬衫'
        };
        return typeMap[type] || type;
    }

    // 搜索按钮点击事件
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value;
            performSearch(query);
            searchResultsModal.style.display = 'block';
        });
    }

    // 回车键搜索
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const query = searchInput.value;
                performSearch(query);
                searchResultsModal.style.display = 'block';
            }
        });
    }

    // 关闭模态框
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            searchResultsModal.style.display = 'none';
        });
    }

    // 点击模态框外部关闭
    if (searchResultsModal) {
        window.addEventListener('click', function(e) {
            if (e.target === searchResultsModal) {
                searchResultsModal.style.display = 'none';
            }
        });
    }

    // 添加搜索结果样式
    const style = document.createElement('style');
    style.textContent = `
        .search-results-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
        }
        .search-result-item {
            display: flex;
            background-color: #f8f8f8;
            border-radius: 8px;
            overflow: hidden;
        }
        .search-result-image {
            width: 100px;
            height: 100px;
            overflow: hidden;
        }
        .search-result-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .search-result-info {
            padding: 15px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .search-result-info h4 {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 5px;
            color: #000;
        }
        .search-result-info p {
            font-size: 12px;
            color: #666;
            margin-bottom: 5px;
        }
        .search-result-price {
            font-size: 16px;
            font-weight: 700;
            color: #8b5a2b;
            margin-bottom: 10px;
        }
        .search-result-info .view-details {
            font-size: 12px;
            padding: 5px 15px;
            align-self: flex-start;
        }
        .no-results {
            text-align: center;
            color: #666;
            padding: 40px 0;
            font-size: 16px;
        }
    `;
    document.head.appendChild(style);

    // 高亮当前页面导航
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navigation a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath.includes('products.html') && link.getAttribute('href') === 'products.html') ||
            (currentPath.includes('services.html') && link.getAttribute('href') === 'services.html')) {
            link.classList.add('active');
        }
    });

    // 处理URL参数（产品列表页过滤）
    function handleURLParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const type = urlParams.get('type');
        const section = urlParams.get('section');
        
        // 如果是产品列表页，根据参数筛选
        if (currentPath.includes('products.html')) {
            const productSectionTitle = document.getElementById('productSectionTitle');
            const breadcrumbText = document.getElementById('breadcrumbText');
            
            if (category && type) {
                if (productSectionTitle) productSectionTitle.textContent = `${getCategoryName(category)} | ${getTypeName(type)}`;
                if (breadcrumbText) breadcrumbText.textContent = `${getCategoryName(category)} - ${getTypeName(type)}`;
                
                // 选中对应的筛选框
                const checkboxes = document.querySelectorAll('.filter-checkbox');
                checkboxes.forEach(checkbox => {
                    if ((checkbox.dataset.filter === 'gender' && checkbox.dataset.value === category) ||
                        (checkbox.dataset.filter === 'type' && checkbox.dataset.value === type)) {
                        checkbox.checked = true;
                    }
                });
            } else if (section) {
                let sectionTitle = '所有产品';
                if (section === 'new') sectionTitle = '当季新款';
                else if (section === 'bestsellers') sectionTitle = '当季热款';
                else if (section === 'runway') sectionTitle = '秀款专区';
                
                if (productSectionTitle) productSectionTitle.textContent = sectionTitle;
                if (breadcrumbText) breadcrumbText.textContent = sectionTitle;
            }
        }
        
        // 如果是产品详情页，根据ID加载数据
        if (currentPath.includes('product-detail.html')) {
            const productId = urlParams.get('id');
            if (productId) {
                const product = products.find(p => p.id === parseInt(productId));
                if (product) {
                    updateProductDetail(product);
                }
            }
        }
    }

    // 更新产品详情页内容
    function updateProductDetail(product) {
        const productTitle = document.getElementById('productTitle');
        const productPrice = document.getElementById('productPrice');
        const mainProductImage = document.getElementById('mainProductImage');
        const breadcrumbCategory = document.getElementById('breadcrumbCategory');
        const breadcrumbType = document.getElementById('breadcrumbType');
        const breadcrumbProduct = document.getElementById('breadcrumbProduct');
        
        if (productTitle) productTitle.textContent = product.name;
        if (productPrice) productPrice.textContent = product.price;
        if (mainProductImage) mainProductImage.src = product.image;
        if (breadcrumbCategory) {
            breadcrumbCategory.textContent = getCategoryName(product.category);
            breadcrumbCategory.href = `products.html?category=${product.category}`;
        }
        if (breadcrumbType) {
            breadcrumbType.textContent = getTypeName(product.type);
            breadcrumbType.href = `products.html?category=${product.category}&type=${product.type}`;
        }
        if (breadcrumbProduct) breadcrumbProduct.textContent = product.name;
        
        // 更新缩略图（如果存在）
        const thumbnails = document.querySelectorAll('.thumbnail');
        if (thumbnails.length > 0) {
            thumbnails[0].dataset.img = product.image;
            thumbnails[0].querySelector('img').src = product.image;
        }
    }

    // 执行URL参数处理
    handleURLParams();

    // 滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});