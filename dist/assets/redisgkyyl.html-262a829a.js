const e=JSON.parse('{"key":"v-2c698be2","path":"/nice-article/weixin/redisgkyyl.html","title":"Redis 高可用原理","lang":"zh-CN","frontmatter":{"title":"Redis 高可用原理","shortTitle":"Redis 高可用原理","description":"之前找工作面试，这个问题面试的频率都能排到前几，尤其是一些大厂，先不要着急看文章，如果面试官给你抛这么个问题，你会怎么回答呢？","author":"楼仔","category":["微信公众号"],"head":[["meta",{"name":"description","content":"之前找工作面试，这个问题面试的频率都能排到前几，尤其是一些大厂，先不要着急看文章，如果面试官给你抛这么个问题，你会怎么回答呢？"}],["meta",{"property":"og:url","content":"https://javabetter.cn/nice-article/weixin/redisgkyyl.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Redis 高可用原理"}],["meta",{"property":"og:description","content":"之前找工作面试，这个问题面试的频率都能排到前几，尤其是一些大厂，先不要着急看文章，如果面试官给你抛这么个问题，你会怎么回答呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T13:49:42.000Z"}],["meta",{"property":"article:author","content":"楼仔"}],["meta",{"property":"article:modified_time","content":"2022-12-26T13:49:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 高可用原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T13:49:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"楼仔\\"}]}"]]},"headers":[{"level":2,"title":"1. Redis 分片策略","slug":"_1-redis-分片策略","link":"#_1-redis-分片策略","children":[{"level":3,"title":"1.1 Hash 分片","slug":"_1-1-hash-分片","link":"#_1-1-hash-分片","children":[]},{"level":3,"title":"1.2 一致性 Hash","slug":"_1-2-一致性-hash","link":"#_1-2-一致性-hash","children":[]}]},{"level":2,"title":"2. 高可用方案","slug":"_2-高可用方案","link":"#_2-高可用方案","children":[]},{"level":2,"title":"3. 高可用原理","slug":"_3-高可用原理","link":"#_3-高可用原理","children":[{"level":3,"title":"3.1 Redis 主从","slug":"_3-1-redis-主从","link":"#_3-1-redis-主从","children":[]},{"level":3,"title":"3.2 Redis 分片","slug":"_3-2-redis-分片","link":"#_3-2-redis-分片","children":[]},{"level":3,"title":"3.3 Redis 哨兵机制","slug":"_3-3-redis-哨兵机制","link":"#_3-3-redis-哨兵机制","children":[]}]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]}],"git":{"createdTime":1657256732000,"updatedTime":1672062582000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2},{"name":"itwanger","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":9.4,"words":2820},"filePathRelative":"nice-article/weixin/redisgkyyl.md","localizedDate":"2022年7月8日","excerpt":"<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-83928ee9-7ab4-4cac-a5e8-d34d23f67ee7.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>Redis 高可用，太重要啦！<a href=\\"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">二哥编程星球</a>的好几个球友找工作面试的时候，都被问到了这个问题，那么公众号的读者朋友们也先不要着急看文章，可以想一想，如果面试官给你抛这么个问题，你会怎么回答呢，可以先想 5 分钟。</p>"}');export{e as data};