function purchaseResource(resourceId) {
    // 根据资源ID设置支付链接
    let paymentLink;
    switch(resourceId) {
        case 'resource1':
            paymentLink = 'https://pay.weixin.qq.com/index.php/core/home/pay?resource=1';
            break;
        case 'resource2':
            paymentLink = 'https://pay.weixin.qq.com/index.php/core/home/pay?resource=2';
            break;
        // 添加更多资源的支付链接
    }

    // 打开支付页面
    window.open(paymentLink, '_blank');

    // 模拟支付完成后的操作
    setTimeout(() => {
        onPaymentSuccess(resourceId);
    }, 5000); // 模拟支付过程
}

// 模拟支付完成后跳转到下载链接
function onPaymentSuccess(resourceId) {
    let downloadLink;
    switch(resourceId) {
        case 'resource1':
            downloadLink = 'https://example.com/download/resource1';
            break;
        case 'resource2':
            downloadLink = 'https://example.com/download/resource2';
            break;
        // 添加更多资源的下载链接
    }

    // 跳转到下载链接
    window.location.href = downloadLink;
}
