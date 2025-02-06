const http = require('http');

// 创建 HTTP 服务器  
http.createServer((req, res) => {
    // 设置响应头  
    res.writeHead(200, {
        'Content-Type': 'text/event-stream', // 设置内容类型为事件流  
        'Cache-Control': 'no-cache',         // 禁止缓存  
        'Connection': 'keep-alive',          // 保持连接  
    });

    // 每秒发送当前时间  
    const intervalId = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        res.write(`data: ${currentTime}\n\n`); // 发送当前时间  
    }, 1000);

    // 清理工作：当客户端关闭连接时，停止发送  
    req.on('close', () => {
        clearInterval(intervalId);
        res.end(); // 结束响应  
    });
}).listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});  