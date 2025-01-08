const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// 示例：根路径处理
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// 示例：处理获取 Pokemon 数据的路由
app.get('/pokemons', (req, res) => {
    const pokemons = [
        { name: 'Pikachu', image: 'https://img.pokemondb.net/artwork/pikachu.jpg' },
        { name: 'Charmander', image: 'https://img.pokemondb.net/artwork/charmander.jpg' }
    ];
    res.json(pokemons);
});

// 启动服务器并监听所有网络接口
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
