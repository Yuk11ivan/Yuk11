// 服务页面功能
 document.addEventListener('DOMContentLoaded', function() {
    // 常见问题折叠功能
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // 切换当前问题的答案显示状态
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            
            // 切换图标
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.innerHTML = '\u002B'; // +
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.innerHTML = '\u2212'; // -
            }
        });
    });
    
    // 服务项目的交互效果
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 平滑滚动到页面顶部
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // 监听滚动事件，显示/隐藏返回顶部按钮（如果需要）
    window.addEventListener('scroll', () => {
        // 这里可以添加返回顶部按钮的显示逻辑
    });
});