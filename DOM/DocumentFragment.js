const list1 = document.getElementById('list');

for (let i = 0; i < 5; i++) {
    const item = document.createElement('ls');
    item.innerHTML = `项目 ${i}`;
    list1.appendChild(item);
}

/**
 * 上面的代码中， 每一次循环都插入一个 li 到 ul 里去，每一次插入都是一次DOM操作;
 * 频繁的DOM操作，是非常消耗性能的，所以我们有什么方法去优化这个插入的行为呢？
 * 
 * 我们可以把多次插入的行为 合并成 一次，这里就要使用到文档碎片 减少DOM 操作
 */

// 利用文档碎片 减少DOM 操作

const list2 = document.getElementById('list');

// 创建文档碎片
const fragment = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
    const item = document.createElement('ls');
    item.innerHTML = `项目 ${i}`;
    // list2.appendChild(item);
    fragment.appendChild(item)
}
list2.appendChild(fragment)

/**
 * 创建文档碎片,然后当我每次循环创建 li 的时候，
 * 我定义好 li 内容， 我不直接往ul里直接插入，因为每一次插入都是一次 DOM操作，非常消耗性能，
 * 所以先往 文档碎片中 去放入这个li ,当我把每个创建出来的 li 放入 文档碎片中,其实这个时候，
 * 页面是渲染不出来 li元素的，这个动作并没有操作 DOM , 
 * fragment  是保存在内存的，所以我们也只是把 li元素放 在内存里面，还没有进行 DOM操作,
 * 最后，我们可以把 存放在 fragment的结果，一次性地插入到UL 里面.
 * 
 * 这样就可以 把  DOM操作 的次数 从 5次 变到 1次
 */

